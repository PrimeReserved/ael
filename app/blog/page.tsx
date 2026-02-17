import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Stay updated with the latest news, technical insights, and industry trends from Author Energy Limited.",
};

// Force dynamic rendering since we are fetching data
export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-stone-50">
      <PageHero 
        title={<span>OUR <span className="text-primary">BLOG</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770949431/images_ech5ou.jpg"
      />
      
      <BlogList posts={posts} />
    </main>
  );
}
