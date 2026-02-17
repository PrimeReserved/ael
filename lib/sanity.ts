import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-12',
  useCdn: false,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getTrainingCourses() {
  return client.fetch(`*[_type == "training" && isActive == true] | order(startDate asc)`)
}

export async function getTrainingData() {
  const settings = await client.fetch(`*[_type == "trainingSettings"][0]`);
  const courses = await client.fetch(`*[_type == "training" && isActive == true] | order(startDate asc)`);
  return { settings, courses };
}

export async function getServices() {
  return client.fetch(`*[_type == "service"]`);
}

export async function getPosts() {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      cloudinaryUrl,
      alt
    }
  }`);
}

export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      },
      cloudinaryUrl,
      alt
    },
    body
  }`;
  return client.fetch(query, { slug });
}
