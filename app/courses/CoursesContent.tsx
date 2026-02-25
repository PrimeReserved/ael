"use client";

import { useState, useEffect, useRef } from "react";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, Search, BookOpen, Award, Users } from "lucide-react";
import Link from "next/link";

const defaultCourseCategories = [
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
    ]
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
      "Offshore Structural Analysis Computer System (SACS®)",
      "Technical & Operational Aspects of Pipeline Pigging"
    ]
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
    ]
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
      "Data Management, Manipulation & Analysis using Excel®",
      "Category Management in Procurement",
      "E-Procurement Complete Course"
    ]
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
    ]
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
    ]
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
      "Display Screen Assessments – Ergonomics",
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
    ]
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
    ]
  },
  {
    title: "Renewable Energy",
    description: "Forward-thinking training in solar photovoltaic systems, renewable energy fundamentals, and energy management. Learn installation, commissioning, and sustainability practices for the future of energy.",
    bgColor: "bg-yellow-50/30",
    courses: [
      "Solar Photovoltaic Systems",
      "Coil Winding Course",
      "Distribution Cable Selection and Testing",
      "Solar Photovoltaic Systems – Installation",
      "Solar Photovoltaic Systems – Commissioning",
      "Fundamentals of Renewable Energy",
      "Energy Audit & Management",
      "Impact of Renewable Energy Sources",
      "Renewable Energy and Sustainability"
    ]
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
    ]
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
    ]
  }
];

