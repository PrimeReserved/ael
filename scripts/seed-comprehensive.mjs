
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

async function uploadImageFromUrl(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Failed to fetch ${url}`)
    const buffer = await response.arrayBuffer()
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: url.split('/').pop()
    })
    return {
      _type: 'image',
      asset: {
        _type: "reference",
        _ref: asset._id
      }
    }
  } catch (error) {
    console.error(`Error uploading image from ${url}:`, error.message)
    return null
  }
}

const services = [
  {
    slug: 'engineering-consulting',
    title: 'Engineering Consulting',
    subtitle: 'Comprehensive Engineering Solutions',
    description: 'Author Energy engineering services create value for any engineering project, be it in power, oil and gas, or construction industries. From concept to completion, our engineering team delivers innovative solutions across mechanical, electrical, process, and all types of engineering projects.',
    heroImageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000',
    sections: [
      {
        title: "Engineering Excellence",
        content: "We assist our clients in the Oil and Gas, process and chemical plants, and Power generation industries with engineering design, consulting, procurement, and construction management solutions to keep projects moving forward. We have adopted an innovative approach to confronting any engineering challenge. Our experts and partners achieve both quick wins and long-term results. Author Energy has a proven track record of delivering engineering, procurement, and construction management solutions on time and on budget, as well as on spec.",
        items: [
            "Engineering design & consulting", 
            "Procurement management", 
            "Construction management", 
            "Project lifecycle support", 
            "Quality assurance & control", 
            "On-time & on-budget delivery"
        ]
      },
      {
        title: "Procurement & General Equipment Supply",
        content: "Author Energy helps you to manage the purchasing of anything related to oil and gas, power generation systems, renewable energy, waste management facility equipment, and business utilities. Our procurement specialists and partners are experts in negotiating contract terms and ensuring that your business gets the best possible quote.",
        items: [
            'Valves, Actuators, Regulators',
            'Pumps & Compressors',
            'Process Control Instrumentation',
            'Hoses and Fluid Handling',
            'Hose Fittings',
            'Pipe Fittings and Flanges',
            'Pipe and Tubular Products',
            'Separators and Filters',
            'Gauges and Meters',
            'Pipeline accessories',
            'Generators',
            'Cranes and lifting equipment',
            'Steelworks',
            'Safety Equipment',
            'Personal Safety Equipment',
            'Coatings, resins, paints',
            'Lighting and Electrical Products',
            'HVAC Equipment and Supplies',
            'Subsea Pipes & Fittings',
            'Non Corrosive Fittings',
            'Stainless Steel Fittings',
            'Stainless Steel Pipe',
            'Hazardous Area Electrical Equipment',
            'ATEX Equipment',
            'Non Sparking Tools',
            'Inverter Welding Machines',
            'Mastics',
            'Sealants',
            'Pipeline Adhesives',
            'Welding inspection tools',
            'Solar Powered equipment and gadgets',
            'Welding supplies',
            'Bearings',
            'Seals',
            'Fibreglass piping (flanges, pipes)'
        ]
      },
      {
        title: "Well Head and Drilling Equipment",
        content: "Comprehensive supply and support for well head and drilling operations, including complete systems and spare parts for critical operations.",
        items: [
            'Well Heads',
            'Pack-off Flanges',
            'Slips & Secondary Seals',
            'Casing Spools',
            'Casing Head Housings',
            'Tubing Heads',
            'Well Head Christmas Trees',
            'All types of valves',
            'Drilling Equipment',
            'Drawworks (complete systems to spare parts)',
            'Crown Blocks',
            'Hook Blocks',
            'Swivels',
            'Rotary Tables',
            'Desanders',
            'Shale Shakers',
            'Mud Pumps & Systems',
            'Rotary Drilling and Vibrator Hoses',
            'Unions (Non Aligned Screwed Unions, Quick Unions, Swivel Unions)',
            'Blowout Preventers and Manifolds',
            'Hydraulic Control Units',
            'Cementing and Fracturing Units'
        ]
      }
    ],
    equipmentGalleryUrls: [
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771065992/reciprocating_tcm11-44852-300x169_cguwsu.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066000/safety-equipment_qy7qfw.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066008/actuator-300x200_pdkwmk.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066019/Control-valve-in-oil-and-gas-industry_gdmfio.png",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066027/pumps-300x225_lhonc8.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066035/pump-cutaway-4-300x176_vkmber.png",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066042/use-for-waste-waste-recycling-equipment-300x150_xydocs.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066049/inverter-type-welding-machine-500x500-1-300x300_qlld4v.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066053/Equipo_Solar_Aislada_3_1500_3000w_Gel-300x216_eanjl4.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066071/valves-300x268_fzktkh.png",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066080/valves_ngpqun.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066085/use-this-for-renewable-energy-slide-picture-300x195_yo5szx.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771066097/pics-for-environmental-meterology-services-300x300_akmdrw.jpg",
      "https://res.cloudinary.com/dfwty72r9/image/upload/v1771067084/gas-turbine-image-300x149_tagki4.png"
    ]
  },
  {
    slug: 'gas-turbines',
    title: 'Gas Turbines & Power Generation',
    subtitle: 'Advanced Power Solutions',
    description: "The use of gas turbines for generating electricity is currently assuming a prominent position in the industrial sector across Africa. With Nigeria's abundance of gas reserves and the global shift towards cleaner energy, we are positioned to deliver comprehensive gas turbine and power generation solutions.",
    heroImageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000',
    sections: [
      {
        title: "Power System Planning & Operation",
        content: "Our team of experts has extensive hands-on experience in power systems planning and operational studies, using various software tools such as PSCAD™, PSS/E (licensed by Siemens), DSA Power Tools, ETAP, CYME, and Risk A. We offer comprehensive solutions to help our clients achieve excellence in power system planning and operation.",
        items: [
            "System interconnection studies (HVAC and HVDC)", 
            "Load flow, stability, and voltage control", 
            "Generation integration studies (wind and solar)", 
            "Black start procedures", 
            "Tie line transfer limits", 
            "Out-of-step relay design", 
            "Fault current limiting and mitigation", 
            "Reactive power compensation",
            "Impact assessment and mitigation"
        ]
      },
      {
        title: "Gas Turbine Solutions & Markets",
        content: "Nigeria is a gas province with an estimated proven gas reserve of 203.16tcf. The global gas turbine market is projected to reach USD 20.66 Billion, driven by rising demand for electricity and gas-fired power plants. Gas as a transition fuel is cleaner than crude oil and less of a contributor to global climate change.",
        items: [
            "Open Cycle and Combined Cycle Technology", 
            "Rating Capacity: Less than 40 MW to Above 300 MW", 
            "Heavy Duty and Aeroderivative Design Types", 
            "Power and Oil & Gas Applications", 
            "Complete lifecycle support", 
            "Planning to in-service operations",
            "Investor collaboration and partnerships"
        ]
      },
      {
        title: "Transmission, Distribution & Generation",
        content: "We work closely with owners and operators of utilities, regulators, and research organizations to provide engineering services that support system planners and operators in achieving optimal power system performance and reliability."
      }
    ]
  },
  {
    slug: 'training-outsourcing',
    title: 'Engineering & Technical Training',
    subtitle: 'Professional Development Programs',
    description: "We offer corporate training consulting and support for clients in engineering and technical sectors. With our deep understanding of technical competence value in power and energy industries, we've adopted a comprehensive result-oriented instructional model focused on continuous development for effective personnel performance.",
    heroImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000',
    sections: [
      {
        title: "Our Training Approach",
        content: "Our training solutions provide employees with the required knowledge, skills and abilities for a successful career in their field of interest. AEL programs are designed to create the right frame of mind and inspire the confidence needed to drive high performance. We train you in specialized engineering and technical modules tailored specifically to your discipline and career choice.",
        items: [
            "Comprehensive and specialist specific courses", 
            "Application-oriented learning", 
            "Current industry demands focus", 
            "Skills upgrade for new jobs", 
            "Program evaluation & feedback", 
            "Continuous improvement"
        ]
      },
      {
        title: "AEL Objectives",
        content: "Our courses are developed with clear objectives to ensure maximum learning outcomes and practical application in real-world scenarios.",
        items: [
            "Comprehensive and specialist specific training", 
            "Application-oriented modules", 
            "Address current industry demands and learner's needs", 
            "Help learners upgrade current skills to new jobs", 
            "Evaluation of programs to ensure learning objectives were achieved", 
            "Continuous improvement based on feedback"
        ]
      },
      {
        title: "Delivery Methods",
        content: "We offer flexible delivery approaches to suit your learning preferences and organizational needs, ensuring maximum accessibility and effectiveness.",
        items: [
            "Instructor-led training (ILT)", 
            "Virtual instructor-led training (VILT)", 
            "eLearning platforms", 
            "Simulation-based learning", 
            "On-the-job training", 
            "Blended learning solutions"
        ]
      }
    ]
  },
  {
    slug: 'installation-maintenance',
    title: 'Installation & Maintenance',
    subtitle: 'Comprehensive Plant Services',
    description: "Regular maintenance and repairs are crucial for avoiding downtimes and ensuring a long life cycle for your plants. We are duty-bound to assist you during the whole service life and offer corporate and flexible agreements as well as maintenance contracts.",
    heroImageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000',
    sections: [
      {
        title: "Comprehensive Maintenance & Electrical",
        content: "We ensure comprehensive achievement of critical maintenance objectives through our expert services. We are experts in electrical/electronic projects in oil locations such as installation of control room instruments, electronics panels, and field instruments like pressure transmitters and solenoid valves.",
        items: [
            "Customized maintenance concept", 
            "Damage prevention and cost control", 
            "Minimum downtimes & value preservation", 
            "Control room instrument installation", 
            "Field instrument calibration", 
            "Surface conduit & underwater electrical work", 
            "Platform and flow station wiring", 
            "Power generating set maintenance"
        ]
      },
      {
        title: "Mechanical Services",
        content: "Comprehensive mechanical services covering all aspects of plant operation and maintenance. We service and re-kit all types of valves and pumps for effective and optimum performance.",
        items: [
            "Valve services and re-kitting", 
            "Pump servicing (double diaphragm, injection, etc.)", 
            "Mechanical hook-up of oil pipelines", 
            "Actuator overhauling (Electric, Pneumatic, Hydraulic)", 
            "Pipeline construction engineering", 
            "Pressure testing and certification"
        ]
      },
      {
        title: "Turbine Fuel Nozzles",
        content: "AEL provides repair, overhaul, and calibration of Industrial Gas Turbine Fuel Nozzles. We service Heavy Industrial Gas Turbines (Siemens, Rolls-Royce, Alstom) and Light Industrial (Solar Turbines, GE Aero-derivative).",
        items: [
            "Detailed analysis on receipt",
            "Flow test data and positioning charts",
            "Heavy Industrial Turbine Support",
            "Light Industrial Turbine Support",
            "Overhaul & Calibration"
        ]
      },
      {
        title: "Measurement, Control & Calibration",
        content: "We have proven track records in metering proving/certification of flow meters as well as configuration of control systems in the oil and gas industry. We calibrate Rosemount, Yokogawa, Foxboro, Masoneilan, and Fisher instruments.",
        items: [
            "Flow meter proving and certification", 
            "Pressure valve & transmitter calibration", 
            "Control system configuration", 
            "PSV and switch testing", 
            "Pressure testing services", 
            "Field calibration and troubleshooting"
        ]
      },
      {
        title: "Installation & Commissioning",
        content: "Our engineers design overall commissioning plans to provide full documentation of integrity of electrical and mechanical equipment as well as verifying all systems and sub-systems.",
        items: [
            "Equipment installation", 
            "Start-up commissioning", 
            "Acceptance test performance", 
            "Code compliance evaluation", 
            "System verification", 
            "Instrument and valve installation"
        ]
      }
    ]
  },
  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    subtitle: 'Sustainable Energy Solutions',
    description: "AEL has expertise in a wide variety of energy fields. We leverage our technical partners' experience in hydroelectricity, heat recovery, hydraulic energy recovery, bio-energy, district energy, and solar energy to deliver sustainable solutions that reduce energy costs and greenhouse gas emissions.",
    heroImageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000',
    sections: [
      {
        title: "Our Renewable Energy Expertise",
        content: "Our team collaborates with our technical partners who are experts in strategies that improve energy efficiency and use alternative and renewable energy technologies. Complex projects such as the production and use of biogas, biosolids, waste-energy, and green fuels in the agricultural and water resource recovery fields are some of the projects our capabilities fit in.",
        items: [
            "Hydroelectricity solutions", 
            "Heat recovery systems", 
            "Hydraulic energy recovery", 
            "Bio-energy production", 
            "District energy systems", 
            "Solar energy installations",
            "Biogas and Biosolids production"
        ]
      },
      {
        title: "Solar Energy & Lighting Solutions",
        content: "AEL provides power and electricity solutions to homes and industries. We have reputable partners across the globe who have completed numerous projects for public and private sector clients. Our team offers a broad range of expertise covering lighting and power supply.",
        items: [
            "Residential solar installations", 
            "Industrial power systems", 
            "Outdoor and indoor lighting", 
            "Airfield light and control systems", 
            "Solar power supply systems", 
            "Wind energy integration",
            "Specialist procurement & installation"
        ]
      },
      {
        title: "Community & Corporate Solutions",
        content: "We work with national and international agencies, institutions, community relations, and Corporate Social Responsibility units of organizations to bring affordable energy to homes. Our approach is to develop sustainable solutions while considering the environmental, social, and economic impact of the project.",
        items: [
            "Community energy access programs", 
            "CSR partnership initiatives", 
            "Environmental impact assessment", 
            "Social and economic consideration", 
            "Energy efficiency studies", 
            "Building energy assessments",
            "Sustainable procurement"
        ]
      }
    ]
  },
  {
    slug: 'machining-fabrication',
    title: 'Machining & Fabrication',
    subtitle: 'Precision Manufacturing Services',
    description: "Author Energy has earned a solid reputation in Machination and Fabrication by working closely with our clients and following strict quality guidelines. Our experienced and quality-focused fabrication engineering team handles projects using techniques, processes, and equipment critical to delivering multifaceted, unique machines.",
    heroImageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000',
    sections: [
      {
        title: "Advanced Machining Capabilities",
        content: "We have extensive machining equipment, including CAD/CAM machinery for CNC milling, drilling, turning, and grinding operations on all types of metal and plastic materials. Our vertical boring mill allows us to machine diverse shapes of heavy or large parts.",
        items: [
            "CNC horizontal turning", 
            "Vertical 5-axis milling", 
            "Horizontal milling operations", 
            "High-speed machining", 
            "Precision parts (1\" to 120\")", 
            "Vertical boring mill for large parts", 
            "CAD/CAM programming",
            "Metal and plastic materials processing"
        ]
      },
      {
        title: "Fabrication & Custom Structures",
        content: "We construct mobile offices and other movable and immovable structures according to specifications. Our metal fabrication and machining teams are well trained to handle complex projects with deep understanding of their trades and value quality, accuracy, and on-time completion.",
        items: [
            "Sawing & Shearing", 
            "Forming & Punching", 
            "Rolling operations", 
            "CNC laser and plasma cutting", 
            "Drilling services", 
            "Tube bending", 
            "MIG, TIG, and ARC welding", 
            "Fabrication training programs",
            "Mobile office construction"
        ]
      },
      {
        title: "Quality Control & industrial Support",
        content: "AEL metal fabrication and machining teams work together to provide job-shop machining and fabrication services for clients. Our teams are trained to handle complex projects and understand the importance of quality, accuracy, and timely delivery.",
        items: [
            "Strict quality guidelines", 
            "Experienced engineering team", 
            "Complex project handling", 
            "Mobile office construction", 
            "Custom structure fabrication", 
            "Multifaceted machine delivery", 
            "On-time project completion"
        ]
      }
    ]
  }
]

async function seed() {
  console.log('Starting FINAL comprehensive seed process...')

  for (const serviceData of services) {
    console.log(`Processing service: ${serviceData.title}...`)

    // Upload Hero Image
    console.log(`Uploading hero image for ${serviceData.title}...`)
    const heroImageAsset = await uploadImageFromUrl(serviceData.heroImageUrl)
    
    // Upload Equipment Gallery if any
    let equipmentGallery = []
    if (serviceData.equipmentGalleryUrls) {
      console.log(`Uploading equipment gallery for ${serviceData.title}...`)
      for (const url of serviceData.equipmentGalleryUrls) {
        const asset = await uploadImageFromUrl(url)
        if (asset) equipmentGallery.push(asset)
      }
    }

    const doc = {
      _type: 'service',
      _id: `service-${serviceData.slug}`,
      title: serviceData.title,
      subtitle: serviceData.subtitle,
      slug: {
        _type: 'slug',
        current: serviceData.slug
      },
      description: serviceData.description,
      heroImage: heroImageAsset,
      sections: serviceData.sections,
      equipmentGallery: equipmentGallery.length > 0 ? equipmentGallery : undefined
    }

    try {
      await client.createOrReplace(doc)
      console.log(`Successfully seeded ${serviceData.title}`)
    } catch (error) {
      console.error(`Failed to seed ${serviceData.title}:`, error.message)
    }
  }

  console.log('FINAL seed process complete!')
}

seed()
