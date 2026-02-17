"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Sun, Battery, Zap, ShieldCheck } from "lucide-react";

const solarFeatures = [
  {
    title: "Industrial Grade PV Solutions",
    description: "Specialized high-capacity photovoltaic arrays engineered for the rigorous demands of industrial operations and heavy manufacturing sites.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1771328748/photo-1613665813446-82a78c468a1d_cnhn9n.avif",
    icon: Sun,
    stats: "25+ Year Lifespan"
  },
  {
    title: "Hybrid Energy Integration",
    description: "Seamless synchronization of solar power with gas-to-power infrastructure and battery storage for uninterrupted 24/7 energy delivery.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1771328737/photo-1497435334941-8c899ee9e8e9_flt3rr.avif",
    icon: Battery,
    stats: "0ms Switchover"
  },
  {
    title: "Advanced Solar Telemetry",
    description: "Real-time performance tracking and predictive maintenance AI that ensures every panel operates at peak physical efficiency.",
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1771328744/photo-1558449028-b53a39d100fc_qda2fx.avif",
    icon: Zap,
    stats: "99.9% Runtime"
  }
];

export default function SolarSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % solarFeatures.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + solarFeatures.length) % solarFeatures.length);
  };

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-[1640px] mx-auto px-4 md:px-8">
        
        {/* Top Minimal Title Area */}
        <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-none inline-block">
                RENEWABLE PRECISION
            </h2>
        </div>

        {/* Cinematic Slider Container */}
        <div className="relative h-[75vh] md:h-[80vh] max-h-[850px] rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-secondary shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  nextSlide();
                } else if (swipe > 50) {
                  prevSlide();
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {/* Main Image */}
              <Image
                src={solarFeatures[activeIndex].image}
                alt={solarFeatures[activeIndex].title}
                fill
                className="object-cover pointer-events-none"
                priority
              />
              
              {/* Dark Overlays for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent pointer-events-none" />

              {/* Content Canvas */}
              <div className="absolute inset-0 px-10 md:px-20 lg:px-24 py-12 md:py-20 lg:py-24 flex flex-col justify-center pointer-events-none">
                <div className="max-w-6xl w-full pointer-events-auto">
                  
                  {/* SOLAR Explicit Label */}
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 mb-8"
                  >
                    <div className="px-5 py-2 bg-primary rounded-full shadow-lg shadow-primary/20">
                        <span className="text-secondary font-black text-[11px] uppercase tracking-widest leading-none block">SOLAR POWER</span>
                    </div>
                  </motion.div>

                  <div className="space-y-8 md:space-y-10">
                    {/* Big Text - Reduced Size for Better Balance */}
                    <motion.h3 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-4xl"
                    >
                        {solarFeatures[activeIndex].title}
                    </motion.h3>
                    
                    {/* Integrated Information Line */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
                      {/* Description Box */}
                      <motion.p 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-white/80 text-base md:text-lg font-medium leading-[1.5] max-w-lg p-6 bg-secondary/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
                      >
                          {solarFeatures[activeIndex].description}
                      </motion.p>

                      {/* Stats & Badges - Unified and Compressed */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-6"
                      >
                        {/* Compact Stats - Uniform Alignment */}
                        <div className="px-6 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center min-w-[130px]">
                            <span className="text-primary font-black text-2xl leading-none mb-1 text-center font-sans tracking-tight">
                                {solarFeatures[activeIndex].stats}
                            </span>
                            <span className="text-white/40 text-[8px] font-black uppercase tracking-[0.2em] whitespace-nowrap text-center">
                                Guaranteed Efficiency
                            </span>
                        </div>

                        {/* Compact Certification */}
                        <div className="flex items-center gap-3 bg-secondary/40 px-5 py-3 rounded-xl border border-white/5 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-white/80 text-[9px] font-black uppercase tracking-[0.2em] leading-tight">
                                Author Energy<br/>certified
                            </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Epic Side Arrows - Balanced Side Spacing - Hidden on Mobile */}
          <div className="hidden md:flex absolute inset-y-0 left-6 md:left-10 items-center z-30 pointer-events-none">
            <button 
                onClick={prevSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-secondary/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-500 group pointer-events-auto shadow-2xl"
                aria-label="Previous slide"
            >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 right-6 md:right-10 items-center z-30 pointer-events-none">
            <button 
                onClick={nextSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-secondary hover:scale-110 shadow-2xl shadow-primary/20 transition-all duration-500 group pointer-events-auto"
                aria-label="Next slide"
            >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Timeline Indicators */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
            {solarFeatures.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="group flex flex-col items-center outline-none"
              >
                <div 
                    className={`h-24 md:h-28 w-[4px] md:w-[6px] rounded-full transition-all duration-700 shadow-2xl ${
                        activeIndex === idx ? "bg-primary scale-x-[1.8] shadow-primary/50" : "bg-white/10 group-hover:bg-white/20"
                    }`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
