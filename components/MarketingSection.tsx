"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

interface FeatureSectionProps {
  data: {
    title: string;
    content: any; // Portable Text
    cta?: {
      text: string;
      url: string;
    };
    description?: string;
    illustration?: any;
  };
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  const { title, content, cta, description, illustration } = data;

  return (
    <section className="relative bg-[#F4F3EC] overflow-hidden">
      <div className="lg:px-24 xl:px-30 px-4 sm:px-8 pt-[clamp(6rem,20vw,16rem)] pb-20 sm:pt-40 md:py-20 2xl:py-36 xl:pr-0 flex flex-col lg:flex-row flex-1 justify-between gap-12 lg:gap-0">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-between gap-10 md:gap-[clamp(2.5rem,12vw,5rem)] xl:gap-28 2xl:gap-80 w-full lg:max-w-[65%]">
          
          {/* 1. Main Content with "Bold Highlight" styling */}
          <div
            className={`
              w-full md:max-w-[90%] lg:max-w-full 
              text-lg leading-8 lg:leading-10 font-bold 
              pt-0 lg:pt-10 
              text-[#0F0F0F]/50           /* Base text is 50% opacity */
              [&_strong]:text-[#0F0F0F]! /* Bold tags are forced to 100% opacity black */
              md:text-[clamp(1.125rem,2vw,1.5rem)]
              xl:text-3xl xl:leading-12
              2xl:text-4xl 2xl:leading-relaxed
            `}
          >
            {/* Added Title to match data structure, keeping layout flow */}
            {title && (
              <h2 className="text-[#0F0F0F] text-3xl md:text-4xl font-bold mb-6 block opacity-100">
                {title}
              </h2>
            )}
            
            <div className="text-xl md:text-3xl font-semibold leading-11">
              <PortableText value={content} />
            </div>
          </div>

          {/* 3. Bottom Text Area */}
          <div className="w-full md:max-w-1/2 xl:max-w-[70%] space-y-4 2xl:space-y-6">
            {cta && cta.text && (
              <div className="font-semibold font-helveticaNeue text-lg 2xl:text-2xl text-[#0F0F0F]">
                {cta.text}
              </div>
            )}
            {description && (
              <div className="font-regular font-helveticaNeue text-base xl:text-xl 2xl:text-2xl text-[#0F0F0F]">
                {description}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div
          className={`
            w-full max-w-md lg:max-w-[30%] 
            mx-auto lg:mx-0
            mt-8 lg:mt-0
            lg:-mr-10 
            border rounded-3xl border-[#0F0F0F] 
            p-6 md:p-10
            flex items-center justify-center
            max-h-[500px] lg:max-h-[700px]
          `}
        >
          {illustration && (
            <img
              src={urlFor(illustration).url()}
              alt={illustration.alt || title || "Feature illustration"}
              className="object-contain w-full h-full max-h-[400px] lg:max-h-[730px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}