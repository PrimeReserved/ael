"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, ShieldCheck, HeartHandshake } from "lucide-react";

const values = [
  { icon: HeartHandshake, title: "Effective Partnership", description: "Guided by a culture of mutual obligation, integrity, and sustainable benefit." },
  { icon: Users, title: "Customer Satisfaction", description: "Our strengths and success are our customers; their success is our success." },
  { icon: ShieldCheck, title: "Sense of Duty", description: "Fully responsible for our actions, taking duty-bound pride in growth and progress." },
  { icon: Target, title: "Operational Excellence", description: "Integrating sustainability principles to assist clients in maintaining reputation." },
];

export default function AboutAEL() {
  return (
    <section className="py-20 bg-white overflow-hidden pb-12">
      <div className="max-w-7xl mx-auto px-12 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Our Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-2 block">
                All About Author Energy Limited
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter">
                OUR <span className="text-primary uppercase">STORY</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl font-medium text-zinc-900 leading-snug">
                Author Energy Limited (AEL) is a fast-growing indigenous Nigerian Energy Company with a strong foundation in global supply chain and technical excellence.
              </p>
              
              <div className="space-y-5 text-zinc-500 leading-relaxed text-base md:text-[17px] font-normal">
                <p>
                  Established by experts with a passion for sustainable energy, AEL has carved a niche as a global partner for renewable energy supply and a leading supplier of turnkey gas plant equipment for commercial and industrial power generation.
                </p>
                <p>
                  Our practice hinges on the belief that process and system approaches are critical in achieving sustainability. We assist clients in maintaining operational excellence through the integration of these principles in all services.
                </p>
              </div>

              <Link
                href="/services"
                className="group relative inline-flex px-10 py-4 bg-primary text-secondary font-black uppercase tracking-widest text-[11px] rounded transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/10"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-12">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-xl border border-zinc-100 mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[12px] font-black uppercase tracking-widest text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
