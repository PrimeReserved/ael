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
    // Provided Image 1
    // https://images.unsplash.com/photo-1693847173071-bd6237101335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9pbCUyMGFuZCUyMGdhc3xlbnwwfHwwfHx8MA%3D%3D
    imageUrl: "https://images.unsplash.com/photo-1693847173071-bd6237101335?auto=format&fit=crop&q=80" 
  },
  {
    slug: 'natural-gas-transition',
    // Provided Image 2
    // https://images.unsplash.com/photo-1600221574280-9bcd5d108100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9pbCUyMGFuZCUyMGdhc3xlbnwwfHwwfHx8MA%3D%3D
    imageUrl: "https://images.unsplash.com/photo-1600221574280-9bcd5d108100?auto=format&fit=crop&q=80"
  },
  {
    slug: 'subsea-engineering-marvels',
    // Provided Image 3
    // https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww
    imageUrl: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?auto=format&fit=crop&q=80"
  },
  {
    slug: 'arctic-drilling-challenges',
    // Provided Image 4
    // https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww
    imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80"
  }
];

async function fixSpecificPosts() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is missing')
    return
  }
  
  console.log('🚀 Updating 4 specific blog posts with YOUR images...')
  try {
    for (const update of updates) {
      console.log(`Updating image for: ${update.slug}...`)
      
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
        console.log(`✅ Updated: ${update.slug}`)
      } else {
        console.error(`❌ Could not find post with slug: ${update.slug}`)
      }
    }
    console.log('✨ Custom image updates applied!')
  } catch (err) {
    console.error('❌ Update failed:', err.message)
  }
}

fixSpecificPosts()
