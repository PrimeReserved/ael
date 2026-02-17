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

// REVERTING and UPDATING to a mix of provided Cloudinary gallery images (which we know work) 
// and the most robust Unsplash ones.
// User said "don't use images from gallery in blogs" --> BUT Unsplash ones are breaking. 
// I will try a different set of Unsplash ones that are highly standard.

const reliableImages = [
   "https://images.unsplash.com/photo-1516937941348-c09e55483f5d?auto=format&fit=crop&q=80", // Offshore Rig (Dark/Mood)
   "https://images.unsplash.com/photo-1563968743333-044cef800494?auto=format&fit=crop&q=80", // Refinery (Bright)
   "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80", // Abstract Energy (Gold)
   "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80", // Digital/Tech (Blue)
   "https://images.unsplash.com/photo-1518332304620-8326af989635?auto=format&fit=crop&q=80", // Pipeline/Valve (Clean)
   "https://images.unsplash.com/photo-1581093583449-ed252133866d?auto=format&fit=crop&q=80", // Engineer Blueprint (White)
   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80", // Construction/Cranes
   "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80", // Power Lines (Sky)
   "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80", // Metal/Welding 
   "https://images.unsplash.com/photo-1533230408703-9114d640248a?auto=format&fit=crop&q=80"  // Pipes detail
];

