import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaArrowRight, FaUser, FaTag, FaQuoteLeft, FaChevronRight } from 'react-icons/fa';
import { articles, categories, newMembers, events, getArticlesByCategory, getFeaturedArticles, getLatestArticles } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Mẫu 4 — Blog Tối Giản - Doanh Nhân Trẻ Đồng Nai',
  description: 'Mẫu trang chủ thứ 4 – Layout blog tối giản, tập trung nội dung.',
};

export default function HomePageV4() {
  const featuredArticles = getFeaturedArticles(1);
  const latestArticles = getLatestArticles(12);
  const tinTucHoi = getArticlesByCategory('tin-tuc-hoi');
  const tinHoiVien = getArticlesByCategory('tin-hoi-vien');
  const kinhTeXaHoi = getArticlesByCategory('kinh-te-xa-hoi-tinh-dong-nai');
  const doanhNhan = getArticlesByCategory('doanh-nhan-doanh-nghiep');
  const ketNoiGiaoThuong = getArticlesByCategory('ket-noi-giao-thuong');

  const hero = featuredArticles[0];

  return (
    <div className="bg-white">
      {/* ===== HERO: Full-width single article, centered text ===== */}
      {hero && (
        <section className="relative h-[500px] md:h-[550px]">
          <Image src={hero.image} alt={hero.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <span className="inline-block bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                {hero.category.name}
              </span>
              <Link href={`/bai-viet/${hero.slug}`}>
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight hover:text-accent transition-colors">
                  {hero.title}
                </h1>
              </Link>
              <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">{hero.excerpt}</p>
              <div className="flex items-center justify-center gap-4 text-white/60 text-sm mt-6">
                <span className="flex items-center gap-1"><FaUser size={11} /> {hero.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><FaCalendarAlt size={11} /> {hero.date}</span>
              </div>
              <Link href={`/bai-viet/${hero.slug}`} className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full mt-8 hover:bg-accent hover:text-white transition-colors text-sm">
                Đọc bài viết <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== CATEGORY NAV STRIP ===== */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.id}
                href={`/danh-muc/${cat.slug}`}
                className="shrink-0 px-5 py-4 text-sm font-semibold text-gray-500 hover:text-primary border-b-2 border-transparent hover:border-accent transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES: Single column list ===== */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-8">Bài viết mới nhất</h2>

        <div className="space-y-0 divide-y divide-gray-100">
          {latestArticles.slice(1, 7).map((a, i) => (
            <article key={a.id} className={`py-8 ${i === 0 ? 'pt-0' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image */}
                <Link href={`/bai-viet/${a.slug}`} className="group block">
                  <div className="relative h-52 md:h-full min-h-[180px] rounded-xl overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </Link>

                {/* Text Content - 2 columns */}
                <div className="md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Link href={`/danh-muc/${a.category.slug}`} className="text-xs font-bold text-accent uppercase tracking-wider hover:text-primary">
                      {a.category.name}
                    </Link>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs text-gray-400 flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                  </div>

                  <Link href={`/bai-viet/${a.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary transition-colors leading-snug">
                      {a.title}
                    </h3>
                  </Link>

                  <p className="text-gray-500 mt-3 leading-relaxed line-clamp-3">{a.excerpt}</p>

                  <div className="flex items-center gap-4 mt-4">
                    {a.author && (
                      <span className="text-xs text-gray-400 flex items-center gap-1"><FaUser size={10} /> {a.author}</span>
                    )}
                    <Link href={`/bai-viet/${a.slug}`} className="text-xs text-accent font-semibold hover:text-primary flex items-center gap-1 ml-auto">
                      Đọc tiếp <FaArrowRight size={9} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== QUOTE / CTA BANNER ===== */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FaQuoteLeft className="text-accent mx-auto mb-4" size={32} />
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug">
            &ldquo;Kết nối doanh nhân trẻ, kiến tạo tương lai, cùng phát triển bền vững&rdquo;
          </blockquote>
          <p className="text-white/60 mt-4 text-sm">— Hội Doanh Nhân Trẻ Đồng Nai</p>
          <div className="flex justify-center gap-3 mt-8">
            <Link href="/gioi-thieu" className="bg-accent hover:bg-accent-light text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
              Tìm hiểu thêm
            </Link>
            <Link href="/dang-ky" className="border-2 border-white/40 hover:border-white text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
              Đăng ký hội viên
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTIONS BY CATEGORY: 2x2 ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tin tức hội */}
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-primary">
              <h3 className="text-lg font-bold text-primary">Tin tức hội</h3>
              <Link href="/danh-muc/tin-tuc-hoi" className="text-xs text-accent hover:text-primary font-semibold flex items-center gap-1">
                Tất cả <FaChevronRight size={8} />
              </Link>
            </div>
            {tinTucHoi[0] && (
              <Link href={`/bai-viet/${tinTucHoi[0].slug}`} className="group block mb-4">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={tinTucHoi[0].image} alt={tinTucHoi[0].title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{tinTucHoi[0].title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{tinTucHoi[0].excerpt}</p>
              </Link>
            )}
            <div className="space-y-3">
              {tinTucHoi.slice(1, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <FaChevronRight size={8} className="text-accent mt-1 shrink-0" />
                  <span className="line-clamp-1">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tin hội viên */}
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-accent">
              <h3 className="text-lg font-bold text-primary">Tin hội viên</h3>
              <Link href="/danh-muc/tin-hoi-vien" className="text-xs text-accent hover:text-primary font-semibold flex items-center gap-1">
                Tất cả <FaChevronRight size={8} />
              </Link>
            </div>
            {tinHoiVien[0] && (
              <Link href={`/bai-viet/${tinHoiVien[0].slug}`} className="group block mb-4">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={tinHoiVien[0].image} alt={tinHoiVien[0].title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{tinHoiVien[0].title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{tinHoiVien[0].excerpt}</p>
              </Link>
            )}
            <div className="space-y-3">
              {tinHoiVien.slice(1, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <FaChevronRight size={8} className="text-accent mt-1 shrink-0" />
                  <span className="line-clamp-1">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Kinh tế xã hội */}
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-green-600">
              <h3 className="text-lg font-bold text-primary">Kinh tế xã hội</h3>
              <Link href="/danh-muc/kinh-te-xa-hoi-tinh-dong-nai" className="text-xs text-accent hover:text-primary font-semibold flex items-center gap-1">
                Tất cả <FaChevronRight size={8} />
              </Link>
            </div>
            {kinhTeXaHoi[0] && (
              <Link href={`/bai-viet/${kinhTeXaHoi[0].slug}`} className="group block mb-4">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={kinhTeXaHoi[0].image} alt={kinhTeXaHoi[0].title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{kinhTeXaHoi[0].title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{kinhTeXaHoi[0].excerpt}</p>
              </Link>
            )}
            <div className="space-y-3">
              {kinhTeXaHoi.slice(1, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <FaChevronRight size={8} className="text-accent mt-1 shrink-0" />
                  <span className="line-clamp-1">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Doanh nhân */}
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-purple-600">
              <h3 className="text-lg font-bold text-primary">Doanh nhân doanh nghiệp</h3>
              <Link href="/danh-muc/doanh-nhan-doanh-nghiep" className="text-xs text-accent hover:text-primary font-semibold flex items-center gap-1">
                Tất cả <FaChevronRight size={8} />
              </Link>
            </div>
            {doanhNhan[0] && (
              <Link href={`/bai-viet/${doanhNhan[0].slug}`} className="group block mb-4">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={doanhNhan[0].image} alt={doanhNhan[0].title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{doanhNhan[0].title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{doanhNhan[0].excerpt}</p>
              </Link>
            )}
            <div className="space-y-3">
              {doanhNhan.slice(1, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex items-start gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <FaChevronRight size={8} className="text-accent mt-1 shrink-0" />
                  <span className="line-clamp-1">{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HỘI VIÊN MỚI: Horizontal ===== */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-sm font-bold text-accent uppercase tracking-widest text-center mb-8">Hội viên mới</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {newMembers.map((m) => (
              <div key={m.id} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {m.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center max-w-[120px]">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KẾT NỐI GIAO THƯƠNG: Full-width cards ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary">Kết nối giao thương</h2>
          <Link href="/danh-muc/ket-noi-giao-thuong" className="text-xs text-accent hover:text-primary font-semibold flex items-center gap-1">
            Tất cả <FaArrowRight size={9} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ketNoiGiaoThuong.slice(0, 3).map((a) => (
            <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-44 overflow-hidden">
                <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">{a.title}</h4>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                  <span className="flex items-center gap-1"><FaTag size={9} /> {a.category.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
