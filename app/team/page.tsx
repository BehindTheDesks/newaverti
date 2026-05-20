import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Averti Consulting",
  description: "Meet the senior partners and enterprise architects behind Averti's high-stakes consulting framework.",
};

export default function TeamPage() {
  const leaders = [
    {
      name: "Bukki Orekoya",
      role: "Management & Financial Consultant",
      imageSrc: "/images/bukki_orekoya.jpeg",
      bio: "Bukki leads corporate structural reorganizations and capital restructuring strategies. With over twenty years of fiduciary experience directing mergers and treasury controls at global institutions, she designs capital efficiency blueprints that safeguard corporate resilience.",
      specialties: ["Capital Efficiency Modeling", "Mergers & Acquisitions", "Fiduciary Governance"],
      education: "M.Sc. in Corporate Finance, London School of Economics",
    },
    {
      name: "Cecilia Osoka",
      role: "Head of Strategy",
      imageSrc: "/images/cecilia_osoka.jpeg",
      bio: "Cecilia coordinates Averti's strategic advisory operations. She specializes in market exposure profiling, antitrust advisory, and brand positioning under threat. Her work has enabled multiple Fortune 100 firms to successfully transition into new regulatory regimes.",
      specialties: ["Geopolitical Risk Mitigation", "Antitrust Posturing", "C-Suite Advisory"],
      education: "MBA, Wharton School of the University of Pennsylvania",
    },
    {
      name: "Inyang Sami-Orungbe",
      role: "Head of Tech Architecture",
      imageSrc: "/images/inyang_sami_orungbe.jpeg",
      bio: "Inyang oversees engineering integrity and technical strategy. An expert in secure next-generation cloud architectures and systemic database operations, he ensures clients install digital layers that support high volume efficiency while remaining highly secure.",
      specialties: ["Zero-Trust Infrastructure", "Machine Intelligence Strategy", "Enterprise R&D Scaling"],
      education: "B.Sc. in Electrical Engineering & Computer Science, MIT",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93457A]">
            Our Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
            Decades of high-stakes{" "}
            <span className="italic font-light text-[#93457A]">
              institutional expertise
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-light">
            Averti's advisory board is comprised of veteran management strategists, financial compliance officers, and cloud-scale software architects. We do not field junior analysts; our clients work exclusively with senior industry leaders.
          </p>
        </section>

        {/* Detailed Leader Profiles */}
        <section className="space-y-16">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:shadow-md transition-all duration-300"
            >
              {/* Profile Image Container */}
              <div className="lg:col-span-4 relative aspect-[4/5] lg:aspect-auto min-h-[320px] bg-[#93457A]/5">
                <Image
                  src={leader.imageSrc}
                  alt={`Studio portrait of ${leader.name}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  {/* Name and Role */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#93457A]">
                      {leader.role}
                    </span>
                    <h2 className="text-3xl font-serif text-[#1A1A1A] font-medium">
                      {leader.name}
                    </h2>
                  </div>

                  {/* Biography */}
                  <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-light">
                    {leader.bio}
                  </p>

                  {/* Credentials / Focus */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      <div className="flex items-center text-xs font-bold uppercase text-[#1A1A1A] tracking-wider space-x-2">
                        <Award className="w-4 h-4 text-[#93457A]" />
                        <span>Academic credentials</span>
                      </div>
                      <p className="text-xs text-[#4A4A4A] leading-relaxed font-light pl-6">
                        {leader.education}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-xs font-bold uppercase text-[#1A1A1A] tracking-wider space-x-2">
                        <Building className="w-4 h-4 text-[#93457A]" />
                        <span>Key Focus Specialties</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-6 pt-1">
                        {leader.specialties.map((spec, i) => (
                          <span 
                            key={i} 
                            className="inline-block px-2.5 py-1 bg-[#93457A]/5 text-[#93457A] rounded-full text-[10px] font-semibold"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Link 
                    href={`/contact?adviser=${encodeURIComponent(leader.name)}`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#93457A] hover:text-[#7B3566] transition-colors"
                  >
                    Consult with {leader.name.split(" ")[0]}
                    <ArrowRight className="w-4 h-4 ml-2 hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Dynamic Advisory Call */}
        <section className="bg-[#93457A] text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2 z-10 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal">
              Work with the principal directors directly.
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light">
              We operate as a highly integrated team, uniting management strategy, financial positioning, and tech architectures into a singular advisory posture.
            </p>
          </div>
          <Link
            href="/contact"
            className="z-10 inline-flex items-center justify-center px-6 py-3 bg-white text-[#93457A] hover:bg-[#93457A] hover:text-white border border-white rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300"
          >
            Request Private Consultation
          </Link>
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        </section>

      </div>
    </div>
  );
}
