import ServicePageTemplate from "@/components/ServicePageTemplate";
import { client, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getService(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    subtitle,
    heroImage,
    description,
    sections,
    equipmentGallery
  }`;
  
  return await client.fetch(query, { slug });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  
  if (!service) {
    notFound();
  }

  // Convert Sanity image objects to URLs
  const heroImageUrl = service.heroImage ? urlFor(service.heroImage).url() : '';
  const equipmentGalleryUrls = service.equipmentGallery?.map((img: any) => urlFor(img).url()) || undefined;

  return (
    <ServicePageTemplate
      title={service.title}
      subtitle={service.subtitle}
      heroImage={heroImageUrl}
      description={service.description}
      sections={service.sections || []}
      equipmentGallery={equipmentGalleryUrls}
      ctaText={`Request ${service.title.split(' ')[0]} Services`}
      ctaLink="/contact"
    />
  );
}
