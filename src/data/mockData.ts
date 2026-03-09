import { Category, Article, Member, Event, MenuItem } from '@/types';

export const categories: Category[] = [
  { id: 1, name: 'Tin tức hội', slug: 'tin-tuc-hoi', description: 'Tin tức hoạt động của Hội Doanh nhân trẻ Đồng Nai' },
  { id: 2, name: 'Tin hội viên', slug: 'tin-hoi-vien', description: 'Tin tức về các hội viên' },
  { id: 3, name: 'Kinh tế xã hội tỉnh Đồng Nai', slug: 'kinh-te-xa-hoi-tinh-dong-nai', description: 'Tin tức kinh tế xã hội tỉnh Đồng Nai' },
  { id: 4, name: 'Doanh nhân doanh nghiệp', slug: 'doanh-nhan-doanh-nghiep', description: 'Tin tức về doanh nhân và doanh nghiệp' },
  { id: 5, name: 'Kết nối giao thương', slug: 'ket-noi-giao-thuong', description: 'Kết nối giao thương, hợp tác kinh doanh' },
  { id: 6, name: 'Đào tạo', slug: 'dao-tao', description: 'Chương trình đào tạo, hội thảo' },
];

export const menuItems: MenuItem[] = [
  { label: 'TRANG CHỦ', href: '/' },
  {
    label: 'GIỚI THIỆU',
    href: '/gioi-thieu',
    children: [
      { label: 'Thư ngỏ', href: '/gioi-thieu/thu-ngo' },
      { label: 'Mục tiêu và nhiệm vụ', href: '/gioi-thieu/muc-tieu-va-nhiem-vu' },
      { label: 'Điều lệ và quy chế hoạt động', href: '/gioi-thieu/dieu-le' },
    ],
  },
  {
    label: 'HOẠT ĐỘNG HỘI',
    href: '/danh-muc/tin-tuc-hoi',
    children: [
      { label: 'Tin tức hội', href: '/danh-muc/tin-tuc-hoi' },
      { label: 'Tin hội viên', href: '/danh-muc/tin-hoi-vien' },
    ],
  },
  { label: 'DOANH NHÂN', href: '/danh-muc/doanh-nhan-doanh-nghiep' },
  {
    label: 'TIN TỨC',
    href: '/danh-muc/kinh-te-xa-hoi-tinh-dong-nai',
    children: [
      { label: 'Kinh tế xã hội tỉnh Đồng Nai', href: '/danh-muc/kinh-te-xa-hoi-tinh-dong-nai' },
      { label: 'Doanh nhân doanh nghiệp', href: '/danh-muc/doanh-nhan-doanh-nghiep' },
    ],
  },
  { label: 'ĐÀO TẠO', href: '/danh-muc/dao-tao' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
  {
    label: 'HỖ TRỢ',
    href: '/ho-tro',
    children: [
      { label: 'Kết nối giao thương', href: '/danh-muc/ket-noi-giao-thuong' },
    ],
  },
];

export const newMembers: Member[] = [
  { id: 1, name: 'NGUYỄN THỊ MINH HIỀN', avatar: '/images/members/member1.jpg' },
  { id: 2, name: 'Phan Vũ Tuấn', avatar: '/images/members/member2.jpg' },
  { id: 3, name: 'NGUYỄN THỊ KIM TUYẾN', avatar: '/images/members/member3.jpg' },
  { id: 4, name: 'Vũ Minh Hảo', avatar: '/images/members/member4.jpg' },
  { id: 5, name: 'THÁI BÁ HIỆP', avatar: '/images/members/member5.jpg' },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'Caravan Thiện Nguyện - Hành Trình Rừng Và Biển',
    image: 'https://picsum.photos/seed/event1/400/200',
    link: '/bai-viet/caravan-thien-nguyen',
  },
  {
    id: 2,
    title: 'Sự kiện kết nối doanh nghiệp 2025',
    image: 'https://picsum.photos/seed/event2/400/200',
    link: '/bai-viet/su-kien-ket-noi-2025',
  },
];

