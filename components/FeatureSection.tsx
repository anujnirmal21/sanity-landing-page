"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { AnimatePresence, motion, Variants } from "framer-motion";

export type FeatureLayout = "split" | "stacked";

export interface TabItem {
  title: string;
  description: string;
}

const EASE = [0.4, 0, 0.2, 1] as const;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export interface FeatureSectionProps {
  data: {
    layout: FeatureLayout;
    tag: {
      text: string;
      color?: string;
    };
    title: string;
    tabs: TabItem[];
    cta: {
      label: string;
      href: string;
    };
    imageSrc: string;
  };
}

const FeatureSection = ({ data }: FeatureSectionProps) => {
  const { layout, tag, title, tabs, cta, imageSrc } = data;
  const [activeTab, setActiveTab] = useState(0);

  const isStacked = layout === "stacked";

  const Header = () => (
    <div className="flex flex-col gap-6 items-start relative z-10">
      <div
        className="flex items-center gap-2 px-2 py-1 w-fit rounded-[25px] h-[34px] pr-4"
        style={{ backgroundColor: tag.color || "#FF5600" }}
      >
        <div className="w-[16px] h-[16px] bg-white rounded-full ml-2" />
        <span className="font-bold text-[14.45px] leading-[18px] tracking-[-0.05em] text-white">
          {tag.text}
        </span>
      </div>

      <h2
        className={clsx(
          "font-light text-[#17100E] text-[40px] md:text-[60px] lg:text-[70.13px] leading-[93%] tracking-[-2.84px]",
          isStacked ? "max-w-4xl" : "max-w-[650px]",
        )}
      >
        {title}
      </h2>
    </div>
  );

  const TabsList = () => (
    <div
      className={clsx(
        "w-full",
        isStacked
          ? "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12"
          : "flex flex-col gap-8 mt-[80px]",
      )}
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;

        return (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={clsx(
              "group cursor-pointer flex flex-col relative min-h-[100px]",
              isStacked ? "py-6" : "justify-center",
            )}
          >
            {/* underline */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-[#17100E]/10" />

              <motion.div
                initial={false}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 3, ease: EASE }}
                className="absolute top-0 left-0 h-full w-full bg-[#17100E] origin-left"
              />
            </div>

            <h3
              className={clsx(
                "font-bold text-[18.75px] leading-[24px] tracking-[-0.2px] mb-1 transition-colors duration-300",
                isActive ? "text-[#17100E]" : "text-[#6D6D6D]",
              )}
            >
              {tab.title}
            </h3>

            <p
              className={clsx(
                "font-normal text-[18.44px] leading-[24px] tracking-[-0.03em] transition-colors duration-300",
                !isStacked && "max-w-[505px]",
                isActive ? "text-[#17100E]" : "text-[#888888]",
              )}
            >
              {tab.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  const ImageArea = () => (
    <div
      className={clsx(
        "relative rounded-[22px] overflow-hidden bg-gray-100 shadow-sm border border-[#D9CECE]",
        isStacked
          ? "w-full h-[300px] md:h-[500px] lg:h-[600px] mt-10"
          : "w-full lg:flex-1 h-full min-h-[500px]",
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const CTA = () => (
    <div className={clsx(!isStacked && "mt-auto pt-8")}>
      <CTAButton label={cta.label} href={cta.href} />
    </div>
  );

  return (
    <section className="w-full flex justify-center py-6 px-4 md:py-10 font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className={clsx(
          "relative bg-white rounded-[24px] p-6 md:p-8 lg:p-[32px] w-full max-w-[1392px]",
          isStacked
            ? "flex flex-col"
            : "flex flex-col lg:flex-row gap-8 lg:gap-[60px] lg:min-h-[1022px]",
        )}
      >
        {isStacked ? (
          <>
            <div className="relative">
              <Header />
              <div className="hidden lg:block absolute right-0 top-2">
                <CTAButton label={cta.label} href={cta.href} />
              </div>
            </div>

            <ImageArea />
            <TabsList />

            <div className="mt-8 lg:hidden">
              <CTA />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-between w-full lg:w-[45%]">
              <Header />

              <div>
                <TabsList />
                <CTA />
              </div>
            </div>

            <div className="w-full lg:w-[55%] flex">
              <ImageArea />
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

const CTAButton = ({ label, href }: { label: string; href: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.25, ease: EASE }}
    className="inline-flex items-center justify-center w-[140px] h-[52px] border-2 border-[#0F0F0F] rounded-[6px] bg-white text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white transition-colors duration-300 box-border"
  >
    <span className="font-bold text-[17.13px] leading-[20px] tracking-[-0.5px] text-center">
      {label}
    </span>
  </motion.a>
);

export default FeatureSection;
