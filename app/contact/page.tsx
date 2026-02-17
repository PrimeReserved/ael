import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Collaborate With Us",
  description: "Get in touch with Author Energy Limited. We are available for engineering consulting, technical training, and sustainable energy projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
