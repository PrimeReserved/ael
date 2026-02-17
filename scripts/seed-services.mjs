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

// Helper to generate Portable Text blocks
const toBlocks = (content) => {
  return content.map(item => {
    if (typeof item === 'string') {
      return {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: item }]
      }
    }
    if (item.list) {
      return item.list.map(li => ({
        _type: 'block',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', text: li }]
      }))
    }
    return null
  }).flat().filter(Boolean)
}

const services = [
  {
    _type: 'service',
    title: 'Engineering Consulting',
    slug: { _type: 'slug', current: 'engineering-consulting' },
    description: `Comprehensive engineering studies, procurement, and drilling equipment supply for complex energy infrastructure.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f138?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Engineering Services',
        description: toBlocks([
          `Author Energy engineering services create value for any engineering project, be it in power, oil and gas, or construction industries. We provide the needed expertise in a variety of engineering fields including mechanical, electrical, and process engineering.`,
          `From concept to completion, our team assists clients with engineering design, consulting, procurement, and construction management solutions to keep projects moving forward. We have adopted an innovative approach to confronting any engineering challenge. Our experts and partners achieve both quick wins and long-term results.`
        ])
      },
      {
        title: 'Procurement',
        description: toBlocks([
          `Author Energy helps you to manage the purchasing of anything related to oil and gas, power generation systems, renewable energy, waste management facility equipment, and business utilities. Our procurement specialists and partners are experts in negotiating contract terms and ensuring that your business gets the best possible quote.`,
          `Over the years, we have built a network of international OEMs (for gas turbines, process facility equipment, renewable energy, power, waste management), bringing value-added opportunities to organizations.`
        ])
      },
      {
        title: 'General Equipment Supply',
        description: toBlocks([
          { list: [
            'Valves, Actuators, Regulators',
            'Pumps',
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
            'Compressors',
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
          ]}
        ])
      },
      {
        title: 'Well Head & Drilling Equipment',
        description: toBlocks([
          { list: [
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
            'Blowout Preventers and Manifolds of all types',
            'Hydraulic Control Units',
            'Cementing and Fracturing Units'
          ]}
        ])
      }
    ],
    isActive: true
  },
  {
    _type: 'service',
    title: 'Gas Turbines and Power Generation',
    slug: { _type: 'slug', current: 'gas-turbines' },
    description: `Turnkey solutions for gas power plants, transmission planning, and power system stability studies.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1519750157634-b6d493a0ea29?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1533230408703-9114d640248a?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Transmission, Distribution, & Generation',
        description: toBlocks([
          `Our team of experts has extensive hands-on experience in power systems planning and operational studies, using various software tools such as PSCAD™, PSS/E (licensed by Siemens), DSA Power Tools, ETAP, CYME, and Risk A.`,
          `We offer a comprehensive solution to help our clients achieve excellence in power system planning and operation. Our experience spans multiple industries including oil and gas, power, manufacturing, property management, national retail, solid waste, and recycling operations.`,
          `We assist system planners and operators in areas such as: System interconnection studies (HVAC and HVDC), load flow, stability, voltage control, generation integration studies (wind and solar), black start procedures, tie line transfer limits, out-of-step relay design, impact assessment, and fault current limiting.`
        ])
      },
      {
        title: 'Gas Turbine Market & Projects',
        description: toBlocks([
          `The use of gas turbines for generating electricity is assuming a prominent position in the industrial sector of most African countries, particularly in Nigeria where there is an abundance of gas reserves. Gas as a transition fuel is cleaner than crude oil and less of a contributor to global climate change.`,
          `It is reported that the global gas turbine market is projected to reach over USD 20 Billion. This increase is attributed to rising demand for electricity and gas-fired power plants.`,
          `Author Energy is well positioned for collaboration and partnership with investors in developing new large gas-fired combined-cycle power generation as demand for gas turbines increases.`,
          `Our offerings cover all categories of gas turbines: Open Cycle and Combined Cycle; capacities from <40 MW to >300 MW; Heavy Duty and Aeroderivative designs; and applications in Power and Oil & Gas.`
        ])
      }
    ],
    isActive: true
  },
  {
    _type: 'service',
    title: 'Machining and Fabrication',
    slug: { _type: 'slug', current: 'machining-fabrication' },
    description: `Precision CNC machining, structural fabrication, and custom equipment construction for industrial applications.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1530124566582-d618f668d927?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1621905251172-132d729d71ad?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Machining Capabilities',
        description: toBlocks([
          `Author Energy has earned a solid reputation in Machining and Fabrication by working closely with our clients and following strict quality guidelines. Our experienced fabrication engineering team handles projects using techniques, processes, and equipment critical to delivering multifaceted, unique machines.`,
          `We construct mobile offices and other movable and immovable structures according to specifications. We have extensive machining equipment, including CAD/CAM machinery for CNC milling, drilling, turning, and grinding operations on all types of metal and plastic materials.`,
          `Our specialties lie in CNC horizontal turning, vertical 5-axis milling, horizontal milling, and high-speed machining. With those particular capabilities, we are able to machine precise parts from 1" to 120". In addition, AEL has a vertical boring mill which allows us to machine diverse shapes of heavy or large parts.`
        ])
      },
      {
        title: 'Fabrication Services List',
        description: toBlocks([
          { list: [
            'Sawing',
            'Shearing',
            'Forming',
            'Punching',
            'Rolling',
            'CNC laser and plasma cutting',
            'Drilling',
            'Tube bending',
            'MIG, TIG, and ARC welding',
            'Training'
          ]}
        ])
      }
    ],
    isActive: true
  },
  {
    _type: 'service',
    title: 'Renewable Energy',
    slug: { _type: 'slug', current: 'renewable-energy' },
    description: `Sustainable solar, wind, and bio-energy solutions integrated with modern efficiency strategies.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Renewable Energy Expertise',
        description: toBlocks([
          `AEL has expertise in a wide variety of energy fields. We ride on the back of our technical partners who have experience in hydroelectricity, heat recovery, hydraulic energy recovery, bio-energy, district energy, and solar energy.`,
          `Our team is experienced in strategies that improve energy efficiency and use alternative renewable energy technologies. Complex projects such as the production and use of biogas, biosolids, waste-energy, and green fuels in agriculture are within our capabilities.`,
          `We collaborate with clients to develop sustainable solutions while considering environmental, social, and economic impacts.`
        ])
      },
      {
        title: 'Solar Energy Solutions',
        description: toBlocks([
          `AEL provides power and electricity solutions to homes and industries. We have reputable partners across the globe who have completed numerous projects for public and private sector clients.`,
          `Our team offers a broad range of expertise including outdoor and indoor lighting systems, airfield light and control systems, and power supply. Our team brings specialist capabilities in procurement, installation, and maintenance of renewable energy systems.`
        ])
      }
    ],
    isActive: true
  },
  {
    _type: 'service',
    title: 'Installation and Maintenance',
    slug: { _type: 'slug', current: 'installation-maintenance' },
    description: `Proactive maintenance, calibration, and installation services for flow stations, turbines, and industrial plants.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Maintenance Services',
        description: toBlocks([
          `We are experts in instrumentation, electrical, and mechanical maintenance of process plants such as flow stations, production platforms, gas turbines, drilling rigs, and gas plants.`,
          `Our trained and experienced engineers and technicians are proactive in carrying out preventive maintenance and close monitoring of client equipment to avoid production interruption and emergency shutdowns.`
        ])
      },
      {
        title: 'instrumentation & Electrical',
        description: toBlocks([
          `We handle electrical/electronic projects in oil locations and production platforms, such as installation and maintenance of control room instruments, electronics panels, and controllers.`,
          `Signal processing for field instruments like pressure transmitters, solenoid valves, and pressure switches. We are experts in surface conduit underwater electrical work, wiring of platform flow stations, house boats, and power generating sets.`
        ])
      },
      {
        title: 'Mechanical Services',
        description: toBlocks([
          `VALVES SERVICES: We service and re-kit all types of valves for effective and optimum performance. We handle on-site and in-house calibration services.`,
          `PUMP SERVICING: We service pumps to meet accurate delivery and volume requirements (double diaphragm, chemical injection, consolidated pneumatic, etc.).`,
          `MECHANICAL ENGINEERING: Expert in mechanical hook-up of oil pipelines after construction and hydro testing.`,
          `ACTUATORS: Specializing in overhauling and testing of Electric, Pneumatic & Hydraulic Actuators for Gas Turbine Applications.`
        ])
      },
      {
        title: 'Turbine Fuel Nozzles',
        description: toBlocks([
          `AEL provides repair, overhaul, and calibration of Industrial Gas Turbine Fuel Nozzles. We perform detailed analysis on receipt and provide flow test data and positioning charts upon return.`,
          `We service Heavy Industrial Gas Turbines (Siemens, Rolls-Royce, Hitachi, Mitsubishi, Alstom) and Light Industrial Gas Turbines (Solar Turbines, GE Aero-derivative).`
        ])
      },
      {
        title: 'Measurement & Control',
        description: toBlocks([
          `We have proven track records in metering proving/certification of flow meters as well as configuration of control systems.`,
          `CALIBRATION: We calibrate and certify high-pressure control valves (PSV, pressure controllers, switches, transmitters). Our expertise covers Rosemount, Yokogawa, Foxboro, Masoneilan, and Fisher instruments.`,
          `PRESSURE TESTING: We pressure test and certify automatic electro-pneumatic and manual valves of different sizes before installation.`
        ])
      },
      {
        title: 'Installation Goals',
        description: toBlocks([
          `Regular maintenance ensures:`,
          { list: [
            'Customized maintenance concept',
            'Clean and clearly structured plants',
            'Damage prevention',
            'Reduction and control over repair cost',
            'Minimum downtimes',
            'Value preservation for your plant'
          ]}
        ])
      }
    ],
    isActive: true
  },
  {
    _type: 'service',
    title: 'Engineering & Technical Training and Outsourcing',
    slug: { _type: 'slug', current: 'training-outsourcing' },
    description: `Specialized engineering training modules and skilled manpower outsourcing for the technical sector.`,
    mainImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
    heroImageUrl: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80',
    features: [
      {
        title: 'Training Solutions',
        description: toBlocks([
          `We offer corporate training consulting and support for clients in engineering and technical sectors. With our deep understanding of technical competence in the power and energy industries, we have adopted a comprehensive result-oriented instructional model.`,
          `Our training solutions provide employees with the required knowledge, skills, and abilities for a successful career. AEL programs inspire the confidence needed to drive high performance.`
        ])
      },
      {
        title: 'AEL Objectives',
        description: toBlocks([
          { list: [
            'Comprehensive and specialist specific',
            'Application-oriented',
            'To address current industry demands and learner’s needs',
            'Help learners upgrade current skills to new jobs',
            'Evaluation of programs to ensure learning objectives were achieved',
            'Continuous improvement based on feedback'
          ]}
        ])
      },
      {
        title: 'Delivery Approaches',
        description: toBlocks([
          `AEL delivery approaches include instructor-led training (ILT), virtual instructor-led training (VILT), eLearning, simulation, on-the-job training, or a blended solution.`
        ])
      }
    ],
    isActive: true
  }
]

async function seed() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_WRITE_TOKEN is missing in .env.local')
    return
  }

  console.log('🚀 Starting FULL Content Seeding...')
  
  try {
    for (const service of services) {
      console.log(`+ Creating service: ${service.title}...`)
      await client.createOrReplace({
        _id: `seed-${service.slug.current}`,
        ...service
      })
    }
    console.log('✅ Seeding complete with FULL content!')
  } catch (err) {
    console.error('❌ Seeding failed:', err.message)
  }
}

seed()
