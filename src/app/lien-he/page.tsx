'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaYoutube, FaTwitter, FaChevronRight, FaPaperPlane } from 'react-icons/fa';

export default function LienHePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Liên Hệ</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">LIÊN HỆ</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left - Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-white font-bold text-lg">HỘI DOANH NHÂN TRẺ ĐỒNG NAI</h2>
              <p className="text-white/70 text-sm mt-1">THÔNG TIN LIÊN HỆ</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Trụ sở</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Tỉnh Đoàn Đồng Nai 33 Đ. Võ Thị Sáu, Quyết Thắng, Thành phố Biên Hòa, Đồng Nai
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Điện thoại</p>
                  <p className="text-gray-700 text-sm">0902.67.1111 - 0898.798.368</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:dntdongnai@gmail.com" className="text-primary text-sm hover:underline">
                    dntdongnai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-4">MẠNG XÃ HỘI</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com/doanhnhantredongnai" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                <FaFacebookF /> Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                <FaYoutube /> YouTube
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3456!2d106.8237!3d10.9571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z10u!5e0!3m2!1svi!2s!4v1234567890"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Bản đồ Hội Doanh nhân trẻ Đồng Nai"
            />
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="font-bold text-xl text-gray-800 mb-6 pb-4 border-b border-gray-200">FORM LIÊN HỆ</h2>

            {sent && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2">
                <FaPaperPlane /> Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Nhập họ và tên"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Số điện thoại</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0900 000 000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tiêu đề <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    placeholder="Tiêu đề liên hệ"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nội dung <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Nhập nội dung liên hệ..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors"
              >
                <FaPaperPlane size={14} /> Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
