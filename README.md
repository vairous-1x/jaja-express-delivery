# 3jaja Connect

You are a senior software architect, principal full-stack engineer, UI/UX designer, DevOps engineer, database engineer, and mobile application developer.

Your task is to DESIGN AND BUILD a production-ready multi-vendor delivery platform called:

                    3JAJA DELIVERY

The application is inspired by the business model of modern food-delivery platforms such as Wamya and by the broader local-delivery/errand model of 3jaja Delivery.

IMPORTANT:
Do NOT copy another company's branding, source code, UI, logo, proprietary content, or exact design.

Use the references only to understand the business model and expected functionality.

The goal is to create an ORIGINAL, scalable, modern Tunisian delivery ecosystem.

==================================================
1. BUSINESS CONCEPT
==================================================

3JAJA DELIVERY is a Tunisian local delivery platform.

Main slogan:

"أسرع خدمة
توصيل أكل
في منطقتك"

Secondary marketing message:

"كلي ما تحب، يوصلك لدارك ❤️"

The platform should initially focus on food delivery but its architecture must support:

- Restaurants
- Fast food
- Cafés
- Groceries
- Supermarkets
- Pharmacies (optional/future)
- Documents
- Personal errands
- Shopping
- Bills / small local errands
- Any legal local delivery request

The customer should be able to order from restaurants OR request a custom delivery/errand.

The initial target market is Tunisia.

The system must support Arabic first, French second, and English third.

RTL must be implemented correctly for Arabic.

==================================================
2. BRAND IDENTITY
==================================================

Brand:

3jaja Delivery

Visual identity should be based on the supplied reference image.

Primary colors:

- Deep red / burgundy
- Bright yellow
- White
- Black / dark charcoal

Suggested palette:

PRIMARY_RED = #A90020
DARK_RED = #8F001B
YELLOW = #F8B91D
LIGHT_YELLOW = #FFD447
WHITE = #FFFFFF
BLACK = #111111
GRAY = #F5F5F5
SUCCESS = #20A464
ERROR = #D92D20

The design should feel:

- Fast
- Friendly
- Tunisian
- Trustworthy
- Modern
- Energetic
- Mobile-first
- Easy for non-technical users

Use the supplied 3jaja logo/visual identity where appropriate.

DO NOT create a generic Uber Eats clone.

3jaja should have its own visual personality.

==================================================
3. CORE PLATFORM ARCHITECTURE
==================================================

Build the system as a multi-role ecosystem.

There are FOUR primary applications/interfaces:

1. CUSTOMER APP
2. DRIVER/RIDER APP
3. RESTAURANT/MERCHANT DASHBOARD
4. ADMIN DASHBOARD

Optional:

5. PUBLIC WEBSITE / LANDING PAGE

Architecture:

Customer
   ↓
API / Backend
   ↓
Order Engine
   ↓
Restaurant
   ↓
Dispatch Engine
   ↓
Driver
   ↓
Customer

Everything should communicate through secure APIs and real-time events.

==================================================
4. RECOMMENDED TECH STACK
==================================================

Use a modern production-ready stack.

Preferred:

Frontend Web:
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Mobile:
- React Native + Expo
OR Flutter if you determine it is more appropriate.

Backend:
- Node.js
- NestJS
- TypeScript

Database:
- PostgreSQL

ORM:
- Prisma

Caching:
- Redis

Real-time:
- WebSockets / Socket.IO

Maps:
- Google Maps OR Mapbox

Push notifications:
- Firebase Cloud Messaging

Authentication:
- Phone OTP
- JWT
- Refresh tokens

Storage:
- S3-compatible object storage

Payments:
Create an abstraction layer so Tunisian payment providers can be integrated later.

Support:
- Cash on delivery
- Online payment
- Configurable payment providers

Deployment:
- Docker
- CI/CD
- Production environment variables
- staging environment
- production environment

If the chosen AI coding environment has a preferred stack, preserve the architecture and equivalent functionality rather than blindly changing requirements.

==================================================
5. CUSTOMER APPLICATION
==================================================

Build a beautiful mobile-first customer application.

MAIN SCREENS:

A. Splash Screen

Show:

3jaja Delivery

"كلي ما تحب، يوصلك لدارك ❤️"

Animated loading.

--------------------------------------------------

B. Authentication

Allow:

- Phone number
- OTP
- Optional email
- Google login if supported
- Apple login if supported

