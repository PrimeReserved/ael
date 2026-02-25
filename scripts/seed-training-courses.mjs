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
    title: "Metering and Process Control",
    icon: "Gauge",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982687/metering_pdoyyw.jpg",
    description: "Master the critical art of accurate measurement in process plants. Precision instrumentation and control systems that prevent million-dollar discrepancies in oil and gas transactions conducted globally.",
    highlights: ["Advanced device calibration", "Real-time process monitoring", "Global transaction standards", "Installation & maintenance"],
    order: 1
  },
  {
    title: "Mechanical/Process Design",
    icon: "Settings",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982808/o_1bn8nicpqg2s1nt218lb1ub8qlrh_mcl76u.jpg",
    description: "Design and maintain the backbone of industrial operations. Master plant design, piping systems, and equipment specifications that drive efficiency in chemical, pharmaceutical, and petrochemical plants.",
    highlights: ["Plant design & construction", "Piping system engineering", "Equipment specifications", "Layout optimization"],
    order: 2
  },
  {
    title: "Electrical System Design",
    icon: "Zap",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982840/20200414_013904-1024x617-1-1_my8dzw.jpg",
    description: "Comprehensive electrical programs covering power and distribution systems, substations, commercial lighting, protective devices, CCTV, security systems, fire alarms, and low current systems design.",
    highlights: ["Power distribution systems", "Substation design", "Security & fire alarm systems", "Smart lighting solutions"],
    order: 3
  },
  {
    title: "Asset Management",
    icon: "FolderKanban",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982878/OFFICE-SAMPLE_csqtwi.jpg",
    description: "Strategic investment and asset management training designed for professionals. Apply modern portfolio and asset allocation theory to generate superior performance while maintaining regulatory compliance.",
    highlights: ["Portfolio optimization", "Risk assessment", "Regulatory compliance", "Performance analytics"],
    order: 4
  },
  {
    title: "Fabrication & Grinding",
    icon: "Wrench",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982888/welding-fabrication-hero-1-1_vddpac.jpg",
    description: "Expert training in metal cutting, grinding, and finishing with spacious facilities and equipment. Designed to enhance skills and competitiveness across marine, oil and gas, construction, and aerospace sectors.",
    highlights: ["Precision metal fabrication", "Advanced grinding techniques", "Safety protocols", "Industry best practices"],
    order: 5
  },
  {
    title: "Contract & Project Management",
    icon: "ClipboardList",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982919/co1-scaled_hmr4ux.jpg",
    description: "Professional training in contract management, procurement processes, and project management methodologies essential for successful project delivery in the energy sector.",
    highlights: ["Contract administration", "Strategic procurement", "Project lifecycle management", "Stakeholder engagement"],
    order: 6
  },
  {
    title: "Health, Safety & Environment",
    icon: "Shield",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982932/pix-4-1_ypgah3.jpg",
    description: "Comprehensive HSE training covering occupational health and safety, environmental management, and food safety. Flexible in-company programs tailored to your industrial needs and schedule.",
    highlights: ["Occupational safety standards", "Environmental management", "Risk mitigation strategies", "Emergency response"],
    order: 7
  },
  {
    title: "Vocational Skills",
    icon: "GraduationCap",
    image_url: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982944/20181030_102859_u4lvy8.jpg",
    description: "Community empowerment through skill acquisition programs. Job-centric training designed in partnership with CSR departments to create self-reliant, employable individuals across various sectors.",
    highlights: ["Community empowerment", "Job-centric training", "Local content development", "Starter packs included"],
    order: 8
  }
];

