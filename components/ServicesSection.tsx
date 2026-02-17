"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  slug: { current: string };
  description: string;
  heroImage?: any;
}

export default function ServicesSection({ services }: { services: Service[] }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!services || services.length === 0) return null;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const displayedServices = Array.from({ length: itemsPerPage }, (_, i) => {
    return services[(startIndex + i) % services.length];
  });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] block">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
              View Our Services
            </h2>
            <p className="text-zinc-500 text-lg font-normal leading-relaxed">
              Author Energy provides world-class technical solutions across the energy value chain, from traditional power to renewable frontiers.
            </p>
          </div>

          {/* Desktop Arrow Keys on the right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-4 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 border border-zinc-100 rounded-full hover:bg-zinc-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </button>
          </div>
        </div>

        {/* Desktop Services Grid (Fixed 3) */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-16 px-1">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, idx) => (
              <motion.div
                key={`${service.slug.current}-${idx}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border-2 border-zinc-200 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-secondary/20 h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {service.heroImage ? (
                    <Image
                      src={urlFor(service.heroImage).url()}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-100" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link 
                      href={`/services/${service.slug.current}`}
                      className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px]"
                    >
                      Learn More <ArrowRight className="w-4 h-4 text-primary" />
                    </Link>
                  </div>
                </div>
                
                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors min-h-[3.5rem] flex items-end">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-zinc-200 group-hover:bg-primary transition-colors duration-500" />
                  <p className="text-zinc-800 text-sm font-medium leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Container (Horizontal Scroll with Peek) */}
        <div className="md:hidden -mx-6 mb-12">
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 no-scrollbar pb-6"
            >
                {services.map((service, idx) => (
                    <div 
                        key={service.slug.current}
                        className="flex-none w-[82vw] snap-center"
                    >
                        <Link 
                            href={`/services/${service.slug.current}`}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden border-2 border-zinc-200 h-full"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                {service.heroImage ? (
                                    <Image
                                        src={urlFor(service.heroImage).url()}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-zinc-100" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px]">
                                        Learn More <ArrowRight className="w-4 h-4 text-primary" />
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-lg font-black text-secondary uppercase tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-800 text-sm font-medium leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* Mobile Visual Indicator */}
            <div className="flex justify-center space-x-2 mt-2">
                {services.map((_, idx) => (
                    <div 
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full bg-zinc-200"
                    />
                ))}
            </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest text-[11px] rounded transition-all hover:bg-secondary/90 active:scale-95 shadow-xl shadow-secondary/20"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
