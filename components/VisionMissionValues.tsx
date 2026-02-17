"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const CustomIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="4" height="12" fill="#f59e0b" />
    <rect x="18" y="8" width="4" height="24" fill="#f59e0b" />
    <rect x="26" y="14" width="4" height="12" fill="#f59e0b" />
  </svg>
);

const items = [
  {
    title: "Our Vision",
    description: "Our vision is to make a remarkable difference in the Energy sector by achieving a balance in all projects through sustainable approach anchored on quality service delivery.",
    icon: CustomIcon
  },
  {
    title: "Our Values",
    description: "The cornerstone of our operations hinges on our belief that Effective Partnership, Customer Satisfaction, Effective Communication, Sense of Duty and Responsibility are key values to sustainable delivery of our services. Hence we conduct our businesses with the highest standard of business ethics and responsibility.",
    icon: CustomIcon
  },
  {
    title: "Our Mission",
    description: "Our mission is to ensure and promote services through sound ethical advice and application of sustainable based technology in assisting our clients meets their business objectives.",
    icon: CustomIcon
  }
];

export default function VisionMissionValues() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-12 md:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="mb-8">
                <item.icon />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-6">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-[15px] md:text-[16px] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/about"
            className="group relative px-10 py-4 bg-primary text-secondary font-black uppercase tracking-widest text-[11px] rounded transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/10"
          >
            Learn more about us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
