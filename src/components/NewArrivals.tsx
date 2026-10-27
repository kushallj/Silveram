import React from "react";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/images";
import { COPY } from "@/data/copy";
import { AvatarStack } from "./AvatarStack";
import { VerticalHairline, PaginationDots } from "./Ornament";
import { Reveal } from "./Reveal";

export const NewArrivals: React.FC = () => {
  return (
    <section
      id="new-arrivals"
      aria-label="New Arrivals Terracotta Exhibition"
      className="relative w-full py-12 md:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <Reveal>
          {/* Framed Terracotta Panel (135deg gradient, 2px radius, internal padding) */}
          <div className="relative rounded-[2px] bg-gradient-to-br from-[#B85A41] via-[#A94E38] to-[#8A3D2C] p-6 sm:p-8 md:p-10 border border-ivory/20 shadow-2xl text-ivory overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            {/* TOP ROW: 12-col Grid (Left Micro Label / Centre Portrait / Right Headline) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pb-8 border-b border-ivory/15">
              {/* Top-Left (2 cols): Micro Label & Thin Vertical Line */}
              <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-start">
                <span className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/80 leading-relaxed">
                  {COPY.newArrivals.topEyebrow.split("\n")[0]}
                  <br />
                  <span className="text-ivory font-semibold">
                    {COPY.newArrivals.topEyebrow.split("\n")[1]}
                  </span>
                </span>
                <div className="mt-4">
                  <VerticalHairline height="h-12" className="via-ivory/40" />
                </div>
              </div>

              {/* Top-Centre (5 cols): Portrait with Hand at Ear */}
              <div className="order-1 md:order-2 md:col-span-4 flex justify-center">
                <div className="w-full max-w-[240px] aspect-[4/5] rounded-[2px] overflow-hidden bg-[#D38B74] border border-ivory/20 shadow-lg relative group">
                  <img
                    src={IMAGES.arrivalsPortrait}
                    alt="Woman with hand touching gold hoop earring"
                    width={320}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Top-Right (5 cols): Headline + AvatarStack */}
              <div className="order-3 md:order-3 md:col-span-5 flex flex-col justify-start">
                <div className="flex items-baseline space-x-3 flex-wrap">
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.98] tracking-[0.03em] text-ivory">
                    Dare to{" "}
                    <span className="font-emphasis italic font-normal text-[#FDEBD7] lowercase">
                      differently
                    </span>
                  </h2>
                  <div className="inline-block align-middle ml-2">
                    <AvatarStack size="sm" />
                  </div>
                </div>

                <p className="mt-3 text-xs text-ivory/80 leading-relaxed font-light max-w-sm">
                  {COPY.newArrivals.desc}
                </p>
              </div>
            </div>

            {/* BOTTOM ROW: 12-col Grid (Bottom-Left New Arrivals / Bottom-Right Rings Tile) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8">
              {/* Bottom-Left (7 cols): New Arrivals, Code, Red Earring, Memory Desc */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline space-x-4">
                    <span className="font-emphasis text-3xl sm:text-4xl italic text-[#FFF2E2]">
                      New Arrivals
                    </span>
                    <span className="font-mono text-[0.6875rem] tracking-widest text-ivory/60 uppercase">
                      {COPY.newArrivals.badgeCode}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    {/* Red / Ruby Luxury Earring Photo */}
                    <div className="w-20 h-20 rounded-[2px] bg-black/15 p-1.5 border border-ivory/20 shrink-0">
                      <img
                        src={IMAGES.arrivalsRedEarrings}
                        alt="Ruby crystal drop earrings"
                        width={100}
                        height={100}
                        loading="lazy"
                        className="w-full h-full object-contain filter drop-shadow-md"
                      />
                    </div>
                    <p className="text-xs text-ivory/85 leading-relaxed font-light max-w-xs">
                      {COPY.newArrivals.heritageDesc}
                    </p>
                  </div>
                </div>

                <div>
                  <a
                    href="#collections"
                    className="inline-flex items-center text-[0.6875rem] font-sans font-medium tracking-[0.16em] uppercase text-ivory hover:text-gold transition-colors"
                  >
                    {COPY.newArrivals.collectionCta}
                  </a>
                </div>
              </div>

              {/* Bottom-Right (5 cols): Hand-made Earrings & Intertwined Rings Tile */}
              <div className="md:col-span-5 flex flex-col justify-end">
                <div className="bg-[#8A3D2C]/60 border border-ivory/20 p-4 sm:p-5 rounded-[2px] relative overflow-hidden group">
                  <div className="flex items-start justify-between relative z-10">
                    <span className="text-[0.6875rem] font-sans font-medium uppercase tracking-[0.14em] text-ivory/90 leading-tight">
                      Hand-made Earrings
                      <br />
                      <span className="text-[#FDEBD7] font-semibold">Creative Design</span>
                    </span>
                    <div className="w-7 h-7 rounded-full border border-ivory/30 flex items-center justify-center text-ivory group-hover:bg-ivory group-hover:text-terracotta transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Intertwined gold rings bleeding off corner */}
                  <div className="mt-3 -mx-5 -mb-5 h-28 overflow-hidden relative">
                    <img
                      src={IMAGES.arrivalsIntertwinedRings}
                      alt="Two intertwined 18k gold bands on champagne silk"
                      width={400}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover jewelry-photo group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Four Dots Indicator */}
                <div className="mt-4 flex justify-end">
                  <PaginationDots total={4} active={1} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
