import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import ArticleCard from '@/components/ArticleCard';
import ArticleRow from '@/components/ArticleRow';
import SectionHeader from '@/components/SectionHeader';
import MembersSidebar from '@/components/MembersSidebar';
import Sidebar from '@/components/Sidebar';
import { articles, categories, newMembers, events, getArticlesByCategory, getFeaturedArticles } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Trang Chủ - Doanh Nhân Trẻ Đồng Nai',
  description: 'Trang thông tin chính thức của Hội Doanh nhân trẻ tỉnh Đồng Nai. Cập nhật tin tức, hoạt động, sự kiện và kết nối doanh nhân trẻ Đồng Nai.',
};

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);
  const tinTucHoi = getArticlesByCategory('tin-tuc-hoi');
  const tinHoiVien = getArticlesByCategory('tin-hoi-vien');
  const kinhTeXaHoi = getArticlesByCategory('kinh-te-xa-hoi-tinh-dong-nai');
  const doanhNhan = getArticlesByCategory('doanh-nhan-doanh-nghiep');
  const ketNoiGiaoThuong = getArticlesByCategory('ket-noi-giao-thuong');

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* ===== HERO SECTION ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {/* Hero Slider - Takes 3 columns */}
        <div className="lg:col-span-3">
          <HeroSlider articles={featuredArticles} />
        </div>

        {/* Events Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-md overflow-hidden shadow-sm">
            <div className="bg-primary text-white px-3 py-2 font-bold text-sm">Sự Kiện</div>
            {events.map((event) => (
              <Link key={event.id} href={event.link} className="block">
                <div className="relative h-32 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
          {/* Ad Banner Placeholder */}
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-md p-4 text-white text-center">
            <p className="text-xs mb-1">Quảng cáo</p>
            <p className="text-sm font-bold">Liên hệ đặt banner</p>
            <p className="text-xs mt-1">0902.67.1111</p>
          </div>
        </div>
      </div>

      {/* ===== TIN TỨC HỘI & TIN HỘI VIÊN + MEMBERS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {/* Left Column - 3/4 */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tin tức hội */}
            <div>
              <SectionHeader title="Tin tức hội" viewAllLink="/danh-muc/tin-tuc-hoi" />
              <div className="bg-white rounded-b-md p-3">
                {/* Featured article */}
                {tinTucHoi[0] && <ArticleCard article={tinTucHoi[0]} imageHeight="h-40" />}
                {/* List */}
                <div className="mt-2">
                  {tinTucHoi.slice(1, 6).map((article) => (
                    <ArticleRow key={article.id} article={article} />
                  ))}
                </div>
              </div>
            </div>

            {/* Tin hội viên */}
            <div>
              <SectionHeader title="Tin hội viên" viewAllLink="/danh-muc/tin-hoi-vien" />
              <div className="bg-white rounded-b-md p-3">
                {tinHoiVien[0] && <ArticleCard article={tinHoiVien[0]} imageHeight="h-40" />}
                <div className="mt-2">
                  {tinHoiVien.slice(1, 6).map((article) => (
                    <ArticleRow key={article.id} article={article} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Members */}
        <div>
          <MembersSidebar members={newMembers} />
        </div>
      </div>

      {/* ===== KINH TẾ XÃ HỘI & DOANH NHÂN ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Kinh tế xã hội */}
        <div>
          <SectionHeader title="Kinh tế xã hội tỉnh Đồng nai" viewAllLink="/danh-muc/kinh-te-xa-hoi-tinh-dong-nai" />
          <div className="bg-white rounded-b-md p-3">
            {kinhTeXaHoi[0] && <ArticleCard article={kinhTeXaHoi[0]} imageHeight="h-40" />}
            <div className="mt-2">
              {kinhTeXaHoi.slice(1, 6).map((article) => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>

        {/* Doanh nhân doanh nghiệp */}
        <div>
          <SectionHeader title="Doanh nhân doanh nghiệp" viewAllLink="/danh-muc/doanh-nhan-doanh-nghiep" />
          <div className="bg-white rounded-b-md p-3">
            {doanhNhan[0] && <ArticleCard article={doanhNhan[0]} imageHeight="h-40" />}
            <div className="mt-2">
              {doanhNhan.slice(1, 6).map((article) => (
                <ArticleRow key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== KẾT NỐI GIAO THƯƠNG ===== */}
      <div className="mb-8">
        <SectionHeader title="Kết Nối Giao Thương" viewAllLink="/danh-muc/ket-noi-giao-thuong" />
        <div className="bg-white rounded-b-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ketNoiGiaoThuong.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} article={article} showExcerpt={false} imageHeight="h-36" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
