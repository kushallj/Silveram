import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { DiamondCampaign } from "@/components/DiamondCampaign";
import { GlamourCampaign } from "@/components/GlamourCampaign";
import { NewArrivals } from "@/components/NewArrivals";
import { InfiniteSparkle } from "@/components/InfiniteSparkle";
import { PersonalisedFooter } from "@/components/PersonalisedFooter";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-ivory flex flex-col selection:bg-terracotta selection:text-ivory font-sans">
      {/* 0. Header */}
      <Header />

      {/* Main Content Sections (Strictly ordered 1 through 7) */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero with Row A and Row B HeroTiles */}
        <Hero />

        {/* 2. New Jewellery Collections Carousel */}
        <ProductCarousel />

        {/* 3. Exclusive Diamond Designs Campaign */}
        <DiamondCampaign />

        {/* 4. Glamour / Handcrafted Campaign */}
        <GlamourCampaign />

        {/* 5. New Arrivals Terracotta Framed Panel */}
        <NewArrivals />

        {/* 6. Infinite Sparkle Atelier Showcase */}
        <InfiniteSparkle />
      </main>

      {/* 7. Personalised Banner + Continuous Footer */}
      <PersonalisedFooter />
    </div>
  );
};

export default App;
