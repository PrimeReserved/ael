
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
  useCdn: false,
})

async function diagnose() {
  const services = await client.fetch(`*[_type == "service"]{
    _id,
    title,
    slug,
    description,
    subtitle,
    sections
  }`);
  
  console.log(`Total Services found: ${services.length}`);
  services.forEach((s, i) => {
    console.log(`[${i+1}] ID: ${s._id}`);
    console.log(`    Title: ${s.title}`);
    console.log(`    Slug: ${s.slug?.current}`);
    console.log(`    Subtitle: ${s.subtitle}`);
    console.log(`    Description: ${s.description}`);
    console.log(`    Sections: ${JSON.stringify(s.sections, null, 2)}`);
    console.log('------------------------------------------');
  });
}

diagnose();
