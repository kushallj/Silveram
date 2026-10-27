import React, { useState } from "react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { PillButton } from "./PillButton";
import { CircleArrowButton } from "./CircleArrowButton";
import { SparkleOrnament } from "./Ornament";
import { Reveal } from "./Reveal";

export const DiamondCampaign: React.FC = () => {
  const [addedRight, setAddedRight] = useState(false);

  return (
    <section
      id="diamonds"
      aria-label="Exclusive Diamond Designs"
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Top Headline: Centred, overlapping the portrait */}
        <Reveal>
          <div className="text-center relative z-20 mb-8 md:mb-[-40px]">
            {/* Sparkle ornaments flanking headline */}
            <div className="hidden md:block absolute right-1/4 -top-3">
              <SparkleOrnament size={22} color="#C7A15C" />
            </div>

            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.98] tracking-[0.04em] text-ivory text-balance max-w-3xl mx-auto">
              Sparkle endlessly with
              <br />
              <span className="font-emphasis italic font-normal text-gold-light lowercase">
                exclusive
              </span>{" "}
              <span className="inline-block align-middle mx-1">
                <span className="inline-block w-6 h-6 rounded-full border border-gold/70 overflow-hidden align-middle">
                  <img
                    src={IMAGES.heroRingInline}
                    alt="Diamond ring icon"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </span>
              </span>{" "}
              diamond
              <br />
              designs
            </h2>
          </div>
        </Reveal>

        {/* 3-Zone Composition: Left / Centre Portrait / Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center pt-6">
          {/* LEFT ZONE: cols 1-4 */}
          <div className="order-2 md:order-1 md:col-span-4 flex flex-col space-y-6 md:pr-4">
            <Reveal delayMs={100}>
              {/* Landscape photo of gold ring on satin */}
              <div className="w-full max-w-[280px] rounded-sm overflow-hidden border border-ivory/15 bg-page-secondary/60">
                <img
                  src={IMAGES.exclusiveRingSatin}
                  alt="Gold ring on champagne satin folds"
                  width={320}
                  height={180}
                  loading="lazy"
                  className="w-full h-36 object-cover jewelry-photo"
                />
              </div>

              {/* Artisan Note */}
              <p className="text-xs text-text-secondary leading-relaxed font-light max-w-[280px] mt-3">
                {COPY.diamond.leftCaption}
              </p>

              {/* Subhead & CTA */}
              <div className="pt-2">
                <h3 className="font-display text-xl text-ivory tracking-wide mb-3">
                  Find best{" "}
                  <span className="font-emphasis italic text-gold-light lowercase">
                    Diamond
                  </span>{" "}
                  for loved one's
                </h3>
                <div className="flex items-center space-x-3">
                  <PillButton
                    onClick={() => {
                      const el = document.getElementById("collections");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Find a Store
                  </PillButton>
                  <CircleArrowButton ariaLabel="Find diamond locations" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* CENTRE ZONE: cols 5-8 (Portrait ~3:4 on Terracotta Tile) */}
          <div className="order-1 md:order-2 md:col-span-4 flex justify-center relative">
            <Reveal delayMs={150}>
              {/* Decorative sparkle left of portrait */}
              <div className="hidden md:block absolute -left-6 top-1/3 z-20">
                <SparkleOrnament size={18} color="#C7A15C" />
              </div>

              <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-sm overflow-hidden bg-gradient-to-br from-[#B85A41] via-[#A94E38] to-[#8A3D2C] shadow-2xl p-1">
                <img
                  src={IMAGES.exclusivePortrait}
                  alt="Portrait of woman with dark bob hairstyle wearing gold pendant necklace"
                  width={400}
                  height={533}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 border border-ivory/15 rounded-sm pointer-events-none" />
              </div>
            </Reveal>
          </div>

          {/* RIGHT ZONE: cols 9-12 (Golden Earring Card & Add to Cart) */}
          <div className="order-3 md:order-3 md:col-span-4 flex flex-col md:items-end space-y-4 md:pl-6">
            <Reveal delayMs={200}>
              <div className="w-full max-w-[240px]">
                <span className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/80 block mb-2">
                  {COPY.diamond.rightTag}
                </span>

                {/* Terracotta card with gold chandelier earrings */}
                <div className="bg-gradient-to-br from-[#A94E38] to-[#8A3D2C] border border-ivory/15 p-4 rounded-sm shadow-md aspect-square flex items-center justify-center overflow-hidden group">
                  <img
                    src={IMAGES.exclusiveEarringTerracotta}
                    alt="18k gold chandelier earrings"
                    width={220}
                    height={220}
                    loading="lazy"
                    className="w-full h-full object-contain filter brightness-105 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Add to Cart Micro Link */}
                <button
                  type="button"
                  onClick={() => {
                    setAddedRight(true);
                    setTimeout(() => setAddedRight(false), 1600);
                  }}
                  className="mt-3 text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-ivory/90 hover:text-gold flex items-center transition-colors"
                >
                  {addedRight ? "ADDED TO ATELIER ✓" : COPY.diamond.rightCta}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