Do not require unnecessary registration information.

Customer profile:

- First name
- Last name
- Phone
- Email
- Profile picture
- Saved addresses
- Favorite restaurants
- Favorite meals

--------------------------------------------------

C. HOME SCREEN

Top:

- User location
- Address selector
- Search button

Hero section:

"شنوة تحب تاكل اليوم؟"

Search:

"إبحث على مطعم أو أكلة..."

Categories:

🍕 Pizza
🍔 Burgers
🍗 Chicken
🥪 Sandwich
🍝 Pasta
🥗 Salads
🍰 Desserts
☕ Coffee
🛒 Courses
📦 Autres

Sections:

- Restaurants near you
- Popular restaurants
- Fast delivery
- Best rated
- Offers
- New restaurants
- Recommended for you

Restaurant cards should show:

- Logo/photo
- Name
- Rating
- Delivery time
- Delivery fee
- Minimum order
- Open/closed status
- Distance

--------------------------------------------------

D. RESTAURANT PAGE

Show:

- Restaurant cover
- Logo
- Restaurant name
- Rating
- Number of reviews
- Estimated delivery time
- Delivery fee
- Minimum order
- Opening hours
- Address

Categories/menu:

- Popular
- Meals
- Sandwiches
- Pizza
- Drinks
- Desserts

Meal card:

- Image
- Name
- Description
- Price
- Add button

Support meal customization:

Example:

Pizza:

Size:
- Small
- Medium
- Large

Extras:
- Cheese
- Chicken
- Sauce
- Vegetables

Every option must affect price correctly.

--------------------------------------------------

E. CART

Show:

- Restaurant
- Items
- Quantity
- Modifiers
- Subtotal
- Delivery fee
- Discount
- Service fee
- Total

Allow:

- Add/remove item
- Change quantity
- Add note
- Apply coupon

Prevent checkout if restaurant is closed.

--------------------------------------------------

F. CHECKOUT

Address:

- Current GPS location
- Saved address
- New address
- Map pin
- Building
- Floor
- Apartment
- Address note

Contact:

- Customer phone

Delivery instructions:

Example:

"اتصل كي توصل"

Payment:

- Cash on delivery
- Online payment

Coupon:

- Promo code

Show final price clearly.

Button:

"اطلب الآن"

--------------------------------------------------

G. ORDER TRACKING

This is extremely important.

Show live order status:

1. الطلب تم استلامه
2. المطعم يحضّر الطلب
3. السائق في الطريق للمطعم
4. السائق استلم الطلب
5. الطلب في الطريق إليك
6. تم التوصيل

Display:

- Driver name
- Driver photo
- Driver rating
- Vehicle
- Phone/contact
- Live map
- Estimated arrival
- Order number

Use WebSockets for live updates.

Customer must NOT need to refresh the page.

--------------------------------------------------

H. ORDER HISTORY

Show:

- Active orders
- Previous orders
- Order details
- Reorder
- Invoice
- Rating

--------------------------------------------------

I. RATINGS

After delivery:

Rate:

- Restaurant
- Food
- Driver

1-5 stars.

Optional comment.

==================================================
6. DRIVER / RIDER APPLICATION
==================================================

Create a separate driver interface.

Driver registration:

- First name
- Last name
- Phone
- Email
- ID number
- ID photo
- Driver photo
- Vehicle
- Vehicle registration
- Driving license
- Zone
- Bank/payment information if needed

Admin must approve drivers before activation.

--------------------------------------------------

DRIVER HOME

Show:

- Online/offline toggle
- Current location
- Current earnings
- Today's deliveries
- Completed deliveries
- Pending requests

When online:

Driver becomes available for delivery dispatch.

--------------------------------------------------

DELIVERY REQUEST

Show:

- Restaurant
- Pickup distance
- Customer delivery distance
- Estimated earnings
- Order value
- Estimated duration

Buttons:

ACCEPT
DECLINE

Once accepted:

Navigation to restaurant.

--------------------------------------------------

DRIVER ORDER FLOW

Statuses:

AVAILABLE
ASSIGNED
ACCEPTED
ARRIVING_AT_RESTAURANT
AT_RESTAURANT
ORDER_PICKED_UP
ON_THE_WAY
ARRIVING
DELIVERED
CANCELLED

Driver can update status.

Restaurant receives real-time status.

