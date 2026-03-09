import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronRight, FaBullseye, FaHandshake, FaChartLine, FaHeart, FaGraduationCap, FaNetworkWired } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Mục Tiêu Và Nhiệm Vụ - Doanh Nhân Trẻ Đồng Nai',
  description: 'Mục tiêu và nhiệm vụ của Hội Doanh nhân trẻ tỉnh Đồng Nai',
};

const goals = [
  {
    icon: FaBullseye,
    title: 'Tập hợp và đoàn kết',
    desc: 'Tập hợp, đoàn kết doanh nhân trẻ trên địa bàn tỉnh Đồng Nai, tạo sức mạnh tập thể trong phát triển kinh tế.',
    color: 'text-red-500',
  },
  {
    icon: FaChartLine,
    title: 'Phát triển kinh tế',
    desc: 'Hỗ trợ doanh nhân trẻ nâng cao năng lực quản trị, mở rộng sản xuất kinh doanh, phát triển bền vững.',
    color: 'text-green-500',
  },
  {
    icon: FaGraduationCap,
    title: 'Đào tạo và nâng cao',
    desc: 'Tổ chức các chương trình đào tạo, hội thảo, tập huấn giúp doanh nhân trẻ nâng cao trình độ, kỹ năng.',
    color: 'text-blue-500',
  },
  {
    icon: FaNetworkWired,
    title: 'Kết nối giao thương',
    desc: 'Tạo cầu nối giữa các doanh nhân, doanh nghiệp trong và ngoài tỉnh, thúc đẩy hợp tác kinh doanh.',
    color: 'text-purple-500',
  },
  {
    icon: FaHandshake,
    title: 'Bảo vệ quyền lợi',
    desc: 'Bảo vệ quyền và lợi ích hợp pháp của hội viên, phản ánh kiến nghị lên cơ quan có thẩm quyền.',
    color: 'text-amber-500',
  },
  {
    icon: FaHeart,
    title: 'Trách nhiệm xã hội',
    desc: 'Vận động hội viên tham gia các hoạt động từ thiện, hỗ trợ cộng đồng, thực hiện trách nhiệm xã hội.',
    color: 'text-pink-500',
  },
];

const tasks = [
  'Phát triển số lượng và chất lượng hội viên, xây dựng tổ chức Hội ngày càng lớn mạnh.',
  'Tổ chức các hoạt động đào tạo, bồi dưỡng nâng cao năng lực cho doanh nhân trẻ.',
  'Tổ chức các diễn đàn, hội thảo kết nối giao thương trong và ngoài tỉnh.',
  'Hỗ trợ doanh nhân trẻ khởi nghiệp, tiếp cận vốn và các nguồn lực cần thiết.',
  'Phối hợp với các cơ quan nhà nước, tổ chức trong và ngoài nước để thực hiện các hoạt động hỗ trợ doanh nghiệp.',
  'Tổ chức các hoạt động văn hóa, thể thao, từ thiện tạo gắn kết cộng đồng doanh nhân.',
  'Tuyên truyền, phổ biến chính sách pháp luật liên quan đến hoạt động kinh doanh cho hội viên.',
  'Đại diện, bảo vệ quyền và lợi ích hợp pháp của hội viên theo quy định của pháp luật.',
];

export default function MucTieuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <Link href="/gioi-thieu" className="hover:text-primary">Giới Thiệu</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Mục Tiêu Và Nhiệm Vụ</span>
      </div>

      {/* Header */}
      <div className="bg-primary text-white rounded-xl p-8 mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">MỤC TIÊU VÀ NHIỆM VỤ</h1>
        <p className="text-white/80">Hội Doanh nhân trẻ tỉnh Đồng Nai</p>
      </div>

      {/* Goals Grid */}
      <h2 className="text-xl font-bold text-gray-800 mb-5">🎯 Mục Tiêu Hoạt Động</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {goals.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
            <Icon className={`text-3xl mb-3 ${color}`} />
            <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Tasks */}
      <h2 className="text-xl font-bold text-gray-800 mb-5">📋 Nhiệm Vụ Trọng Tâm</h2>
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <ul className="space-y-4">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-600 leading-relaxed">{task}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
