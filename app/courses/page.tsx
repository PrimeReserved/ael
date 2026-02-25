import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";
import { client } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "AEL Professional Courses",
  description: "Browse our extensive catalog of professional engineering and technical training courses, from Power Plant Operations to Vocational Skills.",
};

async function getCourseCategories() {
  const query = `*[_type == "courseCategory"] | order(order asc) {
    title,
    description,
    bgColor,
    courses,
    order
  }`;
  return await client.fetch(query);
}

export default async function CoursesPage() {
  const categories = await getCourseCategories();
  
  return <CoursesContent initialCategories={categories} />;
}