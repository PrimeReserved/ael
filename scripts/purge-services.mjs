
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
  apiVersion: '2024-02-12',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function purge() {
  const services = await client.fetch(`*[_type == "service"]{_id, title, "slug": slug.current}`);
  console.log(`Found ${services.length} services to delete.`);
  
  for (const s of services) {
    console.log(`Deleting ${s.title} (ID: ${s._id})...`);
    await client.delete(s._id);
  }
  
  console.log('Purge complete.');
}

purge();
