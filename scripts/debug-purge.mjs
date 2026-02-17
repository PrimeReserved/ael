
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })

console.log('PID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-02-12',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function run() {
    console.log('Fetching...');
    const services = await client.fetch('*[_type == "service"]{_id}');
    console.log('Found:', services.length);
    for (const s of services) {
        await client.delete(s._id);
        console.log('Deleted:', s._id);
    }
    console.log('Done');
}

run().catch(console.error);
