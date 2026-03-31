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
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-12',
  token: process.env.SANITY_WRITE_TOKEN, 
  useCdn: false,
})

const trainingCategories = [
  {
    title: "Environmental & Construction Courses",
    icon: "Leaf",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772553400/AdobeStock_179361878_yujkck.jpg",
    description: "Build expertise in water systems, environmental compliance, and infrastructure development. Essential knowledge for professionals managing critical environmental assets and construction projects.",
    highlights: ["Water & drainage systems", "Environmental compliance", "Oil spill response", "ISO 14001 implementation"],
    order: 9
  },
  {
    title: "Renewable Energy",
    icon: "Sun",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772553542/photo-1521618755572-156ae0cdd74d_nfov5n.avif",
    description: "Lead the transition to clean energy with hands-on training in solar systems, energy auditing, and sustainability practices. Future-proof your career in one of the world's fastest-growing industries.",
    highlights: ["Solar PV systems", "Energy audit & management", "Renewable energy fundamentals", "Sustainability practices"],
    order: 10
  },
  {
    title: "Software & ICT Courses",
    icon: "Monitor",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772553899/photo-1638602612226-55fd638475c9_mcry20.avif",
    description: "Master industry-standard design tools and cutting-edge technology skills. From creative software to network infrastructure, our training prepares you for the demands of today's digital-first workplace.",
    highlights: ["Adobe Creative Suite", "AutoCAD 2D/3D", "Web design tools", "Digital content creation"],
    order: 11
  },
  {
    title: "Reservoir & Production Simulation",
    icon: "Layers",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554016/Reservior_Simulation_fv346p.png",
    description: "Gain hands-on proficiency in the world's leading reservoir simulation platforms. Master the tools that drive field development decisions, production forecasting, and recovery optimization across global oil and gas operations.",
    highlights: ["CMG reservoir simulation", "ECLIPSE/INTERSECT modelling", "Petrel interpretation", "Dynamic reservoir modelling"],
    order: 12
  },
  {
    title: "Process & Facility Simulation",
    icon: "Factory",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554114/images_pjy4ky.jpg",
    description: "Develop expertise in process design and optimisation for oil and gas facilities. Learn to model complex plant operations, troubleshoot inefficiencies, and ensure safe and reliable process performance.",
    highlights: ["HYSYS process simulation", "Aspen Plus modelling", "PRO/II optimisation", "Steady-state simulation"],
    order: 13
  },
  {
    title: "CAD & Mechanical Design",
    icon: "PenTool",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554165/685028fdf61d777d4b83cf0e_MCAD_lxbjbw.jpg",
    description: "Master the technical design tools used in engineering and construction of oil and gas facilities. From 2D drafting to full-scale 3D plant modelling, build the skills that drive precision engineering projects.",
    highlights: ["AutoCAD drafting", "SolidWorks 3D design", "PDMS/E3D plant modelling", "SmartPlant 3D"],
    order: 14
  },
  {
    title: "Pipe Stress & Structural Analysis",
    icon: "GitBranch",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554213/1DE7E114-7210-4775-88E6-F21245EDBC0E-400x300-1_gueqy8.png",
    description: "Build critical competence in structural integrity and pipe stress evaluation. Essential training for engineers responsible for the safety and reliability of pipelines, pressure systems, and offshore structures.",
    highlights: ["CAESAR II stress analysis", "STAAD.Pro structural modelling", "ANSYS FEA", "ROHR2 pipe evaluation"],
    order: 15
  },
  {
    title: "Geoscience & Geological Modelling",
    icon: "Globe",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554267/geovia-topics-geology-modeling-1920x696_kckzsu.webp",
    description: "Develop advanced skills in subsurface characterisation and geological interpretation. Train on the industry's leading platforms for building accurate reservoir models that underpin exploration and production decisions.",
    highlights: ["3D geologic modelling", "Reservoir characterisation", "Structural restoration", "Seismic & well interpretation"],
    order: 16
  },
  {
    title: "Drilling & Well Engineering",
    icon: "Drill",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554365/m_MSc-Oil-and-Gas-Engineering_zqrf0n.jpg",
    description: "Master the software tools that plan, execute, and optimise well operations. From trajectory design to drilling performance analytics, gain the technical edge needed in modern well engineering.",
    highlights: ["Well planning & trajectory", "Drilling performance prediction", "Operations data management", "Drilling analytics"],
    order: 17
  },
  {
    title: "Data Analytics & Machine Learning",
    icon: "BarChart2",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554443/photo-1748609160056-7b95f30041f0_fxb02t.avif",
    description: "Harness the power of data to drive smarter decisions across oil and gas operations. Learn to build predictive models, automate analysis, and unlock actionable insights from complex engineering datasets.",
    highlights: ["Spotfire dashboards", "Python/R programming", "MATLAB simulations", "Predictive modelling"],
    order: 18
  },
  {
    title: "Pipeline & Flow Assurance",
    icon: "ArrowRightLeft",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554500/photo-1622534376374-fe4480328daa_qupre5.avif",
    description: "Develop deep expertise in multiphase flow behaviour and pipeline network design. Critical training for engineers ensuring reliable, efficient, and safe transportation of hydrocarbons from wellhead to processing facility.",
    highlights: ["Multiphase flow simulation", "Pipeline network modelling", "Flow dynamics", "OLGA & PipeSim"],
    order: 19
  },
  {
    title: "Safety, HAZOP & Risk Analysis",
    icon: "ShieldAlert",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554542/photo-1567954970774-58d6aa6c50dc_ejpjrn.avif",
    description: "Build the analytical skills to identify, assess, and mitigate risks in complex industrial environments. Train on industry-leading tools used by safety engineers worldwide to protect people, assets, and the environment.",
    highlights: ["HAZOP consequence modelling", "Quantitative risk analysis", "Probabilistic risk assessment", "LS-DYNA safety modelling"],
    order: 20
  },
  {
    title: "Project, Asset & Maintenance Management",
    icon: "ClipboardCheck",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1772554629/photo-1517245386807-bb43f82c33c4_etcsi8.avif",
    description: "Master the enterprise platforms that drive operational excellence across oil and gas assets. From maintenance planning to asset lifecycle tracking, gain the skills to maximise uptime and reduce operational costs.",
    highlights: ["Enterprise asset management", "SAP PM modules", "Maximo asset tracking", "Operational excellence"],
    order: 21
  }
];