Customer receives real-time status.

--------------------------------------------------

PROOF OF DELIVERY

Support:

- Delivery confirmation
- PIN code
- Optional photo
- Customer signature if required

Do NOT expose sensitive customer information unnecessarily.

==================================================
7. SMART DRIVER DISPATCH
==================================================

Create a dispatch engine.

When an order becomes ready:

Find available drivers.

Rank drivers by:

1. Distance to restaurant
2. Driver availability
3. Current workload
4. Vehicle type
5. Estimated arrival time
6. Driver performance
7. Zone

Send delivery request to the best candidate.

If declined or timeout:

Send to next candidate.

Admin should be able to configure:

- Assignment radius
- Timeout
- Maximum distance
- Delivery zones
- Priority rules

Do NOT simply assign randomly.

==================================================
8. RESTAURANT DASHBOARD
==================================================

Restaurants need a web dashboard.

Authentication:

Restaurant owner/admin.

Dashboard:

- Today's orders
- Revenue
- Pending orders
- Completed orders
- Average preparation time
- Ratings

--------------------------------------------------

ORDER MANAGEMENT

Real-time order notification.

Order states:

NEW
ACCEPTED
PREPARING
READY
PICKED_UP
COMPLETED
CANCELLED

Restaurant can:

- Accept order
- Reject order
- Set preparation time
- Mark ready
- Contact support

--------------------------------------------------

MENU MANAGEMENT

Restaurant can manage:

Categories
Products
Prices
Images
Descriptions
Options
Extras
Availability

Examples:

Pizza
Size
Toppings
Sauces
Drinks

Allow temporary item availability.

Example:

"Chicken unavailable"

The item automatically becomes unavailable for customers.

--------------------------------------------------

RESTAURANT SETTINGS

- Opening hours
- Delivery zones
- Minimum order
- Preparation time
- Delivery availability
- Restaurant status
- Promotions

==================================================
9. ADMIN DASHBOARD
==================================================

Build a powerful admin dashboard.

Admin sections:

Dashboard
Customers
Restaurants
Drivers
Orders
Payments
Coupons
Promotions
Reviews
Delivery zones
Categories
Reports
Settings
Support
Notifications
Audit logs

--------------------------------------------------

ADMIN DASHBOARD KPIs

Display:

Total orders
Orders today
Revenue
Platform commission
Driver earnings
Restaurant earnings
Active drivers
Active restaurants
New customers
Cancellation rate
Average delivery time

Charts:

- Orders per day
- Revenue per day
- Orders by zone
- Top restaurants
- Top meals
- Driver performance

==================================================
10. ORDER MANAGEMENT ENGINE
==================================================

Design the order system carefully.

Order entity:

id
orderNumber
customerId
restaurantId
driverId
status
subtotal
deliveryFee
serviceFee
discount
total
paymentMethod
paymentStatus
deliveryAddress
deliveryLatitude
deliveryLongitude
customerNote
restaurantNote
driverNote
createdAt
acceptedAt
preparedAt
pickedUpAt
deliveredAt
cancelledAt

Every status change must be recorded.

Create:

OrderStatusHistory

Fields:

id
orderId
oldStatus
newStatus
changedBy
timestamp
metadata

This creates a complete audit trail.

==================================================
11. DELIVERY PRICING ENGINE
==================================================

Do NOT hard-code delivery fees.

Create configurable pricing rules.

Example:

Base fee:
2.000 TND

Distance fee:
0.500 TND / km

Example:

deliveryFee =
baseFee +
(distanceKm × pricePerKm)

Allow admin to configure:

- Base fee
- Price/km
- Minimum fee
- Maximum fee
- Zone pricing
- Peak hours
- Bad weather surcharge
- Restaurant-specific fee

All prices must be configurable from admin.

==================================================
12. DELIVERY ZONES
==================================================

Admin can create delivery zones.

Each zone:

- Name
- Polygon
- Delivery fee
- Minimum order
- Estimated delivery time
- Active/inactive

Example:

Djerba Midoun
Djerba Houmt Souk
Djerba Ajim
etc.

Do not hardcode these zones.

Admin must be able to create/edit them.

==================================================
13. MAPS AND GPS
==================================================

Use real GPS coordinates.

Customer:

- Select location on map
- Detect current location
- Save address

Driver:

- Send live location while active
- Stop location tracking when offline

