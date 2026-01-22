"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each element
      delayChildren: 0.2, // Initial delay
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // Cubic Bezier for smooth "premium" feel
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroContent({ data }: any) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-start w-full max-w-[1200px] px-5 md:px-0"
    >
      {/* --- Headlines Section --- */}
      <div className="relative w-full max-w-[966px] mb-8 lg:mb-[32.5px]">
        <div className="overflow-hidden">
          <motion.h1
            variants={textRevealVariants}
            className="font-helvetica font-medium text-4xl sm:text-6xl lg:text-[90px] leading-tight lg:leading-[94px] tracking-tight lg:tracking-[-5.9px] text-white block"
          >
            {data.titleLine1 || "Lead the Pack with Tiger-Driven Insights"}
          </motion.h1>
        </div>

        {/* Line 2 - Offset & Wrapped */}
        <div className="w-full flex justify-start lg:justify-end lg:pr-[35px] mt-2 lg:mt-[-10px]">
          <div className="overflow-hidden">
            <motion.span
              variants={textRevealVariants}
              className="font-helvetica font-medium text-4xl sm:text-6xl lg:text-[90px] leading-tight lg:leading-[104px] tracking-tight lg:tracking-[-6.9px] text-white block"
            >
              {data.titleLine2 || "outpacing Rivals"}
            </motion.span>
          </div>
        </div>
      </div>

      {/* --- Description Section --- */}
      <motion.div
        variants={fadeUpVariants}
        className="w-full max-w-[827px] border-t-[2px] border-white pt-6 lg:pt-[38.5px] pb-8 lg:pb-[40px]"
      >
        <p className="font-inter font-light text-lg sm:text-2xl lg:text-[25.7px] leading-snug lg:leading-[31px] tracking-tight lg:tracking-[-1.04px] text-white max-w-full lg:max-w-[766px]">
          {data.description ||
            "Harness the precision and agility of Tiger Analytics to unlock transformative insights that drive innovation, optimize decision-making, and accelerate your business growth. With our AI-powered solutions, you can stay ahead of the competition and make data-driven decisions with confidence."}
        </p>
      </motion.div>

      {/* --- CTA Buttons Section --- */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-[16px] w-full sm:w-auto"
      >
        {data?.ctas?.map((cta: any, index: number) => {
          const isPrimary = cta?.variant === "primary";

          if (isPrimary) {
            return (
              <motion.a
                key={index}
                href={cta?.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-full sm:w-[166.88px] h-[52px] bg-white rounded-[6px] cursor-pointer"
              >
                <span className="font-inter font-bold text-[17.06px] leading-[20px] tracking-[-0.5px] text-[#0F0F0F] text-center">
                  {cta.label}
                </span>
              </motion.a>
            );
          }

          return (
            <motion.a
              key={index}
              href={cta?.href}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center box-border w-full sm:w-[139.45px] h-[52px] border-[2px] border-white rounded-[6px] transition-colors cursor-pointer"
            >
              <span className="font-inter font-bold text-[17.13px] leading-[20px] tracking-[-0.5px] text-white text-center">
                {cta.label}
              </span>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
