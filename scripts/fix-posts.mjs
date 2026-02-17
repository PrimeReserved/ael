import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: resolve(__dirname, '../.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-13',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

const updates = [
  {
    slug: 'future-deep-drilling-tech',
    // Image: Oil Rig Worker Silhouette (High likelihood of working)
    imageUrl: "https://images.unsplash.com/photo-1513828583688-c29a7f0d4360?auto=format&fit=crop&q=80" 
  },
  {
    slug: 'natural-gas-transition',
    // Image: Blue Industrial Flame/Burner
    imageUrl: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&q=80"
  },
  {
    slug: 'subsea-engineering-marvels',
    // Image: Underwater/Blue Abstract Bubbles/Tech
    imageUrl: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80"
  },
  {
    slug: 'arctic-drilling-challenges',
    // Image: Ice/Cold Industrial scene (Snow)
    imageUrl: "https://images.unsplash.com/photo-1477505982272-ead89926a577?auto=format&fit=crop&q=80"
  }
];

async function fixPosts() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is missing')
    return
  }
  
  console.log('🚀 Fixing 4 specific broken blog post images...')
  try {
    for (const update of updates) {
      console.log(`Fixing image for: ${update.slug}...`)
      
      // Patch the specific document by slug
      // First get the ID
      const query = `*[_type == "post" && slug.current == "${update.slug}"][0]._id`
      const id = await client.fetch(query)
      
      if (id) {
        await client.patch(id)
          .set({
            mainImage: {
              _type: 'customImage',
              cloudinaryUrl: update.imageUrl,
              alt: 'Updated Blog Image'
            }
          })
          .commit()
        console.log(`✅ Fixed: ${update.slug}`)
      } else {
        console.error(`❌ Could not find post with slug: ${update.slug}`)
      }
    }
    console.log('✨ All fixes applied!')
  } catch (err) {
    console.error('❌ Fix failed:', err.message)
  }
}

fixPosts()