Customer:

- See driver moving on map

Backend:

Store latitude/longitude.

Use geospatial queries where possible.

Optimize GPS updates to avoid excessive battery/data usage.

==================================================
14. NOTIFICATION SYSTEM
==================================================

Create centralized notification service.

Channels:

- Push
- SMS
- Email
- In-app

Events:

Order created
Order accepted
Restaurant preparing
Driver assigned
Driver arriving
Order picked up
Order delivered
Order cancelled
Promotion
New restaurant
Payment failed

Notification templates must support:

Arabic
French
English

==================================================
15. COUPONS AND PROMOTIONS
==================================================

Admin can create:

- Percentage discount
- Fixed discount
- Free delivery
- Restaurant-specific coupon
- First-order coupon
- Minimum basket coupon
- Expiring coupon
- Zone-specific coupon

Example:

WELCOME10

10% off first order.

Rules:

- Start date
- End date
- Usage limit
- Per-user limit
- Minimum order
- Maximum discount

==================================================
16. LOYALTY SYSTEM
==================================================

Prepare architecture for:

Points
Rewards
VIP customers
Referral codes

Example:

10 TND spent = 1 point

Admin can configure the rules.

Do not overcomplicate MVP, but create the correct database structure.

==================================================
17. REFERRAL SYSTEM
==================================================

Customer gets referral code.

Example:

3JAJA-MOHAMED

Friend signs up and completes first order.

Both can receive rewards.

Prevent abuse with:

- Device checks
- Phone verification
- Usage limits
- Fraud detection rules

==================================================
18. CUSTOMER SUPPORT
==================================================

Create support system.

Customer can open ticket.

Categories:

- Late order
- Missing item
- Wrong item
- Driver issue
- Restaurant issue
- Payment issue
- Refund
- Other

Admin/support can respond.

Optional:

Live chat.

==================================================
19. SECURITY
==================================================

Security is mandatory.

Implement:

- JWT access token
- Refresh token rotation
- Password hashing where passwords exist
- Phone OTP expiration
- Rate limiting
- Input validation
- SQL injection protection
- XSS protection
- CSRF protection where relevant
- Secure headers
- RBAC
- Audit logging
- API authorization
- File upload validation
- Image size limits
- Server-side price calculation

NEVER trust prices sent from frontend.

The backend must calculate:

subtotal
discount
delivery fee
service fee
total

==================================================
20. ROLE BASED ACCESS CONTROL
==================================================

Roles:

CUSTOMER
DRIVER
RESTAURANT_OWNER
RESTAURANT_MANAGER
ADMIN
SUPPORT
SUPER_ADMIN

Every API endpoint must validate authorization.

Example:

Restaurant A must never be able to modify Restaurant B's orders.

Driver A must never access Driver B's private information.

Customer A must never access Customer B's orders.

==================================================
21. DATABASE DESIGN
==================================================

Create a normalized PostgreSQL schema.

Minimum entities:

User
CustomerProfile
DriverProfile
Restaurant
RestaurantBranch
RestaurantStaff
RestaurantCategory
MenuCategory
MenuItem
MenuItemOption
MenuItemModifier
Address
Order
OrderItem
OrderItemModifier
OrderStatusHistory
DriverAssignment
Payment
Coupon
CouponUsage
Review
Favorite
Notification
DeliveryZone
SupportTicket
SupportMessage
Referral
LoyaltyAccount
LoyaltyTransaction
AuditLog

Use UUIDs.

Use createdAt/updatedAt.

Use indexes on:

phone
email
restaurantId
customerId
driverId
status
createdAt
latitude/longitude where applicable

==================================================
22. API DESIGN
==================================================

Create clean REST APIs.

Example:

POST /auth/request-otp
POST /auth/verify-otp

GET /restaurants
GET /restaurants/:id
GET /restaurants/:id/menu

POST /orders
GET /orders/:id
GET /orders/my-orders

POST /orders/:id/cancel

POST /drivers/availability
POST /drivers/location

GET /driver/orders
POST /driver/orders/:id/accept
POST /driver/orders/:id/status

GET /restaurant/orders
POST /restaurant/orders/:id/accept
POST /restaurant/orders/:id/reject
POST /restaurant/orders/:id/ready

POST /reviews

GET /admin/dashboard

etc.

Generate OpenAPI/Swagger documentation.

