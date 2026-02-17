import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "AEL Professional Courses",
  description: "Browse our extensive catalog of professional engineering and technical training courses, from Power Plant Operations to Vocational Skills.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}