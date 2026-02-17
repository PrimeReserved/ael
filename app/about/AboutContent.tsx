"use client";

import AboutAEL from "@/components/AboutAEL";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Short, Transparent Hero section for About Page */}
      <PageHero 
        title={<span>ABOUT <span className="text-primary">AEL</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770762602/refinery-3613526_640_gabc3w.jpg"
      />

      {/* Main Story Component */}
      <AboutAEL />

      {/* Performance Stats */}
      <StatsSection />
    </main>
  );
}