async function uploadImage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch image: ${url}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    return await client.assets.upload('image', buffer, {
      filename: url.split('/').pop()
    });
  } catch (err) {
    console.error(`❌ Failed to upload image ${url}:`, err.message);
    return null;
  }
}

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is missing')
    return
  }

  console.log('🚀 Seeding Training and Course Categories...');

  try {
    // 1. Seed Training Categories
    for (const cat of trainingCategories) {
      console.log(`+ Seeding Training Category: ${cat.title}`);
      let imageAsset = null;
      if (cat.image_url) {
        imageAsset = await uploadImage(cat.image_url);
      }
      
      const safeId = cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      await client.createOrReplace({
        _type: 'trainingCategory',
        _id: `training-cat-${safeId}`,
        title: cat.title,
        icon: cat.icon,
        description: cat.description,
        highlights: cat.highlights,
        order: cat.order,
        image: imageAsset ? {
          _type: 'image',
          asset: { _type: "reference", _ref: imageAsset._id }
        } : undefined
      });
    }

    // 2. Seed Course Categories 
    // for (const cat of courseCategories) {
    //   console.log(`+ Seeding Course Category: ${cat.title}`);
    //   const safeId = cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    //   await client.createOrReplace({
    //     _type: 'courseCategory',
    //     _id: `course-cat-${safeId}`,
    //     title: cat.title,
    //     description: cat.description,
    //     bgColor: cat.bgColor,
    //     courses: cat.courses,
    //     order: cat.order
    //   });
    // }

    console.log('✅ Seeding complete!');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  }
}

seed();
