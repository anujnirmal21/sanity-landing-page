import React from "react";
import Image from "next/image";
import { Section2CMS } from "@/types";


type Section2Props = {
  data?: Section2CMS;
};

export default function Section2({ data }: Section2Props) {
  if (!data) return null;

  const {
    headline,
    subheadline,
    paragraphs,
    cta,
    image,
  } = data;

  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-10 md:py-[90px] px-6 lg:px-[112px] overflow-hidden">
      <div className="flex flex-col items-center gap-[76px] w-full max-w-[1216px] z-10">

        {/* Header */}
        {(headline || subheadline) && (
          <div className="flex flex-col items-center gap-[16px] max-w-[724px] text-center">
            {headline && (
              <h2 className="font-helvetica font-bold text-[40px] md:text-[59.8px] leading-[100%] tracking-[-3.84px] text-[#0F0F0F]">
                {headline}
              </h2>
            )}
            {subheadline && (
              <p className="font-helvetica font-normal text-[18px] md:text-[19.9px] leading-[100%] tracking-[-0.5px] text-[#0F0F0F] max-w-[523px]">
                {subheadline}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-[212px]">

          {/* Left Column */}
          <div className="flex flex-col items-start gap-[64px] w-full max-w-[600px]">

            {/* Paragraphs */}
            {paragraphs && paragraphs?.length > 0 && (
              <div className="flex flex-col items-start gap-[24px] w-full">
                {paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="font-helvetica font-normal text-[20px] md:text-[23px] leading-[130%] tracking-[-1px] text-[#888888]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}

            {/* CTA */}
            {cta?.label && cta?.href && (
              <a
                href={cta.href}
                className="group box-border w-[140px] h-[52px] bg-white border-[2px] border-[#0F0F0F] rounded-[6px] flex items-center justify-center hover:bg-[#0F0F0F] hover:text-white transition-colors duration-300"
              >
                <span className="font-helvetica font-bold text-[17.13px] leading-[20px] tracking-[-0.5px] text-[#0F0F0F] group-hover:text-white text-center">
                  {cta.label}
                </span>
              </a>
            )}
          </div>

          {/* Right Column – Image */}
          {image?.asset?.url && (
            <div className="relative w-full max-w-[404px] aspect-[404/818] hidden lg:block">
              <div className="relative w-full h-full mix-blend-multiply">
                <Image
                  src={image.asset.url}
                  alt={headline ?? "Award Trophy"}
                  fill
                  className="object-cover object-center"
                  sizes="404px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
