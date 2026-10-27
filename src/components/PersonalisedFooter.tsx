import React from "react";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { SparkleOrnament } from "./Ornament";
import { Reveal } from "./Reveal";

export const PersonalisedFooter: React.FC = () => {
  return (
    <footer
      id="about"
      aria-label="Personalised jewellery and footer"
      className="relative w-full mt-16 md:mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12">
        <Reveal>
          {/* ONE Continuous Terracotta Panel */}
          <div className="relative rounded-[2px] bg-gradient-to-br from-[#B85A41] via-[#A94E38] to-[#8A3D2C] p-8 sm:p-12 md:p-16 border border-ivory/20 shadow-2xl text-ivory overflow-hidden">
            {/* Hanging Gold Crescent Pendant from top-centre */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-28 sm:w-36 pointer-events-none z-10">
              <img
                src={IMAGES.footerPendantHanging}
                alt="Gold crescent pendant necklace hanging from above"
                width={150}
                height={200}
                loading="lazy"
                className="w-full h-auto object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Partial gold jewelry object cropped at top-right corner */}
            <div className="absolute top-0 right-0 w-24 sm:w-32 translate-x-4 -translate-y-4 pointer-events-none opacity-80">
              <img
                src={IMAGES.footerGoldAccent}
                alt="Gold bangle accent"
                width={140}
                height={140}
                loading="lazy"
                className="w-full h-auto object-contain filter drop-shadow-lg"
              />
            </div>

            {/* Sparkle ornaments in gold */}
            <div className="absolute left-8 top-12 hidden md:block">
              <SparkleOrnament size={18} color="#FFE6C2" />
            </div>
            <div className="absolute right-1/4 top-16 hidden md:block">
              <SparkleOrnament size={16} color="#FFE6C2" />
            </div>

            {/* TOP BANNER AREA: Large Centred Headline */}
            <div className="pt-16 sm:pt-20 pb-16 md:pb-24 text-center relative z-20">
              <h2 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.95] tracking-[0.03em] text-ivory text-balance max-w-4xl mx-auto">
                Personalised jewellery
                <br />
                designed for{" "}
                <span className="font-emphasis italic font-normal text-[#FFF2E2] lowercase">
                  you.
                </span>
              </h2>
            </div>

            {/* DIVIDER LINE */}
            <div className="w-full h-[1px] bg-ivory/20 my-8" />

            {/* BOTTOM ROW: Left Tagline & 3 Link Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start py-4">
              {/* Left Column: Tagline */}
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl tracking-wide leading-tight text-ivory max-w-xs">
                  Let your{" "}
                  <span className="font-emphasis italic text-[#FFF2E2] lowercase">
                    Jewellery
                  </span>{" "}
                  light
                  <br />
                  up the season
                </h3>
              </div>

              {/* Centre / Right: 3 Link Columns */}
              <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                {COPY.footer.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col space-y-3">
                    <span className="micro-label text-ivory/50 block mb-1">
                      {col.title}
                    </span>
                    {col.links.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/85 hover:text-[#FFF2E2] hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-gold transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* SUB-FOOTER BAR: Brand Left, Credit Centre, Socials Right */}
            <div className="mt-12 pt-8 border-t border-ivory/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-ivory/70">
              {/* Brand Logo */}
              <div className="flex items-center">
                <span className="font-display text-xl tracking-wider text-ivory font-bold">
                  Sapphire
                </span>
                <span className="text-gold font-serif text-sm ml-0.5 -mt-1 font-bold">*</span>
              </div>

              {/* Centred Credit */}
              <div className="text-[0.6875rem] font-sans tracking-wider uppercase text-ivory/60">
                {COPY.footer.copyright}
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sapphire on LinkedIn"
                  className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:bg-ivory hover:text-terracotta hover:border-ivory transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sapphire on Facebook"
                  className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:bg-ivory hover:text-terracotta hover:border-ivory transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Sapphire on Twitter"
                  className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:bg-ivory hover:text-terracotta hover:border-ivory transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
