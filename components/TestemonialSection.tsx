"use client";

import Image from "next/image";
import { clsx } from "clsx";
import { motion, Variants } from "framer-motion";
import { TestimonialData } from "@/types";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TestimonialsSection({
  data,
}: {
  data?: TestimonialData;
}) {
  if (!data) return null;

  const { header, testimonials } = data;

  return (
    <section className="w-full flex justify-center md:mx-12 py-12 md:py-20 bg-[#FEF7EE] rounded-[24px] overflow-hidden">
      <div className="w-full max-w-[1392px] px-4 md:px-8 flex flex-col gap-10 md:gap-[80px]">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full max-w-[1293px] mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="font-sans font-bold text-[32px] md:text-[50px] lg:text-[64px] leading-[1.1] tracking-[-1px] md:tracking-[-3px] text-[#1E0903] text-left"
          >
            {header.line1}
          </motion.h2>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-[32px] md:text-[50px] lg:text-[64px] leading-[1.1] tracking-[-1px] md:tracking-[-3px] text-[#1E0903] text-right"
          >
            {header.line2}
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 md:gap-[36px] w-full items-center"
        >
          {/* Row 1 */}
          <div className="flex flex-col xl:flex-row gap-6 md:gap-[24px] w-full justify-center">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] w-full xl:w-auto">
              <PersonaCard
                image={testimonials.vipul.image}
                name={testimonials.vipul.name}
              />
              <LogoCard
                text={testimonials.vipul.companyLogoText}
                font="font-serif"
              />
            </div>
            <ReviewCard
              review={testimonials.vipul.review}
              name={testimonials.vipul.authorName}
              role={testimonials.vipul.authorRole}
              bgColor="bg-[#7AFFE7]"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col-reverse xl:flex-row gap-6 md:gap-[24px] w-full justify-center">
            <ReviewCard
              review={testimonials.benny.review}
              name={testimonials.benny.authorName}
              role={testimonials.benny.authorRole}
              bgColor="bg-[#FC7AFF]"
            />
            <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-[24px] w-full xl:w-auto">
              <LogoCard
                text={testimonials.benny.companyLogoText}
                font="font-mono"
              />
              <PersonaCard
                image={testimonials.benny.image}
                name={testimonials.benny.name}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col xl:flex-row gap-6 md:gap-[24px] w-full justify-center">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] flex-1">
              <LogoCard text={testimonials.leah.companyLogoText} />
              <PersonaCard
                image={testimonials.leah.image}
                name={testimonials.leah.name}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-[24px] flex-1">
              <PersonaCard
                image={testimonials.nikki.image}
                name={testimonials.nikki.name}
              />
              <LogoCard
                text={testimonials.nikki.companyLogoText}
                font="font-serif"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Subcomponents with Motion

const hoverEffect = {
  hover: {
    y: -8,
    boxShadow: "0px 12px 24px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as const;

const PersonaCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative w-full md:flex-1 xl:w-[313px] h-[290px] border border-[#0F0F0F] rounded-[1px] bg-[#E7E7E7] overflow-hidden flex-shrink-0"
    >
      <motion.div variants={hoverEffect} className="w-full h-full relative">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 hover:opacity-0" />
      </motion.div>
    </motion.div>
  );
};

const LogoCard = ({
  text,
  font = "font-sans",
}: {
  text: string;
  font?: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="w-full md:flex-1 xl:w-[266px] h-[290px] flex-shrink-0"
    >
      <motion.div
        variants={hoverEffect}
        className="w-full h-full border border-[#0F0F0F] bg-[#FEF7EE] rounded-[1px] flex items-center justify-center"
      >
        <span className={clsx("text-[30px] text-[#0F0F0F]", font)}>{text}</span>
      </motion.div>
    </motion.div>
  );
};

const ReviewCard = ({
  review,
  name,
  role,
  bgColor,
}: {
  review: string;
  name: string;
  role: string;
  bgColor: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="w-full xl:flex-1 xl:max-w-[615px] min-h-[290px] flex-shrink-0"
    >
      <motion.div
        variants={hoverEffect}
        className={clsx(
          "w-full h-full border border-[#0F0F0F] rounded-[1px] p-6 md:p-[22px] flex flex-col justify-between",
          bgColor
        )}
      >
        <p className="font-sans font-light text-[20px] md:text-[24px] leading-[1.3] tracking-[-1.04px] text-[#0F0F0F] line-clamp-6 md:line-clamp-4 mb-4">
          {review}
        </p>

        <div className="relative pt-4 border-t border-[#17100E] flex items-center justify-between">
          <div>
            <h4 className="font-bold text-[20px] md:text-[22.5px] leading-[24px] tracking-[-0.24px] text-[#0F0F0F]">
              {name}
            </h4>
            <p className="font-normal text-[16px] md:text-[17.5px] leading-[18px] tracking-[-0.54px] text-[#0F0F0F] mt-1">
              {role}
            </p>
          </div>

          <div className="w-[24px] h-[24px] transition-transform duration-300 group-hover:rotate-90">
            <PlusIcon color="#0F0F0F" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PlusIcon = ({ color }: { color: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 0V13.5H0V16.5H13.5V30H16.5V16.5H30V13.5H16.5V0H13.5Z"
      fill={color}
    />
  </svg>
);