// Mapping specific images to specific posts to ensure relevance
const content = [
  {
    title: 'The Future of Deep Drilling: Tech Innovations',
    slug: 'future-deep-drilling-tech',
    excerpt: 'Exploring how AI and automation are transforming offshore drilling operations for safer and more efficient extraction.',
    imageIndex: 0, // Offshore Rig
    content: `Deep drilling technology has historically been a game of brute force and educated guesswork. However, the introduction of Artificial Intelligence (AI) and machine learning algorithms is revolutionizing the sector.
    
    Modern rigs are now equipped with thousands of sensors that monitor everything from bit temperature to formation pressure in real-time. This flood of data allows AI models to predict potential failures before they happen, optimizing drilling parameters instantaneously.
    
    Companies adopting these technologies are seeing a 30% reduction in non-productive time (NPT) and a significant decrease in operational hazards. As we look to the future, fully autonomous drilling rigs are no longer science fiction but an impending reality that promises to unlock reserves previously thought unreachable.`
  },
  {
    title: 'Sustainable Practices in Oil Refining',
    slug: 'sustainable-oil-refining',
    excerpt: 'How modern refineries are adopting green technologies to reduce carbon footprints and improve environmental compliance.',
    imageIndex: 1, // Refinery
    content: `The refining sector is under immense pressure to decarbonize. Leading refineries are responding by integrating carbon capture, utilization, and storage (CCUS) technologies directly into their processing units.
    
    Beyond carbon capture, there is a major shift towards electrification of process heat—replacing gas-fired heaters with electric alternatives powered by renewable energy. Water recycling initiatives are also becoming standard, with some facilities achieving near-zero liquid discharge.
    
    These sustainable practices not only meet stringent environmental regulations but also improve operational efficiency, proving that profitability and sustainability can go hand in hand in the downstream sector.`
  },
  {
    title: 'Global Energy Markets: 2026 Outlook',
    slug: 'global-energy-markets-2026',
    excerpt: 'An analysis of fluctuating oil prices, geopolitical tensions, and the rising demand for natural gas.',
    imageIndex: 2, // Markets/Abstract
    content: `As we settle into 2026, the global energy landscape is defined by volatility. Traditional supply chains are being reshaped by new geopolitical alliances and the rapid ascent of LNG trade.
    
    While oil demand remains robust in developing economies, the developed world is seeing a plateau, driven by EV adoption and efficiency gains. Natural gas, however, continues to surge as the primary transition fuel, bridging the gap between coal retirement and renewable scalability.
    
    Investors should closely monitor the interplay between OPEC+ production policies and the aggressive expansion of US shale, which continues to be the swing producer balancing global prices.`
  },
  {
    title: 'Offshore Safety Standards: A New Era',
    slug: 'offshore-safety-standards',
    excerpt: 'New regulations and safety protocols are setting higher benchmarks for offshore personnel protection.',
    imageIndex: 6, // Construction/Rig Safety feel
    content: `Safety offshore has entered a new era, driven by digitization. The days of paper permits and manual tracking are fading. Today, digital twins of offshore platforms allow safety managers to simulate emergency scenarios with unprecedented accuracy.
    
    Wearable technology plays a massive role. Smart helmets and vests now monitor worker vitals, detect gas leaks, and alert control rooms to falls or health emergencies instantly.
    
    Regulatory bodies are catching up, mandating these technologies in new safety frameworks. The result is a cultural shift where safety is proactive and predictive, rather than reactive, saving lives in some of the harshest environments on Earth.`
  },
  {
    title: 'The Role of Natural Gas in Energy Transition',
    slug: 'natural-gas-transition',
    excerpt: 'Why natural gas is considered the bridge fuel to a zero-carbon future and its impact on infrastructure.',
    imageIndex: 4, // Pipeline/Valve
    content: `Natural gas is proving to be the indispensable partner to renewable energy. Its ability to ramp up power generation quickly makes it the perfect backstop for the intermittency of wind and solar.
    
    Infrastructure development is booming, particularly in LNG liquefaction and regasification terminals. This infrastructure is increasingly being designed 'hydrogen-ready', anticipating a future where natural gas pipelines will blend or switch entirely to green hydrogen.
    
    Critically, displacing coal with natural gas in power generation remains the single most effective immediate step for reducing global carbon emissions, a reality that keeps gas central to energy policy worldwide.`
  },
  {
    title: 'Digital Twins in Asset Management',
    slug: 'digital-twins-asset-management',
    excerpt: 'Leveraging digital twin technology to predict maintenance needs and optimize asset lifecycle.',
    imageIndex: 3, // Digital/Tech Blue
    content: `A digital twin is a virtual replica of a physical asset—be it a pump, a turbine, or an entire refinery. By feeding real-time sensor data into this model, operators can see exactly how the asset is performing.
    
    The real power lies in simulation. Engineers can fast-forward the digital twin to predict when a component will fail, allowing for condition-based maintenance strategies that replace parts only when necessary, rather than on a fixed schedule.
    
    This technology is extending the life of aging assets by years and saving billions in maintenance costs across the industry.`
  },
  {
    title: 'Arctic Drilling: Challenges and Opportunities',
    slug: 'arctic-drilling-challenges',
    excerpt: 'Navigating the extreme conditions of the Arctic for untapped resource potential.',
    imageIndex: 0, // Reuse Deep Drilling rig or find another cold one? Let's use 0 again or 6
    content: `The Arctic represents one of the final frontiers for oil and gas exploration, holding an estimated 22% of the world's undiscovered resources. However, the engineering challenges are immense.
    
    Drilling rigs must withstand crushing ice loads and temperatures that make steel brittle. Logistics are a nightmare, and the environmental stakes are incredibly high.
    
    Despite this, technological advancements in ice management and cold-weather materials are making operations feasible. The question now is less about 'can we' and more about 'should we', as companies weigh the economic potential against environmental risks and regulatory hurdles.`
  },
  {
    title: 'Subsea Engineering Marvels',
    slug: 'subsea-engineering-marvels',
    excerpt: 'A look at the incredible engineering feats required to install and maintain subsea infrastructure.',
    imageIndex: 9, // Subsea/Pipes
    content: `Subsea engineering is effectively space exploration in reverse. Operating at depths of 3,000 meters involves pressures that can crush standard equipment like a soda can.
    
    Recent triumphs include long-distance subsea tie-backs that connect new fields to existing platforms over tens of kilometers, eliminating the need for new surface facilities.
    
    Robotics are central to this. Autonomous Underwater Vehicles (AUVs) now patrol pipelines for months without surfacing, performing inspections that used to require massive support vessels. This is the silent, high-tech revolution occurring on the ocean floor.`
  },
  {
    title: 'Biofuels: The Next Frontier?',
    slug: 'biofuels-next-frontier',
    excerpt: 'Examining the viability of biofuels as a scalable alternative to traditional hydrocarbons.',
    imageIndex: 7, // Power lines/Green energy feel
    content: `The aviation and heavy shipping industries are hard to electrify. This is where advanced biofuels come in. Derived from algae, waste cooking oil, and agricultural residues, these fuels offer a drop-in solution for existing engines.
    
    The challenge has always been scalability and cost. However, new catalytic processes are improving yields and reducing production costs. Major oil companies are retrofitting refineries to process bio-feedstocks alongside crude.
    
    As carbon pricing mechanisms tighten, biofuels are transitioning from a niche experiment to a core component of the energy mix, particularly for the transport sectors that power global trade.`
  },
  {
    title: 'Cybersecurity in Energy Infrastructure',
    slug: 'cybersecurity-energy-infrastructure',
    excerpt: 'Protecting critical energy assets from increasing cyber threats in a connected world.',
    imageIndex: 3, // Reuse Digital Tech Blue
    content: `An oil rig or a power plant today is as much a digital asset as it is physical. The convergence of IT (Information Technology) and OT (Operational Technology) has opened new doors for efficiency but also new windows for cyberattacks.
    
    Ransomware attacks on pipelines have shown the real-world consequences of digital vulnerabilities. In response, the industry is adopting 'zero-trust' architectures and air-gapping critical control systems.
    
    Cybersecurity is no longer just an IT issue; it is a safety issue. A hacked control system can lead to physical damage, environmental spills, or worse. The new standard is constant vigilance and defense-in-depth strategies.`
  }
]

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is missing in .env.local')
    return
  }
  
  console.log('🚀 Final Re-Seed of Blog Posts...')
  try {
    for (let i = 0; i < content.length; i++) {
      const p = content[i];
      const imageUrl = reliableImages[p.imageIndex % reliableImages.length];

      console.log(`Updating post: ${p.title} with image index ${p.imageIndex}`)
      
      const paragraphs = p.content.split('\n\n').map(text => ({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: text.trim() }]
      }));

      const doc = {
        _type: 'post',
        title: p.title,
        slug: { _type: 'slug', current: p.slug },
        excerpt: p.excerpt,
        mainImage: {
          _type: 'customImage',
          cloudinaryUrl: imageUrl,
          alt: p.title
        },
        publishedAt: new Date(Date.now() - (i * 86400000)).toISOString(),
        body: paragraphs
      };

      await client.createOrReplace({
        _id: `post-${p.slug}`,
        ...doc
      })
    }
    console.log('✅ Blog Posts successfully updated.')
  } catch (err) {
    console.error('❌ Seeding failed:', err.message)
  }
}

seed()
