'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Article } from '@/types';

interface HeroSliderV2Props {
  articles: Article[];
}

export default function HeroSliderV2({ articles }: HeroSliderV2Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [articles.length]);

  if (!articles.length) return null;

  const article = articles[current];

  const goNext = () => setCurrent((prev) => (prev + 1) % articles.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + articles.length) % articles.length);

  return (
    <div className="relative rounded-xl overflow-hidden group h-[300px] md:h-[400px]">
      {/* Image with smooth transition */}
      {articles.map((a, i) => (
        <div
          key={a.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={a.image}
            alt={a.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />

      {/* Category badge */}
      <div className="absolute top-4 left-4 z-30">
        <span className="bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {article.category.name}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
        <Link href={`/bai-viet/${article.slug}`}>
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight hover:text-accent transition-colors mb-3">
            {article.title}
          </h2>
        </Link>
        <p className="text-white/80 text-sm line-clamp-2 mb-3 max-w-2xl">{article.excerpt}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-white/60 text-xs">
            <FaCalendarAlt size={10} />
            <span>{article.date}</span>
          </div>
          {article.author && (
            <span className="text-white/60 text-xs">• {article.author}</span>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous"
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next"
      >
        <FaChevronRight size={14} />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-accent w-8' : 'bg-white/40 w-4 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