==================================================
23. REAL-TIME EVENTS
==================================================

Use WebSockets.

Events:

order.created
order.accepted
order.preparing
driver.assigned
driver.location.updated
order.picked_up
order.delivered
order.cancelled

Example:

Customer subscribes to:

order:{orderId}

Driver location is broadcast only to authorized users associated with that order.

==================================================
24. PERFORMANCE
==================================================

The application should feel extremely fast.

Implement:

- Lazy loading
- Image optimization
- Pagination
- Database indexes
- Redis caching
- API response caching where appropriate
- CDN-ready image storage
- Debounced search
- Infinite scrolling
- Optimistic UI where safe

Restaurant list should load quickly even with thousands of restaurants.

==================================================
25. SEARCH
==================================================

Search restaurants and meals.

Search by:

Restaurant name
Meal name
Category
Cuisine
Keyword

Example:

"pizza"

should return:

Pizza restaurants
Pizza meals

Support Arabic and French search.

Consider PostgreSQL full-text search initially.

==================================================
26. MULTI-LANGUAGE
==================================================

Languages:

Arabic
French
English

Default:

Arabic.

Arabic interface must be RTL.

French/English must be LTR.

Do not simply translate buttons.

Create proper translation keys:

home.title
home.search
order.confirm
order.status.preparing

etc.

==================================================
27. MOBILE UX
==================================================

This is a mobile-first product.

Bottom navigation:

🏠 Home
🔎 Search
❤️ Favorites
📦 Orders
👤 Profile

Use large touch targets.

Minimize typing.

Use maps and saved addresses.

Checkout should require as few steps as possible.

==================================================
28. LANDING PAGE
==================================================

Create a professional public website.

Hero:

"أسرع خدمة توصيل أكل في منطقتك"

CTA:

"إطلب الآن"

Secondary:

"إنضم كمطعم"
"إنضم كسائق"

Sections:

- How it works
- Popular restaurants
- Why 3jaja
- Fast delivery
- Live tracking
- Restaurants
- Drivers
- FAQ
- Contact

Use the 3jaja branding.

==================================================
29. BUSINESS MODEL
==================================================

Support multiple revenue streams:

1. Restaurant commission
2. Delivery fee
3. Service fee
4. Sponsored restaurants
5. Promotional placement
6. Subscription/VIP
7. Future corporate delivery

Commission must be configurable.

Example:

Restaurant commission:
15%

But NEVER hard-code 15%.

Admin can change it.

==================================================
30. FINANCIAL CALCULATION
==================================================

For every order calculate:

Restaurant subtotal
Restaurant commission
Delivery fee
Driver payout
Service fee
Discount
Platform revenue
Restaurant net payout

Store all financial records.

Never calculate historical financial reports using current configuration.

Store the actual rates used at order time.

==================================================
31. ADMIN FINANCE
==================================================

Admin can see:

Gross order value
Restaurant commissions
Delivery revenue
Driver payouts
Refunds
Discounts
Net platform revenue

Filter:

Today
Yesterday
This week
This month
Custom date

Export:

CSV
Excel
PDF

==================================================
32. FRAUD PREVENTION
==================================================

Detect:

Multiple accounts using same phone
Suspicious coupon usage
Repeated cancellations
Fake orders
Driver GPS anomalies
Impossible travel speed
Repeated payment failures

Flag suspicious activity for admin review.

Do not automatically ban users without configurable rules.

==================================================
33. ERROR HANDLING
==================================================

Create consistent API errors.

Example:

{
  "success": false,
  "error": {
    "code": "RESTAURANT_CLOSED",
    "message": "The restaurant is currently closed."
  }
}

Frontend should display friendly Arabic/French messages.

Never expose stack traces to users.

==================================================
34. LOGGING AND MONITORING
==================================================

Implement structured logging.

Log:

- Authentication events
- Order events
- Payment events
- Driver assignment
- API errors
- Admin actions

Prepare integration with:

Sentry
Prometheus
Grafana

or equivalent services.

==================================================
35. TESTING
==================================================

Do NOT consider the project finished without tests.

Create:

Unit tests
Integration tests
API tests
Database tests
E2E tests

Critical flows:

1. Customer registration
2. Restaurant browsing
3. Add item
4. Checkout
5. Order creation
6. Restaurant acceptance
7. Driver assignment
8. Driver pickup
9. Delivery
10. Payment
11. Cancellation
12. Refund
13. Coupon
14. Review

