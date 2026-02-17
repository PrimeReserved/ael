import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const goldColor = "#f59e0b";

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block relative h-10 w-40">
              <Image
                src="https://res.cloudinary.com/dfwty72r9/image/upload/v1770403720/Author-Energy-Limited-Logo_z3dgix.png"
                alt="Author Energy Limited Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-200 leading-relaxed text-sm max-w-sm font-medium">
              Author Energy Limited (AEL) is an indigenous Nigerian Energy Company 
              driving excellence in Gas, Power, and Technical sectors through innovative engineering.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/author-energy-limited/mycompany" },
                { Icon: Facebook, href: "https://www.facebook.com/authorlimited" },
                { Icon: Twitter, href: "https://twitter.com/authorlimited" },
                { Icon: Instagram, href: "https://www.instagram.com/author_limited/" }
              ].map(({ Icon, href }, i) => (
                <Link 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">Quick Links</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider mt-8">
                <li>
                    <Link href="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
                    About Us <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
                    Our Services <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                </li>
                <li>
                    <Link href="/training" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
                    Our Training <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
                    Contact Us <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                </li>
                </ul>
            </div>
            <Link
                href="/services"
                className="text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
                VIEW ALL SERVICES WE OFFER
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">Corporate Headquarters</h3>
                <div className="space-y-5 text-xs font-bold uppercase tracking-widest text-gray-300">
                <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 shrink-0" style={{ color: goldColor }} />
                    <p className="normal-case leading-relaxed font-bold tracking-normal text-sm">
                    IIHT Complex, Opposite Jephthah College, KM 5 East West Road, Port Harcourt
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 shrink-0" style={{ color: goldColor }} />
                    <span className="text-sm tracking-normal">+234-7034703200</span>
                </div>
                <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 shrink-0" style={{ color: goldColor }} />
                    <span className="text-sm tracking-normal lowercase">info@authorenergy.com</span>
                </div>
                </div>
            </div>
            <Link
                href="/training"
                className="text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
                APPLY FOR TRAINING
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] font-sans">
            © {currentYear} Author Energy Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
