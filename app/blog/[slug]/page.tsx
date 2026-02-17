import { getPost, client } from "@/lib/sanity";
import PageHero from "@/components/PageHero";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Components mapping for PortableText
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).fit('max').auto('format').url()}
          className="my-8 rounded-lg shadow-lg w-full max-h-[600px] object-cover"
        />
      );
    },
    customImage: ({ value }: any) => {
      // Handle our custom image type in body
      const imageUrl = value.cloudinaryUrl || (value.image?.asset ? urlFor(value.image).url() : null);
      if (!imageUrl) return null;
      return (
         <figure className="my-8">
            <img
              alt={value.alt || 'Post Image'}
              loading="lazy"
              src={imageUrl}
              className="rounded-lg shadow-lg w-full max-h-[600px] object-cover"
            />
            {value.alt && <figcaption className="text-center text-sm text-zinc-500 mt-2 italic">{value.alt}</figcaption>}
         </figure>
      );
    }
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary pl-4 py-2 italic my-6 bg-zinc-50 rounded-r-lg">{children}</blockquote>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-zinc-700 text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-4 space-y-2 marker:text-primary">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-4 space-y-2 marker:text-primary">{children}</ol>,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  const heroImage = post.mainImage?.cloudinaryUrl || post.mainImage?.asset?.url || "https://images.unsplash.com/photo-1518459384541-e074ef514254?auto=format&fit=crop&q=80";

  return (
    <main className="min-h-screen bg-white">
      {/* Cinematic Hero Section with Image Background */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-end pb-12 md:pb-20">
          <div className="absolute inset-0">
             <img 
               src={heroImage} 
               alt={post.title} 
               className="w-full h-full object-cover"
             />
             {/* Gradient Overlay for Text Readability & Mood */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-white">
             <Link 
                href="/blog" 
                className="inline-flex items-center text-zinc-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-6"
              >
                <ArrowLeft size={14} className="mr-2" />
                All Articles
              </Link>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-lg">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-200">
                 <span className="flex items-center">
                   <Calendar size={16} className="mr-2 text-primary" />
                   {new Date(post.publishedAt || Date.now()).toLocaleDateString(undefined, {
                     month: 'long',
                     day: 'numeric',
                     year: 'numeric'
                   })}
                 </span>
                 <span className="w-1 h-1 bg-zinc-400 rounded-full" />
                 <span className="flex items-center">
                   <Clock size={16} className="mr-2 text-primary" />
                   5 min read
                 </span>
                 <span className="w-1 h-1 bg-zinc-400 rounded-full" />
                 <span className="text-primary font-bold uppercase tracking-wider text-xs">
                   Energy
                 </span>
              </div>
          </div>
      </div>

      <article className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Content Column */}
        <div className="max-w-3xl mx-auto">
          {/* Drop cap and rich text styling */}
          <div className="prose prose-lg md:prose-xl prose-zinc prose-headings:font-bold prose-headings:text-zinc-900 prose-headings:tracking-tight prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-xl prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-zinc-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:italic prose-blockquote:rounded-r-lg">
             {post.body ? (
              <PortableText value={post.body} components={ptComponents} />
            ) : (
              <p className="text-xl leading-relaxed text-zinc-600 first-letter:text-6xl first-letter:font-black first-letter:text-zinc-900 first-letter:mr-3 first-letter:float-left">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Footer of Article */}
          <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center">
             <div className="flex items-center gap-4">
                <span className="text-zinc-400 text-sm font-medium">Share this article:</span>
                <ShareButton />
             </div>
             
             <Link href="/blog" className="text-primary font-bold hover:underline">
               Read Next Article &rarr;
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
