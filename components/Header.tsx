"use client";

import { HeaderProps } from "@/types";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header({ data }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Behavior (Hide/Show on scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY < 80) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  if (
    !data ||
    !Array.isArray(data.navigation) ||
    !Array.isArray(data.actions)
  ) {
    return null;
  }

  return (
    <>
      <div className="w-full flex justify-center relative z-50 pointer-events-none">
        <header
          className={`
            fixed top-4 lg:top-18 w-[95%] lg:w-full max-w-[1382px]
            flex justify-between items-center
            transition-all duration-500 ease-in-out
            will-change-transform will-change-opacity
            pointer-events-auto
            ${visible || isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"}
          `}
        >
          {/* --- LEFT BLOCK (Logo + Nav) --- */}
          <div className="relative flex items-center justify-between lg:justify-start w-full lg:w-auto lg:max-w-[494px] h-[68px] bg-white rounded-lg shadow-[0px_0px_2px_rgba(23,16,14,0.2)] backdrop-blur-[5px] px-3 z-50">
            {/* Logo */}
            <div className="flex items-center justify-center w-[107px] h-[64px] bg-gray-100 rounded ml-1 overflow-hidden shrink-0">
              <img
                src={data?.logo?.asset?.url || ""}
                alt={data?.logo?.alt || "Logo"}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 ml-8">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 font-bold text-[18px] tracking-[-0.5px] text-[#1E0903] hover:text-gray-600 transition-colors"
                >
                  {item.label}
                  {(item.hasDropdown ||
                    item.label === "Services" ||
                    item.label === "Resources") && <ChevronDown size={18} />}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12 gap-[5px] group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-[2.5px] bg-[#1E0903] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[2.5px] bg-[#1E0903] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 translate-x-2" : ""
                }`}
              />
              <span
                className={`w-6 h-[2.5px] bg-[#1E0903] rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </button>
          </div>

          {/* --- RIGHT BLOCK (Desktop Actions) --- */}
          <div className="hidden lg:flex items-center justify-end px-[19px] py-[8px] gap-[41px] w-full max-w-[529px] h-[64px] bg-white rounded-lg shadow-[0px_0px_2px_rgba(23,16,14,0.2)] backdrop-blur-[5px]">
            {data.actions.map((btn) =>
              btn.variant === "primary" ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="flex justify-center items-center px-[22px] py-[14px] bg-[#1E0903] rounded-[6px] h-[48px] min-w-[144px] hover:bg-black/80 transition-colors"
                >
                  <span className="font-bold text-[19px] tracking-[-0.5px] text-white">
                    {btn.label}
                  </span>
                </a>
              ) : (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="font-bold text-[18.6px] tracking-[-0.5px] text-[#0F0F0F] hover:text-gray-600 transition-colors"
                >
                  {btn.label}
                </a>
              )
            )}
          </div>
        </header>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl
          flex flex-col pt-28 pb-10 px-6 transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col gap-6 mb-8 overflow-y-auto">
            {data.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-[22px] font-bold text-[#1E0903] border-b border-gray-100 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                {(item.hasDropdown ||
                  item.label === "Services" ||
                  item.label === "Resources") && <ChevronDown />}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            {data.actions.map((btn) =>
              btn.variant === "primary" ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="flex justify-center items-center w-full py-[16px] bg-[#1E0903] rounded-[8px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-bold text-[20px] text-white">
                    {btn.label}
                  </span>
                </a>
              ) : (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="flex justify-center items-center w-full py-[12px] border border-[#1E0903] rounded-[8px] font-bold text-[18px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {btn.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
