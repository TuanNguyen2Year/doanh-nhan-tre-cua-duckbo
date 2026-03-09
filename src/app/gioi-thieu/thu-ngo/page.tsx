import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Thư Ngỏ - Doanh Nhân Trẻ Đồng Nai',
  description: 'Thư ngỏ của Ban Chấp hành Hội Doanh nhân trẻ tỉnh Đồng Nai',
};

export default function ThuNgoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <Link href="/gioi-thieu" className="hover:text-primary">Giới Thiệu</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Thư Ngỏ</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">THƯ NGỎ</h1>
        <p className="text-center text-gray-500 mb-8 text-sm">Hội Doanh nhân trẻ tỉnh Đồng Nai</p>

        <div className="prose max-w-none text-gray-700 leading-8 space-y-4">
          <p>Kính gửi quý doanh nhân, doanh nghiệp và bạn bè trên toàn quốc,</p>

          <p>
            Hội Doanh nhân trẻ tỉnh Đồng Nai được thành lập và phát triển qua nhiều thế hệ doanh nhân trẻ tâm huyết,
            năng động và sáng tạo. Với mục tiêu tập hợp, đoàn kết và hỗ trợ lẫn nhau trong công cuộc phát triển kinh tế,
            chúng tôi luôn nỗ lực xây dựng một tổ chức vững mạnh, góp phần vào sự phát triển chung của tỉnh Đồng Nai
            và cả nước.
          </p>

          <p>
            Trong suốt hành trình hoạt động, Hội đã không ngừng phát triển về số lượng hội viên, tổ chức nhiều
            chương trình ý nghĩa như: đào tạo kỹ năng quản trị doanh nghiệp, kết nối giao thương, hỗ trợ khởi nghiệp,
            hoạt động từ thiện và các sự kiện văn hóa – thể thao mang tính cộng đồng sâu sắc.
          </p>

          <p>
            Chúng tôi trân trọng từng sự đóng góp của quý hội viên và những người đồng hành cùng Hội. Mỗi doanh nhân
            trẻ là một mắt xích quan trọng trong chuỗi giá trị mà chúng tôi cùng nhau tạo dựng.
          </p>

          <p>
            Hội Doanh nhân trẻ tỉnh Đồng Nai luôn mở rộng vòng tay chào đón các doanh nhân, doanh nghiệp và
            những ai muốn đồng hành cùng chúng tôi trên con đường phát triển bền vững, xây dựng cộng đồng doanh nhân
            trẻ Đồng Nai ngày càng lớn mạnh.
          </p>

          <p>Trân trọng!</p>
          <div className="text-right mt-8">
            <p className="font-bold text-gray-800">TM. BAN CHẤP HÀNH</p>
            <p className="text-gray-600">Chủ tịch Hội Doanh nhân trẻ tỉnh Đồng Nai</p>
            <p className="mt-6 font-bold text-primary text-lg">Đặng Quốc Nghị</p>
          </div>
        </div>
      </div>
    </div>
  );
}
