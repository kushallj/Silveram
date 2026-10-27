import React, { useState } from "react";
import { Play } from "lucide-react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { AvatarStack } from "./AvatarStack";
import { CircleArrowButton } from "./CircleArrowButton";

export const HeroTiles: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full border-t border-ivory/15 pt-6">
      {/* Grid on desktop, snap scroll on mobile */}
      <div className="flex md:grid md:grid-cols-12 overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 md:gap-0 divide-y-0 md:divide-x md:divide-ivory/15">
        {/* Tile 1 (≈ 35% / 4-5 cols): Designer Text & Avatars */}
        <div className="min-w-[280px] md:min-w-0 md:col-span-4 snap-center p-4 md:p-6 flex flex-col justify-between bg-page-secondary/30 md:bg-transparent rounded-sm md:rounded-none">
          <div>
            <AvatarStack size="md" className="mb-4" />
            <h3 className="font-display text-xl sm:text-2xl text-ivory tracking-[0.03em] leading-snug">
              Best <span className="font-emphasis italic font-normal text-gold-light lowercase">Jewellery</span> from the World's best designers.
            </h3>
            <p className="mt-2 text-xs text-text-secondary leading-relaxed font-light">
              {COPY.hero.tile1.desc}
            </p>
          </div>

          <div className="mt-5 pt-3">
            <a
              href="#collections"
              className="inline-flex items-center text-[0.6875rem] font-sans font-medium tracking-[0.14em] uppercase text-ivory/80 hover:text-gold transition-colors"
            >
              {COPY.hero.tile1.link}
            </a>
          </div>
        </div>

        {/* Tile 2 (≈ 28% / 4 cols): Terracotta Portrait with Braids & Play Button */}
        <div className="min-w-[240px] md:min-w-0 md:col-span-4 snap-center relative overflow-hidden bg-gradient-to-br from-[#B85A41] via-[#A94E38] to-[#8A3D2C] p-4 md:p-5 flex flex-col justify-between min-h-[220px] md:min-h-[240px] rounded-sm md:rounded-none group">
          {/* Subtle background photo blended with terracotta */}
          <img
            src={IMAGES.heroPortraitBraid}
            alt="Woman with braided hair wearing 18k gold earrings"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
            loading="eager"
          />

          {/* Top Row: Circular Play Button */}
          <div className="relative z-10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause editorial video" : "Play atelier video"}
              className="w-9 h-9 rounded-full bg-ivory/90 text-page flex items-center justify-center shadow-md hover:bg-gold hover:text-page transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </button>
            <div className="w-[1px] h-6 bg-ivory/30" aria-hidden="true" />
          </div>

          {/* Bottom Row: 18K GOLD PLATED Vertical / Badge Label */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-[0.625rem] font-sans font-bold uppercase tracking-[0.18em] text-ivory/95 bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                {COPY.hero.tile2.badge}
              </span>
            </div>
            {isPlaying && (
              <span className="text-[0.6rem] text-ivory/90 uppercase tracking-widest animate-pulse">
                Previewing
              </span>
            )}
          </div>
        </div>

        {/* Tile 3 (≈ 37% / 4 cols): Ring on Grey Stone Plinth */}
        <div className="min-w-[280px] md:min-w-0 md:col-span-4 snap-center relative overflow-hidden bg-[#26110D] p-4 md:p-6 flex flex-col justify-between min-h-[220px] md:min-h-[240px] rounded-sm md:rounded-none group">
          {/* Top: Label and Arrow */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.12em] text-ivory/80 leading-tight">
              Handpicked<br />
              <span className="text-ivory font-semibold">Designer Jewellery</span>
            </div>
            <CircleArrowButton size="sm" ariaLabel="View handpicked designer jewellery" />
          </div>

          {/* Image bleeding to bottom edge: gold ring on plinth over satin folds */}
          <div className="mt-4 -mx-4 -mb-4 md:-mx-6 md:-mb-6 overflow-hidden h-36 relative">
            <img
              src={IMAGES.heroStoneRing}
              alt="Handpicked 18k gold ring displayed on sculpted grey stone pedestal"
              width={500}
              height={300}
              className="w-full h-full object-cover jewelry-photo group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
