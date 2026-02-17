import Hero from "@/components/Hero";
import VisionMissionValues from "@/components/VisionMissionValues";
import TrainingBanner from "@/components/TrainingBanner";
import SolarSection from "@/components/SolarSection";
import ServicesSection from "@/components/ServicesSection";
import { getTrainingData, getServices } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas, Power & Technical Excellence",
  description: "Author Energy Limited (AEL) provides world-class engineering consulting, gas turbines, renewable energy, and industry-leading technical training.",
};

export default async function Home() {
  const { courses, settings } = await getTrainingData();
  const services = await getServices();

  return (
    <div className="relative">
      <Hero />
      <VisionMissionValues />
      {courses && courses.length > 0 && (
        <TrainingBanner courses={courses} settings={settings} />
      )}
      <SolarSection />
      {services && services.length > 0 && (
        <ServicesSection services={services} />
      )}
    </div>
  );
}
