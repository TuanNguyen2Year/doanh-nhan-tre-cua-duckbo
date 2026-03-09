import Link from 'next/link';
import { Article } from '@/types';

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span>{title}</span>
      {viewAllLink && (
        <Link href={viewAllLink} className="hover:underline">
          Xem tất cả
        </Link>
      )}
    </div>
  );
}
