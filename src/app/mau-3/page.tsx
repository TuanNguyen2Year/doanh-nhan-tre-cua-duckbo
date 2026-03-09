'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaArrowRight, FaBuilding, FaGraduationCap, FaHandshake, FaNewspaper, FaUsers, FaBullhorn, FaChevronRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { articles, categories, newMembers, events, getArticlesByCategory, getFeaturedArticles, getLatestArticles } from '@/data/mockData';

const categoryTabs = [
  { slug: 'tin-tuc-hoi', label: 'Tin tức hội', icon: FaBullhorn },
  { slug: 'tin-hoi-vien', label: 'Tin hội viên', icon: FaUsers },
  { slug: 'kinh-te-xa-hoi-tinh-dong-nai', label: 'Kinh tế xã hội', icon: FaBuilding },
  { slug: 'doanh-nhan-doanh-nghiep', label: 'Doanh nhân', icon: FaNewspaper },
  { slug: 'ket-noi-giao-thuong', label: 'Giao thương', icon: FaHandshake },
];

export default function HomePageV3() {
  const [activeTab, setActiveTab] = useState('tin-tuc-hoi');
  const featuredArticles = getFeaturedArticles(4);
  const latestArticles = getLatestArticles(12);
  const tabArticles = getArticlesByCategory(activeTab);

  return (
    <div>
      {/* ===== SECTION 1: HERO BANNER - Full-width single featured + 3 small ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Single big feature */}
            {featuredArticles[0] && (
              <Link href={`/bai-viet/${featuredArticles[0].slug}`} className="group block relative h-[380px] rounded-2xl overflow-hidden">
                <Image src={featuredArticles[0].image} alt={featuredArticles[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">TIN NỔI BẬT</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{featuredArticles[0].category.name}</span>
                  <h2 className="text-white text-2xl font-bold leading-tight mt-1 group-hover:text-accent transition-colors">{featuredArticles[0].title}</h2>
                  <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredArticles[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-white/50 text-xs mt-3">
                    <FaCalendarAlt size={10} /> {featuredArticles[0].date} • {featuredArticles[0].author}
                  </div>
                </div>
              </Link>
            )}

            {/* 3 stacked cards */}
            <div className="space-y-4">
              {featuredArticles.slice(1, 4).map((a, i) => (
                <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors">
                  <div className="relative w-32 h-24 shrink-0 rounded-lg overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-1 left-1 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {i + 2}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <span className="text-[10px] text-accent font-semibold uppercase">{a.category.name}</span>
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors mt-0.5">{a.title}</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-[11px] mt-1.5">
                      <FaCalendarAlt size={9} /> {a.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: QUICK LINKS ICONS ===== */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: FaBullhorn, label: 'Tin tức hội', href: '/danh-muc/tin-tuc-hoi' },
              { icon: FaUsers, label: 'Hội viên', href: '/danh-muc/tin-hoi-vien' },
              { icon: FaBuilding, label: 'Kinh tế', href: '/danh-muc/kinh-te-xa-hoi-tinh-dong-nai' },
              { icon: FaNewspaper, label: 'Doanh nhân', href: '/danh-muc/doanh-nhan-doanh-nghiep' },
              { icon: FaGraduationCap, label: 'Đào tạo', href: '/dao-tao' },
              { icon: FaHandshake, label: 'Giao thương', href: '/danh-muc/ket-noi-giao-thuong' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group flex flex-col items-center gap-2 py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <item.icon className="text-white" size={20} />
                </div>
                <span className="text-white text-xs font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: TAB-BASED CATEGORY BROWSER ===== */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">Tin tức theo chuyên mục</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categoryTabs.map((tab) => (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.slug
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content: 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tabArticles.slice(0, 8).map((a) => (
              <div key={a.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <Link href={`/bai-viet/${a.slug}`}>
                  <div className="relative h-44 overflow-hidden">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{a.category.name}</span>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/bai-viet/${a.slug}`}>
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug">{a.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-2">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <span className="text-[11px] text-gray-400 flex items-center gap-1"><FaCalendarAlt size={9} /> {a.date}</span>
                    <Link href={`/bai-viet/${a.slug}`} className="text-[11px] text-accent font-semibold hover:text-primary flex items-center gap-1">
                      Đọc tiếp <FaArrowRight size={8} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`/danh-muc/${activeTab}`} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">
              Xem tất cả bài viết <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: BANNER NGANG ===== */}
      <section className="bg-gradient-to-r from-accent to-accent-light py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">Tham gia Hội Doanh Nhân Trẻ Đồng Nai</h3>
              <p className="text-white/80 mt-1">Kết nối, chia sẻ và cùng phát triển với cộng đồng doanh nhân trẻ</p>
            </div>
            <div className="flex gap-3">
              <Link href="/dang-ky" className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                Đăng ký hội viên
              </Link>
              <Link href="/lien-he" className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: 3-COL EQUAL GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SỰ KIỆN */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-primary">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"><FaCalendarAlt className="text-white" size={14} /></div>
              <h3 className="font-bold text-lg text-primary">Sự kiện</h3>
            </div>
            <div className="space-y-4">
              {events.map((ev) => (
                <Link key={ev.id} href={ev.link} className="group block">
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image src={ev.image} alt={ev.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-white text-sm font-bold line-clamp-2 group-hover:text-accent transition-colors">{ev.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* HỘI VIÊN MỚI */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-accent">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"><FaUsers className="text-white" size={14} /></div>
              <h3 className="font-bold text-lg text-primary">Hội viên mới</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
              {newMembers.map((m, i) => (
                <div key={m.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{m.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">Hội viên mới • Thành viên #{i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LIÊN HỆ NHANH */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-green-600">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center"><FaPhone className="text-white" size={14} /></div>
              <h3 className="font-bold text-lg text-primary">Liên hệ nhanh</h3>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <p className="text-sm">Tỉnh Đoàn Đồng Nai, 33 Đ. Võ Thị Sáu, Quyết Thắng, TP. Biên Hòa, Đồng Nai</p>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaPhone className="text-accent shrink-0" />
                <div>
                  <p className="text-sm font-bold">0902.67.1111</p>
                  <p className="text-xs text-white/60">Hotline hỗ trợ</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Link href="/lien-he" className="block text-center bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Gửi liên hệ
                </Link>
                <Link href="/dang-ky" className="block text-center border-2 border-white/30 hover:border-white text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Đăng ký hội viên
                </Link>
              </div>
            </div>

            {/* Ad */}
            <div className="mt-4 bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Quảng cáo</p>
              <p className="text-sm font-bold text-primary">Liên hệ đặt banner</p>
              <p className="text-lg font-bold text-accent">0902.67.1111</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: LATEST NEWS HORIZONTAL SCROLL ===== */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary">📰 Bài viết mới nhất</h2>
            <Link href="/danh-muc/tin-tuc-hoi" className="text-sm text-accent hover:text-primary flex items-center gap-1">Xem tất cả <FaArrowRight size={10} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {latestArticles.slice(0, 6).map((a) => (
              <Link key={a.id} href={`/bai-viet/${a.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="relative h-28 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-2.5">
                  <h4 className="text-[11px] font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug">{a.title}</h4>
                  <span className="text-[10px] text-gray-400 mt-1 flex items-center gap-1"><FaCalendarAlt size={7} /> {a.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
