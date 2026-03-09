import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="w-16 h-16 mb-4">
              <div className="w-20 h-20 relative">
                <img src="/image/logo.png" alt="Logo" className="object-cover" />
            </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
                <span><strong>Trụ sở:</strong> Tỉnh Đoàn Đồng Nai 33 Đ. Võ Thị Sáu, Quyết Thắng, Thành phố Biên Hòa, Đồng Nai</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="shrink-0 text-accent" />
                <span><strong>Điện thoại:</strong> 0902.67.1111 - 0898.798.368</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="shrink-0 text-accent" />
                <span><strong>Email:</strong> dntdongnai@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-accent">LIÊN KẾT NHANH</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Trang chủ</Link></li>
              <li><Link href="/gioi-thieu" className="hover:text-accent transition-colors">Giới Thiệu</Link></li>
              <li><Link href="/lien-he" className="hover:text-accent transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Members */}
          <div>
            <h3 className="font-bold text-base mb-4 text-accent">THÀNH VIÊN</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gioi-thieu/thu-ngo" className="hover:text-accent transition-colors">Thư Ngỏ</Link></li>
              <li><Link href="/gioi-thieu/muc-tieu-va-nhiem-vu" className="hover:text-accent transition-colors">Mục Tiêu Và Nhiệm Vụ</Link></li>
              <li><Link href="/gioi-thieu/dieu-le" className="hover:text-accent transition-colors">Điều Lệ Và Quy Chế Hoạt Động</Link></li>
              <li><Link href="/danh-muc/tin-tuc-hoi" className="hover:text-accent transition-colors">Tin tức hội</Link></li>
              <li><Link href="/danh-muc/tin-hoi-vien" className="hover:text-accent transition-colors">Tin hội viên</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-base mb-4 text-accent">THEO DÕI</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="Youtube"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4 text-center text-sm">
        <p>Copyright 2023 © <strong>Doanh Nhân Trẻ Đồng Nai</strong></p>
        <p className="text-white/70 text-xs mt-1">Design by <strong>Khoa Công nghệ thông tin - Đại học Lạc Hồng</strong></p>
      </div>
    </footer>
  );
}
