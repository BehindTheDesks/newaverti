import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Award, Compass, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Averti Consulting",
  description: "Discover our heritage, core principles, and the high-stakes advisory framework that steers global enterprises toward long-term resilience.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Uncompromising Integrity",
      desc: "We prioritize absolute confidentiality and analytical rigor above all, providing honest, unvarnished guidance to enterprise leaders.",
    },
    {
      icon: Award,
      title: "Strategic Precision",
      desc: "Every recommendation is backed by deep research and custom architectural blueprints designed to thrive in volatile environments.",
    },
    {
      icon: Compass,
      title: "Forward Navigation",
      desc: "We look beyond immediate quarters, designing structures that anticipate technological shifts and regulatory evolutions.",
    },
    {
      icon: Eye,
      title: "Clear Vision",
      desc: "Translating complex systemic noise into clear, actionable decision-making frameworks for boardrooms and executives.",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Intro Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93457A]">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
              We bridge traditional authority with{" "}
              <span className="italic font-light text-[#93457A]">
                modern efficiency
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl font-light">
              Founded on the belief that large-scale operations require a harmonious marriage of historic reliability and cutting-edge operational agility, Averti provides premium consulting services to high-growth firms and established market giants alike.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative bg-[#93457A]/5 rounded-2xl p-8 border border-[#93457A]/10 flex flex-col justify-between aspect-square">
            <div className="space-y-4">
              <span className="text-4xl sm:text-5xl font-serif text-[#93457A] italic">
                Our Creed
              </span>
              <p className="text-sm sm:text-base text-[#1A1A1A] leading-relaxed font-serif">
                &ldquo;Precision is not merely a method; it is our promise. In high-stakes environments, a fraction of a percent is the difference between legacy and obsolescence.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-[#93457A]/10 text-xs tracking-wider text-[#4A4A4A] uppercase font-semibold">
              — The Averti Leadership Board
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] font-normal">
              The Heritage of Averti
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-light">
              Originating from a select circle of senior enterprise architects and financial strategists, Averti emerged to address a massive gap in standard agency systems: the lack of profound, tailored integration. We reject the copy-paste template playbook, choosing instead to design tailor-made, highly customized blueprints that build internal organizational power.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-[#1A1A1A] font-normal">
              Resiliency Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-light">
              We operate at the convergence of organizational design, corporate finance, and system engineering. Our focus is long-term stability and sustainable acceleration. We partner directly with C-suites to identify risk profiles, unlock new operating leverage, and orchestrate transitions that keep organizations running smoothly.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-12 pt-12 border-t border-gray-200">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#93457A]">
              Core Principles
            </span>
            <h2 className="text-3xl font-serif text-[#1A1A1A] font-normal">
              The foundations that guide our advisory
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#93457A]/5 flex items-center justify-center text-[#93457A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-medium text-[#1A1A1A]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="bg-[#93457A] text-white p-8 sm:p-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 z-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal">
              Ready to fortify your enterprise?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md font-light">
              Connect with our advisory board for a highly confidential strategic briefing.
            </p>
          </div>
          <Link
            href="/contact"
            className="z-10 inline-flex items-center justify-center px-6 py-3 bg-white text-[#93457A] hover:bg-[#93457A] hover:text-white border border-white rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 group"
          >
            Schedule a Briefing
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          {/* Subtle elegant backdrop mesh */}
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        </section>

      </div>
    </div>
  );
}
