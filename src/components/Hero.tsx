import React, { useState } from "react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { PillButton } from "./PillButton";
import { CircleArrowButton } from "./CircleArrowButton";
import { DiamondOrnament, PaginationDots } from "./Ornament";
import { HeroTiles } from "./HeroTiles";
import { Reveal } from "./Reveal";

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      aria-label="Sapphire Hero"
      className="relative w-full pt-16 md:pt-20 pb-8 md:pb-12"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* ROW A: 12-Column Layout */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 relative pb-8 md:pb-12 items-center">
            {/* Left 8 Columns: Headline & Action */}
            <div className="md:col-span-8 flex flex-col items-center text-center px-2 sm:px-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="w-6 h-[1px] bg-ivory/25" aria-hidden="true" />
                <span className="micro-label text-ivory/70 tracking-[0.2em]">
                  {COPY.hero.eyebrow}
                </span>
                <span className="w-6 h-[1px] bg-ivory/25" aria-hidden="true" />
              </div>

              {/* Main Headline with Cormorant emphasis on "Unleash" and inline round ring */}
              <h1 className="font-display text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.95] tracking-[0.03em] text-ivory max-w-2xl text-balance">
                <span className="font-emphasis italic font-normal text-gold-light lowercase">
                  {COPY.hero.headlineLine1.split(" ")[0]}
                </span>{" "}
                <span>the</span>
                <br />
                <span>shining</span>{" "}
                <span className="inline-block align-middle mx-1.5 sm:mx-2.5">
                  <span className="inline-block w-[1.15em] h-[1.15em] rounded-full overflow-hidden border border-gold/60 p-0.5 shadow-md shadow-black/40 align-middle">
                    <img
                      src={IMAGES.heroRingInline}
                      alt="18k gold diamond ring"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-full"
                      loading="eager"
                    />
                  </span>
                </span>{" "}
                <span>beauty</span>
              </h1>

              {/* Action Buttons: Pill + Circular Arrow */}
              <div className="mt-8 flex items-center space-x-3">
                <PillButton
                  onClick={() => {
                    const el = document.getElementById("collections");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {COPY.hero.cta}
                </PillButton>
                <CircleArrowButton
                  ariaLabel="Find a Store locations"
                  onClick={() => {
                    const el = document.getElementById("collections");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </div>
            </div>

            {/* Vertical Hairline Divider with Terracotta Diamond Ornament on desktop */}
            <div className="hidden md:flex absolute left-8/12 top-0 bottom-0 -ml-[1px] flex-col items-center justify-center pointer-events-none z-10">
              <div className="w-[1px] flex-1 bg-ivory/15" />
              <div className="py-2">
                <DiamondOrnament size={18} variant="terracotta" />
              </div>
              <div className="w-[1px] flex-1 bg-ivory/15" />
            </div>

            {/* Right 4 Columns: Ring in Box Card */}
            <div className="md:col-span-4 md:pl-8 flex flex-col justify-between">
              <div className="bg-[#26110D]/70 border border-ivory/10 rounded-sm p-4 sm:p-5 relative group overflow-hidden">
                {/* Micro Label */}
                <div className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/80 leading-tight">
                  Premium Grade
                  <br />
                  <span className="text-gold-light">Gold Plated Ring</span>
                </div>

                {/* Ring in Open Box Image */}
                <div className="my-3 py-2 flex items-center justify-center">
                  <div className="relative w-full max-w-[210px] aspect-square rounded-sm overflow-hidden">
                    <img
                      src={IMAGES.heroRingBox}
                      alt="Gold Plated Ring in luxury cream velvet presentation box"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover jewelry-photo group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Bottom Row: Pagination Dots */}
                <div className="flex items-center justify-between pt-2 border-t border-ivory/10">
                  <PaginationDots
                    total={3}
                    active={activeSlide}
                    onChange={(idx) => setActiveSlide(idx)}
                  />
                  <span className="micro-label text-ivory/40">0{activeSlide + 1} / 03</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ROW B: Hero Tiles */}
        <Reveal delayMs={100}>
          <HeroTiles />
        </Reveal>
      </div>
    </section>
  );
};