const generateContent = (title: string): string => {
  return `
    <p><strong>${title}</strong></p>
    <p>Nhân kỷ niệm 114 năm ngày Quốc tế Phụ nữ 8/3 và chào mừng Tháng Thanh niên năm 2024, chiều 05/3 tại Hà Nội, Ban Thường vụ Công đoàn cơ quan Trung ương Đoàn tổ chức khen thưởng chuyên đề "Giỏi việc nước, đảm việc nhà" năm 2023 cho nữ cán bộ, công chức, viên chức, người lao động cơ quan T.Ư Đoàn.</p>
    <p>Anh Nguyễn Ngọc Lương, Bí thư thường trực T.Ư Đoàn, Chủ tịch Hội LHTN Việt Nam và chị Lê Hồng Hạnh, Chủ tịch Công đoàn Cơ quan T.Ư Đoàn trao Giấy khen vinh danh cho các nữ cán bộ xuất sắc trong phong trào "Giỏi việc nước, đảm việc nhà".</p>
    <p>Trong những năm qua, việc triển khai thực hiện phong trào "Giỏi việc nước, đảm việc nhà" trong nữ cán bộ, công chức, viên chức và người lao động cơ quan đã kế thừa nét đẹp truyền thống trong mỗi nữ cán bộ cơ quan Trung ương Đoàn, góp phần nâng cao vị trí vai trò của người phụ nữ trên tất cả các lĩnh vực công tác, xã hội và gia đình.</p>
    <p>Căn cứ kết quả triển khai phong trào thi đua, thành tích cá nhân, Ban Thường vụ Công đoàn Cơ quan T.Ư Đoàn quyết định khen thưởng cho 30 nữ cán bộ, công chức, viên chức, người lao động có thành tích xuất sắc, tiêu biểu, nhất trong triển khai thực hiện phong trào "Giỏi việc nước, đảm việc nhà" năm 2023.</p>
    <p>Phát biểu tại chương trình, Bí thư thường trực T.Ư Đoàn, Chủ tịch Hội LHTN Việt Nam Nguyễn Ngọc Lương biểu dương những cán bộ nữ của cơ quan đã có sự hy sinh rất lớn cho công việc vì làm công tác Đoàn, Hội rất vất vả, "quanh năm bận rộn, bốn mùa khẩn trương".</p>
  `;
};