==================================================
36. EDGE CASES
==================================================

Handle:

Restaurant closes after order
Driver cancels
No drivers available
Customer cancels
Restaurant rejects order
Payment succeeds but order creation fails
Driver loses internet
Customer loses internet
GPS unavailable
Restaurant becomes unavailable
Item becomes unavailable
Duplicate payment
Duplicate order request
Expired coupon
Invalid coupon
Wrong delivery address

Use idempotency keys for critical operations such as order creation and payment.

==================================================
37. ADMIN CONFIGURATION
==================================================

Nothing important should be hard-coded.

Admin should configure:

- Delivery fees
- Commission
- Service fees
- Zones
- Opening hours
- Order limits
- Coupon rules
- Cancellation rules
- Driver assignment radius
- Driver timeout
- Minimum order
- Maximum order
- Supported payment methods
- Languages
- Notification templates

==================================================
38. MVP PRIORITY
==================================================

Do not attempt to build everything simultaneously.

Build in phases.

PHASE 1 — MVP

Customer:
- Authentication
- Location
- Restaurant list
- Menu
- Cart
- Checkout
- Cash payment
- Order tracking
- Order history

Restaurant:
- Login
- Menu management
- Order management

Driver:
- Login
- Online/offline
- Receive orders
- Accept order
- Pickup
- Delivery
- GPS

Admin:
- Dashboard
- Restaurants
- Drivers
- Customers
- Orders
- Delivery zones
- Pricing

PHASE 2:

- Online payments
- Coupons
- Reviews
- Notifications
- Promotions
- Advanced analytics

PHASE 3:

- Loyalty
- Referral
- Groceries
- Errands
- Corporate delivery
- Subscription
- Advanced dispatch optimization

==================================================
39. UI QUALITY
==================================================

The UI must look like a real startup product, not a coding demo.

Avoid:

- Generic Bootstrap appearance
- Excessive gradients
- Huge empty spaces
- Tiny buttons
- Poor Arabic typography
- Fake charts
- Placeholder lorem ipsum
- Broken mobile layouts

Use:

- Strong hierarchy
- Beautiful food photography
- Rounded cards
- Smooth transitions
- Clear CTA buttons
- Skeleton loaders
- Empty states
- Error states
- Loading states
- Confirmation dialogs

Arabic typography should use a high-quality Arabic font such as:

Cairo
Tajawal
IBM Plex Sans Arabic

Use an appropriate font pairing for French/English.

==================================================
40. BRAND UI EXAMPLE
==================================================

Primary CTA:

[ إطلب الآن ]

Color:
3jaja Red

Secondary CTA:

[ إنضم كمطعم ]

Yellow accent.

Restaurant card:

IMAGE
★★★★☆ 4.7
Restaurant Name
🍔 Burgers • 🍕 Pizza
25-35 min
2.500 TND delivery

==================================================
41. IMAGE / ASSET HANDLING
==================================================

Use real image URLs only when legally permitted.

Otherwise use placeholder/demo images.

Never scrape copyrighted images without permission.

Restaurant owners should be able to upload:

- Logo
- Cover image
- Food images

Optimize uploaded images automatically.

==================================================
42. DATA SEEDING
==================================================

Create realistic demo data.

Example restaurants:

3jaja Demo Restaurant
Djerba Burger
Pizza House
Chicken Express
Café Djerba
Djerba Market

Create:

20 restaurants
100 menu items
10 drivers
50 customers
100 demo orders

Clearly mark seed data as demo data.

==================================================
43. DEVOPS
==================================================

Create:

Dockerfile
docker-compose.yml

Services:

frontend
backend
postgres
redis

Environment variables:

DATABASE_URL
REDIS_URL
JWT_SECRET
MAPS_API_KEY
FIREBASE credentials
STORAGE credentials
PAYMENT credentials

Never commit secrets.

Provide:

.env.example

==================================================
44. PROJECT STRUCTURE
==================================================

Use clean architecture.

Example:

/apps
   /customer
   /driver
   /restaurant
   /admin
   /api

/packages
   /ui
   /types
   /config
   /i18n
   /validation

OR use a similarly professional monorepo architecture.

Keep shared types and components reusable.

==================================================
45. CODE QUALITY
==================================================

Rules:

