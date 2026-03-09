import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaChevronRight, FaGraduationCap, FaUsers, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Đào Tạo - Doanh Nhân Trẻ Đồng Nai',
  description: 'Các chương trình đào tạo, hội thảo, tập huấn của Hội Doanh nhân trẻ tỉnh Đồng Nai',
};

const trainingCourses = [
  {
    id: 1,
    title: 'Khóa học Quản trị Doanh nghiệp vừa và nhỏ 2025',
    desc: 'Chương trình đào tạo kỹ năng quản trị doanh nghiệp vừa và nhỏ, bao gồm tài chính, nhân sự, marketing và chiến lược phát triển.',
    image: 'https://picsum.photos/seed/dao-tao-1/600/350',
    date: '15/04/2025',
    time: '08:00 - 17:00',
    location: 'Hội trường Tỉnh Đoàn Đồng Nai',
    slots: 50,
    registered: 38,
    tag: 'Đang mở đăng ký',
    tagColor: 'bg-green-500',
    slug: 'khoa-hoc-quan-tri-doanh-nghiep-2025',
  },
  {
    id: 2,
    title: 'Hội thảo "Khởi nghiệp và đổi mới sáng tạo trong kỷ nguyên số"',
    desc: 'Hội thảo chia sẻ kinh nghiệm khởi nghiệp, đổi mới sáng tạo và ứng dụng công nghệ số trong hoạt động kinh doanh.',
    image: 'https://picsum.photos/seed/dao-tao-2/600/350',
    date: '22/05/2025',
    time: '08:30 - 12:00',
    location: 'Khách sạn Đồng Nai - TP. Biên Hòa',
    slots: 200,
    registered: 156,
    tag: 'Sắp diễn ra',
    tagColor: 'bg-blue-500',
    slug: 'hoi-thao-khoi-nghiep-doi-moi-sang-tao-2025',
  },
  {
    id: 3,
    title: 'Workshop Kỹ năng thương lượng và đàm phán hợp đồng',
    desc: 'Workshop thực hành kỹ năng thương lượng, đàm phán trong kinh doanh và ký kết hợp đồng thương mại quốc tế.',
    image: 'https://picsum.photos/seed/dao-tao-3/600/350',
    date: '10/06/2025',
    time: '13:00 - 17:30',
    location: 'Phòng hội thảo tầng 5 - Tỉnh Đoàn Đồng Nai',
    slots: 40,
    registered: 40,
    tag: 'Đã đủ chỗ',
    tagColor: 'bg-red-500',
    slug: 'workshop-ky-nang-thuong-luong-dam-phan',
  },
  {
    id: 4,
    title: 'Chương trình cà phê doanh nhân lần thứ 5',
    desc: 'Giao lưu, kết nối và chia sẻ kinh nghiệm giữa các doanh nhân thành đạt cùng thế hệ doanh nhân trẻ Đồng Nai.',
    image: 'https://picsum.photos/seed/dao-tao-4/600/350',
    date: '05/07/2025',
    time: '07:00 - 09:30',
    location: 'Nhà hàng River Side - TP. Biên Hòa',
    slots: 100,
    registered: 72,
    tag: 'Đang mở đăng ký',
    tagColor: 'bg-green-500',
    slug: 'ca-phe-doanh-nhan-lan-5',
  },
  {
    id: 5,
    title: 'Khóa đào tạo chuyển đổi số cho doanh nghiệp SMEs',
    desc: 'Chương trình đào tạo hỗ trợ doanh nghiệp vừa và nhỏ chuyển đổi số, ứng dụng công nghệ vào quản lý và kinh doanh.',
    image: 'https://picsum.photos/seed/dao-tao-5/600/350',
    date: '20/08/2025',
    time: '08:00 - 17:00',
    location: 'Trung tâm Đào tạo Đại học Lạc Hồng',
    slots: 60,
    registered: 25,
    tag: 'Đang mở đăng ký',
    tagColor: 'bg-green-500',
    slug: 'khoa-dao-tao-chuyen-doi-so-smes',
  },
  {
    id: 6,
    title: 'Tập huấn kỹ năng lãnh đạo và xây dựng văn hóa doanh nghiệp',
    desc: 'Chương trình tập huấn nâng cao kỹ năng lãnh đạo, quản lý đội nhóm và xây dựng văn hóa doanh nghiệp bền vững.',
    image: 'https://picsum.photos/seed/dao-tao-6/600/350',
    date: '10/09/2025',
    time: '08:00 - 17:00',
    location: 'Hội trường Tỉnh Đoàn Đồng Nai',
    slots: 80,
    registered: 0,
    tag: 'Sắp mở đăng ký',
    tagColor: 'bg-gray-400',
    slug: 'tap-huan-ky-nang-lanh-dao-van-hoa-doanh-nghiep',
  },
];

const stats = [
  { icon: FaGraduationCap, num: '50+', label: 'Khóa đào tạo tổ chức' },
  { icon: FaUsers, num: '3,000+', label: 'Lượt học viên tham gia' },
  { icon: FaStar, num: '95%', label: 'Học viên hài lòng' },
];

export default function DaoTaoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Đào Tạo</span>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl p-8 mb-8 text-white">
        <div className="max-w-2xl">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-2">Hội Doanh nhân trẻ Đồng Nai</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">CHƯƠNG TRÌNH ĐÀO TẠO</h1>
          <p className="text-white/80 leading-relaxed">
            Các chương trình đào tạo, hội thảo, workshop được thiết kế phù hợp với nhu cầu của doanh nhân trẻ,
            giúp nâng cao năng lực quản trị và phát triển doanh nghiệp.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map(({ icon: Icon, num, label }) => (
          <div key={label} className="bg-white rounded-xl shadow-sm p-5 text-center">
            <Icon className="text-primary text-2xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{num}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 left-3 ${course.tagColor} text-white text-xs px-2.5 py-1 rounded-full font-medium`}>
                {course.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="font-bold text-gray-800 text-sm leading-snug mb-3 line-clamp-2 hover:text-primary transition-colors">
                <Link href={`/bai-viet/${course.slug}`}>{course.title}</Link>
              </h2>
              <p className="text-xs text-gray-500 line-clamp-2 mb-4">{course.desc}</p>

              {/* Meta */}
              <div className="space-y-1.5 text-xs text-gray-500 border-t border-gray-100 pt-3">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-primary shrink-0" />
                  <span>{course.date}</span>
                  <FaClock className="text-primary shrink-0 ml-2" />
                  <span>{course.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary shrink-0" />
                  <span className="line-clamp-1">{course.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary shrink-0" />
                  <span>{course.registered}/{course.slots} học viên</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full ml-1">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${Math.min((course.registered / course.slots) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/bai-viet/${course.slug}`}
                className={`mt-4 w-full block text-center py-2 rounded-lg text-sm font-semibold transition-colors ${
                  course.registered >= course.slots
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {course.registered >= course.slots ? 'Đã đủ chỗ' : 'Đăng ký tham gia'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
