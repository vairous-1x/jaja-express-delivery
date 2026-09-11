# 3JAJA DELIVERY — Architecture & Build Plan

A Tunisian multi-vendor food & errand delivery platform, Arabic-first (RTL), with four interfaces: customer, driver, merchant, admin.

## Stack note (please read)

You asked for Next.js + NestJS + Prisma + Redis + Socket.IO. This environment runs a fixed stack: TanStack Start (React 19 + TypeScript + Tailwind + shadcn) with Lovable Cloud (Postgres, auth, storage, realtime) as backend. I will preserve the requested architecture and every functional requirement, mapped like this:

| Requested | Here |
|---|---|
| NestJS REST API | typed server functions + `/api/*` routes, service/repository layering |
| Prisma migrations | SQL migrations (UUIDs, indexes, timestamps) |
| Socket.IO | Postgres realtime channels (`order:{id}`) |
| Redis cache | TanStack Query cache + DB indexes; Redis addable later |
| Firebase push | in-app + email notifications, provider abstraction for push/SMS |
| Google Maps/Mapbox | Google Maps connector (map, geocoding, routing) |
| Payments | provider abstraction; cash-on-delivery live, online pluggable |
| Expo mobile apps | mobile-first PWA-quality web apps per role |

## A. System architecture

```text
Landing  Customer  Driver  Merchant  Admin      (one app, role-routed)
   |        |        |        |         |
   +--------+---- server functions ----+--------+
                        |
        order engine | dispatch engine | pricing engine
                        |
     Postgres (RLS) | realtime channels | storage | maps
```

## B. Database (Postgres, UUID PKs, created_at/updated_at, RLS + GRANTs)

Identity: `profiles`, `user_roles` (separate table, `has_role()` security-definer), `driver_profiles`, `restaurant_staff`.
Catalog: `restaurants`, `restaurant_categories`, `menu_categories`, `menu_items`, `menu_item_options`, `menu_item_modifiers`.
Ordering: `addresses`, `orders`, `order_items`, `order_item_modifiers`, `order_status_history`, `driver_assignments`, `payments`.
Growth: `coupons`, `coupon_usages`, `reviews`, `favorites`, `notifications`, `delivery_zones`, `support_tickets`, `support_messages`, `referrals`, `loyalty_accounts`, `loyalty_transactions`, `audit_logs`, `platform_settings`, `pricing_rules`.
Indexes on phone, email, restaurant_id, customer_id, driver_id, status, created_at, lat/lng.
Orders store the rates used at order time (commission %, base fee, per-km fee, driver payout) so history never re-reads current config.

## C. Order state machine

`PENDING → ACCEPTED → PREPARING → READY → DRIVER_ASSIGNED → PICKED_UP → ON_THE_WAY → DELIVERED`; `CANCELLED` only from PENDING…READY (admin override logged). Transitions validated server-side in a DB transaction, every change appended to `order_status_history`.

## D. Engines

- Pricing: `fee = base + km × perKm`, clamped min/max, zone override, peak-hour multiplier; all values from `pricing_rules`/`platform_settings`. Server recomputes subtotal, discount, fees, total — client prices are never trusted.
- Dispatch: ranks candidates by distance to restaurant, availability, workload, vehicle, ETA, rating, zone; offers to best, times out, cascades to next. Radius/timeout/max distance admin-configurable.
- Idempotency keys on order creation and payment.

## E. Roles & permissions

CUSTOMER, DRIVER, RESTAURANT_OWNER, RESTAURANT_MANAGER, SUPPORT, ADMIN, SUPER_ADMIN. Enforced by RLS + role checks in every server function: a merchant sees only its own orders, a driver only assigned orders, a customer only their own. Driver location visible only during an active delivery.

## F. Screens

Public: landing (hero "أسرع خدمة توصيل أكل في منطقتك", how it works, why 3jaja, restaurants, FAQ, contact), join-as-restaurant, join-as-driver.
Customer: splash, phone/OTP auth, home (location, search, categories, restaurant rails), restaurant page, item customization sheet, cart, checkout (map pin, address details, payment, coupon), live tracking, order history, ratings, favorites, profile. Bottom nav: home, search, favorites, orders, profile.
Driver: online/offline home with earnings, incoming request card, order flow with status buttons, PIN proof of delivery, earnings history, onboarding/documents.
Merchant: today's dashboard, live orders board, menu management (categories, items, options, availability), settings (hours, min order, prep time, zones), promotions, reviews.
Admin: KPI dashboard + charts, customers, restaurants, drivers (approval), orders, finance, coupons, promotions, reviews, zones, categories, pricing, settings, support, audit logs.

## G. Design direction

Deep burgundy `#A90020` + bright yellow `#F8B91D`, charcoal, warm off-white. Cairo/Tajawal for Arabic, paired sans for FR/EN. All colors as semantic tokens in `src/styles.css`; rounded cards, generous touch targets, skeleton/empty/error states, smooth transitions. Not an Uber Eats clone — bold Tunisian energy, food-forward imagery generated for the project.

## H. i18n

AR (default, RTL), FR, EN with structured keys (`home.title`, `order.status.preparing`), `dir` switching on the html element, all notification templates translated.

## I. Build phases

1. Design system, i18n + RTL shell, landing page, brand assets.
2. Cloud enablement, full schema + RLS + GRANTs, demo seed (20 restaurants, 100 items, 10 drivers, 50 customers, 100 orders, flagged as demo).
3. Customer: auth, browse, menu, cart, checkout, cash payment, order history.
4. Merchant dashboard: live orders, menu management, settings.
5. Driver app + dispatch engine + live location, realtime tracking end-to-end.
6. Admin: KPIs, entity management, zones, pricing, finance, approvals.
7. Coupons, reviews, notifications, support tickets, loyalty/referral structures.
8. Tests on critical flows, security pass, docs (README, API reference, deployment).

## Technical notes

Server-side price authority, Zod DTO validation, RBAC on every endpoint, rate limiting on OTP, file-upload type/size validation, audit logging of admin actions, structured error envelope `{ success, error: { code, message } }` with translated user-facing text. Docker/CI, `.env.example`, and staging/prod config are documented; hosting here is managed, so those are provided as portable config rather than the live deploy path.

## Scope reality

This is a large program of work, not a single turn. I'll build phase by phase in this order, showing you a working app at each step. Approving this plan starts phase 1 (design system + landing page) and phase 2 (backend schema + seed data).
