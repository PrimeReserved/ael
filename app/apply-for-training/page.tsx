"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, Building2, Users, BookOpen } from "lucide-react";

const disciplines = [
  {
    name: "Metering & Process Control, Power, DCS Training",
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
    name: "Mechanical/Process Design & Maintenance",
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
    name: "Electrical System Design & Operations",
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
    name: "Project Management, Procurement & Logistics",
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
    name: "Asset Management",
    courses: [
      "Asset Integrity Management for the Petroleum Industry",
      "Maintenance, Reliability & Asset Management Technology Best Practices",
      "Key Performance Indicators and Optimization",
      "Materials Selection and Failure Analysis"
    ]
  },
  {
    name: "Vocational Training",
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
    name: "Health, Safety & Environment (HSE)",
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
    name: "Environmental & Construction",
    courses: [
      "Water Distribution Network Systems",
      "Drainage and Sewerage",
      "Water Storage Systems",
      "Understanding Drainage and Water Distribution Systems",
      "Oil Spill Response & Control"
    ]
  },
  {
    name: "Renewable Energy",
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
    name: "Software & Design",
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
    name: "ICT & Cybersecurity",
    courses: [
      "Network Security Fundamentals",
      "Cybersecurity Best Practices",
      "IT Infrastructure Management",
      "Cloud Computing Essentials",
      "Data Protection & Privacy"
    ]
  }
];

import { sendTrainingApplicationEmail } from "@/app/actions/sendEmail";

export default function ApplyForTrainingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    disciplineCategory: "",
    specificCourse: "",
    location: "",
    participantType: "",
    numberOfParticipants: "",
    marketingConsent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await sendTrainingApplicationEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          disciplineCategory: "",
          specificCourse: "",
          location: "",
          participantType: "",
          numberOfParticipants: "",
          marketingConsent: false
        });
      } else {
        setError("Failed to submit application. Please try again later.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      // Reset specific course when discipline changes
      ...(name === "disciplineCategory" ? { specificCourse: "" } : {})
    });
  };

  const selectedDiscipline = disciplines.find(d => d.name === formData.disciplineCategory);

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title={<span>APPLY FOR <span className="text-primary">TRAINING</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770949431/images_ech5ou.jpg"
      />

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
              Looking for a Training Solutions Partner?
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              Need to enhance employee's performance? Whatever your request, send us a message and our experts will consult you on our solutions or answer other questions about AEL Training solutions.
            </p>
            
            {/* Contact Info */}
            <div className="bg-zinc-50 rounded-2xl p-8 mb-12">
              <p className="text-zinc-700 mb-6 font-medium">
                To get in touch with us, send us an email at:{" "}
                <a href="mailto:training@authorenergy.com" className="text-primary font-bold hover:underline">
                  training@authorenergy.com
                </a>
                , or fill out the contact form below:
              </p>
              
              {/* Mobile Contact Cards */}
              <div className="md:hidden grid grid-cols-1 gap-4 mt-6">
                <a
                  href="tel:+2347034703200"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  <Phone size={20} className="text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-500">Call Us</p>
                    <p className="text-sm font-bold text-zinc-900">+234-703-470-3200</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="text-xs font-semibold text-zinc-500">Visit Us</p>
                    <p className="text-sm font-bold text-zinc-900">IIHT Complex, KM 5 East West Road, Port Harcourt</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Application Submitted!</h3>
                <p className="text-zinc-600">Our training team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                    placeholder="Name of Company"
                  />
                </div>

                {/* Discipline Category */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-3">
                    Discipline Category
                  </label>
                  <select
                    name="disciplineCategory"
                    value={formData.disciplineCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">Select Discipline Category</option>
                    {disciplines.map((discipline) => (
                      <option key={discipline.name} value={discipline.name}>
                        {discipline.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Specific Course (Conditional) */}
                {selectedDiscipline && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Specific Course
                    </label>
                    <select
                      name="specificCourse"
                      value={formData.specificCourse}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select Specific Course</option>
                      {selectedDiscipline.courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Training Location */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-3">
                    Preferred Training Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                    placeholder="Preferred Training Location"
                  />
                </div>

                {/* Participant Type & Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Participants
                    </label>
                    <select
                      name="participantType"
                      value={formData.participantType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Select Type</option>
                      <option value="individual">Individual</option>
                      <option value="organization">Organization</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-zinc-900 mb-3">
                      Number of Participants
                    </label>
                    <input
                      type="number"
                      name="numberOfParticipants"
                      value={formData.numberOfParticipants}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-3.5 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Number of Participants"
                    />
                  </div>
                </div>

                {/* Marketing Consent */}
                <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-lg">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-primary border-zinc-300 rounded focus:ring-primary"
                  />
                  <label className="text-sm text-zinc-700">
                    By checking this box, you agree to receive future marketing communications from AEL (Author Energy Limited). You can unsubscribe at any time.
                  </label>
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium text-center">
                    {error}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-sm hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Submitting Application..." : "Submit Application"}</span>
                  {!loading && <Send size={18} className="ml-2 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </main>
  );
}
