import { getServices } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { ArrowUpRight, MoveRight } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Engineering & Energy Solutions",
  description: "Explore Author Energy's comprehensive energy solutions, including Engineering Consulting, Gas Turbines, Renewable Energy, and more.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Short, Transparent Hero section for Services Page */}
      <PageHero 
        title={<span>OUR <span className="text-primary">SERVICES</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1771092102/photo-1660446695706-ba4478934091_eu4t4i.avif"
      />

      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {services?.map((service: any, idx: number) => (
              <div 
                key={service.slug.current}
                className="group flex flex-col bg-white rounded-[2.5rem] p-8 border border-zinc-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2"
              >
                {/* Visual Label / Numbering */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase">
                        {service.subtitle || "Energy Solutions"}
                    </span>
                    <div className="h-[1px] flex-grow bg-zinc-200 group-hover:bg-primary/30 transition-colors duration-500" />
                </div>

                {/* Main Feature Image - Clickable */}
                <Link 
                  href={`/services/${service.slug.current}`}
                  className="relative block aspect-[16/10] rounded-[2rem] overflow-hidden mb-10 shadow-lg"
                >
                  {service.heroImage ? (
                    <Image
                      src={urlFor(service.heroImage).url()}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-100" />
                  )}
                  {/* Subtle Overlays */}
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Learn More Icon Overlay (Glass Design) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Learn More</span>
                      <ArrowUpRight className="text-white w-4 h-4" />
                    </div>
                  </div>
                </Link>
                
                <div className="flex flex-col flex-grow">
                  <Link href={`/services/${service.slug.current}`} className="group/title">
                    <h3 className="text-3xl md:text-4xl font-black text-secondary tracking-tight uppercase leading-[0.9] mb-6 group-hover/title:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                  </Link>
                  
                  <div className="flex-grow">
                    <p className="text-zinc-500 text-base md:text-[17px] font-medium leading-relaxed mb-10">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-50">
                    <Link 
                      href={`/services/${service.slug.current}`}
                      className="inline-flex items-center gap-4 group/btn"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary group-hover/btn:text-primary transition-all">
                        View Service Breakdown
                      </span>
                      <div className="w-10 h-10 rounded-full border-2 border-zinc-100 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-500">
                        <MoveRight className="w-4 h-4 text-secondary transition-transform group-hover/btn:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Floating Subtle Background Title (Watermark style) */}
                <div className="absolute -z-10 right-10 bottom-10 text-[100px] font-black text-black/[0.01] uppercase pointer-events-none transition-all duration-700 group-hover:text-primary/[0.02] group-hover:translate-x-4">
                    {service.slug.current.split('-')[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA (Styled exactly like Courses page CTA) */}
          <div className="mt-32 py-20 px-6 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative rounded-[3rem] overflow-hidden">
             {/* Decorative background elements */}
             <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[60px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[60px]"></div>
             </div>
             
             <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                    Ready to Power Your Future?
                </h2>
                <p className="text-base md:text-lg text-zinc-700 mb-10 max-w-2xl mx-auto font-medium">
                    Collaborate with Author Energy Limited for world-class technical solutions, sustainable energy infrastructure, and industry-leading consulting.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
                >
                  <span>Schedule a Consultation</span>
                  <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
             </div>
          </div>

        </div>
      </section>
    </main>
  );
}
