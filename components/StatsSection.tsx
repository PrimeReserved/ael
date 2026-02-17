"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  const display = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 20, suffix: "+", label: "Global OEM Partners" },
  { value: 100, suffix: "%", label: "Quality Assurance" },
  { value: 15, suffix: "+", label: "Energy Solutions" },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-12 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center py-8 px-4 transition-all relative ${
                idx !== stats.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:h-12 lg:after:w-[1px] lg:after:bg-zinc-200 lg:after:top-1/2 lg:after:-translate-y-1/2" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-zinc-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
