import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { CircleArrowButton } from "./CircleArrowButton";
import { PaginationDots } from "./Ornament";
import { Reveal } from "./Reveal";

export const ProductCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position for pagination dots and button states
  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      const progress = scrollLeft / maxScroll;
      const dotIndex = Math.min(
        Math.floor(progress * 5),
        4
      );
      setActiveDot(dotIndex);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollByDirection = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardWidth = 260 + 20; // width + gap
    const offset = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const scrollToDot = (dotIdx: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({
      left: (maxScroll / 4) * dotIdx,
      behavior: "smooth",
    });
    setActiveDot(dotIdx);
  };

  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="relative w-full py-12 md:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-8">
        <Reveal>
          {/* Header Row: Title on Left, View Collection on Right */}
          <div className="flex items-end justify-between border-b border-ivory/15 pb-6">
            <div>
              <h2
                id="collections-heading"
                className="font-display text-[clamp(1.75rem,3.8vw,3.2rem)] leading-none tracking-[0.04em] text-ivory"
              >
                New{" "}
                <span className="font-emphasis italic font-normal text-gold-light lowercase">
                  jewellery
                </span>{" "}
                collections
              </h2>
            </div>

            {/* Desktop Action & Carousel Arrows */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => scrollByDirection("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous products"
                  className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-copper disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection("right")}
                  disabled={!canScrollRight}
                  aria-label="Next products"
                  className="w-8 h-8 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-copper disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <span className="micro-label text-ivory/80 hidden sm:inline-block">
                  VIEW COLLECTION
                </span>
                <CircleArrowButton
                  size="sm"
                  ariaLabel="View all jewellery collections"
                  onClick={() => scrollByDirection("right")}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-Bleed Carousel Row (Scroll-Snap, touch-draggable, no scrollbar) */}
      <Reveal delayMs={100}>
        <div
          ref={scrollContainerRef}
          role="region"
          aria-label="New jewellery products carousel"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") scrollByDirection("left");
            if (e.key === "ArrowRight") scrollByDirection("right");
          }}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 md:gap-5 px-4 sm:px-8 max-w-[1280px] mx-auto focus:outline-none focus-visible:ring-1 focus-visible:ring-gold py-2"
        >
          {PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </Reveal>

      {/* Pagination Dots */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mt-6 flex justify-center">
        <PaginationDots
          total={5}
          active={activeDot}
          onChange={scrollToDot}
        />
      </div>
    </section>
  );
};
