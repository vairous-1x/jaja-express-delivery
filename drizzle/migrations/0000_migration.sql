
-- ============ ENUMS ============
create type public.app_role as enum ('customer','driver','restaurant_owner','restaurant_manager','support','admin','super_admin');
create type public.order_status as enum ('PENDING','ACCEPTED','PREPARING','READY','DRIVER_ASSIGNED','PICKED_UP','ON_THE_WAY','DELIVERED','CANCELLED');
create type public.payment_method as enum ('CASH','ONLINE');
create type public.payment_status as enum ('PENDING','PAID','FAILED','REFUNDED');

-- ============ updated_at helper ============
create or replace function public.set_updated_at() returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;

-- ============ PROFILES ============
create table public.profiles (
  id uuid primary key,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "own profile read" on public.profiles for select to authenticated using (id = auth.uid());
create policy "own profile update" on public.profiles for update to authenticated using (id = auth.uid());
create policy "own profile insert" on public.profiles for insert to authenticated with check (id = auth.uid());
create index profiles_phone_idx on public.profiles(phone);
create trigger profiles_updated before update on public.profiles for each row execute function public.set_updated_at();

-- ============ ROLES ============
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "own roles read" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'), new.phone)
  on conflict (id) do nothing;
  insert into public.user_roles (user_id, role) values (new.id, 'customer') on conflict do nothing;
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- ============ PLATFORM SETTINGS (configurable pricing) ============
create table public.platform_settings (
  id int primary key default 1 check (id = 1),
  service_fee numeric(10,3) not null default 0.500,
  commission_pct numeric(5,2) not null default 15.00,
  driver_payout_pct numeric(5,2) not null default 80.00,
  min_delivery_fee numeric(10,3) not null default 1.500,
  max_delivery_fee numeric(10,3) not null default 8.000,
  updated_at timestamptz not null default now()
);
grant select on public.platform_settings to anon, authenticated;
grant all on public.platform_settings to service_role;
alter table public.platform_settings enable row level security;
create policy "settings public read" on public.platform_settings for select to anon, authenticated using (true);
insert into public.platform_settings (id) values (1);

-- ============ RESTAURANTS ============
create table public.restaurants (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  description text,
  cuisines text[] not null default '{}',
  image_key text not null default 'tunisian',
  rating numeric(2,1) not null default 4.5,
  review_count int not null default 0,
  min_minutes int not null default 25,
  max_minutes int not null default 40,
  delivery_fee numeric(10,3) not null default 2.500,
  min_order numeric(10,3) not null default 10.000,
  is_open boolean not null default true,
  address text,
  latitude double precision,
  longitude double precision,
  is_demo boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.restaurants to anon, authenticated;
grant update on public.restaurants to authenticated;
grant all on public.restaurants to service_role;
alter table public.restaurants enable row level security;
create policy "restaurants public read" on public.restaurants for select to anon, authenticated using (true);
create policy "owner updates restaurant" on public.restaurants for update to authenticated using (owner_id = auth.uid());
create index restaurants_owner_idx on public.restaurants(owner_id);
create index restaurants_geo_idx on public.restaurants(latitude, longitude);
create trigger restaurants_updated before update on public.restaurants for each row execute function public.set_updated_at();

create table public.menu_categories (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants(id) on delete cascade,
  name text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.menu_categories to anon, authenticated;
grant all on public.menu_categories to service_role;
alter table public.menu_categories enable row level security;
create policy "categories public read" on public.menu_categories for select to anon, authenticated using (true);
create index menu_categories_restaurant_idx on public.menu_categories(restaurant_id);

create table public.menu_items (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants(id) on delete cascade,
  category_id uuid references public.menu_categories(id) on delete set null,
  name text not null,
  description text,
  price numeric(10,3) not null check (price >= 0),
  image_key text,
  is_available boolean not null default true,
  is_popular boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.menu_items to anon, authenticated;
grant update on public.menu_items to authenticated;
grant all on public.menu_items to service_role;
alter table public.menu_items enable row level security;
create policy "items public read" on public.menu_items for select to anon, authenticated using (true);
create policy "owner updates items" on public.menu_items for update to authenticated
  using (exists (select 1 from public.restaurants r where r.id = restaurant_id and r.owner_id = auth.uid()));
create index menu_items_restaurant_idx on public.menu_items(restaurant_id);
create trigger menu_items_updated before update on public.menu_items for each row execute function public.set_updated_at();

create table public.menu_option_groups (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.menu_items(id) on delete cascade,
  name text not null,
  is_required boolean not null default false,
  max_select int not null default 1,
  sort_order int not null default 0
);
grant select on public.menu_option_groups to anon, authenticated;
grant all on public.menu_option_groups to service_role;
alter table public.menu_option_groups enable row level security;
create policy "groups public read" on public.menu_option_groups for select to anon, authenticated using (true);
create index menu_option_groups_item_idx on public.menu_option_groups(item_id);

create table public.menu_options (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.menu_option_groups(id) on delete cascade,
  name text not null,
  price_delta numeric(10,3) not null default 0,
  sort_order int not null default 0
);
grant select on public.menu_options to anon, authenticated;
grant all on public.menu_options to service_role;
alter table public.menu_options enable row level security;
create policy "options public read" on public.menu_options for select to anon, authenticated using (true);
create index menu_options_group_idx on public.menu_options(group_id);

-- ============ ORDERS ============
create sequence public.order_number_seq start 1001;

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique default ('3J-' || nextval('public.order_number_seq')),
  customer_id uuid not null,
  restaurant_id uuid not null references public.restaurants(id),
  driver_id uuid,
  status public.order_status not null default 'PENDING',
  subtotal numeric(10,3) not null,
  delivery_fee numeric(10,3) not null,
  service_fee numeric(10,3) not null,
  discount numeric(10,3) not null default 0,
  total numeric(10,3) not null,
  commission_pct numeric(5,2) not null,
  commission_amount numeric(10,3) not null,
  driver_payout numeric(10,3) not null,
  restaurant_payout numeric(10,3) not null,
  payment_method public.payment_method not null default 'CASH',
  payment_status public.payment_status not null default 'PENDING',
  delivery_address text not null,
  delivery_phone text not null,
  delivery_latitude double precision,
  delivery_longitude double precision,
  customer_note text,
  delivery_pin text not null default lpad((floor(random()*10000))::int::text, 4, '0'),
  idempotency_key text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  accepted_at timestamptz,
  prepared_at timestamptz,
  picked_up_at timestamptz,
  delivered_at timestamptz,
  cancelled_at timestamptz
);
grant select on public.orders to authenticated;
grant all on public.orders to service_role;
alter table public.orders enable row level security;
create policy "orders visible to participants" on public.orders for select to authenticated using (
  customer_id = auth.uid()
  or driver_id = auth.uid()
  or exists (select 1 from public.restaurants r where r.id = restaurant_id and r.owner_id = auth.uid())
  or (status = 'READY' and driver_id is null and public.has_role(auth.uid(), 'driver'))
  or public.has_role(auth.uid(), 'admin')
);
create index orders_customer_idx on public.orders(customer_id);
create index orders_restaurant_idx on public.orders(restaurant_id);
create index orders_driver_idx on public.orders(driver_id);
create index orders_status_idx on public.orders(status);
create index orders_created_idx on public.orders(created_at desc);
create trigger orders_updated before update on public.orders for each row execute function public.set_updated_at();

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  menu_item_id uuid references public.menu_items(id) on delete set null,
  name text not null,
  unit_price numeric(10,3) not null,
  quantity int not null check (quantity > 0),
  options jsonb not null default '[]',
  line_total numeric(10,3) not null
);
grant select on public.order_items to authenticated;
grant all on public.order_items to service_role;
alter table public.order_items enable row level security;
create policy "order items follow order" on public.order_items for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id));
create index order_items_order_idx on public.order_items(order_id);