export default function CoursesContent({ initialCategories }: { initialCategories?: any[] }) {
  const categoriesToUse = initialCategories && initialCategories.length > 0 ? initialCategories : defaultCourseCategories;
  
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  const [allExpanded, setAllExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const searchSectionRef = useRef<HTMLElement>(null);
  const lastCourseRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const expandAll = () => {
    setAllExpanded(true);
  };

  const collapseAll = () => {
    setAllExpanded(false);
    setExpandedCategory(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!searchSectionRef.current || !lastCourseRef.current || !ctaSectionRef.current) return;

      const searchRect = searchSectionRef.current.getBoundingClientRect();
      const lastCourseRect = lastCourseRef.current.getBoundingClientRect();
      const ctaRect = ctaSectionRef.current.getBoundingClientRect();

      const hasScrolledPastSearch = searchRect.top < -searchRect.height;
      const hasReachedCta = ctaRect.top <= window.innerHeight;

      setIsSearchSticky(hasScrolledPastSearch && !hasReachedCta);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery && isSearchSticky) {
      searchSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchQuery, isSearchSticky]);

  const filteredCategories = categoriesToUse.map(category => ({
    ...category,
    courses: category.courses.filter(course =>
      course.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    searchQuery === "" || 
    category.courses.length > 0 || 
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCourses = categoriesToUse.reduce((acc, cat) => acc + cat.courses.length, 0);

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span className="font-medium">
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <span key={i} className="text-primary font-black bg-primary/10 px-1 rounded">{part}</span> 
            : part
        )}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title={<span>OUR <span className="text-primary">COURSES</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770948853/oil_hrdc3c.jpg"
      />

      <section className="border-b border-zinc-200 bg-gradient-to-r from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="grid grid-cols-3 md:gap-6 gap-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 group"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-base md:text-2xl font-bold text-secondary leading-tight">{totalCourses}+</div>
                <div className="text-[10px] md:text-sm font-medium text-zinc-700 leading-tight">Professional Courses</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 group"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-base md:text-2xl font-bold text-secondary leading-tight">{categoriesToUse.length}</div>
                <div className="text-[10px] md:text-sm font-medium text-zinc-700 leading-tight">Specialized Categories</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 group"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-base md:text-2xl font-bold text-secondary leading-tight">Expert</div>
                <div className="text-[10px] md:text-sm font-medium text-zinc-700 leading-tight">Industry Instructors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={searchSectionRef} className="py-8 px-6 bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search courses by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white text-zinc-900 placeholder:text-zinc-500 shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={expandAll}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-3.5 md:py-3 bg-white hover:bg-secondary/5 border border-secondary/20 hover:border-secondary/40 text-secondary font-semibold rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md group"
              >
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" strokeWidth={2.5} />
                <span>Expand All</span>
              </button>
              <button
                onClick={collapseAll}
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-3.5 md:py-3 bg-white hover:bg-zinc-100 border border-zinc-300 hover:border-zinc-400 text-zinc-700 font-semibold rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md group"
              >
                <ChevronDown className="w-4 h-4 rotate-180 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                <span>Collapse All</span>
              </button>
            </div>
          </div>
          
          {searchQuery && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm font-medium text-zinc-700"
            >
              Found <span className="text-primary font-bold">{filteredCategories.reduce((acc, cat) => acc + cat.courses.length, 0)}</span> courses
            </motion.p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {isSearchSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-secondary px-4 py-4 border-t-4 border-primary shadow-[0_-15px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 z-10" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-20 py-4 border-2 border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white/10 text-white placeholder:text-zinc-400 text-base font-bold backdrop-blur-md"
                  />
                  {searchQuery && (
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-secondary bg-primary px-3 py-1.5 rounded-full"
                    >
                      {filteredCategories.reduce((acc, cat) => acc + cat.courses.length, 0)} Matches
                    </motion.span>
                  )}
                </div>
                
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={expandAll}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-secondary font-black rounded-2xl transition-all duration-200 text-sm hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={3} />
                    <span>Expand</span>
                  </button>
                  <button
                    onClick={collapseAll}
                    className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black rounded-2xl transition-all duration-200 text-sm"
                  >
                    <ChevronDown className="w-4 h-4 rotate-180" strokeWidth={3} />
                    <span>Collapse</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-12 px-6 bg-gradient-to-br from-white via-zinc-50/40 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {filteredCategories.map((category, idx) => {
              const hasMatches = searchQuery !== "" && category.courses.some(course => 
                course.toLowerCase().includes(searchQuery.toLowerCase())
              );
              const isExpanded = allExpanded || expandedCategory === idx || hasMatches;
              const isLastCourse = idx === filteredCategories.length - 1;
              
              const bgPatterns = [
                'bg-gradient-to-br from-white to-blue-50/30',
                'bg-gradient-to-bl from-white to-purple-50/30',
                'bg-gradient-to-tr from-white to-amber-50/30',
                'bg-gradient-to-tl from-white to-emerald-50/30',
                'bg-gradient-to-br from-white to-rose-50/30',
                'bg-gradient-to-bl from-white to-cyan-50/30',
              ];
              
              const currentBg = bgPatterns[idx % bgPatterns.length];
              
              return (
                <motion.div
                  key={idx}
                  ref={isLastCourse ? lastCourseRef : null}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className={`${currentBg} border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group relative`}
                  style={{
                    boxShadow: isExpanded ? '0 20px 60px -10px rgba(0, 0, 0, 0.15)' : undefined
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <button
                    onClick={() => toggleCategory(idx)}
                    className={`w-full p-6 text-left flex items-start gap-4 transition-all duration-300 relative ${
                      isExpanded ? 'bg-gradient-to-r from-zinc-100/80 to-zinc-50/80' : 'hover:bg-zinc-50/60'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-secondary/90 transition-colors">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                          <span className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-bold rounded-full shadow-sm border border-primary/20">
                            {category.courses.length}
                          </span>
                          <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                            isExpanded 
                              ? 'bg-gradient-to-br from-primary to-primary/80 shadow-lg scale-110' 
                              : 'bg-white/80 shadow-md group-hover:bg-white group-hover:shadow-lg'
                          }`}>
                            <ChevronDown 
                              className={`w-5 h-5 transition-all duration-300 ${
                                isExpanded 
                                  ? 'rotate-180 text-white' 
                                  : 'text-secondary/70 group-hover:text-secondary'
                              }`}
                              strokeWidth={2.5}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                        {category.description}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 bg-white border-t border-zinc-200">
                          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                            {category.courses.map((course: string, courseIdx: number) => (
                              <Link
                                key={courseIdx}
                                href={`/apply-for-training?category=${encodeURIComponent(category.title)}&course=${encodeURIComponent(course)}`}
                                className="group/item flex items-start gap-2.5 py-2 px-3 -mx-3 rounded-xl hover:bg-zinc-50 transition-all duration-200"
                              >
                                <ChevronRight className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
                                <span className="text-sm text-zinc-800 group-hover/item:text-zinc-900 leading-relaxed font-medium">
                                  {highlightMatch(course, searchQuery)}
                                </span>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-6 pt-5 border-t border-zinc-200">
                            <Link
                              href={`/apply-for-training?category=${encodeURIComponent(category.title)}`}
                              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white font-bold rounded-xl transition-all duration-300 text-sm shadow-lg hover:shadow-2xl hover:scale-[1.02] group/btn"
                            >
                              <span>Apply for {category.title.split(',')[0]}</span>
                              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={ctaSectionRef} className="py-16 px-6 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-base md:text-lg text-zinc-700 mb-8 max-w-2xl mx-auto font-medium">
              Join thousands of professionals advancing their careers with our industry-leading courses.
            </p>
            <Link
              href="/apply-for-training"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
            >
              <span>Apply for Training</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
