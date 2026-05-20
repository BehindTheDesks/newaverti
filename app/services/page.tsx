import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Settings, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Averti Consulting",
  description: "Explore our strategic advisory services, operational integration solutions, and technological architectures designed to secure enterprise leadership.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Advisory",
      tagline: "Securing Market Dominance",
      description: "High-stakes corporate planning and portfolio optimization that positions your organization ahead of market disruption.",
      bullets: [
        "Geopolitical Risk Mapping & Exposure Auditing",
        "Capital Allocation & Investment Posture Strategy",
        "Executive Leadership & Succession Resilience",
        "Enterprise Portfolio Health Analysis",
      ],
    },
    {
      icon: Settings,
      title: "Operational Integration",
      tagline: "Agile Scale & Efficiency",
      description: "Restructuring core systems to maximize output, streamline communication flows, and build structural operating leverage.",
      bullets: [
        "C-Suite Operational Architecture Redesign",
        "Agile Framework Orchestration & Leadership Training",
        "Supply Chain Fortification & Resilience Models",
        "Overhead Compression & Resource Reallocation",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Risk & Integrity Systems",
      tagline: "Defending Enterprise Value",
      description: "Establishing bulletproof regulatory posture, continuous compliance systems, and threat mitigation models.",
      bullets: [
        "Regulatory & Antitrust Preparedness Modeling",
        "Continuous Threat Assessment & Intelligence Workflows",
        "Boardroom Fiduciary & Compliance Frameworks",
        "Sovereign Asset & Brand Equity Defenses",
      ],
    },
    {
      icon: Cpu,
      title: "Technological Architecture",
      tagline: "Engineering the Future",
      description: "Integrating next-generation computing architectures, AI frameworks, and secure technical systems into your enterprise core.",
      bullets: [
        "Intelligence (AI) Integration Strategy",
        "Legacy Tech Infrastructure Modernization",
        "Zero-Trust Security & Technical Integrity Audits",
        "Custom Software R&D Pipeline Operations",
      ],
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93457A]">
            What We Deliver
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
            Architectures for secure{" "}
            <span className="italic font-light text-[#93457A]">
              acceleration and defense
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-light">
            We provide targeted, specialized consulting services that do not settle for basic indicators. We design systems that optimize corporate efficiency, fortify technical infrastructure, and secure your long-term position.
          </p>
        </section>

        {/* Services Showcase Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s, index) => {
            const Icon = s.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:border-[#93457A]/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Service Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#93457A]">
                        {s.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-medium">
                        {s.title}
                      </h2>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#93457A]/5 text-[#93457A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#93457A] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-light">
                    {s.description}
                  </p>

                  {/* Bullet deliverable points */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
                      Key Focus Deliverables:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start text-xs text-[#4A4A4A] space-x-2">
                          <span className="text-[#93457A] mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service Action Button */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <Link 
                    href={`/contact?service=${encodeURIComponent(s.title)}`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#93457A] hover:text-[#7B3566] transition-colors"
                  >
                    Discuss this solution
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* Global Impact CTA Bar */}
        <section className="bg-gradient-to-br from-[#93457A] to-[#5F284E] text-white p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-xs font-semibold tracking-wider text-brand-cream/80 uppercase">
              Proven Across Ecosystems
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-tight">
              We translate complexity into tactical market postures.
            </h2>
            <p className="text-xs sm:text-sm text-brand-cream/80 font-light leading-relaxed">
              We stand prepared to counsel enterprise leaders on transitions, integration, and security challenges. Let us construct the architecture you require.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold tracking-wide text-[#93457A] bg-[#FAF8F5] hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
            >
              Secure strategic audit
            </Link>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        </section>

      </div>
    </div>
  );
}
