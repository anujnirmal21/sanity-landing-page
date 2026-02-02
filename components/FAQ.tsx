"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  _key: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: {
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    items?: FAQItem[];
  };
}

const FAQSection = ({ data }: FAQSectionProps) => {
  const { eyebrow, heading, subheading, items = [] } = data;

  const [openId, setOpenId] = useState<string | null>(items?.[0]?._key ?? null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#1E0903] flex flex-col items-center py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-color-dodge pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1204px] flex flex-col items-center gap-12 md:gap-[48px]">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-[32px] max-w-[800px]">
          {eyebrow && (
            <div className="flex items-center justify-center px-3 py-1 rounded-full border border-transparent">
              <span className="font-sans font-medium text-sm md:text-[25px] leading-[132%] tracking-wide md:tracking-[-1px] uppercase text-[#E87722]">
                {eyebrow}
              </span>
            </div>
          )}

          <div className="flex flex-col gap-4 md:gap-[20px] items-center">
            {heading && (
              <h2 className="font-dm-sans font-bold text-3xl md:text-5xl lg:text-[48px] leading-[116%] text-white text-center">
                {heading}
              </h2>
            )}

            {subheading && (
              <p className="font-sans font-medium text-base md:text-[18px] leading-[160%] tracking-[-0.02em] text-[#D1D1D1] opacity-80 text-center max-w-[660px]">
                {subheading}
              </p>
            )}
          </div>
        </div>

        {/* --- FAQ List --- */}
        <div className="w-full max-w-[788px] flex flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = openId === item._key;
            const number = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={item._key}
                onClick={() => toggleFAQ(item._key)}
                className={`
                  relative w-full flex flex-col items-center px-5 md:px-[22px] cursor-pointer 
                  transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                  ${
                    isOpen
                      ? "bg-[radial-gradient(161.02%_125.61%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_67.23%),rgba(0,0,0,0.06)] border border-white/20 shadow-[inset_0px_0px_70.6px_rgba(255,255,255,0.14)] backdrop-blur-md rounded-[20px]"
                      : "bg-black/5 shadow-[inset_0px_0px_35px_rgba(255,255,255,0.1)] border border-transparent rounded-[16px] md:rounded-[20px] hover:bg-white/5"
                  }
                `}
                aria-expanded={isOpen}
              >
                {/* FAQ Trigger / Question Line */}
                <div className="w-full flex flex-row items-center justify-between py-5 md:py-[24px] gap-4">
                  <div className="flex flex-row items-center gap-4 md:gap-[67px]">
                    {/* Number */}
                    <span className="font-sans font-normal text-lg md:text-[26px] leading-[130%] text-white mix-blend-exclusion opacity-50 md:opacity-90 min-w-[24px]">
                      {number}
                    </span>

                    {/* Question Text */}
                    <span className="font-sans font-medium text-lg md:text-[22px] leading-[130%] tracking-[-0.03em] text-white mix-blend-exclusion text-left">
                      {item.question}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`shrink-0 text-white transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* Animated Answer Area (CSS Grid Trick) */}
                <div
                  className={`
                    grid w-full transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-[24px]" : "grid-rows-[0fr] opacity-0 pb-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    {/* Inner content with responsive indentation */}
                    <div className="pl-0 md:pl-[95px] pr-0 md:pr-8">
                      <p className="font-sans font-light text-sm md:text-[15px] leading-[160%] text-white/80 mix-blend-difference">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
