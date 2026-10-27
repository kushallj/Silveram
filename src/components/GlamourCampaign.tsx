import React from "react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { CircleArrowButton } from "./CircleArrowButton";
import { DiamondOrnament, SparkleOrnament, PaginationDots } from "./Ornament";
import { Reveal } from "./Reveal";

export const GlamourCampaign: React.FC = () => {
  return (
    <section
      id="glamour"
      aria-label="Glamour and Handcrafted Bracelets"
      className="relative w-full py-16 md:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Mobile Headline First */}
        <div className="block md:hidden mb-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,7vw,4rem)] leading-[0.98] tracking-[0.04em] text-ivory">
              <span className="font-emphasis italic font-normal text-gold-light lowercase">
                Glamour
              </span>{" "}
              that
              <br />
              steals the show
            </h2>
          </Reveal>
        </div>

        {/* 3-Zone Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 relative">
          {/* ZONE 1: Left Column (≈ 3 cols) */}
          <div className="md:col-span-3 md:pr-8 flex flex-col justify-between space-y-8">
            <Reveal>
              <div>
                <span className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/80 leading-tight block">
                  Premium Grade
                  <br />
                  <span className="text-gold-light">Gold Plated Braceleted</span>
                </span>
                <a
                  href="#collections"
                  className="mt-3 inline-block text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-ivory/90 hover:text-gold transition-colors"
                >
                  {COPY.glamour.leftShop}
                </a>
              </div>

              <div className="pt-8">
                <h3 className="font-display text-2xl text-ivory tracking-wide leading-snug">
                  Exquisite{" "}
                  <span className="font-emphasis italic text-gold-light lowercase">
                    Jewellery
                  </span>{" "}
                  for extraordinary You
                </h3>
                <p className="mt-2 text-xs text-text-secondary font-light leading-relaxed">
                  {COPY.glamour.leftDesc}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Full-height vertical hairline with terracotta diamond ornament */}
          <div className="hidden md:flex absolute left-3/12 top-0 bottom-0 -ml-[1px] flex-col items-center justify-center pointer-events-none z-10">
            <div className="w-[1px] flex-1 bg-ivory/15" />
            <div className="py-3">
              <DiamondOrnament size={18} variant="terracotta" />
            </div>
            <div className="w-[1px] flex-1 bg-ivory/15" />
          </div>

          {/* ZONE 2: Centre Column (≈ 5 cols) - Chunky Gold Chain on Stone Plinth */}
          <div className="md:col-span-5 md:px-8 flex flex-col justify-center items-center">
            <Reveal delayMs={100}>
              <div className="w-full max-w-[380px] relative">
                {/* Caption above photo */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[0.6875rem] font-sans text-ivory/70 tracking-wider">
                    {COPY.glamour.centerCaption}
                  </span>
                  <SparkleOrnament size={16} color="#C7A15C" />
                </div>

                {/* Photo: Chunky gold chain on grey stone plinth over satin */}
                <div className="rounded-sm overflow-hidden bg-page-secondary/50 border border-ivory/15 shadow-xl relative group">
                  <img
                    src={IMAGES.glamourChainPlinth}
                    alt="Chunky handcrafted gold chain link bracelet on sculpted grey stone plinth"
                    width={450}
                    height={400}
                    loading="lazy"
                    className="w-full h-80 object-cover jewelry-photo group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* ZONE 3: Right Column (≈ 4 cols) - Headline & Explore */}
          <div className="md:col-span-4 md:pl-8 flex flex-col justify-between">
            {/* Desktop Headline: Right-aligned */}
            <div className="hidden md:block text-right">
              <Reveal delayMs={150}>
                <h2 className="font-display text-[clamp(2.5rem,4.8vw,4.2rem)] leading-[0.98] tracking-[0.04em] text-ivory">
                  <span className="font-emphasis italic font-normal text-gold-light lowercase">
                    Glamour
                  </span>{" "}
                  that
                  <br />
                  steals the show
                </h2>
              </Reveal>
            </div>

            {/* Lower Right Section: Explore with circular arrow, bullet text, 3 dots */}
            <Reveal delayMs={200}>
              <div className="pt-8 md:pt-0">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-[0.8rem] font-sans font-semibold tracking-wider text-ivory uppercase">
                    {COPY.glamour.rightExplore}
                  </span>
                  <CircleArrowButton
                    size="sm"
                    ariaLabel="Explore handmade gold chain bracelets"
                    onClick={() => {
                      const el = document.getElementById("collections");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </div>

                {/* Bullet text */}
                <div className="flex items-start space-x-2 text-xs text-text-secondary font-light max-w-xs">
                  <span className="text-gold text-sm leading-none">•</span>
                  <span>{COPY.glamour.rightNote}</span>
                </div>

                {/* 3 Dots */}
                <div className="mt-5">
                  <PaginationDots total={3} active={0} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
