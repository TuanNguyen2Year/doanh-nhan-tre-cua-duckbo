import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';

interface SidebarProps {
  title: string;
  articles: Article[];
}

export default function Sidebar({ title, articles }: SidebarProps) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <div className="bg-primary text-white px-4 py-2.5 font-bold text-sm">
        {title}
      </div>
      <div className="p-3 divide-y divide-gray-100">
        {articles.map((article) => (
          <div key={article.id} className="py-2.5 first:pt-0 last:pb-0">
            <Link href={`/bai-viet/${article.slug}`} className="flex gap-3">
              <div className="relative w-16 h-12 shrink-0 rounded overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xs font-semibold text-gray-700 hover:text-primary transition-colors line-clamp-2 leading-snug flex-1">
                {article.title}
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
