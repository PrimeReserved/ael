"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle,
  Gauge,
  Settings,
  Zap,
  FolderKanban,
  Wrench,
  ClipboardList,
  Shield,
  GraduationCap
} from "lucide-react";

const iconMap = {
  Gauge,
  Settings,
  Zap,
  FolderKanban,
  Wrench,
  ClipboardList,
  Shield,
  GraduationCap,
};

interface TrainingCategory {
  id: number;
  title: string;
  icon: string;
  image: string;
  description: string;
  highlights: string[];
}

export default function TrainingGrid({ categories }: { categories: TrainingCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap] || Shield;
        return (
          <div 
            key={category.id}
            className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 border border-zinc-100 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden bg-zinc-100">
              <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shimmer_2s_infinite] pointer-events-none" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                <p className="text-zinc-500 text-base mb-8 leading-relaxed font-medium">
                  {category.description}
                </p>

                {/* Highlights Grid */}
                <div className="mb-10">
                  <h4 className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.2em] mb-4">
                    Key Focus Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {category.highlights.map((highlight, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-700 leading-snug font-bold text-[13px]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <Link 
                href="/apply-for-training"
                className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-secondary text-white font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-primary hover:text-secondary transition-all duration-500 shadow-lg hover:shadow-primary/20 group/btn"
              >
                <span>Apply for Training</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
