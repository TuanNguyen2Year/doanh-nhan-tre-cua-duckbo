import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Doanh Nhân Trẻ Đồng Nai - Hội Doanh nhân trẻ tỉnh Đồng Nai',
  description: 'Trang thông tin chính thức của Hội Doanh nhân trẻ tỉnh Đồng Nai. Cập nhật tin tức, hoạt động, sự kiện và kết nối doanh nhân trẻ Đồng Nai.',
  keywords: 'Doanh nhân trẻ Đồng Nai, Hội doanh nhân trẻ, DNT Đồng Nai, doanh nghiệp Đồng Nai, khởi nghiệp Đồng Nai',
  openGraph: {
    title: 'Doanh Nhân Trẻ Đồng Nai',
    description: 'Trang thông tin chính thức của Hội Doanh nhân trẻ tỉnh Đồng Nai',
    url: 'https://doanhnhantredongnai.vn',
    siteName: 'Doanh Nhân Trẻ Đồng Nai',
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://doanhnhantredongnai.vn',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
