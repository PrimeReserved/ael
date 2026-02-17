import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "AEL Gallery",
  description: "View Author Energy's project highlights, technical facilities, and community empowerment initiatives.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
