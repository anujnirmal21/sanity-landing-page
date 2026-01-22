"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface CarouselItem {
  _key: string;
  title: string;
  description?: string;
  image: any;
}

interface HeroCarouselProps {
  data: {
    heading?: string;
    items: CarouselItem[];
    subheading?: string;
  };
}

export default function HeroCarousel({ data }: HeroCarouselProps) {
  const { heading, items, subheading } = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle slide changes
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-play logic (pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex];

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 py-16 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {heading && (
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 tracking-wide uppercase">
          {heading}
        </h2>
      )}
      <div
        className="
    flex
    justify-start md:justify-center
    gap-4 md:gap-12
    mb-6 md:mb-10
    border-b border-white/10
    pb-3 md:pb-4
    overflow-x-auto md:overflow-visible
    whitespace-nowrap
    scrollbar-hide
  "
      >
        {items.map((item, index) => (
          <button
            key={item._key}
            onClick={() => setActiveIndex(index)}
            className={`
        relative
        pb-2
        text-sm md:text-lg
        font-medium
        transition-all duration-300
        flex-shrink-0
        ${
          activeIndex === index
            ? "text-blue-400"
            : "text-gray-400 hover:text-white"
        }
      `}
          >
            {item.title}

            {/* Active Underline Indicator */}
            <span
              className={`
          absolute left-0 -bottom-1
          w-full h-0.5
          bg-blue-500
          origin-left
          transform transition-transform duration-300
          ${activeIndex === index ? "scale-x-100" : "scale-x-0"}
        `}
            />
          </button>
        ))}
      </div>

      {/* 3. Main Content Area */}
      <div className="relative group">
        {/* Navigation Arrows (Absolute Positioned) */}
        <button
          onClick={prevSlide}
          className="absolute -left-5 md:-left-15 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-5 md:-right-15 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image Container */}
        <div className="relative w-full aspect-16/10 md:aspect-2/1  rounded-xl overflow-hidden shadow-2xl">
          {items.map((item, index) => (
            <div
              key={item._key}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                activeIndex === index
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-4 scale-95"
              }`}
            >
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.image.alt || item.title}
                  fill
                  className="object-contain p-4 md:p-8"
                  priority={index === 0}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center min-h-15">
        <p className="text-white text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500 key={activeIndex}">
          {subheading}
        </p>
      </div>
    </div>
  );
}
