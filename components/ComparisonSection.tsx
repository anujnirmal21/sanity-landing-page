"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { clsx } from "clsx";

interface Competitor {
  _key: string;
  name: string;
  score: string;
  barImage?: any;
}

interface CompetitionLeaderboardProps {
  data: {
    heading?: string;
    description?: string;
    button?: {
      text: string;
      url: string;
    };
    statsTitle?: string;
    backgroundImage?: any;
    competitors?: Competitor[];
  };
}

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const barVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 1, ease: "circOut", delay: 0.4 },
  },
};

// --- Main Component ---

export default function CompetitionLeaderboard({
  data,
}: CompetitionLeaderboardProps) {
  const {
    heading,
    description,
    button,
    statsTitle,
    backgroundImage,
    competitors,
  } = data;

  const bgUrl = backgroundImage ? urlFor(backgroundImage).url() : null;

  return (
    <section
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full flex flex-col justify-center md:px-28 py-12 md:py-20 lg:py-24 bg-[#1E0903] px-4"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative w-full mx-auto max-w-7xl rounded-[32px] overflow-hidden bg-white shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16"
      >
        <div className="flex flex-col gap-12 lg:gap-20 items-start">
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-6">
              {heading && (
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-tight text-black font-bold"
                >
                  {heading}
                </motion.h2>
              )}

              {description && (
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-[19px] leading-relaxed text-gray-700 max-w-xl font-medium"
                >
                  {description}
                </motion.p>
              )}
            </div>

            {button && (
              <motion.div variants={itemVariants} className="pt-4">
                <CustomStackedButton text={button.text} href={button.url} />
              </motion.div>
            )}
          </div>

          {/* Right Stats Area */}
          <div className="flex-1 w-full max-w-2xl pt-2">
            {statsTitle && (
              <motion.div
                variants={itemVariants}
                className="border-b-2 border-black pb-4 mb-8"
              >
                <h3 className="text-lg font-extrabold text-black uppercase tracking-widest">
                  {statsTitle}
                </h3>
              </motion.div>
            )}

            <div className="flex flex-col gap-6">
              {competitors?.map((item) => (
                <motion.div
                  key={item._key}
                  variants={itemVariants}
                  className="grid grid-cols-[100px_1fr_60px] md:grid-cols-[140px_1fr_80px] items-center gap-4 md:gap-6 group"
                >
                  <span className="text-base md:text-lg text-gray-900 font-semibold leading-tight break-words">
                    {item.name}
                  </span>

                  {/* Animated Bar Container */}
                  <div className="relative h-10 md:h-12 w-full flex items-start bg-gray-50 rounded-r-full overflow-hidden">
                    {item.barImage && (
                      <motion.div
                        variants={barVariants}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={urlFor(item.barImage).url()}
                          alt="Score bar"
                          fill
                          className="object-contain object-left"
                        />
                      </motion.div>
                    )}
                  </div>

                  <span className="text-right text-2xl md:text-3xl font-bold text-black tabular-nums">
                    {item.score}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- Custom 3D Layered Button Component ---

const CustomStackedButton = ({
  text,
  href,
}: {
  text: string;
  href: string;
}) => {
  return (
    <Link
      href={href || "#"}
      className="group relative inline-block w-[220px] h-[60px] cursor-pointer"
    >
      {/* Layer 1: Bottom Shadow (Orange) */}
      <div
        className="absolute w-full h-[52px] bg-[#E87722] rounded-[6px]"
        style={{ top: "6px", left: "6px" }}
      />

      {/* Layer 2: Middle Gradient (Rainbow) */}
      <div
        className="absolute w-full h-[52px] rounded-[6px]"
        style={{
          top: "3px",
          left: "3px",
          background:
            "linear-gradient(96.1deg, #FE318D 5%, #FF3973 18%, #EF7976 31%, #FD9454 47%, #D5877E 67%, #9BD91A 83%, #09F200 100%, #3ED20D 100%)",
        }}
      />

      {/* Layer 3: Top Main Button (Black) */}
      <motion.div
        whileHover={{ x: 2, y: 2 }}
        whileTap={{ x: 4, y: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="absolute w-full h-[52px] bg-[#1E0903] rounded-[6px] flex items-center justify-center z-10"
        style={{ top: "0px", left: "0px" }}
      >
        <span className="font-sans font-bold text-[19px] leading-[20px] tracking-[-0.5px] text-white">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};
