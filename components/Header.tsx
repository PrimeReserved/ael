"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight, ChevronLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About us", href: "/about" },
  {
    name: "Our services",
    href: "#",
    isDropdown: true,
    sublinks: [
      { name: "Engineering Consulting", href: "/services/engineering-consulting" },
      { name: "Gas Turbines and Power Generation", href: "/services/gas-turbines" },
      { name: "Engineering & Technical Training and Outsourcing", href: "/services/training-outsourcing" },
      { name: "Installation and Maintenance", href: "/services/installation-maintenance" },
      { name: "Renewable Energy", href: "/services/renewable-energy" },
      { name: "Machining and Fabrication", href: "/services/machining-fabrication" },
    ],
  },
  { name: "Our Training", href: "/training" },
  {
    name: "Blog and Gallery",
    href: "#",
    isDropdown: true,
    sublinks: [
      { name: "Blog", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "All courses", href: "/courses" },
  { name: "Contact us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<any | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const goldColor = "#f59e0b";

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Bar - Extra Thin - Hidden when menu is open */}
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden hidden md:block",
          (isScrolled && !mobileMenuOpen) ? "bg-secondary h-7 opacity-100" : "h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="flex items-center space-x-8 text-[9px] uppercase tracking-[0.3em] font-black text-white">
            <a href="tel:+2347034703200" className="flex items-center space-x-2 transition-colors hover:text-primary">
              <Phone className="w-2 h-2" style={{ color: goldColor }} />
              <span>+234-7034703200</span>
            </a>
            <a href="mailto:info@authorenergy.com" className="flex items-center space-x-2 transition-colors hover:text-primary">
              <Mail className="w-2 h-2" style={{ color: goldColor }} />
              <span className="lowercase">info@authorenergy.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar & Mobile Overlay Wrapper */}
      <div className="relative">
        {/* Full-Screen Mobile Nav Overlay */}
        <AnimatePresence>
            {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[100] flex flex-col h-[100dvh] w-screen overflow-hidden"
            >
                <div className="flex-grow relative flex items-center justify-center overflow-hidden">
                {/* Main Menu Layer */}
                <motion.div
                    animate={{ x: activeSubmenu ? "-100%" : "0%" }}
                    transition={{ type: "tween", duration: 0.4 }}
                    className="absolute inset-0 px-8 py-1 flex items-center justify-center overflow-y-auto"
                >
                    <div className="flex flex-col w-full max-w-sm text-center">
                        {navLinks.map((link) => (
                        <div key={link.name} className="relative">
                            {link.sublinks ? (
                            <button
                                onClick={() => setActiveSubmenu(link)}
                                className="w-full flex items-center justify-center py-4 text-white text-2xl font-semibold uppercase hover:text-primary transition-colors relative"
                            >
                                <span>{link.name}</span>
                                <ArrowRight className="w-4 h-4 text-white/20 absolute right-0" />
                            </button>
                            ) : (
                            <Link
                                href={link.href}
                                className="block py-4 text-white text-2xl font-semibold uppercase hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                            )}
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        </div>
                        ))}
                    </div>
                </motion.div>

                {/* Submenu Layer */}
                <AnimatePresence>
                    {activeSubmenu && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="absolute inset-0 px-8 py-1 flex flex-col justify-center overflow-y-auto"
                    >
                        <button 
                            onClick={() => setActiveSubmenu(null)}
                            className="flex items-center space-x-2 text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] mb-2 py-2 border-b border-white/5 w-full shrink-0"
                        >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back to Menu</span>
                        </button>
                        
                        <h3 className="text-2xl font-normal text-white uppercase mb-4 pr-4 shrink-0">{activeSubmenu.name}</h3>
                        
                        <div className="flex flex-col">
                        {activeSubmenu.sublinks.map((sub: any) => (
                            <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-2.5 text-white/80 text-xl font-normal border-b border-white/5 hover:text-white transition-colors"
                            >
                            {sub.name}
                            </Link>
                        ))}
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>

                {/* Ultra-Compact Bottom Contact Area */}
                <div className="bg-black/40 backdrop-blur-md border-t border-white/5 py-3 px-8 pb-[calc(12px+env(safe-area-inset-bottom))]">
                <div className="flex items-center justify-center space-x-10 text-[10px] uppercase font-bold tracking-widest text-[#f59e0b]">
                    <a href="tel:+2347034703200" className="flex items-center space-x-2">
                        <Phone className="w-3 h-3" />
                        <span>+234-7034703200</span>
                    </a>
                    <a href="mailto:info@authorenergy.com" className="flex items-center space-x-2 lowercase">
                        <Mail className="w-3 h-3" />
                        <span>info@authorenergy.com</span>
                    </a>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        {/* Main Visible Navbar Row - Always on top */}
        <div 
            className={cn(
            "transition-all duration-500 relative z-[110]",
            (isScrolled && !mobileMenuOpen) 
                ? "bg-white/85 backdrop-blur-md shadow-sm" 
                : "bg-transparent"
            )}
        >
            <div className={cn(
            "max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500",
            (isScrolled && !mobileMenuOpen) ? "py-2" : "py-4"
            )}>
            {/* Logo */}
            <Link href="/" className={cn(
                "relative transition-all duration-500 flex items-center",
                (isScrolled && !mobileMenuOpen) ? "h-6 w-28" : "h-10 w-40"
            )} onClick={() => setMobileMenuOpen(false)}>
                <Image
                src="https://res.cloudinary.com/dfwty72r9/image/upload/v1770403720/Author-Energy-Limited-Logo_z3dgix.png"
                alt="Author Energy Limited Logo"
                fill
                className="object-contain"
                priority
                />
            </Link>

            {/* Desktop Nav - Hidden on mobile menu open */}
            <nav className={cn(
                "hidden lg:flex items-center space-x-10 transition-opacity duration-300",
                mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
                {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center">
                    {link.isDropdown ? (
                    <div
                        className={cn(
                        "relative flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all py-2 cursor-pointer",
                        isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-primary hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]"
                        )}
                    >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    ) : (
                    <Link
                        href={link.href}
                        className={cn(
                        "relative flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all py-2",
                        pathname === link.href
                            ? "text-primary" 
                            : (isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-primary hover:[text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]")
                        )}
                    >
                        <span>{link.name}</span>
                    </Link>
                    )}

                    {link.sublinks && (
                    <div className="absolute left-[-20px] top-full pt-4 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className={cn(
                        "border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden w-80 p-2 transition-all duration-300",
                        isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-xl"
                    )}>
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="group/sub flex items-center justify-between px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-secondary transition-all relative overflow-hidden"
                          >
                            <span className="relative z-10 transition-colors duration-300 group-hover/sub:text-primary">{sub.name}</span>
                            
                            {/* Blended Glass BG - Faded Edges */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/[0.04] to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-500" />
                            
                            {/* Bold Smooth Border Left Reveal */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover/sub:scale-y-100 transition-transform origin-center duration-500 ease-out" />
                          </Link>
                        ))}
                    </div>
                  </div>
                    )}
                </div>
                ))}
            </nav>

            {/* Mobile Menu Toggle - Stays in the exact same spot */}
            <button
                className={cn(
                "lg:hidden p-2 relative focus:outline-none transition-all duration-300 flex items-center justify-center",
                mobileMenuOpen ? "text-[#f59e0b]" : (isScrolled ? "text-secondary" : "text-white")
                )}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div className="relative w-8 h-8 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: mobileMenuOpen ? 90 : 0, opacity: mobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <Menu className="w-8 h-8" />
                </motion.div>
                <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: mobileMenuOpen ? 0 : -90, opacity: mobileMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <X className="w-8 h-8" />
                </motion.div>
                </div>
            </button>
            </div>
        </div>
      </div>
    </header>
  );
}
