"use client";

type ArticleSectionProps = {
  data?: {
    headline?: string;
    description?: string;
    stat?: {
      label?: string;
      value?: string;
      context?: string;
    };
    cta?: {
      label?: string;
      href?: string;
    };
  };
};

export default function ArticleSection({ data }: ArticleSectionProps) {
  if (!data) return null;

  const { headline, description, stat, cta } = data;

  return (
    <section className="w-full bg-[#1E0903] flex items-center justify-center py-[120px] px-4 overflow-hidden">
      <div className="relative w-full max-w-6xl min-h-[253px]">
        {/* Gradient Back Card */}
        <div className="absolute top-[11px] left-0 w-[calc(100%-9px)] h-full rounded-[6px] border-[0.75px] border-black z-0">
          <div
            className="w-full h-full rounded-[5px] opacity-90"
            style={{
              background:
                "linear-gradient(95.72deg, #E7DFD4 0%, #E9BFC9 14%, #FF59AE 26%, #FD368A 33%, #F45669 44%, #EC7551 51%, #49AA3F 67%, #1C997C 78%, #B1DFAB 96%, #E7DFD4 100%)",
            }}
          />
        </div>

        {/* White Content Card */}
        <div className="relative left-[4px] md:left-[9px] top-0 w-full bg-white border-[0.75px] border-[#17100E] rounded-[6px] z-10 flex flex-col lg:flex-row items-center p-[24px] lg:px-[24px] lg:py-0 min-h-[253px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-[40px] lg:gap-[56px] w-full lg:w-1/2 pt-6 lg:pt-0">
            {headline && (
              <h2 className="font-helvetica font-light text-[32px] md:text-[48px] leading-[100%] tracking-[-2.13px] text-black max-w-lg">
                {headline}
              </h2>
            )}

            {description && (
              <p className="font-helvetica font-normal text-[16px] md:text-[17.7px] leading-[132%] tracking-[-0.03em] text-black max-w-lg">
                {description}
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-[200px] bg-gray-300 mx-[40px] xl:mx-[80px]" />
          <div className="block lg:hidden w-full h-[1px] bg-gray-300 my-[40px]" />

          {/* Right Stats + CTA */}
          <div className="flex flex-col w-full lg:w-auto items-end justify-center gap-[24px]">
            {stat && (
              <div className="relative flex flex-col items-end">
                {stat.label && (
                  <span className="absolute -left-[30px] top-[15px] font-helvetica font-normal text-[13.8px] leading-[125%] text-black">
                    {stat.label}
                  </span>
                )}

                {stat.value && (
                  <span className="font-helvetica font-normal text-[80px] md:text-[127.5px] leading-[0.9] tracking-[-9px] text-black">
                    {stat.value}
                  </span>
                )}

                {stat.context && (
                  <span className="font-helvetica font-normal text-[13.6px] leading-[127%] text-right text-black mt-2">
                    {stat.context}
                  </span>
                )}
              </div>
            )}

            {cta?.label && cta?.href && (
              <a
                href={cta.href}
                className="group flex items-center justify-center w-[137px] h-[39px] border-[1.5px] border-[#17100E] rounded-[4.5px] hover:bg-[#17100E] hover:text-white transition-colors duration-300"
              >
                <span className="font-helvetica font-bold text-[13.7px] leading-[15px] tracking-[-0.37px] text-[#17100E] group-hover:text-white">
                  {cta.label}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
