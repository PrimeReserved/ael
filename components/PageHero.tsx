"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity (starts at 1, fades to 0 by 80px scroll - MUCH FASTER)
  const borderOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const borderScale = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <section className="relative h-[25vh] md:h-[30vh] flex items-center overflow-hidden bg-zinc-100">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          src={image} 
          className="w-full h-full object-cover"
          alt="Hero Background"
          onLoad={(e) => {
            (e.target as HTMLImageElement).classList.add('opacity-70');
          }}
        />
        {/* Shimmer Effect while loading */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite] pointer-events-none" />
        
        {/* Consistent Overlays - Lightened slightly to avoid 'black patches' */}
        <div className="absolute inset-0 z-10 bg-secondary/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-secondary/40 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-9 pt-12">
        <div className="text-left relative inline-block group">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg md:text-2xl font-bold text-white uppercase tracking-[0.3em] pb-3"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-sm font-light text-zinc-300 tracking-wide mt-1"
            >
              {subtitle}
            </motion.p>
          )}

          {/* The Dynamic Vanishing Underline - Thicker, Square Edges, White Shade */}
          <motion.div 
            style={{ opacity: borderOpacity, scaleX: borderScale, originX: 0 }}
            className="absolute bottom-0 left-0 w-full h-[6px] bg-white/90"
          />
        </div>
      </div>
    </section>
  );
}
