"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion, Variants } from "framer-motion";

// --- Types for CMS Integration ---
type PromoProps = {
  data?: {
    title: string;
    cta: {
      label: string;
      href: string;
    };
    backgroundImage?: any;
  };
};

// --- Mock / Fallback Data ---
const defaultData = {
  title: "The future of AI-driven business transformation begins here.",
  cta: {
    label: "Register Now",
    href: "#",
  },
  backgroundImage: null,
};

// --- Animations ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }, // Cubic bezier for smooth "settle"
  },
};

export default function PromoSection({ data = defaultData }: PromoProps) {
  const { title, cta, backgroundImage } = data;

  const bgImageUrl = backgroundImage
    ? urlFor(backgroundImage).url()
    : "https://placehold.co/1441x792/101010/333333/png?text=Background+Image";

  return (
    <section className="relative w-full min-h-[500px] lg:h-[792px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative w-full h-full"
        >
          <Image
            src={bgImageUrl}
            alt="Promo background"
            fill
            className="object-cover object-center opacity-70 md:opacity-80"
            priority
          />
        </motion.div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-8 md:gap-10 px-6 text-center w-full max-w-5xl"
      >
        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="font-inter font-bold text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72.8px] leading-[1.1] md:leading-[1.1] tracking-[-1.5px] md:tracking-[-4.8px] text-white drop-shadow-lg"
        >
          {title}
        </motion.h2>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative group w-[167px] h-[52px] cursor-pointer"
          >
            {/* Rainbow Gradient Border */}
            <div
              className="absolute -inset-[2px] rounded-[8px] opacity-90 blur-[1px] transition-opacity group-hover:opacity-100 group-hover:blur-[2px]"
              style={{
                background:
                  "linear-gradient(97.9deg, #F3E90B 0%, #FFB700 16%, #FF7500 31%, #FF4100 50%, #49B86C 68%, #05E7D2 83%, #8CD9E5 100%, #3ED20D 100%)",
              }}
            />

            {/* Actual Button */}
            <a
              href={cta.href}
              className="relative flex items-center justify-center w-full h-full bg-white rounded-[6px] hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-inter font-bold text-[18px] md:text-[19px] leading-[20px] tracking-[-0.5px] text-[#17100E] text-center">
                {cta.label}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
