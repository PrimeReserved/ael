"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LayoutGrid, List as ListIcon, Calendar, ArrowRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage?: {
    asset?: { url: string };
    cloudinaryUrl?: string;
    alt?: string;
  };
}

export default function BlogList({ posts }: { posts: Post[] }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(6);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Controls */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900">Latest Insights</h2>
        <div className="flex items-center space-x-2 bg-white p-1 rounded-lg border border-zinc-200 shadow-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "grid"
                ? "bg-primary text-white shadow-md"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
            aria-label="Grid View"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "list"
                ? "bg-primary text-white shadow-md"
                : "text-zinc-500 hover:bg-zinc-100"
            }`}
            aria-label="List View"
          >
            <ListIcon size={20} />
          </button>
        </div>
      </div>

      {/* Posts Grid/List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col space-y-8"
        }
      >
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, index) => {
             // Logic to stretch the last item if it's the only one in the last row (modulo 3 === 1)
             // or if there are 2 items in the last row (modulo 3 === 2), maybe stretch them? User asked specifically for "last post take up list view".
             // Let's identifying if this is the LAST post AND if we are in grid mode AND if it is hanging alone or with just one partner.
             // Actually user said: "if the last row ... aint up to 3 (could be 1 or 2) then the very last post should take up a list view"
             
             const isLastPost = index === visiblePosts.length - 1;
             const remainder = visiblePosts.length % 3;
             const shouldStretch = viewMode === "grid" && isLastPost && remainder !== 0;

             // If shouldStretch is true, we force "md:col-span-3" and "md:flex md:items-stretch" style (list view style)
             const isListView = viewMode === "list" || shouldStretch;

             return (
              <motion.article
                key={post._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isListView ? "md:col-span-3 md:flex md:items-stretch" : "flex flex-col"
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative overflow-hidden ${
                    isListView ? "md:w-1/3 h-64 md:h-auto" : "h-64 w-full"
                  }`}
                >
                  <img
                    src={
                      post.mainImage?.cloudinaryUrl || 
                      post.mainImage?.asset?.url || 
                      "/placeholder.jpg"
                    }
                    alt={post.mainImage?.alt || post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex-grow">
                    <div className="flex items-center text-xs text-zinc-500 mb-3 space-x-2">
                      <Calendar size={14} className="text-primary" />
                      <span>{new Date(post.publishedAt).getFullYear()}</span>
                      <span>•</span>
                      <span>Energy Sector</span>
                    </div>
                    
                    <Link href={`/blog/${post.slug.current}`} className="block group-hover:text-primary transition-colors">
                      <h3 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-zinc-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide group/btn"
                    >
                      Read Article
                      <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More / End Message */}
      {hasMore ? (
        <div className="mt-16 text-center">
          <button
            onClick={handleLoadMore}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all duration-500 bg-secondary rounded-full hover:bg-primary hover:text-secondary shadow-xl hover:shadow-primary/20 focus:outline-none"
          >
            Load More Articles
            <svg 
              className="w-4 h-4 ml-3 transition-transform group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-zinc-500 font-medium text-sm tracking-widest uppercase border-t border-b border-zinc-200 py-4 inline-block px-8">
            End of Articles
          </p>
        </div>
      )}
    </div>
  );
}
