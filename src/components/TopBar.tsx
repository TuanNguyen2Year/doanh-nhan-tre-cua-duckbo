'use client';

import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function TopBar() {
  const now = new Date();
  const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  const dayName = days[now.getDay()];
  const dateStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} - ${dayName}, ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

  return (
    <div className="bg-primary text-white text-xs py-1.5">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <span>{dateStr}</span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Theo dõi trên:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
            <FaFacebookF size={14} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Youtube">
            <FaYoutube size={14} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