const courseCategories = [
  {
    title: "Metering & Process Control, Power, DCS Training",
    description: "Comprehensive training in metering systems, process control, power plant operations, and distributed control systems. Master industrial instrumentation, flow measurement, and control valve technologies essential for oil & gas operations.",
    bgColor: "bg-blue-50/30",
    courses: [
      "Centrifugal Compressor & Steam Turbine",
      "Power Plant Operations & Control",
      "Cooling Towers: Operation, Maintenance And Troubleshooting",
      "Gas Conditioning & Processing",
      "Industrial Instrumentation And Modern Control Systems",
      "Gas Chromatography And Troubleshooting For The Oil & Gas Industry",
      "Oil And Gas Processing Flow Measurement",
      "Estimating, Planning & Scheduling Of Projects For Oil & Gas Production",
      "Maintenance Planning & Work Control In The Oil & Gas",
      "Oil & Gas Accounting & Performance Measurement",
      "Inspection, Evaluation And Repair Of Process Plant Equipment And Connected Piping",
      "Management Skills And Techniques For Engineers",
      "Multiphase Flowmetering",
      "Fluid Flow Control In The Process Industry",
      "Boiler & Steam System Management",
      "Process Plant Optimization & Energy Conservation",
      "Reliability & Operational Performance Of Electric Power Systems",
      "Control Valve, Flow Metering And Custody Transfer",
      "Fiscal Flow Meters, Meter Calibration, Uncertainty Calculation",
      "Modern Valve Technology: Inspection, Maintenance, Repair And Troubleshooting",
      "Flow Measurement: Electromagnetic, Ultrasonic And Insertion Flow Meters",
      "Metering/Measurement And Product Test",
      "Flow And Level Custody Management",
      "Fiscal And Allocation Metering"
    ],
    order: 1
  },
  {
    title: "Mechanical/Process Design & Maintenance",
    description: "Advanced training in mechanical design, process equipment optimization, and maintenance management. Learn heat exchanger design, rotating equipment maintenance, pipeline engineering, and pressure vessel design following ASME standards.",
    bgColor: "bg-orange-50/30",
    courses: [
      "Decision Analysis For Operation And Maintenance Professionals",
      "Maintenance Planning, Scheduling And Control",
      "Advanced Maintenance Planning",
      "Building Operational Excellence In The Process Industry",
      "Heat Exchangers: Types, Application, Design, Operation & Maintenance",
      "ASME Boiler & Pressure Vessel Code, And B31 Pressure Piping",
      "Rotating Equipment Optimisation With Continuous Reliability Improvement",
      "Heat Transfer: Augmentation Techniques In The Process Industry",
      "Maintenance Management Best Practices",
      "Mastering Maintenance Audits",
      "Managing Efficient Shutdowns & Turnarounds",
      "Risk Based Strategies For Inspection & Maintenance",
      "Troubleshooting Process Operation",
      "Writing Effective Maintenance Procedures",
      "Effective Maintenance Management",
      "Process Plant Start-Up And Commissioning",
      "AC Electrical Motors & Drives: Troubleshooting, Maintenance & Protection",
      "Preventive And Predictive Maintenance Management",
      "Optimizing Equipment Maintenance & Replacement Decisions",
      "Machinery Failure, Vibration & Predictive Maintenance",
      "Shutdowns, Turnarounds And Outages",
      "Strategic Maintenance Planning",
      "HVAC Design, Operation & Maintenance",
      "Road And Infrastructure Maintenance",
      "Maintenance Contracting & Outsourcing",
      "Process Equipment & Piping Systems: Application, Design & Operation",
      "Pipeline Operations & Maintenance",
      "Corrosion Control In Oil & Gas Exploration Industry",
      "ASME B31.3 Process Piping Design Code",
      "Global Upstream Oil & Gas Operations",
      "Fundamentals Of Offshore Pipeline Engineering",
      "Pumps, Compressors And Turbines: Selection, Operation & Maintenance",
      "Pipes And Piping Systems Optimisation",
      "Corrosion Control In Gas, Oil & Water",
      "Power Generation: Steam Turbines, Gas Turbines & Combined Cycle Plants",
      "Materials And Welding Challenges For Offshore Oil & Gas Industries",
      "Gas Turbine Design and Performance",
      "Gas Turbine Technology: Design, Operation, Control, Troubleshooting",
      "Tank Design, Construction, Inspection & Maintenance",
      "Steam Turbine Technology: Design, Operation, Control, Troubleshooting",
      "Offshore Structure Design, Construction, Inspection, Maintenance & Repair",
      "API 570: Piping Inspection Code",
      "Axial Compressor Design and Performance",
      "Centrifugal Compressor Design and Performance",
      "Compressors and Pumps: Selection, Sizing, Applications, Operation",
      "Relief System Design",
      "API 579-1/ASME FFS-1: Fitness-for-Service",
      "ASME VIII Pressure Vessel Design, Fabrication & Testing",
      "Pipeline Design & Construction",
      "Machinery Failure Analysis, Prevention & Troubleshooting",
      "Concrete Structural Design, Maintenance & Reliability Analysis",
      "Piping Design and Maintenance",
      "Heat Exchanger Design, Operation, Performance, Inspection",
      "Mechanical Design of Rotating Machinery",
      "Corrosion Inhibitors",
      "Advanced Shell & Tube Industrial Heat Exchanger",
      "Pump Selection, Installation, Operation, Maintenance & Troubleshooting",
      "Centrifugal Pump Design & Performance",
      "Mechanical Engineering Design",
      "HVAC System Design & Implementation",
      "Well Test Design and Analysis",
      "HVAC & Refrigeration Systems: Design, Installation, Maintenance",
      "Pipeline Design, Inspection & Testing",
      "Steel Structure Design, Inspection, Maintenance & Durability",
      "Valve Selection & Maintenance",
      "Materials Selection for Process Plants & Facilities",
      "Well Completion Design & Operations",
      "Hydraulic Modelling for Water Network Design",
      "Pressure Vessel Design, Fabrication, Inspection",
      "Power System Design & Analysis",
      "PV Elite Training for Pressure Vessel Design",
      "Control Valves & Actuators",
      "Advanced Valve Technology",
      "Tank & Tank Farms: Design, Installation, Operation, Maintenance",
      "UPS & Battery Design, Operation, Maintenance & Troubleshooting",
      "LV/MV/HV Circuit Breaker Inspection, Maintenance & Design",
      "Industrial Equipment & Turbomachinery",
      "Safety Relief Valve Sizing, Selection, Operation",
      "Offshore Structural Analysis Computer System (SACS\u00ae)",
      "Technical & Operational Aspects of Pipeline Pigging"
    ],
    order: 2
  },
  {
    title: "Electrical System Design & Operations",
    description: "Expert training in electrical distribution systems, power system protection, transformer design, and substation operations. Covers HV/MV systems, circuit breakers, SCADA technologies, and modern cathodic protection systems.",
    bgColor: "bg-amber-50/30",
    courses: [
      "Transformer Design, Ranking & Monitoring",
      "High Voltage and Medium Voltage Circuit Breakers",
      "Electrical Distribution Design, Installation and Commissioning",
      "Electric Distribution Systems (Operation, Testing and Protection)",
      "Power Distribution System Design and Reliability",
      "Electrical Faults: Causes, Analysis, Detection & Remedies",
      "Electrical Protection",
      "Electrical Power Systems for Non-Engineers",
      "Reliability & Operational Performance of Electric Power Systems",
      "Smart Grid For Non-Engineers",
      "Power System Protection and Reliability",
      "Electrical Equipment: Transformers, Motors, Variable Speed Drives",
      "Design and Maintenance of Electrical Installation",
      "Electrical Installations & Maintenance",
      "Industrial Substations Design, Testing and Maintenance",
      "HV/MV Substation Design, Installation, Commissioning",
      "Basic Electrical Control & Design",
      "Modern Cathodic Protection Systems",
      "Modern Power System Protective Relaying",
      "Safety Instrumented Systems: Design, Analysis and Justification",
      "PLC, Telemetry & SCADA Technologies",
      "Power Generation: Gas Turbines, Co-Generation, Combined Cycle Plants",
      "Safe Operation & Maintenance of Circuit Breakers And Switchgears"
    ],
    order: 3
  },
  {
    title: "Project Management, Procurement & Logistics",
    description: "Professional training in project management, supply chain optimization, procurement strategies, and logistics management. Master inventory control, warehouse management, tendering processes, and risk analysis for successful project delivery.",
    bgColor: "bg-purple-50/30",
    courses: [
      "Supply Chain: Concept, Solution & Application",
      "Effective Purchasing, Tendering & Supplier Selection",
      "Inventory Management",
      "The Complete Course On Purchasing Management",
      "Green Supply Chains",
      "Warehouse Management: Strategy, Implementation & Control",
      "Logistics & Supply Chain Management",
      "Managing & Negotiating With Consultants & Contractors",
      "Excellence In Warehouse And Inventory Management",
      "Logistics & Transportation Management",
      "International Trade & Shipping",
      "E-Procurement: Implementation & Management",
      "Big Data Analytics For Supply Chain Optimization",
      "Advanced Procurement Strategies, Warehousing And Logistics",
      "Purchasing Techniques, Negotiating & Cost Reduction",
      "Strategic Purchasing & Supply Management",
      "Oracle Inventory Management Fundamentals",
      "Distribution & Retail Management",
      "Procurement Strategy Management",
      "Tendering, Procurement, & Negotiation Skills",
      "Building And Maintaining A Sustainable Supply Chain",
      "Project Management Specialist",
      "Project Scheduling & Cost Planning Skills",
      "Effective Project Management in an Uncertain World",
      "Project Risk, Uncertainty & Decision Analysis",
      "Data Management, Manipulation & Analysis using Excel\u00ae",
      "Category Management in Procurement",
      "E-Procurement Complete Course"
    ],
    order: 4
  },
  {
    title: "Asset Management",
    description: "Strategic training in asset integrity management, reliability optimization, and performance measurement. Learn materials selection, failure analysis, and best practices for maintaining critical petroleum industry assets.",
    bgColor: "bg-emerald-50/30",
    courses: [
      "Asset Integrity Management for the Petroleum Industry",
      "Maintenance, Reliability & Asset Management Technology Best Practices",
      "Key Performance Indicators and Optimization",
      "Materials Selection and Failure Analysis"
    ],
    order: 5
  },
  {
    title: "Vocational Training",
    description: "Hands-on practical training in essential trades and crafts. From welding and electrical installation to fashion design and catering, develop marketable skills for immediate employment or entrepreneurship opportunities.",
    bgColor: "bg-cyan-50/30",
    courses: [
      "Paint Production",
      "Polyurethane Production (Foams)",
      "HD and 3D Panel",
      "Scaffolding",
      "Basic Welding",
      "Videography/Photography/Editing",
      "Instrumentation and Process Control",
      "Pipe Fitting/Plumbing",
      "Graphic Design and Computer Appreciation",
      "Grinding and Abrasion",
      "Lifting & Slinging",
      "Welding & Fabrication",
      "Fish Farming/Poultry",
      "Tile Fixing",
      "Tractor Operation",
      "Buildings & Maintenance Works",
      "Masonry",
      "Painting",
      "Small Craft Operations",
      "Water Treatment Plant Operations",
      "Catering & Baking",
      "Soap/Perfume Making",
      "Professional Makeup Artistry and Gele Tying",
      "Millinery",
      "Bead Making And Accessories",
      "Inverter/Solar Power Installation",
      "Electrical Wiring And Installation",
      "Carpentry",
      "Auto-Mechanic",
      "Event Planning",
      "Home Cleaning",
      "Fashion Design",
      "Electrical/Electronic Repairs",
      "Phone Repairs",
      "Shoemaking",
      "Tailoring",
      "Weaving"
    ],
    order: 6
  },
  {
    title: "Health, Safety & Environment (HSE)",
    description: "Comprehensive safety training covering OSHA standards, risk management, emergency response, and environmental compliance. Essential courses for oil & gas, construction, and industrial operations.",
    bgColor: "bg-rose-50/30",
    courses: [
      "Site Management Safety Training Scheme (SMSTS)",
      "Emergency Management in Offshore Oil and Gas Environment",
      "Occupational Health & Risk Management",
      "Job Safety Analysis (JSA)",
      "Behavior Based Safety (BBS)",
      "Waste Management",
      "Incident Investigation",
      "Hazardous Material Management",
      "Risk & Safety in Oil & Gas Terminals",
      "Process Hazard Assessment using HAZOP",
      "Risk Management for Oil and Gas Projects",
      "Environmental Management System",
      "HSE Awareness (Induction)",
      "H2S Awareness & Escape",
      "Basic Fire Extinguisher",
      "Display Screen Assessments \u2013 Ergonomics",
      "Manual Handling",
      "Noise/Hearing Protection",
      "Respiratory Protection",
      "Environmental Health & Safety Risk Management (EHS)",
      "Fire Warden",
      "Riggers and Banksman Awareness",
      "SCBA (Self Contained Breathing Apparatus)",
      "Hazard Analysis at Work",
      "Safety at Home",
      "Welding Safety",
      "Safety for Supervisors",
      "Gas Testing",
      "Electrical Safety",
      "Nitrogen Awareness",
      "Environment Awareness",
      "COSHH",
      "Chemical Hazard Awareness",
      "Risk Assessment",
      "Permit to Work",
      "Construction Safety",
      "Office Safety",
      "Process Safety Management",
      "Stress Management"
    ],
    order: 7
  },
  {
    title: "Environmental & Construction",
    description: "Specialized training in water distribution systems, drainage engineering, sewerage management, and oil spill response. Critical knowledge for environmental protection and infrastructure development.",
    bgColor: "bg-teal-50/30",
    courses: [
      "Water Distribution Network Systems",
      "Drainage and Sewerage",
      "Water Storage Systems",
      "Understanding Drainage and Water Distribution Systems",
      "Oil Spill Response & Control"
    ],
    order: 8
  },
  {
    title: "Renewable Energy",
    description: "Forward-thinking training in solar photovoltaic systems, renewable energy fundamentals, and energy management. Learn installation, commissioning, and sustainability practices for the future of energy.",
    bgColor: "bg-yellow-50/30",
    courses: [
      "Solar Photovoltaic Systems",
      "Coil Winding Course",
      "Distribution Cable Selection and Testing",
      "Solar Photovoltaic Systems \u2013 Installation",
      "Solar Photovoltaic Systems \u2013 Commissioning",
      "Fundamentals of Renewable Energy",
      "Energy Audit & Management",
      "Impact of Renewable Energy Sources",
      "Renewable Energy and Sustainability"
    ],
    order: 9
  },
  {
    title: "Software & Design",
    description: "Creative and technical training in industry-standard design software. Master Adobe Creative Suite, AutoCAD for 2D/3D design, and web development tools for professional digital content creation.",
    bgColor: "bg-indigo-50/30",
    courses: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "AutoCAD 2D/3D",
      "Macromedia Flash",
      "Adobe Dreamweaver"
    ],
    order: 10
  },
  {
    title: "ICT & Cybersecurity",
    description: "Essential training in information technology, network security, cloud computing, and data protection. Build critical skills in cybersecurity best practices and IT infrastructure management.",
    bgColor: "bg-slate-50/30",
    courses: [
      "Network Security Fundamentals",
      "Cybersecurity Best Practices",
      "IT Infrastructure Management",
      "Cloud Computing Essentials",
      "Data Protection & Privacy"
    ],
    order: 11
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
    for (const cat of courseCategories) {
      console.log(`+ Seeding Course Category: ${cat.title}`);
      const safeId = cat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      await client.createOrReplace({
        _type: 'courseCategory',
        _id: `course-cat-${safeId}`,
        title: cat.title,
        description: cat.description,
        bgColor: cat.bgColor,
        courses: cat.courses,
        order: cat.order
      });
    }

    console.log('✅ Seeding complete!');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  }
}

seed();
