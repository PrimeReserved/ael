import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Our Impact & Projects",
  description: "View Author Energy's project highlights, technical facilities, and community empowerment initiatives.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
