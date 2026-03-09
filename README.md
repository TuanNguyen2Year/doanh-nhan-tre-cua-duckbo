# Doanh Nhân Trẻ Đồng Nai 🇻🇳

_Repository: `doanh-nhan-tre-cua-duckbo`_

Trang thông tin chính thức của **Hội Doanh nhân trẻ tỉnh Đồng Nai**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Icons:** React Icons

## 📋 Pages

| Trang | URL | Mô tả |
|-------|-----|-------|
| Trang chủ | `/` | Hero slider, tin tức hội, tin hội viên, kinh tế xã hội, doanh nhân, kết nối giao thương |
| Danh mục | `/danh-muc/[slug]` | Danh sách bài viết theo danh mục với sidebar và phân trang |
| Chi tiết bài viết | `/bai-viet/[slug]` | Nội dung chi tiết bài viết với sidebar tin liên quan |

## 🏗️ Danh mục

- Tin tức hội (`/danh-muc/tin-tuc-hoi`)
- Tin hội viên (`/danh-muc/tin-hoi-vien`)
- Kinh tế xã hội tỉnh Đồng Nai (`/danh-muc/kinh-te-xa-hoi-tinh-dong-nai`)
- Doanh nhân doanh nghiệp (`/danh-muc/doanh-nhan-doanh-nghiep`)
- Kết nối giao thương (`/danh-muc/ket-noi-giao-thuong`)
- Đào tạo (`/danh-muc/dao-tao`)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deploy to Vercel (Public URL)

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel
1. Push code lên GitHub
2. Vào [vercel.com](https://vercel.com)
3. Import repository → Auto deploy
4. Nhận domain: `your-project.vercel.app`

## 📱 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap tự động (`/sitemap.xml`)
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Responsive design
- ✅ Static Site Generation (SSG) cho tốc độ tải nhanh

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (TopBar + Header + Footer)
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── globals.css         # Global styles + Tailwind
│   ├── danh-muc/
│   │   └── [slug]/
│   │       └── page.tsx    # Category page
│   └── bai-viet/
│       └── [slug]/
│           └── page.tsx    # Article detail page
├── components/
│   ├── TopBar.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleRow.tsx
│   ├── SectionHeader.tsx
│   ├── Sidebar.tsx
│   └── MembersSidebar.tsx
├── data/
│   └── mockData.ts         # Mock data (35 articles, 6 categories)
└── types/
    └── index.ts            # TypeScript interfaces
```

## 📝 License

Copyright 2023 © Doanh Nhân Trẻ Đồng Nai
