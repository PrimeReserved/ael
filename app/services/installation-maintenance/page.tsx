import ServicePageTemplate from "@/components/ServicePageTemplate";
import { client, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";

async function getService() {
  const query = `*[_type == "service" && slug.current == "installation-maintenance"][0]{
    title,
    subtitle,
    heroImage,
    description,
    sections,
    equipmentGallery
  }`;
  
  return await client.fetch(query);
}

export default async function ServicePage() {
  const service = await getService();
  
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
      ctaText={`Request Installation Services`}
      ctaLink="/contact"
    />
  );
}