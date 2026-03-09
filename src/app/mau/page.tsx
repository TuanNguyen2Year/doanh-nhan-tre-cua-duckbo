import { Metadata } from 'next';
import Link from 'next/link';
import { FaEye, FaPalette, FaNewspaper, FaThLarge, FaAlignLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Chọn Mẫu Giao Diện - Doanh Nhân Trẻ Đồng Nai',
  description: 'Xem và chọn mẫu giao diện cho trang web Doanh Nhân Trẻ Đồng Nai.',
};

const templates = [
  {
    id: 1,
    name: 'Mẫu 1 — Truyền Thống',
    description: 'Giao diện báo chí truyền thống với sidebar phải, hero slider nhỏ, và bố cục 4 cột. Phù hợp cho trang tin tức chính thống.',
    href: '/',
    icon: FaNewspaper,
    color: 'from-blue-600 to-blue-800',
    features: ['Hero slider + Event sidebar', 'Bố cục 4 cột', 'Section header dạng bar', 'Sidebar hội viên mới'],
    preview: 'https://picsum.photos/seed/mau1/600/400',
  },
  {
    id: 2,
    name: 'Mẫu 2 — Magazine Hiện Đại',
    description: 'Layout magazine full-width, hero lớn toàn trang, breaking news ticker, thống kê nổi bật. Thiết kế trẻ trung, năng động.',
    href: '/mau-2',
    icon: FaPalette,
    color: 'from-purple-600 to-indigo-800',
    features: ['Full-width hero banner', 'Breaking news ticker', 'Stats bar nổi bật', 'Card grid hiện đại'],
    preview: 'https://picsum.photos/seed/mau2/600/400',
  },
  {
    id: 3,
    name: 'Mẫu 3 — Portal Dashboard',
    description: 'Dạng cổng thông tin với grid cards đều nhau, tab chuyển danh mục, banner ngang, và layout dạng bảng điều khiển.',
    href: '/mau-3',
    icon: FaThLarge,
    color: 'from-emerald-600 to-teal-800',
    features: ['Tab chuyển danh mục', 'Grid cards đều nhau', 'Banner ngang full-width', 'Quick links dạng icon'],
    preview: 'https://picsum.photos/seed/mau3/600/400',
  },
  {
    id: 4,
    name: 'Mẫu 4 — Blog Tối Giản',
    description: 'Layout single-column tối giản, tập trung nội dung, typography đẹp, whitespace nhiều. Sang trọng và dễ đọc.',
    href: '/mau-4',
    icon: FaAlignLeft,
    color: 'from-amber-600 to-orange-800',
    features: ['Single column layout', 'Typography lớn, dễ đọc', 'Featured article nổi bật', 'Tối giản, whitespace nhiều'],
    preview: 'https://picsum.photos/seed/mau4/600/400',
  },
];

export default function TemplateGalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6">
            <FaPalette size={14} />
            <span>Thư viện giao diện</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Chọn Mẫu Giao Diện</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Xem trước và lựa chọn mẫu thiết kế phù hợp nhất cho trang web Hội Doanh Nhân Trẻ Đồng Nai.
            Mỗi mẫu có bố cục và phong cách hoàn toàn khác nhau.
          </p>
        </div>
      </div>

      {/* Template Grid */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <div key={template.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Preview Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${template.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold">{template.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{template.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Đặc điểm</h4>
                    <ul className="space-y-1.5">
                      {template.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={template.href}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                  >
                    <FaEye size={14} />
                    Xem mẫu này
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>💡 Truy cập trực tiếp: <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">/mau-2</code>, <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">/mau-3</code>, <code className="bg-gray-200 px-2 py-0.5 rounded text-xs">/mau-4</code></p>
        </div>
      </div>
    </div>
  );
}
