"use client";

import Marquee from "react-fast-marquee";

type SponsorLogo = {
  name: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

type SponsorsSectionProps = {
  data?: {
    logos: SponsorLogo[];
  };
};

export default function SponsorsSection({ data }: SponsorsSectionProps) {
  if (!data?.logos?.length) return null;

  return (
    <section className="relative w-full mx-auto h-[255px] bg-white flex items-center justify-center py-[96px] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[200px] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-[200px] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div className="w-full relative z-0">
        <Marquee gradient={false} speed={40} autoFill pauseOnHover>
          {data.logos.map((logo, index) => {
            const imageSrc = logo.image?.asset?.url;
            if (!imageSrc) return null;

            return (
              <div
                key={index}
                className="mx-[25px] flex items-center justify-center w-[160px] h-[40px]"
              >
                <img
                  src={imageSrc}
                  alt={logo.name}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
