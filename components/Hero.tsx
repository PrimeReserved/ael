"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    subtitle: "Oil and Gas",
    title: "New Narrative In Procurement",
    description: "Expert global supply chain management and technical procurement solutions tailored for the energy sector.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770693166/pipeline-8838499_1280_xjygy3.jpg",
    action: "Our Services",
    href: "/services"
  },
  {
    subtitle: "Power Generation & Renewables",
    title: "Sustainable Energy Infrastructure",
    description: "Building infrastructure through global partnerships. Inter-generation equity inspires our sustainable energy systems.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686748/FB_IMG_1753876179849_tcg9yl.jpg",
    action: "Our Services",
    href: "/services/renewable-energy"
  },
  {
    subtitle: "Capacity Development",
    title: "Innovative Learning Solutions",
    description: "Inspiring confidence through industry-leading technical training and vocational excellence for the workforce.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686727/IMG-20260205-WA0014_kybaaz.jpg",
    action: "Our Training",
    href: "/training"
  },
  {
    subtitle: "Engineering Consulting",
    title: "Precision Technical Services",
    description: "Comprehensive installation and maintenance delivered with the 39-point production excellence that defines AEL.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686728/IMG-20260205-WA0017_bdcfok.jpg",
    action: "About Us",
    href: "/about"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleManualNav = (idx: number) => {
    setCurrent(idx);
    setIsPaused(true);
    // Pause for 10 seconds (5s pause + 5s resume grace)
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-secondary">
      {/* Persistent Multi-layered Overlays (Fixed to avoid flicker) */}
      <div className="absolute inset-0 z-10 bg-secondary/45" />
      <div className="absolute inset-0 z-10 bg-secondary/15" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary/90 via-transparent to-secondary/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-secondary/50 via-transparent to-transparent" />

      {/* Stacked Image Cross-fade (No Blackouts) */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <motion.img
            key={idx}
            src={slide.image}
            alt={slide.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={cn(
                "absolute inset-0 h-full w-full object-cover",
                (idx === 0 || idx === 3) ? "object-top" : "object-center"
            )}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 md:px-6">
        <div className="max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* New Minimalist Subtitle Styling */}
              <div className="flex items-center space-x-3 mb-4">
                  <div className="h-[1px] w-6 bg-primary" />
                  <span className="text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em]">
                      {slides[current].subtitle}
                  </span>
                  <div className="h-[1px] w-6 bg-primary" />
              </div>
              
              {/* Refined Title: Slightly smaller, no bar, reduced spacing below */}
              <h1 className="text-4xl md:text-[5.5rem] font-black text-white leading-[0.95] tracking-[-0.03em] mb-4 drop-shadow-2xl uppercase">
                {slides[current].title}
              </h1>
              
              {/* Description: Fixed spacing */}
              <p className="text-white/70 text-sm md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium">
                {slides[current].description}
              </p>

              {/* Mobile-optimized single row buttons */}
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 w-full">
                <Link
                  href={slides[current].href}
                  className="group relative px-4 sm:px-10 py-3.5 sm:py-5 bg-primary text-secondary font-black uppercase tracking-widest text-[9px] sm:text-[11px] rounded transition-all hover:scale-105 active:scale-95 flex items-center shadow-lg"
                >
                  <span className="whitespace-nowrap">{slides[current].action}</span>
                  <ArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group relative px-4 sm:px-10 py-3.5 sm:py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[9px] sm:text-[11px] rounded backdrop-blur-sm transition-all overflow-hidden"
                >
                  <span className="relative z-10 whitespace-nowrap">Contact Us</span>
                  {/* Subtle Entrance Transition for Outline/Border on Hover */}
                  <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-all duration-300 scale-105 group-hover:scale-100" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Reverted Progress Dots: Square Version */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
        <div className="flex items-center space-x-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualNav(idx)}
              className="relative outline-none group"
            >
              <div
                className={`w-2.5 h-2.5 transition-all duration-500 rounded-[1px] ${
                  current === idx ? "bg-primary" : "bg-white/20 group-hover:bg-white/50"
                }`}
              />
              {current === idx && (
                <motion.div
                  layoutId="activeSquare"
                  className="absolute -inset-1.5 border border-primary rounded-[2px]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
