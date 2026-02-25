"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-black uppercase tracking-[0.5em] text-sm mb-4 block">
            Error 404
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-secondary mb-6 tracking-tighter uppercase">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-12 font-medium leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            Please check the URL or return to our homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary hover:text-secondary transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
            >
              <Home size={16} />
              Return Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 border border-zinc-200 text-secondary font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
