# Doanh Nhân Trẻ Đồng Nai – AI Coding Instructions

## Project Overview
Vietnamese young-entrepreneur association website. Clone/reference: https://doanhnhantredongnai.vn/
- **Framework:** Next.js 14 App Router · TypeScript · Tailwind CSS 3 · React Icons (v5)
- **Rendering:** All pages are **SSG** (Static Site Generation) — no server-side APIs, no database.
- **Data source:** `src/data/mockData.ts` is the single source of truth for all content.
- **Deployment:** Vercel (auto-deploy from `main` branch on GitHub).

## Essential Commands
```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (validates all pages/types)
npm start        # serve production build locally
```
Always run `npm run build` after adding new pages to catch TypeScript or routing errors before pushing.

## Architecture & Data Flow
```
src/types/index.ts          ← shared interfaces (Article, Category, Member, Event, MenuItem)
src/data/mockData.ts        ← all data + helper functions
src/app/layout.tsx          ← root layout: TopBar → Header → {children} → Footer
src/components/             ← pure UI components, no data fetching
src/app/page.tsx            ← Home (assembles sections using helpers from mockData)
src/app/danh-muc/[slug]/    ← Category listing page (SSG via generateStaticParams)
src/app/bai-viet/[slug]/    ← Article detail page  (SSG via generateStaticParams)
src/app/gioi-thieu/         ← Static info pages (thu-ngo, muc-tieu-va-nhiem-vu, dieu-le)
src/app/dao-tao/            ← Training courses page
src/app/lien-he/            ← Contact page (Client Component with form state)
src/app/dang-nhap/          ← Login page  (Client Component)
src/app/dang-ky/            ← Register page (Client Component)
```

## Key Conventions

### Adding a new Article
1. Add entry to `articles` array in `src/data/mockData.ts` with a unique `id`, unique `slug`, and a valid `category` from the `categories` array.
2. The page `/bai-viet/[slug]` auto-generates from `generateStaticParams()` — no route file needed.

### Adding a new Category
1. Add to `categories` array in `mockData.ts`.
2. `/danh-muc/[slug]` page auto-generates. Add a menu entry to `menuItems` if needed.

### Adding a new standalone page (e.g. `/gioi-thieu/dieu-le`)
- Create `src/app/<path>/page.tsx`. Export `metadata` for SEO. Use `notFound()` for invalid dynamic params.
- **Client Components** (forms, state) must have `'use client'` at the top and cannot export `metadata` — move metadata to a parent Server Component or use a separate `layout.tsx`.

### Navigation / Menu
- All nav items are driven by `menuItems` in `mockData.ts`. Edit there to add/remove links.
- `ĐÀO TẠO` → `/dao-tao` (standalone page, NOT `/danh-muc/dao-tao`)
- Auth button → `/dang-nhap`

### Images
- All article/event images use `https://picsum.photos/seed/<unique-seed>/width/height` (no local images needed for mock data).
- Logo is at `public/image/logo.png`. Favicon is `public/image/logo.png` (referenced in `layout.tsx`).
- `next.config.js` whitelists `picsum.photos` and `doanhnhantredongnai.vn` for `next/image`.

### Tailwind Custom Colors
```js
primary: '#1e3a6e'   // navy blue – use for headers, buttons, section bars
accent:  '#d4a843'   // gold – use for highlights, hover states
```
Use `bg-primary`, `text-primary`, `hover:bg-primary-dark` etc. (defined in `tailwind.config.js`).

### SEO Pattern (every page)
```tsx
export const metadata: Metadata = {
  title: '<PageTitle> - Doanh Nhân Trẻ Đồng Nai',
  description: '...',
  openGraph: { title, description, ... },
};
```

## Component Patterns
- `<SectionHeader title="..." viewAllLink="/danh-muc/..." />` — blue bar with "Xem tất cả" link.
- `<ArticleCard article={...} imageHeight="h-44" />` — vertical card with image + title + date.
- `<ArticleRow article={...} />` — horizontal thumbnail + title (used in lists).
- `<Sidebar title="..." articles={[...]} />` — right-column sidebar with small article list.
- `<HeroSlider articles={[...]} />` — auto-rotating hero; Client Component.

## Deployment / Git
- Branch `main` auto-deploys to Vercel.
- After changes: `git add -A && git commit -m "..." && git push origin main`
- Vercel domain: `https://doanh-nhan-tre.vercel.app` (or custom domain when configured).
