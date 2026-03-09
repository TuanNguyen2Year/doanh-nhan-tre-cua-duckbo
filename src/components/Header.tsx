'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { menuItems } from '@/data/mockData';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-12 h-12 relative">
                <img src="/image/logo.png" alt="Logo" className="object-cover" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-5 text-[13px] font-semibold text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && <FaChevronDown size={8} />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md min-w-[220px] py-1 z-50 border-t-2 border-primary">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth button */}
          <Link
            href="/dang-nhap"
            className="hidden lg:block border-2 border-primary text-primary px-4 py-1.5 rounded text-sm font-medium hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
          >
            Đăng Ký / Đăng Nhập
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm font-semibold text-gray-700 border-b border-gray-100"
                  onClick={() => {
                    if (!item.children) setMobileOpen(false);
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-600 border-b border-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/dang-nhap"
              className="block mt-3 text-center border-2 border-primary text-primary px-4 py-2 rounded text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Đăng Ký / Đăng Nhập
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