export const articles: Article[] = [
  {
    id: 1,
    title: 'Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm quốc gia tại Đồng Nai',
    slug: 'pho-chu-tich-qh-nguyen-duc-hai-thi-sat-cac-cong-truong-trong-diem-quoc-gia-tai-dong-nai',
    excerpt: 'Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm quốc gia tại Đồng Nai',
    content: generateContent('Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm quốc gia tại Đồng Nai'),
    image: 'https://picsum.photos/seed/article1/800/450',
    category: categories[0],
    date: '06/03/2024',
    author: 'Ban biên tập',
  },
  {
    id: 2,
    title: 'Hội Doanh nhân trẻ Đồng Nai tổ chức Hội nghị Ban Chấp hành lần thứ 4, khóa VII, nhiệm kỳ 2025-2028',
    slug: 'hoi-doanh-nhan-tre-dong-nai-to-chuc-hoi-nghi-ban-chap-hanh-lan-thu-4',
    excerpt: 'Hội Doanh nhân trẻ Đồng Nai tổ chức Hội nghị Ban Chấp hành lần thứ 4, khóa VII, nhiệm kỳ 2025-2028',
    content: generateContent('Hội Doanh nhân trẻ Đồng Nai tổ chức Hội nghị Ban Chấp hành lần thứ 4, khóa VII, nhiệm kỳ 2025-2028'),
    image: 'https://picsum.photos/seed/article2/800/450',
    category: categories[0],
    date: '27/01/2026',
    author: 'Ban biên tập',
  },
  {
    id: 3,
    title: '939 Group và khát vọng nâng tầm vị thế cây dược liệu Việt',
    slug: '939-group-va-khat-vong-nang-tam-vi-the-cay-duoc-lieu-viet',
    excerpt: 'Công ty Cổ phần Đầu tư thương mại 939 (939 Group) đã định vị mình là doanh nghiệp đa ngành nghề với nhiều dự án tiêu biểu...',
    content: generateContent('939 Group và khát vọng nâng tầm vị thế cây dược liệu Việt'),
    image: 'https://picsum.photos/seed/article3/800/450',
    category: categories[1],
    date: '03/02/2025',
    author: 'Ban biên tập',
  },
  {
    id: 4,
    title: 'Ông Đặng Quốc Nghị - Chủ tịch Hội Doanh nhân trẻ Đồng Nai giữ chức...',
    slug: 'ong-dang-quoc-nghi-chu-tich-hoi-doanh-nhan-tre-dong-nai',
    excerpt: 'Đại hội Hội LHTN Việt Nam tỉnh Đồng Nai...',
    content: generateContent('Ông Đặng Quốc Nghị - Chủ tịch Hội Doanh nhân trẻ Đồng Nai giữ chức Phó Chủ tịch Hội LHTN'),
    image: 'https://picsum.photos/seed/article4/400/300',
    category: categories[0],
    date: '15/01/2025',
    author: 'Ban biên tập',
  },
  {
    id: 5,
    title: 'Hòa Cảnh FC lên ngôi vô địch Giải bóng đá toàn quốc doanh nghiệp Vi...',
    slug: 'hoa-canh-fc-len-ngoi-vo-dich-giai-bong-da-toan-quoc',
    excerpt: 'Hòa Cảnh FC lên ngôi vô địch Giải bóng đá toàn quốc doanh nghiệp Việt Nam...',
    content: generateContent('Hòa Cảnh FC lên ngôi vô địch Giải bóng đá toàn quốc doanh nghiệp Việt Nam'),
    image: 'https://picsum.photos/seed/article5/400/300',
    category: categories[1],
    date: '10/01/2025',
    author: 'Ban biên tập',
  },
  {
    id: 6,
    title: 'Hội Doanh nhân trẻ Đồng Nai và Bình Phước hợp nhất, khẳng định vai trò...',
    slug: 'hoi-doanh-nhan-tre-dong-nai-va-binh-phuoc-hop-nhat',
    excerpt: 'Hội Doanh nhân trẻ Đồng Nai và Bình Phước hợp nhất...',
    content: generateContent('Hội Doanh nhân trẻ Đồng Nai và Bình Phước hợp nhất'),
    image: 'https://picsum.photos/seed/article6/400/300',
    category: categories[0],
    date: '05/01/2025',
    author: 'Ban biên tập',
  },
  {
    id: 7,
    title: 'Sôi nổi các hoạt động thiện nguyện ý nghĩa của CLB Nữ Doanh nhân tỉnh...',
    slug: 'soi-noi-cac-hoat-dong-thien-nguyen-y-nghia-cua-clb-nu-doanh-nhan',
    excerpt: 'CLB Nữ Doanh nhân tỉnh Đồng Nai tổ chức nhiều hoạt động thiện nguyện ý nghĩa...',
    content: generateContent('Sôi nổi các hoạt động thiện nguyện ý nghĩa của CLB Nữ Doanh nhân tỉnh Đồng Nai'),
    image: 'https://picsum.photos/seed/article7/400/300',
    category: categories[1],
    date: '01/01/2025',
    author: 'Ban biên tập',
  },
  {
    id: 8,
    title: 'Đại hội Chi bộ Hội Doanh nhân trẻ tỉnh Đồng Nai lần thứ I',
    slug: 'dai-hoi-chi-bo-hoi-doanh-nhan-tre-tinh-dong-nai-lan-thu-i',
    excerpt: 'Chi bộ Hội Doanh nhân trẻ tỉnh Đồng Nai tổ chức Đại hội lần thứ I...',
    content: generateContent('Đại hội Chi bộ Hội Doanh nhân trẻ tỉnh Đồng Nai lần thứ I'),
    image: 'https://picsum.photos/seed/article8/400/300',
    category: categories[0],
    date: '25/12/2024',
    author: 'Ban biên tập',
  },
  {
    id: 9,
    title: 'CEO Nguyễn Duy Khương: Hạnh phúc là được trao đi!',
    slug: 'ceo-nguyen-duy-khuong-hanh-phuc-la-duoc-trao-di',
    excerpt: 'PV Tạp chí Doanh nghiệp và Hội nhập...',
    content: generateContent('CEO Nguyễn Duy Khương: Hạnh phúc là được trao đi!'),
    image: 'https://picsum.photos/seed/article9/400/300',
    category: categories[1],
    date: '20/12/2024',
    author: 'Ban biên tập',
  },
  {
    id: 10,
    title: 'Hội doanh nhân trẻ Đồng Nai tổ chức hợp mặt doanh nghiệp ngành xây...',
    slug: 'hoi-doanh-nhan-tre-dong-nai-to-chuc-hop-mat-doanh-nghiep-nganh-xay',
    excerpt: 'Hội doanh nhân trẻ Đồng Nai tổ chức hợp mặt doanh nghiệp ngành xây dựng...',
    content: generateContent('Hội doanh nhân trẻ Đồng Nai tổ chức hợp mặt doanh nghiệp ngành xây dựng'),
    image: 'https://picsum.photos/seed/article10/400/300',
    category: categories[0],
    date: '18/12/2024',
    author: 'Ban biên tập',
  },
  {
    id: 11,
    title: 'Găng tay xuất ngoại',
    slug: 'gang-tay-xuat-ngoai',
    excerpt: 'Câu chuyện thành công của doanh nghiệp sản xuất găng tay xuất khẩu...',
    content: generateContent('Găng tay xuất ngoại'),
    image: 'https://picsum.photos/seed/article11/400/300',
    category: categories[1],
    date: '15/12/2024',
    author: 'Ban biên tập',
  },
  // Kinh tế xã hội
  {
    id: 12,
    title: 'Lãnh đạo tỉnh Đồng Nai đi xúc tiến đầu tư, gặp gỡ với các doanh nghiệp và Tập đoàn tại Hàn Quốc',
    slug: 'lanh-dao-tinh-dong-nai-di-xuc-tien-dau-tu-gap-go-voi-cac-doanh-nghiep-tap-doan-tai-han-quoc',
    excerpt: 'Vừa qua, trong chuyến đi công tác tại Nhật Bản và Hàn Quốc, Bí thư Tỉnh ủy Đồng Nai Nguyễn Hồng Lĩnh đã cùng đoàn công tác...',
    content: generateContent('Lãnh đạo tỉnh Đồng Nai đi xúc tiến đầu tư, gặp gỡ với các doanh nghiệp và Tập đoàn tại Hàn Quốc'),
    image: 'https://picsum.photos/seed/article12/800/450',
    category: categories[2],
    date: '02/05/2024',
    author: 'Ban biên tập',
  },
  {
    id: 13,
    title: 'Đồng Nai: Nhiều ý kiến đóng góp để luật bảo hiểm xã hội phù hợp với thực tiễn hiện nay',
    slug: 'dong-nai-nhieu-y-kien-dong-gop-de-luat-bao-hiem-xa-hoi-phu-hop',
    excerpt: 'Sáng 16/4, Đoàn Đại biểu Quốc hội tỉnh Đồng Nai tổ chức lấy ý kiến...',
    content: generateContent('Đồng Nai: Nhiều ý kiến đóng góp để luật bảo hiểm xã hội phù hợp với thực tiễn hiện nay'),
    image: 'https://picsum.photos/seed/article13/400/300',
    category: categories[2],
    date: '17/04/2024',
    author: 'Ban biên tập',
  },
  {
    id: 14,
    title: 'Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm quốc gia...',
    slug: 'pho-chu-tich-qh-nguyen-duc-hai-thi-sat',
    excerpt: 'Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm...',
    content: generateContent('Phó Chủ tịch QH Nguyễn Đức Hải thị sát các công trường trọng điểm quốc gia'),
    image: 'https://picsum.photos/seed/article14/400/300',
    category: categories[2],
    date: '10/04/2024',
    author: 'Ban biên tập',
  },
  {
    id: 15,
    title: 'Bảo đảm tiến độ, chất lượng dự án Cảng hàng không quốc tế Long Thành',
    slug: 'bao-dam-tien-do-chat-luong-du-an-cang-hang-khong-quoc-te-long-thanh',
    excerpt: 'Bảo đảm tiến độ, chất lượng dự án Cảng hàng không quốc tế Long Thành...',
    content: generateContent('Bảo đảm tiến độ, chất lượng dự án Cảng hàng không quốc tế Long Thành'),
    image: 'https://picsum.photos/seed/article15/400/300',
    category: categories[2],
    date: '05/04/2024',
    author: 'Ban biên tập',
  },
  {
    id: 16,
    title: 'Khánh trương chọn nhà đầu tư Dự án thành phần 4 của sân bay Long Thành',
    slug: 'khanh-truong-chon-nha-dau-tu-du-an-thanh-phan-4-cua-san-bay-long-thanh',
    excerpt: 'Khánh trương chọn nhà đầu tư Dự án thành phần 4 của sân bay Long Thành...',
    content: generateContent('Khánh trương chọn nhà đầu tư Dự án thành phần 4 của sân bay Long Thành'),
    image: 'https://picsum.photos/seed/article16/400/300',
    category: categories[2],
    date: '01/04/2024',
    author: 'Ban biên tập',
  },
  // Doanh nhân doanh nghiệp
  {
    id: 17,
    title: '"Con đường khởi nghiệp và những điều cần biết" - Cuốn sách quan trọng cho những người muốn thành công',
    slug: 'con-duong-khoi-nghiep-va-nhung-dieu-can-biet',
    excerpt: 'Khởi nghiệp luôn là ước mơ được ấp ủ trong tiềm thức của rất nhiều người, nhất là những người trẻ',
    content: generateContent('"Con đường khởi nghiệp và những điều cần biết" - Cuốn sách quan trọng cho những người muốn thành công'),
    image: 'https://picsum.photos/seed/article17/800/450',
    category: categories[3],
    date: '25/09/2024',
    author: 'Ban biên tập',
  },
  {
    id: 18,
    title: 'Hỗ trợ pháp lý cho doanh nghiệp: Cần triển khai rộng rãi và thực chất hơn',
    slug: 'ho-tro-phap-ly-cho-doanh-nghiep-can-trien-khai-rong-rai-va-thuc-chat-hon',
    excerpt: 'Hỗ trợ pháp lý cho doanh nghiệp (DN) đã được thực hiện tuy nhiều năm nhưng chất lượng hỗ trợ pháp lý chưa cao...',
    content: generateContent('Hỗ trợ pháp lý cho doanh nghiệp: Cần triển khai rộng rãi và thực chất hơn'),
    image: 'https://picsum.photos/seed/article18/400/300',
    category: categories[3],
    date: '20/09/2024',
    author: 'Ban biên tập',
  },
  {
    id: 19,
    title: 'Tìm hiểu tích cực từ thị trường bất động sản',
    slug: 'tim-hieu-tich-cuc-tu-thi-truong-bat-dong-san',
    excerpt: 'Số liệu thống kê của các cơ quan chức năng cho thấy, thị trường bất động sản (BĐS) quý I-2024 có tăng trưởng...',
    content: generateContent('Tìm hiểu tích cực từ thị trường bất động sản'),
    image: 'https://picsum.photos/seed/article19/400/300',
    category: categories[3],
    date: '15/09/2024',
    author: 'Ban biên tập',
  },
  {
    id: 20,
    title: 'Trung ương Hội Doanh nhân trẻ Việt Nam làm việc với CLB Đầu tư & Khởi nghiệp Doanh nhân trẻ Việt Nam',
    slug: 'trung-uong-hoi-doanh-nhan-tre-viet-nam-lam-viec-voi-clb-dau-tu-khoi-nghiep',
    excerpt: 'Trung ương Hội Doanh nhân trẻ Việt Nam làm việc với CLB Đầu tư & Khởi nghiệp...',
    content: generateContent('Trung ương Hội Doanh nhân trẻ Việt Nam làm việc với CLB Đầu tư & Khởi nghiệp'),
    image: 'https://picsum.photos/seed/article20/400/300',
    category: categories[3],
    date: '10/09/2024',
    author: 'Ban biên tập',
  },
  {
    id: 21,
    title: 'Gần 114 tỷ USD xuất nhập khẩu trong 2 tháng đầu năm',
    slug: 'gan-114-ty-usd-xuat-nhap-khau-trong-2-thang-dau-nam',
    excerpt: 'Gần 114 tỷ USD xuất nhập khẩu trong 2 tháng đầu năm...',
    content: generateContent('Gần 114 tỷ USD xuất nhập khẩu trong 2 tháng đầu năm'),
    image: 'https://picsum.photos/seed/article21/400/300',
    category: categories[3],
    date: '05/09/2024',
    author: 'Ban biên tập',
  },
  // Kết nối giao thương
  {
    id: 22,
    title: 'Giải pháp cung ứng linh kiện máy tính và nhân sự IT cho SMEs',
    slug: 'giai-phap-cung-ung-linh-kien-may-tinh-va-nhan-su-it-cho-smes',
    excerpt: 'Giải pháp cung ứng linh kiện máy tính và nhân sự IT cho SMEs',
    content: generateContent('Giải pháp cung ứng linh kiện máy tính và nhân sự IT cho SMEs'),
    image: 'https://picsum.photos/seed/article22/400/300',
    category: categories[4],
    date: '05/07/2025',
    author: 'Ban biên tập',
    tags: ['Tin bán'],
  },
  {
    id: 23,
    title: 'Dịch vụ khai báo thuế trọn gói – Hỗ trợ kê khai thuế đúng hạn, đúng luật',
    slug: 'dich-vu-khai-bao-thue-tron-goi',
    excerpt: 'Dịch vụ khai báo thuế trọn gói – Hỗ trợ kê khai thuế đúng hạn, đúng luật',
    content: generateContent('Dịch vụ khai báo thuế trọn gói'),
    image: 'https://picsum.photos/seed/article23/400/300',
    category: categories[4],
    date: '22/06/2025',
    author: 'Ban biên tập',
    tags: ['Tin bán'],
  },
  {
    id: 24,
    title: 'Dịch vụ thành lập doanh nghiệp trọn gói – Nhanh chóng, đúng pháp lý, tiết kiệm chi phí',
    slug: 'dich-vu-thanh-lap-doanh-nghiep-tron-goi',
    excerpt: 'Dịch vụ thành lập doanh nghiệp trọn gói – Nhanh chóng, đúng pháp lý...',
    content: generateContent('Dịch vụ thành lập doanh nghiệp trọn gói'),
    image: 'https://picsum.photos/seed/article24/400/300',
    category: categories[4],
    date: '22/06/2025',
    author: 'Ban biên tập',
    tags: ['Tin bán'],
  },
  {
    id: 25,
    title: 'Phần mềm quản lý bán hàng POS365 – Giải pháp tối ưu cho cửa hàng...',
    slug: 'phan-mem-quan-ly-ban-hang-pos365',
    excerpt: 'Phần mềm quản lý bán hàng POS365 – Giải pháp tối ưu cho cửa hàng...',
    content: generateContent('Phần mềm quản lý bán hàng POS365'),
    image: 'https://picsum.photos/seed/article25/400/300',
    category: categories[4],
    date: '22/06/2025',
    author: 'Ban biên tập',
    tags: ['Tin bán'],
  },
  {
    id: 26,
    title: 'NETCO ĐỒNG NAI - HỖ TRỢ VẬN CHUYỂN TOÀN QUỐC CHO DOANH NGHIỆP',
    slug: 'netco-dong-nai-ho-tro-van-chuyen-toan-quoc',
    excerpt: 'NETCO Đồng Nai hỗ trợ vận chuyển toàn quốc cho doanh nghiệp...',
    content: generateContent('NETCO Đồng Nai hỗ trợ vận chuyển toàn quốc cho doanh nghiệp'),
    image: 'https://picsum.photos/seed/article26/400/300',
    category: categories[4],
    date: '25/02/2025',
    author: 'Ban biên tập',
    tags: ['Tìm đối tác'],
  },
  {
    id: 27,
    title: 'IVS Academy Trực thuộc IVS JSC.',
    slug: 'ivs-academy-truc-thuoc-ivs-jsc',
    excerpt: 'IVS Academy Trực thuộc IVS JSC...',
    content: generateContent('IVS Academy Trực thuộc IVS JSC'),
    image: 'https://picsum.photos/seed/article27/400/300',
    category: categories[4],
    date: '14/05/2024',
    author: 'Ban biên tập',
    tags: ['Tìm đối tác'],
  },
  // Extra articles for category pages
  {
    id: 28,
    title: 'Doanh nhân viết và làm việc với trái tim từ tế',
    slug: 'doanh-nhan-viet-va-lam-viec-voi-trai-tim-tu-te',
    excerpt: 'Kỷ niệm 30 năm phong trào Doanh nhân trẻ Việt Nam',
    content: generateContent('Doanh nhân viết và làm việc với trái tim từ tế'),
    image: 'https://picsum.photos/seed/article28/400/300',
    category: categories[3],
    date: '01/09/2024',
    author: 'Ban biên tập',
  },
  {
    id: 29,
    title: 'Doanh nghiệp ngóng nguồn vốn lãi suất thấp',
    slug: 'doanh-nghiep-ngong-nguon-von-lai-suat-thap',
    excerpt: 'Doanh nghiệp ngóng nguồn vốn lãi suất thấp',
    content: generateContent('Doanh nghiệp ngóng nguồn vốn lãi suất thấp'),
    image: 'https://picsum.photos/seed/article29/400/300',
    category: categories[3],
    date: '28/08/2024',
    author: 'Ban biên tập',
  },
  {
    id: 30,
    title: 'Doanh nghiệp Ấn Độ mong muốn hợp tác, đầu tư vào Đồng Nai',
    slug: 'doanh-nghiep-an-do-mong-muon-hop-tac-dau-tu-vao-dong-nai',
    excerpt: 'Doanh nghiệp Ấn Độ mong muốn hợp tác, đầu tư vào Đồng Nai',
    content: generateContent('Doanh nghiệp Ấn Độ mong muốn hợp tác, đầu tư vào Đồng Nai'),
    image: 'https://picsum.photos/seed/article30/400/300',
    category: categories[3],
    date: '25/08/2024',
    author: 'Ban biên tập',
  },
  {
    id: 31,
    title: 'Chánh Văn phòng Trung ương Hội DNT Việt Nam được trao tặng danh hiệu "Giỏi việc nước, đảm việc nhà"',
    slug: 'chanh-van-phong-trung-uong-hoi-dnt-viet-nam-duoc-trao-tang-danh-hieu',
    excerpt: 'Chánh Văn phòng Trung ương Hội DNT Việt Nam được trao tặng danh hiệu "Giỏi việc nước, đảm việc nhà"',
    content: generateContent('Chánh Văn phòng Trung ương Hội DNT Việt Nam được trao tặng danh hiệu "Giỏi việc nước, đảm việc nhà"'),
    image: 'https://picsum.photos/seed/article31/400/300',
    category: categories[0],
    date: '06/03/2024',
    author: 'Ban biên tập',
  },
  {
    id: 32,
    title: 'Chia sẻ kinh nghiệm giữ chân người lao động',
    slug: 'chia-se-kinh-nghiem-giu-chan-nguoi-lao-dong',
    excerpt: 'Chia sẻ kinh nghiệm giữ chân người lao động trong bối cảnh hiện nay',
    content: generateContent('Chia sẻ kinh nghiệm giữ chân người lao động'),
    image: 'https://picsum.photos/seed/article32/400/300',
    category: categories[0],
    date: '01/03/2024',
    author: 'Ban biên tập',
  },
  {
    id: 33,
    title: 'Chương trình cà phê doanh nhân lần 4',
    slug: 'chuong-trinh-ca-phe-doanh-nhan-lan-4',
    excerpt: 'Chương trình cà phê doanh nhân lần 4 được tổ chức tại Đồng Nai',
    content: generateContent('Chương trình cà phê doanh nhân lần 4'),
    image: 'https://picsum.photos/seed/article33/400/300',
    category: categories[0],
    date: '25/02/2024',
    author: 'Ban biên tập',
  },
  {
    id: 34,
    title: 'Cao tốc Biên Hòa – Vũng Tàu: Mau với chứ. Vội vàng lên với chứ!',
    slug: 'cao-toc-bien-hoa-vung-tau-mau-voi-chu',
    excerpt: 'Cao tốc Biên Hòa – Vũng Tàu: Mau với chứ. Vội vàng lên với chứ!',
    content: generateContent('Cao tốc Biên Hòa – Vũng Tàu'),
    image: 'https://picsum.photos/seed/article34/400/300',
    category: categories[0],
    date: '20/02/2024',
    author: 'Ban biên tập',
  },
  {
    id: 35,
    title: 'Cà Phê Doanh Nhân Lần 5',
    slug: 'ca-phe-doanh-nhan-lan-5',
    excerpt: 'Cà Phê Doanh Nhân Lần 5',
    content: generateContent('Cà Phê Doanh Nhân Lần 5'),
    image: 'https://picsum.photos/seed/article35/400/300',
    category: categories[0],
    date: '15/02/2024',
    author: 'Ban biên tập',
  },
];

// Helper functions
export function getArticlesByCategory(slug: string): Article[] {
  return articles.filter((a) => a.category.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedArticles(categorySlug: string, excludeId: number, limit: number = 10): Article[] {
  return articles
    .filter((a) => a.category.slug === categorySlug && a.id !== excludeId)
    .slice(0, limit);
}

export function getFeaturedArticles(limit: number = 3): Article[] {
  return articles.slice(0, limit);
}

export function getLatestArticles(limit: number = 10): Article[] {
  return [...articles].slice(0, limit);
}
