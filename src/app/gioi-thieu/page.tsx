import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaFileAlt, FaBullseye, FaBook, FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Giới Thiệu - Doanh Nhân Trẻ Đồng Nai',
  description: 'Giới thiệu về Hội Doanh nhân trẻ tỉnh Đồng Nai - Lịch sử hình thành, mục tiêu, nhiệm vụ và điều lệ hoạt động.',
};

const subPages = [
  {
    href: '/gioi-thieu/thu-ngo',
    icon: FaFileAlt,
    title: 'Thư Ngỏ',
    desc: 'Lời chào từ Ban Chấp hành Hội Doanh nhân trẻ tỉnh Đồng Nai',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    href: '/gioi-thieu/muc-tieu-va-nhiem-vu',
    icon: FaBullseye,
    title: 'Mục Tiêu Và Nhiệm Vụ',
    desc: 'Định hướng phát triển và nhiệm vụ trọng tâm của Hội',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    href: '/gioi-thieu/dieu-le',
    icon: FaBook,
    title: 'Điều Lệ Và Quy Chế Hoạt Động',
    desc: 'Các quy định, điều lệ và quy chế hoạt động của Hội',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
];

export default function GioiThieuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Giới Thiệu</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-10 h-48 md:h-64 bg-gradient-to-r from-primary via-primary-light to-navy">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <div className="w-16 h-16 mb-3">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="rgba(255,255,255,0.15)" />
              <circle cx="50" cy="50" r="42" fill="#c41e3a" />
              <path d="M50 12 L55 40 L85 40 L60 55 L70 85 L50 65 L30 85 L40 55 L15 40 L45 40 Z" fill="#FFD700" />
              <circle cx="50" cy="50" r="20" fill="#c41e3a" />
              <text x="50" y="48" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="bold">HỘI DNT</text>
              <text x="50" y="58" textAnchor="middle" fill="#FFD700" fontSize="6">ĐỒNG NAI</text>
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">HỘI DOANH NHÂN TRẺ TỈNH ĐỒNG NAI</h1>
          <p className="text-white/80 text-sm mt-2">Kết nối – Phát triển – Cộng đồng</p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
        <h2 className="text-xl font-bold text-primary mb-4">Về Hội Doanh Nhân Trẻ Đồng Nai</h2>
        <div className="text-gray-600 leading-7 space-y-3">
          <p>
            Hội Doanh nhân trẻ tỉnh Đồng Nai là tổ chức xã hội – nghề nghiệp của các doanh nhân trẻ trên địa bàn tỉnh Đồng Nai,
            hoạt động dưới sự chỉ đạo của Tỉnh Đoàn Đồng Nai và sự hướng dẫn của Hội Doanh nhân trẻ Việt Nam.
          </p>
          <p>
            Hội được thành lập nhằm tập hợp, đoàn kết, hỗ trợ các doanh nhân trẻ phát triển kinh doanh, nâng cao trình độ
            quản lý, xây dựng văn hóa doanh nhân, tạo môi trường giao lưu học hỏi, kết nối hợp tác kinh doanh giữa các hội viên.
          </p>
          <p>
            Hội Doanh nhân trẻ tỉnh Đồng Nai là thành viên của Hội Doanh nhân trẻ Việt Nam và thường xuyên tổ chức
            các chương trình đào tạo, giao lưu, kết nối giao thương, thiện nguyện và các hoạt động cộng đồng.
          </p>
        </div>
      </div>

      {/* Sub-page Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {subPages.map(({ href, icon: Icon, title, desc, color, iconColor }) => (
          <Link
            key={href}
            href={href}
            className={`block border-2 rounded-xl p-6 ${color} hover:shadow-md transition-all group`}
          >
            <Icon className={`text-3xl mb-3 ${iconColor}`} />
            <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
              Xem chi tiết <FaChevronRight size={10} />
            </div>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: '500+', label: 'Hội viên' },
          { num: '15+', label: 'Năm hoạt động' },
          { num: '50+', label: 'Sự kiện/năm' },
          { num: '10+', label: 'Chi hội trực thuộc' },
        ].map(({ num, label }) => (
          <div key={label} className="bg-primary text-white rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-accent">{num}</p>
            <p className="text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
