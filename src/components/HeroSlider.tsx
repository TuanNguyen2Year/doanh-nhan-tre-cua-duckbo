'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import { Article } from '@/types';

interface HeroSliderProps {
  articles: Article[];
}

export default function HeroSlider({ articles }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  if (!articles.length) return null;

  const article = articles[current];

  return (
    <div className="relative rounded-lg overflow-hidden group h-[350px] md:h-[400px]">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Link href={`/bai-viet/${article.slug}`}>
          <h2 className="text-white text-xl md:text-2xl font-bold leading-tight hover:text-accent transition-colors mb-2">
            {article.title}
          </h2>
        </Link>
        <p className="text-white/80 text-sm line-clamp-2 mb-2">{article.excerpt}</p>
        <div className="flex items-center gap-1 text-white/60 text-xs">
          <FaCalendarAlt size={10} />
          <span>{article.date}</span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
