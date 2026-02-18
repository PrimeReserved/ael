"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { Calendar, ArrowRight } from "lucide-react";

interface TrainingCourse {
  title: string;
  description: string;
  startDate: string;
  mainImage?: any;
  mainImageUrl?: string;
  isComingSoon: boolean;
  applyUrl: string;
  isActive: boolean;
}

interface TrainingSettings {
  bannerTitle?: string;
  bannerDescription?: string;
  layoutColumns?: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4">
      {[
        { label: "D", value: timeLeft.days },
        { label: "H", value: timeLeft.hours },
        { label: "M", value: timeLeft.minutes },
        { label: "S", value: timeLeft.seconds },
      ].map((u) => (
        <div key={u.label} className="flex flex-col">
          <span className="text-xl md:text-2xl font-black text-zinc-900 tabular-nums">
            {u.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const AnimatedButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="relative p-[2px] overflow-hidden rounded-lg group/btn-container">
      {/* Lightning Trace Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="8"
          fill="none"
          stroke="url(#lightning-gradient)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileHover={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="group-hover/btn-container:opacity-100"
        />
        <defs>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      
      <Link
        href={href || "#"}
        className="relative flex items-center justify-center px-10 py-5 bg-primary text-secondary font-black uppercase tracking-widest text-[11px] rounded transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/10 whitespace-nowrap"
      >
        {text}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

const CourseCard = ({ course }: { course: TrainingCourse }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 transition-all hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1">
    <div className="relative aspect-video overflow-hidden">
      {(course.mainImage || course.mainImageUrl) ? (
        <Image
          src={course.mainImage ? urlFor(course.mainImage).url() : course.mainImageUrl!}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-zinc-200 flex items-center justify-center">
          <span className="text-zinc-400 font-bold uppercase tracking-tighter">AEL TRAINING</span>
        </div>
      )}
      {course.isComingSoon && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary text-secondary text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
            Coming Soon
          </span>
        </div>
      )}
    </div>
    <div className="p-6 md:p-8 space-y-4">
      <div className="flex items-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest gap-2">
        <Calendar className="w-3 h-3 text-primary" />
        {new Date(course.startDate).toLocaleDateString()}
      </div>
      <h3 className="text-xl md:text-2xl font-black text-zinc-900 uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
        {course.description}
      </p>
      <div className="pt-4 flex items-center justify-between">
        <CountdownTimer targetDate={course.startDate} />
        <AnimatedButton href={course.applyUrl} text="Apply" />
      </div>
    </div>
  </div>
);

export default function TrainingBanner({ courses, settings }: { courses: TrainingCourse[], settings: TrainingSettings }) {
  if (!courses || courses.length === 0) return null;

  const layoutCols = settings?.layoutColumns || 1;

  return (
    <section className="py-16 bg-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Header Section - Centralized */}
        <div className="max-w-4xl mx-auto mb-16 space-y-4 text-center">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] block">
            Technical Excellence
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
            {settings?.bannerTitle || "Our Training Programs"}
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            {settings?.bannerDescription || "Master industry-standard skills with hands-on technical training from global experts."}
          </p>
        </div>

        {/* Courses Grid / List - Centered */}
        <div className={`grid gap-12 mx-auto ${
          layoutCols === 1 ? "max-w-5xl" : 
          layoutCols === 2 ? "md:grid-cols-2 max-w-6xl" : 
          "md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        }`}>
          {courses.map((course, idx) => (
            layoutCols === 1 ? (
              <div key={idx} className="group relative flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden border border-zinc-100 transition-all hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <div className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                  {(course.mainImage || course.mainImageUrl) && (
                    <Image
                      src={course.mainImage ? urlFor(course.mainImage).url() : course.mainImageUrl!}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}
                  {course.isComingSoon && (
                    <div className="absolute top-8 left-8 z-10">
                      <span className="px-5 py-2 bg-primary text-secondary text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-5 bg-white md:pr-16 lg:pr-20">
                  <div className="space-y-3">
                    <div className="flex items-center text-[11px] font-bold text-primary uppercase tracking-[0.3em] gap-3">
                      <Calendar className="w-4 h-4" />
                      Starts {new Date(course.startDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 uppercase tracking-tighter leading-[0.9] group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-normal">
                    {course.description}
                  </p>
                  
                  <div className="pt-6 border-t border-zinc-100">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Enrollment Ends In</span>
                        <CountdownTimer targetDate={course.startDate} />
                      </div>
                      <div className="pb-1">
                        <AnimatedButton href={course.applyUrl} text="Secure Your Spot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <CourseCard key={idx} course={course} />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
