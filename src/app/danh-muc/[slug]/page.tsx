import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { getCategoryBySlug, getArticlesByCategory, getLatestArticles, categories } from '@/data/mockData';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  if (!category) return { title: 'Không tìm thấy' };

  return {
    title: `${category.name} - Doanh Nhân Trẻ Đồng Nai`,
    description: category.description || `Danh mục ${category.name} - Hội Doanh nhân trẻ tỉnh Đồng Nai`,
    openGraph: {
      title: `${category.name} - Doanh Nhân Trẻ Đồng Nai`,
      description: category.description || `Danh mục ${category.name}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const allArticles = getArticlesByCategory(params.slug);
  const sidebarArticles = getLatestArticles(10);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Trang Chủ</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">{category.name}</span>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content - 3/4 */}
        <div className="lg:col-span-3">
          <div className="space-y-0 divide-y divide-gray-100">
            {allArticles.map((article) => (
              <div key={article.id} className="flex gap-4 py-4 first:pt-0">
                <Link
                  href={`/bai-viet/${article.slug}`}
                  className="relative w-40 h-28 md:w-52 md:h-32 shrink-0 rounded-md overflow-hidden"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/bai-viet/${article.slug}`}>
                    <h2 className="text-base font-bold text-gray-800 hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-2">{article.excerpt}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <FaCalendarAlt size={10} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-200">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-400 hover:border-primary hover:text-primary transition-colors">
              <FaChevronLeft size={12} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-primary hover:text-primary text-sm transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-primary hover:text-primary text-sm transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-primary hover:text-primary text-sm transition-colors">
              4
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-400 hover:border-primary hover:text-primary transition-colors">
              <FaChevronRight size={12} />
            </button>
            <span className="text-sm text-gray-500 ml-2">Go to</span>
            <input
              type="number"
              min="1"
              className="w-14 h-8 text-sm text-center border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="Page"
            />
          </div>
        </div>

        {/* Sidebar - 1/4 */}
        <div>
          <Sidebar title="Tin Tức Hội" articles={sidebarArticles} />
        </div>
      </div>
    </div>
  );
}
