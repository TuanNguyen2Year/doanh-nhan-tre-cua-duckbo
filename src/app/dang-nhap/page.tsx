'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function DangNhapPage() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-md">
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
          <h1 className="text-2xl font-bold text-gray-900">Đăng Nhập</h1>
          <p className="text-gray-500 text-sm mt-1">Hội Doanh nhân trẻ tỉnh Đồng Nai</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="Nhập email của bạn"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type={show ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  placeholder="Nhập mật khẩu"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {show ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600">Ghi nhớ đăng nhập</span>
              </label>
              <Link href="/quen-mat-khau" className="text-sm text-primary hover:underline">
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
            >
              Đăng Nhập
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs text-gray-400">
              <span className="bg-white px-3">hoặc đăng nhập bằng</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FaFacebookF className="text-blue-600" /> Facebook
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <FaGoogle className="text-red-500" /> Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Chưa có tài khoản?{' '}
            <Link href="/dang-ky" className="text-primary font-semibold hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
