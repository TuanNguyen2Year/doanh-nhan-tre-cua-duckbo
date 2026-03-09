import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';
import { getArticleBySlug, getRelatedArticles, articles } from '@/data/mockData';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Không tìm thấy bài viết' };

  return {
    title: `${article.title} - Doanh Nhân Trẻ Đồng Nai`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, width: 800, height: 450 }],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'Ban biên tập'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.category.slug, article.id, 10);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Trang Chủ</Link>
        <span>/</span>
        <Link href={`/danh-muc/${article.category.slug}`}>{article.category.name}</Link>
        <span>/</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="bg-white rounded-md p-6 shadow-sm">
            {/* Category breadcrumb text */}
            <p className="text-xs text-gray-500 mb-2">
              {article.category.name} {'>'} {article.title.substring(0, 60)}...
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200">
              <span className="flex items-center gap-1">
                <FaCalendarAlt size={12} />
                {article.date}
              </span>
              {article.author && (
                <span className="flex items-center gap-1">
                  <FaUser size={12} />
                  {article.author}
                </span>
              )}
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden mb-6">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div
              className="article-content prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-8 pt-4 border-t border-gray-200">
                <span className="text-sm font-semibold text-gray-600">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        </div>

        {/* Sidebar */}
        <div>
          <Sidebar title="Tin Tức Hội" articles={relatedArticles.length > 0 ? relatedArticles : articles.slice(0, 10)} />
        </div>
      </div>
    </div>
  );
}
