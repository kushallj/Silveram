import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { COPY } from "@/data/copy";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close mobile dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300 ${
        isScrolled
          ? "bg-[#200D0B]/90 backdrop-blur-md border-b border-ivory/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-ivory/10"
      }`}
    >
      <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="flex items-center text-ivory group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Sapphire Home"
        >
          <span className="font-display text-2xl tracking-[0.06em] font-bold text-ivory">
            {COPY.header.brand}
          </span>
          <span className="text-gold text-sm ml-0.5 -mt-2 font-serif font-bold">*</span>
        </a>

        {/* Center-Left: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7">
          <nav className="flex items-center space-x-7" aria-label="Main Navigation">
            {COPY.header.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.625rem] font-sans font-medium uppercase tracking-[0.18em] text-ivory/80 hover:text-gold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Vertical Hairline Divider */}
          <div className="h-4 w-[1px] bg-ivory/20" aria-hidden="true" />

          {/* Right-Center: About Us */}
          <a
            href="#about"
            className="text-[0.625rem] font-sans font-medium uppercase tracking-[0.18em] text-ivory/80 hover:text-gold transition-colors duration-200"
          >
            {COPY.header.about}
          </a>
        </div>

        {/* Far Right: Hamburger Icon */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-ivory hover:text-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.75]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dialog Menu */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-14 bg-[#200D0B]/95 backdrop-blur-xl border-t border-ivory/15 p-6 flex flex-col justify-between z-50 md:hidden"
        >
          <nav className="flex flex-col space-y-6 pt-4" aria-label="Mobile Navigation">
            {COPY.header.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-3xl tracking-wider text-ivory hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="h-[1px] w-full bg-ivory/15 my-2" />
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-2xl tracking-wider text-ivory/80 hover:text-gold transition-colors"
            >
              {COPY.header.about}
            </a>
          </nav>

          <div className="border-t border-ivory/15 pt-6 pb-4">
            <span className="micro-label text-ivory/50 block mb-2">VISIT OUR ATELIER</span>
            <p className="text-xs text-text-secondary leading-relaxed">
              Flagship Showrooms in London, Paris, Zurich & Sydney.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
