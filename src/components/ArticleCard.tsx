import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  showExcerpt?: boolean;
  imageHeight?: string;
}

export default function ArticleCard({ article, showExcerpt = true, imageHeight = 'h-44' }: ArticleCardProps) {
  return (
    <div className="article-card">
      <Link href={`/bai-viet/${article.slug}`} className="block">
        <div className={`relative ${imageHeight} w-full overflow-hidden`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {article.tags && article.tags[0] && (
            <span className="tag-badge">{article.tags[0]}</span>
          )}
        </div>
      </Link>
      <div className="p-3">
        <Link href={`/bai-viet/${article.slug}`}>
          <h3 className="text-sm font-bold text-gray-800 hover:text-primary transition-colors line-clamp-2 leading-snug mb-1.5">
            {article.title}
          </h3>
        </Link>
        {showExcerpt && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-2">{article.excerpt}</p>
        )}
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <FaCalendarAlt size={10} />
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
}
