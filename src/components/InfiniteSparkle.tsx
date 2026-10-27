import React from "react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { PillButton } from "./PillButton";
import { CircleArrowButton } from "./CircleArrowButton";
import { VerticalHairline } from "./Ornament";
import { Reveal } from "./Reveal";

export const InfiniteSparkle: React.FC = () => {
  return (
    <section
      id="infinite-sparkle"
      aria-label="Infinite Sparkle Atelier Showcase"
      className="relative w-full py-16 md:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Centred Title: Infinite Sparkle* */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl tracking-[0.08em] text-ivory">
              Infinite{" "}
              <span className="font-emphasis italic font-normal text-gold-light lowercase">
                Sparkle
              </span>
              <span className="text-gold font-serif text-lg ml-0.5">*</span>
            </h2>
          </div>
        </Reveal>

        {/* Main Grid: Left Column & Right Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* LEFT COLUMN: cols 1-4 */}
          <div className="order-2 md:order-1 md:col-span-4 flex flex-col space-y-6">
            <Reveal delayMs={100}>
              {/* Brand mark & Most Loved Jewellery */}
              <div>
                <span className="font-display text-lg tracking-wider text-ivory/80 block">
                  {COPY.infinite.brand}
                </span>
                <span className="text-xs font-sans text-ivory font-medium tracking-wide">
                  {COPY.infinite.mostLoved}
                </span>
              </div>

              {/* Filter pill: "Diamonds ▾" */}
              <div>
                <button
                  type="button"
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-ivory/30 text-xs font-sans text-ivory hover:border-gold transition-colors"
                >
                  <span>{COPY.infinite.filterPill}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-ivory/60" />
                </button>
              </div>

              {/* Ring in white envelope / architectural plinth */}
              <div className="w-full max-w-[280px] aspect-[4/3] rounded-sm overflow-hidden bg-page-secondary/60 border border-ivory/15 shadow-lg group">
                <img
                  src={IMAGES.infiniteRingEnvelope}
                  alt="Gold ring placed inside bespoke architectural envelope"
                  width={360}
                  height={270}
                  loading="lazy"
                  className="w-full h-full object-cover jewelry-photo group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Red "W" care badge with micro text */}
              <div className="flex items-start space-x-3 max-w-[280px] pt-2">
                <div className="w-5 h-5 rounded-full bg-[#A94E38] text-ivory text-[0.625rem] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  {COPY.infinite.careBadge}
                </div>
                <p className="text-[0.6875rem] text-text-secondary leading-relaxed font-light">
                  {COPY.infinite.careText}
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT AREA: cols 5-12 (Portrait with Overlapping Card & Headline) */}
          <div className="order-1 md:order-2 md:col-span-8 flex flex-col relative">
            <Reveal delayMs={150}>
              {/* Top Row: Vertical Ornament Line & World Famous Gold Necklace */}
              <div className="flex items-start justify-between mb-4">
                <VerticalHairline height="h-10" className="via-gold/50" />
                <span className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/70 text-right">
                  World famous
                  <br />
                  <span className="text-ivory font-semibold">Gold Necklace</span>
                </span>
              </div>

              {/* Central Terracotta Portrait (~3:4) & Overlapping Small Earring Card */}
              <div className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[3/4] mx-auto md:ml-12 rounded-sm overflow-hidden bg-gradient-to-br from-[#B85A41] via-[#A94E38] to-[#8A3D2C] shadow-2xl p-1 group">
                <img
                  src={IMAGES.infiniteBlondePortrait}
                  alt="Blonde woman wearing handcrafted gold hoop earrings and delicate chain necklace"
                  width={450}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlapping small earring card at lower right */}
                <div className="absolute -bottom-1 -right-1 w-28 sm:w-32 aspect-square bg-[#351713] border border-ivory/25 rounded-sm p-2 shadow-2xl z-20 overflow-hidden">
                  <span className="micro-label text-gold text-[0.55rem] block mb-1">
                    HEIRLOOM
                  </span>
                  <img
                    src={IMAGES.infiniteEarringCard}
                    alt="Gold heart hoop earrings detail"
                    width={120}
                    height={120}
                    loading="lazy"
                    className="w-full h-16 object-contain filter drop-shadow-md"
                  />
                </div>
              </div>

              {/* Overlapping Headline in Lower Right 2/3 */}
              <div className="relative z-30 -mt-12 md:-mt-16 md:ml-6 text-center md:text-left">
                <h3 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] tracking-[0.04em] text-ivory text-balance max-w-xl">
                  We're{" "}
                  <span className="font-emphasis italic font-normal text-gold-light lowercase">
                    best
                  </span>{" "}
                  in crafting
                  <br />
                  the best jewellery
                </h3>

                {/* Bottom Row: Pill + Circular Arrow & Designer Quality Avatar */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center space-x-3">
                    <PillButton
                      onClick={() => {
                        const el = document.getElementById("collections");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Find a Store
                    </PillButton>
                    <CircleArrowButton ariaLabel="Find store locations" />
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <img
                      src={IMAGES.designerAvatar3}
                      alt="Quality jewelry curator"
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full object-cover border border-ivory/40"
                      loading="lazy"
                    />
                    <span className="text-[0.6875rem] text-text-secondary font-light max-w-[160px] leading-tight text-left">
                      {COPY.infinite.avatarText}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
