"use client";

import Image from "next/image";
import React from "react";

// =====================
// Interfaces
// =====================

interface LinkItem {
  label: string;
  href: string;
}

interface Column {
  title: string;
  links: LinkItem[];
}

interface SanityImage {
  src?: string;
  alt?: string;
}

interface FooterData {
  logo?: SanityImage;
  columns?: Column[];
  newsletter?: {
    heading?: string;
    description?: string;
    placeholder?: string;
    buttonLabel?: string;
  };
  copyright?: string;
  legalLinks?: LinkItem[];
  socials?: {
    name: string;
    href: string;
    icon: string;
  }[];
  credit?: {
    text?: string;
    links?: LinkItem[];
  };
}

interface ColumnProps {
  title: string;
  links: LinkItem[];
}

const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  const { logo, columns, newsletter, copyright, legalLinks, socials, credit } =
    data;

  const logoUrl = logo?.src;

  console.log("logo: ", logoUrl);

  return (
    <div className="w-full bg-[#F4F3EC] flex flex-col items-center py-7 px-6 pb-10 gap-6 font-sans text-[#838383]">
      {/* ================= Main Footer ================= */}
      <div className="w-full max-w-7xl bg-[#0F1415] border border-[#BBBBBB]/70 rounded-2xl flex flex-col lg:flex-row items-start px-10 py-20 gap-20">
        {/* Columns */}
        <div className="flex flex-col md:flex-row items-start gap-20 flex-grow">
          {/* Logo */}
          {logoUrl && (
            <div className="relative w-[107px] h-[40px]">
              <Image
                src={logoUrl}
                alt={logo.alt || "footer logo"}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}

          {columns?.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* ================= Newsletter ================= */}
        {newsletter && (
          <div className="flex flex-col items-start gap-6 w-full max-w-md">
            <div className="flex flex-col gap-4">
              {newsletter.heading && (
                <h3 className="font-semibold text-base tracking-tight text-[#F9FBFB]">
                  {newsletter.heading}
                </h3>
              )}
              {newsletter.description && (
                <p className="text-sm leading-relaxed">
                  {newsletter.description}
                </p>
              )}
            </div>

            <form className="flex w-full h-14">
              <div className="flex-grow bg-[#0F1415] border border-[#344346] rounded-l-md px-4 flex items-center">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="bg-transparent outline-none text-[#DFE6E7] placeholder-[#838383] text-sm font-semibold w-full"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center px-6 bg-gradient-to-b from-[#F18E21] to-[#BF6400] rounded-r-lg"
              >
                <span className="text-white text-sm tracking-wide">
                  {newsletter.buttonLabel}
                </span>
              </button>
            </form>
          </div>
        )}
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center px-3 gap-6 md:gap-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {copyright && (
            <span className="text-sm underline mix-blend-difference">
              {copyright}
            </span>
          )}

          <div className="flex gap-6">
            {legalLinks?.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm mix-blend-difference hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials?.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
            >
              <SocialIcon icon={s.icon} name={s.name} />
            </a>
          ))}
        </div>
      </div>

      {/* ================= Credit ================= */}
      {credit && (
        <div className="w-full max-w-7xl bg-[#0F0F0F] border border-[#BBBBBB] rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-10">
          {credit.text && (
            <span className="text-sm underline text-[#838383]">
              {credit.text}
            </span>
          )}

          <div className="flex flex-wrap justify-center items-center gap-6">
            {credit.links?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#838383] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// =====================
// Helpers
// =====================

const FooterColumn: React.FC<ColumnProps> = ({ title, links }) => (
  <div className="flex flex-col items-start gap-6 w-40">
    <h4 className="text-base text-[#F9FBFB]">{title}</h4>
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm text-[#838383] hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const SocialIcon: React.FC<{ icon: string; name: string }> = ({
  icon,
  name,
}) => {
  if (!icon) return null;

  return (
    <div className="relative w-6 h-6">
      <Image
        src={icon}
        alt={name}
        fill
        className="object-contain hover:opacity-80 transition-opacity"
      />
    </div>
  );
};

export default Footer;
