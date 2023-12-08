# Next.js Store

A minimal e-commerce storefront built with Next.js 14 and the App Router. Wanted to try Next.js 14 after the release — server components, the new App Router patterns, and Stripe checkout integration.

## Tech Stack

- **Next.js 14** — App Router, Server Components, Route Handlers
- **TypeScript**
- **Tailwind CSS** — Styling
- **Stripe** — Checkout integration
- **Lucide React** — Icons

## Features

- Product listing and detail pages (server-rendered)
- Client-side cart with localStorage persistence
- Live cart count in navbar
- Quantity controls and item removal
- Order summary with Stripe checkout API route
- Responsive grid layout
- Image optimization with next/image

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Stripe keys to .env.local

# Run dev server
npm run dev
```

Opens at `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              — Root layout with navbar
│   ├── page.tsx                — Home page with featured products
│   ├── products/
│   │   ├── page.tsx            — All products grid
│   │   └── [id]/page.tsx       — Product detail page
│   ├── cart/page.tsx           — Cart with quantity controls
│   └── api/checkout/route.ts   — Stripe checkout session
├── components/
│   ├── Navbar.tsx              — Nav with live cart count
│   └── ProductCard.tsx         — Product card component
├── data/products.ts            — Product catalog
└── lib/
    ├── cart.ts                 — Cart logic (localStorage)
    └── utils.ts                — cn() helper, price formatter
```

## Stripe Checkout

The `/api/checkout` route handler creates a Stripe Checkout Session. To test:

1. Get test keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Add them to `.env.local`
3. Use card number `4242 4242 4242 4242` for testing