- TypeScript strict mode
- ESLint
- Prettier
- No any unless absolutely necessary
- Clean naming
- Small functions
- SOLID principles
- DRY
- Dependency injection
- Repository/service/controller separation
- DTO validation
- Strong typing

Do not create giant files.

Do not put business logic inside React components.

==================================================
46. IMPORTANT ORDER STATE MACHINE
==================================================

Implement a real state machine.

Allowed transitions:

PENDING
→ ACCEPTED
→ PREPARING
→ READY
→ DRIVER_ASSIGNED
→ PICKED_UP
→ ON_THE_WAY
→ DELIVERED

Cancellation rules must be explicit.

Never allow:

DELIVERED → PREPARING

or other invalid transitions.

==================================================
47. DATABASE TRANSACTIONS
==================================================

Use database transactions for:

Order creation
Payment creation
Coupon usage
Driver assignment
Restaurant acceptance
Financial calculations

Prevent race conditions.

Example:

Two customers cannot purchase the last available limited item simultaneously.

==================================================
48. SECURITY OF LOCATION DATA
==================================================

Location data is sensitive.

Only authorized users should access it.

Driver location should only be visible:

- While delivery is active
- To the assigned customer
- Restaurant/admin when necessary

Stop tracking after delivery.

==================================================
49. DELIVERABLES
==================================================

I expect you to produce:

1. Complete source code
2. Database schema
3. Migrations
4. Seed scripts
5. API
6. Customer app
7. Driver app
8. Restaurant dashboard
9. Admin dashboard
10. Authentication
11. Real-time order tracking
12. Maps integration
13. Notifications
14. Tests
15. Docker configuration
16. Environment configuration
17. API documentation
18. README
19. Deployment instructions

==================================================
50. DEVELOPMENT PROCESS
==================================================

Do NOT generate random code immediately.

First:

1. Analyze requirements.
2. Create system architecture.
3. Create database ERD.
4. Create API specification.
5. Create project structure.
6. Create UI/UX sitemap.
7. Identify dependencies.
8. Identify security risks.
9. Create implementation roadmap.

Then implement.

After every major phase:

- Run tests
- Fix errors
- Check TypeScript
- Check lint
- Check database migrations
- Check responsive UI
- Check Arabic RTL
- Check authorization

Do not say "implemented" unless the functionality actually exists.

==================================================
51. FINAL QUALITY STANDARD
==================================================

The result should be capable of becoming a real commercial product.

Think like:

- Principal Software Engineer
- CTO
- Product Manager
- UX designer
- Security engineer
- DevOps engineer

Do not build a prototype disguised as a production application.

Build a clean foundation that can scale from:

100 users
→ 1,000 users
→ 10,000 users
→ 100,000+ users

without requiring a complete rewrite.

==================================================
52. FIRST TASK
==================================================

Before writing application code, produce:

A. System architecture diagram
B. Database ERD
C. Complete feature map
D. API endpoint list
E. User roles and permissions matrix
F. Order state machine
G. Folder/project structure
H. MVP implementation plan
I. UI screen list
J. Security checklist

Then ask for approval to begin implementation.

Do not skip architectural planning.


                     ┌───────────────────┐
                    │   3JAJA WEBSITE   │
                    └─────────┬─────────┘
                              │
        ┌─────────────────────┼──────────────────────┐
        │                     │                      │
        ▼                     ▼                      ▼
┌──────────────┐      ┌───────────────┐      ┌──────────────┐
│ CUSTOMER APP │      │ DRIVER APP    │      │ RESTAURANT   │
│              │      │               │      │ DASHBOARD    │
└──────┬───────┘      └───────┬───────┘      └──────┬───────┘
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              ▼
                    ┌───────────────────┐
                    │    API BACKEND    │
                    │ NestJS / Node.js  │
                    └─────────┬─────────┘
                              │
            ┌─────────────────┼──────────────────┐
            ▼                 ▼                  ▼
       PostgreSQL           Redis           WebSockets
            │                                    │
            └────────────────┬───────────────────┘
                             ▼
                    ┌───────────────────┐
                    │  ORDER ENGINE     │
                    │  DISPATCH ENGINE  │
                    │  PRICING ENGINE   │
                    └─────────┬─────────┘
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
              Maps         Payment     Notifications

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://jaja-express-delivery.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/687cf04a-8d51-458e-88f4-538a4ec5c830).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
