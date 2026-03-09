import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface ArticleRowProps {
  article: Article;
  imageSize?: 'sm' | 'md';
}

export default function ArticleRow({ article, imageSize = 'sm' }: ArticleRowProps) {
  const imgClass = imageSize === 'md' ? 'w-28 h-20 md:w-36 md:h-24' : 'w-20 h-16 md:w-24 md:h-18';

  return (
    <div className="article-card-horizontal">
      <Link href={`/bai-viet/${article.slug}`} className={`relative ${imgClass} shrink-0 rounded overflow-hidden`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={`/bai-viet/${article.slug}`}>
          <h4 className="text-[13px] font-semibold text-gray-800 hover:text-primary transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
        </Link>
        <p className="text-xs text-gray-500 line-clamp-1 mt-1">{article.excerpt}</p>
      </div>
    </div>
  );
}