create table public.order_status_history (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  old_status public.order_status,
  new_status public.order_status not null,
  changed_by uuid,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);
grant select on public.order_status_history to authenticated;
grant all on public.order_status_history to service_role;
alter table public.order_status_history enable row level security;
create policy "history follows order" on public.order_status_history for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id));
create index order_status_history_order_idx on public.order_status_history(order_id);

alter publication supabase_realtime add table public.orders;

-- ============ DEMO SEED ============
with r as (
  insert into public.restaurants (name, description, cuisines, image_key, rating, review_count, min_minutes, max_minutes, delivery_fee, min_order, is_open, address, latitude, longitude, is_demo) values
  ('Djerba Burger','Burgers généreux et frites maison','{burgers,sandwich}','burger',4.7,312,25,35,2.500,10,true,'Houmt Souk, Djerba',33.8750,10.8580,true),
  ('Pizza House','Pizzas au feu de bois','{pizza,pasta}','pizza',4.5,208,30,45,3.000,12,true,'Midoun, Djerba',33.8080,10.9920,true),
  ('Tabouna Express','Sandwichs tabouna et grillades','{sandwich,chicken}','tunisian',4.8,431,20,30,2.000,8,true,'Houmt Souk, Djerba',33.8770,10.8560,true),
  ('Café Djerba','Café, thé à la menthe et pâtisseries','{coffee,desserts}','coffee',4.4,96,15,25,1.800,5,true,'Houmt Souk, Djerba',33.8760,10.8600,true),
  ('Chicken Express','Poulet grillé et croustillant','{chicken,burgers}','tunisian',4.6,187,25,40,2.500,10,true,'Midoun, Djerba',33.8070,10.9900,true),
  ('3jaja Demo Restaurant','Restaurant de démonstration','{pizza,burgers,sandwich}','burger',4.9,54,20,30,2.000,8,true,'Ajim, Djerba',33.7230,10.7480,true),
  ('Pasta Bella','Pâtes fraîches et salades','{pasta,salads}','pizza',4.3,77,30,45,3.000,12,true,'Midoun, Djerba',33.8090,10.9950,true),
  ('Night Snack Djerba','Snack ouvert tard','{sandwich,burgers}','burger',4.2,61,25,35,2.500,8,false,'Houmt Souk, Djerba',33.8740,10.8590,true)
  returning id, name, image_key
), cats as (
  insert into public.menu_categories (restaurant_id, name, sort_order)
  select r.id, c.name, c.ord from r cross join (values ('Populaire',0),('Plats',1),('Boissons',2)) as c(name, ord)
  returning id, restaurant_id, name
)
insert into public.menu_items (restaurant_id, category_id, name, description, price, image_key, is_popular)
select r.id, c.id, i.name, i.descr, i.price, r.image_key, i.popular
from r
join cats c on c.restaurant_id = r.id
join (values
  ('Populaire','Spécialité de la maison','Recette signature, servie chaude',14.500,true),
  ('Populaire','Menu duo','Deux plats + deux boissons',26.000,true),
  ('Plats','Plat du jour','Selon arrivage du marché',11.000,false),
  ('Plats','Assiette grillade','Viande grillée, frites, salade',16.500,false),
  ('Plats','Sandwich tabouna','Pain tabouna, thon, harissa, œuf',6.500,false),
  ('Plats','Salade méchouia','Poivrons et tomates grillés',5.500,false),
  ('Boissons','Citronnade','Citron frais maison',3.000,false),
  ('Boissons','Eau minérale 1L','',1.200,false),
  ('Boissons','Soda 33cl','',2.000,false)
) as i(cat, name, descr, price, popular) on i.cat = c.name;

-- Option groups on the signature item of each restaurant
with g as (
  insert into public.menu_option_groups (item_id, name, is_required, max_select, sort_order)
  select id, 'Taille', true, 1, 0 from public.menu_items where name = 'Spécialité de la maison'
  returning id
)
insert into public.menu_options (group_id, name, price_delta, sort_order)
select g.id, o.name, o.delta, o.ord from g cross join (values ('Petite',0,0),('Moyenne',3.000,1),('Grande',6.000,2)) as o(name, delta, ord);

with g as (
  insert into public.menu_option_groups (item_id, name, is_required, max_select, sort_order)
  select id, 'Suppléments', false, 4, 1 from public.menu_items where name = 'Spécialité de la maison'
  returning id
)
insert into public.menu_options (group_id, name, price_delta, sort_order)
select g.id, o.name, o.delta, o.ord from g cross join (values ('Fromage',1.500,0),('Poulet',2.500,1),('Sauce',0.500,2),('Légumes',1.000,3)) as o(name, delta, ord);
