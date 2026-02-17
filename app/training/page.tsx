import PageHero from "@/components/PageHero";
import Link from "next/link";
import { 
  Gauge, 
  Settings, 
  Zap, 
  FolderKanban, 
  Wrench, 
  ClipboardList, 
  Shield, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import TrainingGrid from "@/components/TrainingGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Leading Technical Training",
  description: "Author Energy Limited provides industry-leading technical training and capacity development solutions for the energy sector.",
};

const trainingCategories = [
  {
    id: 1,
    title: "Metering and Process Control",
    icon: Gauge,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982687/metering_pdoyyw.jpg",
    description: "Master the critical art of accurate measurement in process plants. Precision instrumentation and control systems that prevent million-dollar discrepancies in oil and gas transactions conducted globally.",
    highlights: [
      "Advanced device calibration",
      "Real-time process monitoring",
      "Global transaction standards",
      "Installation & maintenance"
    ]
  },
  {
    id: 2,
    title: "Mechanical/Process Design",
    icon: Settings,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982808/o_1bn8nicpqg2s1nt218lb1ub8qlrh_mcl76u.jpg",
    description: "Design and maintain the backbone of industrial operations. Master plant design, piping systems, and equipment specifications that drive efficiency in chemical, pharmaceutical, and petrochemical plants.",
    highlights: [
      "Plant design & construction",
      "Piping system engineering",
      "Equipment specifications",
      "Layout optimization"
    ]
  },
  {
    id: 3,
    title: "Electrical System Design",
    icon: Zap,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982840/20200414_013904-1024x617-1-1_my8dzw.jpg",
    description: "Comprehensive electrical programs covering power and distribution systems, substations, commercial lighting, protective devices, CCTV, security systems, fire alarms, and low current systems design.",
    highlights: [
      "Power distribution systems",
      "Substation design",
      "Security & fire alarm systems",
      "Smart lighting solutions"
    ]
  },
  {
    id: 4,
    title: "Asset Management",
    icon: FolderKanban,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982878/OFFICE-SAMPLE_csqtwi.jpg",
    description: "Strategic investment and asset management training designed for professionals. Apply modern portfolio and asset allocation theory to generate superior performance while maintaining regulatory compliance.",
    highlights: [
      "Portfolio optimization",
      "Risk assessment",
      "Regulatory compliance",
      "Performance analytics"
    ]
  },
  {
    id: 5,
    title: "Fabrication & Grinding",
    icon: Wrench,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982888/welding-fabrication-hero-1-1_vddpac.jpg",
    description: "Expert training in metal cutting, grinding, and finishing with spacious facilities and equipment. Designed to enhance skills and competitiveness across marine, oil and gas, construction, and aerospace sectors.",
    highlights: [
      "Precision metal fabrication",
      "Advanced grinding techniques",
      "Safety protocols",
      "Industry best practices"
    ]
  },
  {
    id: 6,
    title: "Contract & Project Management",
    icon: ClipboardList,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982919/co1-scaled_hmr4ux.jpg",
    description: "Professional training in contract management, procurement processes, and project management methodologies essential for successful project delivery in the energy sector.",
    highlights: [
      "Contract administration",
      "Strategic procurement",
      "Project lifecycle management",
      "Stakeholder engagement"
    ]
  },
  {
    id: 7,
    title: "Health, Safety & Environment",
    icon: Shield,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982932/pix-4-1_ypgah3.jpg",
    description: "Comprehensive HSE training covering occupational health and safety, environmental management, and food safety. Flexible in-company programs tailored to your industrial needs and schedule.",
    highlights: [
      "Occupational safety standards",
      "Environmental management",
      "Risk mitigation strategies",
      "Emergency response"
    ]
  },
  {
    id: 8,
    title: "Vocational Skills",
    icon: GraduationCap,
    image: "https://res.cloudinary.com/dfwty72r9/image/upload/v1770982944/20181030_102859_u4lvy8.jpg",
    description: "Community empowerment through skill acquisition programs. Job-centric training designed in partnership with CSR departments to create self-reliant, employable individuals across various sectors.",
    highlights: [
      "Community empowerment",
      "Job-centric training",
      "Local content development",
      "Starter packs included"
    ]
  }
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero 
        title={<span>OUR <span className="text-primary">TRAINING</span></span>}
        image="https://res.cloudinary.com/dfwty72r9/image/upload/v1770984246/photo-1736843638222-c01bb2cd6bf4_qoxjw9.avif"
      />

      {/* Introduction Section - White Background with Left Alignment */}
      <section className="py-16 px-8 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[12px] block">
              OUR EXPERTISE
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary uppercase tracking-tighter leading-none">
              View Our Training
            </h2>
            <p className="text-gray-700 text-xl md:text-2xl font-normal leading-relaxed">
              We provide corporate training and consulting for engineering and technical sectors. With deep industry expertise, our result-oriented programs focus on continuous development and technical competence. Our specialized modules equip professionals with the knowledge and skills needed for successful careers in the power and energy industries.
            </p>
          </div>
        </div>
      </section>

      {/* Training Categories Grid */}
      <section className="py-16 px-8 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <TrainingGrid categories={trainingCategories} />
        </div>
      </section>
    </div>
  );
}