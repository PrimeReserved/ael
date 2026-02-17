"use client";

import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Full list of gallery images
const galleryImages = [
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686767/FB_IMG_5756466963632005557_zs5xdl.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686765/FB_IMG_7652180194224052626_tieqt4.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686765/FB_IMG_8835261381742711420_hlljsg.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686763/FB_IMG_3688902949836386788_kpvl36.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686762/FB_IMG_3113873909694741475_rvvyq9.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686761/FB_IMG_7995218762755792124_d4zsao.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686760/FB_IMG_8257740435086046005_yfs6ao.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686759/FB_IMG_1753876214607_qdmqfj.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686758/FB_IMG_527403647731698520_nveun1.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686757/FB_IMG_5912994521281786044_aqbi3b.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686756/IMG-20250825-WA0033_gjugij.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686755/FB_IMG_8195039325479395023_rcli6h.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686754/FB_IMG_5901105448562056893_wkpvfx.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686753/FB_IMG_5031226124299374716_mqqgvt.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686752/FB_IMG_1753876107866_rzsfnq.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686751/IMG-20250716-WA0041_w6dwdu.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686749/IMG-20250717-WA0013_ztu9iv.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686748/FB_IMG_1753876179849_tcg9yl.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686747/IMG-20250717-WA0024_jgurae.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686746/IMG-20250716-WA0045_bdnnis.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686745/IMG-20250717-WA0010_dwxxix.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686744/IMG-20250717-WA0012_yj9oxf.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686743/IMG-20250709-WA0007_tdqxno.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686742/IMG-20250710-WA0010_o82z6h.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686741/IMG-20250716-WA0039_eqi7ct.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686739/IMG-20260205-WA0020_mw4xpq.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686738/IMG-20250709-WA0010_qipoau.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686737/IMG-20260205-WA0024_qwxd18.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686736/IMG-20260205-WA0009_skirwh.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686735/IMG-20260205-WA0013_rpploz.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686733/IMG-20260205-WA0012_u2jls0.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686733/IMG-20260205-WA0010_eiefhm.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686730/IMG-20260205-WA0011_kylob4.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686729/IMG-20260205-WA0019_zgi9as.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686728/IMG-20260205-WA0018_btlk9s.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686728/IMG-20260205-WA0017_bdcfok.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686727/IMG-20260205-WA0014_kybaaz.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686725/IMG-20260205-WA0022_ihxdkl.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686723/IMG-20260205-WA0023_kbx0gl.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686722/IMG-20260205-WA0016_xucc0f.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686722/IMG-20260205-WA0021_pq9imu.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686722/IMG-20260205-WA0008_y9mxlb.jpg",
  "https://res.cloudinary.com/dfwty72r9/image/upload/v1770686722/IMG-20260205-WA0025_seqg7l.jpg"
];

export default function GalleryContent() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0));
  }, []);

  return (
    <main className="min-h-screen bg-stone-100">
      <PageHero 
        title={<span>OUR <span className="text-primary">GALLERY</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770948853/oil_hrdc3c.jpg"
      />
      
      <section className="py-24 px-4 md:px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4 grid-flow-dense">
          {galleryImages.map((image, idx) => {
             const isLarge = idx % 7 === 0;
             const isWide = !isLarge && idx % 3 === 0;
             
             return (
              <motion.div
                key={image + idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
                className={`relative group overflow-hidden rounded-md cursor-pointer ${
                  isLarge ? "md:col-span-2 md:row-span-2" : isWide ? "md:col-span-2" : ""
                }`}
                onClick={() => setSelectedIndex(idx)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="border border-white/50 px-6 py-2 text-white uppercase tracking-widest text-xs font-black bg-secondary/20 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View
                   </div>
                </div>
              </motion.div>
             );
          })}
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-xl flex items-center justify-center font-black"
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-10 z-[110] text-white/70 hover:text-white transition-colors bg-secondary/40 p-2 rounded-full backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close Gallery"
            >
              <X size={32} />
            </button>

             <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[110] text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next Image"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div 
               key={selectedIndex}
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: -50, opacity: 0 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="relative w-full h-full p-4 md:p-12 flex items-center justify-center"
               onClick={() => setSelectedIndex(null)} 
            >
              <img 
                src={galleryImages[selectedIndex]} 
                alt="Full view" 
                className="max-w-full max-h-full object-contain rounded shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
              />
              
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                 <span className="text-white bg-secondary/50 px-6 py-2 rounded-full backdrop-blur-sm text-xs tracking-widest uppercase">
                    {selectedIndex + 1} / {galleryImages.length}
                 </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
