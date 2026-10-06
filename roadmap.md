# 3JAJA DELIVERY — Roadmap

Approved plan: `.lovable/plan/3jaja-delivery-architecture-build-plan-2026-09-11.md`

## Phase 1 — Brand, i18n, landing (in progress)
- [x] Design system tokens (burgundy/yellow), Arabic + Latin typography
- [x] Logo, favicon, hero imagery
- [x] i18n (AR default RTL, FR, EN) with translation keys
- [x] Public landing page (hero, how it works, why, restaurants, FAQ, contact)
- [x] Join as restaurant / join as driver pages
- [x] Phone install support (Add to Home Screen)

## Phase 2 — Backend foundation
- [ ] Enable Lovable Cloud
- [ ] Full schema + RLS + GRANTs (identity, catalog, ordering, growth)
- [ ] Order state machine, pricing rules, platform settings tables
- [ ] Demo seed data (20 restaurants, 100 items, 10 drivers, 50 customers, 100 orders)

## Phase 3 — Customer app
- [ ] Auth (phone/OTP), profile, addresses
- [ ] Home, search, categories, restaurant page, item customization
- [ ] Cart, checkout (server-side pricing), cash payment
- [ ] Order tracking (realtime), order history, ratings

## Phase 4 — Merchant dashboard
- [ ] Live orders board, accept/reject/prep time/ready
- [ ] Menu management (categories, items, options, availability)
- [ ] Settings: hours, min order, prep time, zones, promotions

## Phase 5 — Driver app + dispatch
- [ ] Onboarding/documents, online-offline, earnings
- [ ] Dispatch engine with ranking + timeout cascade
- [ ] Order flow statuses, live location, PIN proof of delivery

## Phase 6 — Admin
- [ ] KPIs and charts, orders, customers, restaurants, drivers approval
- [ ] Zones, pricing, commissions, finance + exports, settings, audit logs

## Phase 7 — Growth
- [ ] Coupons, reviews, notifications, support tickets, loyalty, referrals

## Phase 8 — Hardening
- [ ] Tests on critical flows, security pass, README + API docs + deployment
