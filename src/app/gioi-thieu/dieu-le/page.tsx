import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Điều Lệ Và Quy Chế Hoạt Động - Doanh Nhân Trẻ Đồng Nai',
  description: 'Điều lệ và quy chế hoạt động của Hội Doanh nhân trẻ tỉnh Đồng Nai',
};

const chapters = [
  {
    title: 'Chương I: Tên gọi, tính chất, tôn chỉ mục đích',
    articles: [
      {
        num: 'Điều 1',
        title: 'Tên gọi',
        content: 'Hội có tên gọi đầy đủ là: HỘI DOANH NHÂN TRẺ TỈNH ĐỒNG NAI. Tên viết tắt: DNT ĐỒNG NAI. Tên tiếng Anh: DONG NAI YOUNG ENTREPRENEURS ASSOCIATION.',
      },
      {
        num: 'Điều 2',
        title: 'Tính chất',
        content: 'Hội Doanh nhân trẻ tỉnh Đồng Nai là tổ chức xã hội – nghề nghiệp tự nguyện của các doanh nhân trẻ trên địa bàn tỉnh Đồng Nai, hoạt động theo nguyên tắc tự nguyện, tự quản, tự trang trải về tài chính và chịu trách nhiệm trước pháp luật.',
      },
      {
        num: 'Điều 3',
        title: 'Tôn chỉ, mục đích',
        content: 'Hội hoạt động nhằm: tập hợp, đoàn kết, hỗ trợ lẫn nhau trong sản xuất, kinh doanh; nâng cao năng lực quản trị doanh nghiệp; xây dựng văn hoá kinh doanh; góp phần phát triển kinh tế – xã hội tỉnh Đồng Nai và cả nước.',
      },
    ],
  },
  {
    title: 'Chương II: Hội viên',
    articles: [
      {
        num: 'Điều 4',
        title: 'Điều kiện hội viên',
        content: 'Hội viên chính thức là công dân Việt Nam từ 18 đến 40 tuổi, đang là chủ doanh nghiệp hoặc người quản lý doanh nghiệp trên địa bàn tỉnh Đồng Nai, tán thành Điều lệ Hội và tự nguyện xin gia nhập.',
      },
      {
        num: 'Điều 5',
        title: 'Quyền của hội viên',
        content: 'Hội viên có quyền: tham gia các hoạt động của Hội; bầu cử và ứng cử vào các cơ quan lãnh đạo của Hội; đề xuất ý kiến với Ban Chấp hành; được Hội bảo vệ quyền lợi hợp pháp; được cung cấp thông tin liên quan đến hoạt động của Hội.',
      },
      {
        num: 'Điều 6',
        title: 'Nghĩa vụ của hội viên',
        content: 'Hội viên có nghĩa vụ: chấp hành Điều lệ và các nghị quyết của Hội; tích cực tham gia các hoạt động của Hội; đóng hội phí đầy đủ và đúng hạn; tuyên truyền phát triển hội viên mới.',
      },
    ],
  },
  {
    title: 'Chương III: Tổ chức và hoạt động',
    articles: [
      {
        num: 'Điều 7',
        title: 'Cơ cấu tổ chức',
        content: 'Cơ quan cao nhất của Hội là Đại hội đại biểu toàn tỉnh, được tổ chức 5 năm một lần. Giữa hai kỳ Đại hội, Ban Chấp hành là cơ quan lãnh đạo cao nhất.',
      },
      {
        num: 'Điều 8',
        title: 'Ban Chấp hành',
        content: 'Ban Chấp hành Hội do Đại hội bầu ra, số lượng ủy viên do Đại hội quyết định. Ban Chấp hành bầu Ban Thường vụ, Chủ tịch, các Phó Chủ tịch và Ban Kiểm tra.',
      },
    ],
  },
  {
    title: 'Chương IV: Tài chính',
    articles: [
      {
        num: 'Điều 9',
        title: 'Nguồn thu',
        content: 'Tài chính của Hội được hình thành từ: hội phí của hội viên; các khoản đóng góp tự nguyện; tài trợ từ các tổ chức, cá nhân trong và ngoài nước theo quy định của pháp luật.',
      },
      {
        num: 'Điều 10',
        title: 'Quản lý tài chính',
        content: 'Tài chính của Hội được quản lý, sử dụng theo đúng quy định của pháp luật, công khai minh bạch và phục vụ cho các hoạt động của Hội.',
      },
    ],
  },
];

export default function DieuLePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">Trang Chủ</Link>
        <FaChevronRight size={10} />
        <Link href="/gioi-thieu" className="hover:text-primary">Giới Thiệu</Link>
        <FaChevronRight size={10} />
        <span className="text-gray-800 font-medium">Điều Lệ Và Quy Chế Hoạt Động</span>
      </div>

      <div className="bg-primary text-white rounded-xl p-8 mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">ĐIỀU LỆ VÀ QUY CHẾ HOẠT ĐỘNG</h1>
        <p className="text-white/80 text-sm">Hội Doanh nhân trẻ tỉnh Đồng Nai (Ban hành theo Nghị quyết Đại hội lần thứ VII)</p>
      </div>

      <div className="space-y-6">
        {chapters.map((chapter) => (
          <div key={chapter.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-primary/10 border-l-4 border-primary px-6 py-3">
              <h2 className="font-bold text-primary">{chapter.title}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {chapter.articles.map((article) => (
                <div key={article.num} className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded mt-0.5">
                      {article.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{article.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{article.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
