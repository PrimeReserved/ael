import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Author Energy Limited",
  description: "Learn about Author Energy Limited (AEL), our mission, vision, and our commitment to technical excellence in the energy sector.",
};

export default function AboutPage() {
  return <AboutContent />;
}
