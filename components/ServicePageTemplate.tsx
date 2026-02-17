import PageHero from "@/components/PageHero";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceSection {
  title: string;
  content: string;
  items?: string[];
}

interface ServicePageProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  description: string;
  sections: ServiceSection[];
  equipmentGallery?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  description,
  sections,
  equipmentGallery,
  ctaText = "Get Started",
  ctaLink = "/contact"
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero 
        title={<span className="text-white">{title}</span>}
        image={heroImage}
      />

      {/* Main Content */}
      <section className="py-16 px-8 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-14 space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] block">
              OUR SERVICES
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary uppercase tracking-tighter leading-none" style={{ wordSpacing: '0.5rem' }}>
              {subtitle || title}
            </h2>
            <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl">
              {description}
            </p>
          </div>

          {/* Service Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-5">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                  {section.title}
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  {section.content}
                </p>
                
                {section.items && section.items.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {section.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-secondary/30 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-900 font-semibold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Equipment Gallery Section - Only shows if equipmentGallery is provided */}
          {equipmentGallery && equipmentGallery.length > 0 && (
            <div className="mt-16 space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary">
                  Equipment Gallery
                </h3>
                <p className="text-gray-800 text-lg font-medium">
                  Explore our wide range of high-quality equipment and solutions
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {equipmentGallery.map((image, idx) => (
                  <div 
                    key={idx}
                    className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200 hover:border-secondary/50 transition-all duration-300 group"
                  >
                    <Image
                      src={image}
                      alt={`Equipment ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl p-12 md:p-16 text-center border border-secondary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can support your project with our expert services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={ctaLink}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-secondary font-bold rounded-xl border-2 border-secondary hover:bg-secondary/5 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}