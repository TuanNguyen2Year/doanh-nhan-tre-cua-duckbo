'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';

export default function DangKyPage() {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', company: '',
    position: '', password: '', confirmPassword: '', agree: false,
  });

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-10 px-4">
        <div className="text-center max-w-md">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Đăng ký thành công!</h2>
          <p className="text-gray-500 mb-6">
            Cảm ơn bạn đã đăng ký thành viên Hội Doanh nhân trẻ Đồng Nai.
            Chúng tôi sẽ xem xét và phản hồi qua email trong vòng 1-3 ngày làm việc.
          </p>
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto mb-3">
              <circle cx="50" cy="50" r="48" fill="#1e3a6e" />
              <circle cx="50" cy="50" r="42" fill="#c41e3a" />
              <path d="M50 12 L55 40 L85 40 L60 55 L70 85 L50 65 L30 85 L40 55 L15 40 L45 40 Z" fill="#FFD700" />
              <circle cx="50" cy="50" r="20" fill="#c41e3a" />
              <text x="50" y="48" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="bold">HỘI DNT</text>
              <text x="50" y="58" textAnchor="middle" fill="#FFD700" fontSize="6">ĐỒNG NAI</text>
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Đăng Ký Thành Viên</h1>
          <p className="text-gray-500 text-sm mt-1">Hội Doanh nhân trẻ tỉnh Đồng Nai</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text" required value={form.fullName}
                    onChange={(e) => set('fullName', e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="email@example.com"
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="tel" required value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="0900 000 000"
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tên doanh nghiệp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text" required value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Công ty TNHH..."
                    className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Chức vụ</label>
              <select
                value={form.position}
                onChange={(e) => set('position', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              >
                <option value="">-- Chọn chức vụ --</option>
                <option value="owner">Chủ doanh nghiệp / Giám đốc</option>
                <option value="ceo">CEO / Tổng giám đốc</option>
                <option value="deputy">Phó Giám đốc</option>
                <option value="manager">Quản lý / Trưởng phòng</option>
                <option value="other">Khác</option>
              </select>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type={showPw ? 'text' : 'password'} required value={form.password}
                    onChange={(e) => set('password', e.target.value)}
                    placeholder="Tối thiểu 8 ký tự"
                    minLength={8}
                    className="w-full pl-9 pr-9 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPw ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Xác nhận mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type={showPw2 ? 'text' : 'password'} required value={form.confirmPassword}
                    onChange={(e) => set('confirmPassword', e.target.value)}
                    placeholder="Nhập lại mật khẩu"
                    className="w-full pl-9 pr-9 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                  <button type="button" onClick={() => setShowPw2(!showPw2)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPw2 ? <FaEyeSlash size={12} /> : <FaEye size={12} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox" required checked={form.agree}
                onChange={(e) => set('agree', e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary mt-0.5"
              />
              <span className="text-sm text-gray-600">
                Tôi đồng ý với{' '}
                <Link href="/gioi-thieu/dieu-le" className="text-primary hover:underline">
                  Điều lệ và Quy chế hoạt động
                </Link>{' '}
                của Hội Doanh nhân trẻ Đồng Nai
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
            >
              Đăng Ký Thành Viên
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-5">
            Đã có tài khoản?{' '}
            <Link href="/dang-nhap" className="text-primary font-semibold hover:underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
