import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaArrowRight, FaFire, FaStar, FaChevronRight, FaUsers, FaNewspaper, FaHandshake } from 'react-icons/fa';
import { articles, newMembers, events, getArticlesByCategory, getFeaturedArticles, getLatestArticles } from '@/data/mockData';
import HeroSliderV2 from '@/components/HeroSliderV2';

export const metadata: Metadata = {
  title: 'Mẫu 2 — Magazine Hiện Đại - Doanh Nhân Trẻ Đồng Nai',
  description: 'Mẫu trang chủ thứ 2 – Giao diện magazine hiện đại, full-width sections.',
};

export default function HomePageV2() {
  const featuredArticles = getFeaturedArticles(5);
  const latestArticles = getLatestArticles(10);
  const tinTucHoi = getArticlesByCategory('tin-tuc-hoi');
  const tinHoiVien = getArticlesByCategory('tin-hoi-vien');
  const kinhTeXaHoi = getArticlesByCategory('kinh-te-xa-hoi-tinh-dong-nai');
  const doanhNhan = getArticlesByCategory('doanh-nhan-doanh-nghiep');
  const ketNoiGiaoThuong = getArticlesByCategory('ket-noi-giao-thuong');

  return (
    <div>
      {/* ===== HERO: Full-width dark banner, 7+5 grid ===== */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <HeroSliderV2 articles={featuredArticles.slice(0, 3)} />
            </div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-4">
              {featuredArticles.slice(3, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group relative rounded-xl overflow-hidden block h-[190px]">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase">{a.category.name}</span>
                    <h3 className="text-white text-sm font-bold line-clamp-2 group-hover:text-accent transition-colors">{a.title}</h3>
                    <div className="flex items-center gap-1 text-white/60 text-[11px] mt-1"><FaCalendarAlt size={9} /><span>{a.date}</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BREAKING NEWS TICKER ===== */}
      <section className="bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shrink-0">
            <FaFire size={10} /> Mới nhất
          </span>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {latestArticles.slice(0, 5).map((a) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="text-sm text-gray-700 hover:text-primary transition-colors">• {a.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FaUsers, count: '500+', label: 'Hội viên', bg: 'bg-primary/5', color: 'text-primary' },
              { icon: FaNewspaper, count: `${articles.length}+`, label: 'Bài viết', bg: 'bg-accent/5', color: 'text-accent' },
              { icon: FaHandshake, count: '120+', label: 'Doanh nghiệp', bg: 'bg-green-50', color: 'text-green-600' },
              { icon: FaStar, count: '50+', label: 'Sự kiện/năm', bg: 'bg-purple-50', color: 'text-purple-600' },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 rounded-xl ${s.bg}`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm"><s.icon className={s.color} size={20} /></div>
                <div><div className="text-2xl font-bold text-gray-800">{s.count}</div><div className="text-xs text-gray-500">{s.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN: 2/3 + 1/3 sidebar ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* TIN TỨC HỘI */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-3">Tin tức hội</h2>
                <Link href="/danh-muc/tin-tuc-hoi" className="text-sm text-accent hover:text-primary flex items-center gap-1">Xem tất cả <FaArrowRight size={10} /></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {tinTucHoi[0] && (
                  <div className="md:col-span-3">
                    <Link href={`/bai-viet/${tinTucHoi[0].slug}`} className="group block">
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <Image src={tinTucHoi[0].image} alt={tinTucHoi[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 p-5">
                          <h3 className="text-white font-bold text-lg line-clamp-2 group-hover:text-accent transition-colors">{tinTucHoi[0].title}</h3>
                          <p className="text-white/70 text-xs mt-1 line-clamp-2">{tinTucHoi[0].excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
                <div className="md:col-span-2 space-y-4">
                  {tinTucHoi.slice(1, 3).map((a) => (
                    <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex gap-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative w-24 h-20 shrink-0 rounded-lg overflow-hidden"><Image src={a.image} alt={a.title} fill className="object-cover" /></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-primary">{a.title}</h4>
                        <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* TIN HỘI VIÊN: Card grid */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-3">Tin hội viên</h2>
                <Link href="/danh-muc/tin-hoi-vien" className="text-sm text-accent hover:text-primary flex items-center gap-1">Xem tất cả <FaArrowRight size={10} /></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tinHoiVien.slice(0, 6).map((a) => (
                  <div key={a.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <Link href={`/bai-viet/${a.slug}`}>
                      <div className="relative h-36 overflow-hidden">
                        <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </Link>
                    <div className="p-3">
                      <Link href={`/bai-viet/${a.slug}`}><h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary">{a.title}</h4></Link>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-1">{a.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* KINH TẾ: Timeline list */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-3">Kinh tế xã hội</h2>
                <Link href="/danh-muc/kinh-te-xa-hoi-tinh-dong-nai" className="text-sm text-accent hover:text-primary flex items-center gap-1">Xem tất cả <FaArrowRight size={10} /></Link>
              </div>
              <div className="space-y-4">
                {kinhTeXaHoi.slice(0, 4).map((a, i) => (
                  <Link key={a.id} href={`/bai-viet/${a.slug}`} className={`group flex gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md ${i === 0 ? 'border-l-4 border-accent' : ''}`}>
                    <div className="relative w-36 h-24 shrink-0 rounded-lg overflow-hidden">
                      <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      {i === 0 && <span className="absolute top-1 left-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">HOT</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary">{a.title}</h4>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-1">{a.excerpt}</p>
                      <span className="text-[11px] text-gray-400 mt-2 flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* DOANH NHÂN: 2-col cards */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-primary border-l-4 border-accent pl-3">Doanh nhân doanh nghiệp</h2>
                <Link href="/danh-muc/doanh-nhan-doanh-nghiep" className="text-sm text-accent hover:text-primary flex items-center gap-1">Xem tất cả <FaArrowRight size={10} /></Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doanhNhan.slice(0, 4).map((a) => (
                  <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
                    <div className="relative w-28 h-20 shrink-0 rounded-lg overflow-hidden"><Image src={a.image} alt={a.title} fill className="object-cover" /></div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-primary">{a.title}</h4>
                      <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-3 flex items-center gap-2"><FaStar size={14} /><span className="font-bold text-sm">Sự kiện nổi bật</span></div>
              <div className="p-3 space-y-3">
                {events.map((ev) => (
                  <Link key={ev.id} href={ev.link} className="group block">
                    <div className="relative h-36 rounded-lg overflow-hidden">
                      <Image src={ev.image} alt={ev.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2"><h4 className="text-white text-xs font-bold line-clamp-2 group-hover:text-accent">{ev.title}</h4></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-accent to-accent-light text-white px-4 py-3 flex items-center gap-2"><FaUsers size={14} /><span className="font-bold text-sm">Hội viên mới</span></div>
              <div className="p-4 space-y-3">
                {newMembers.map((m, i) => (
                  <div key={m.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">{m.name.charAt(0)}</div>
                    <div><span className="text-sm font-semibold text-gray-700">{m.name}</span><div className="text-[10px] text-gray-400">Hội viên #{i + 1}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 flex items-center gap-2"><FaHandshake size={14} /><span className="font-bold text-sm">Kết nối giao thương</span></div>
              <div className="p-3 space-y-2">
                {ketNoiGiaoThuong.slice(0, 5).map((a) => (
                  <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                    <FaChevronRight size={8} className="text-accent mt-1 shrink-0" />
                    <div><h4 className="text-xs font-semibold text-gray-700 line-clamp-2 group-hover:text-primary">{a.title}</h4><span className="text-[10px] text-gray-400">{a.date}</span></div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary via-primary-dark to-navy rounded-xl p-6 text-center text-white shadow-lg">
              <div className="text-xs opacity-70 mb-2">Quảng cáo</div>
              <div className="text-lg font-bold mb-1">Liên hệ đặt banner</div>
              <div className="text-accent text-2xl font-bold mb-3">0902.67.1111</div>
              <div className="inline-block bg-accent hover:bg-accent-light text-white text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer">Liên hệ ngay</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST NEWS: full-width 5-col grid ===== */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary flex items-center gap-2"><span className="w-1.5 h-8 bg-accent rounded-full inline-block" /> Tin tức mới nhất</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {latestArticles.slice(0, 5).map((a) => (
              <div key={a.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <Link href={`/bai-viet/${a.slug}`}><div className="relative h-32 overflow-hidden"><Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /></div></Link>
                <div className="p-2.5">
                  <Link href={`/bai-viet/${a.slug}`}><h4 className="text-xs font-bold text-gray-800 line-clamp-2 group-hover:text-primary">{a.title}</h4></Link>
                  <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1"><FaCalendarAlt size={8} /> {a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
