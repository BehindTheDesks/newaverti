import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory Perspectives | Averti Professional Managers",
  description:
    "Explore Averti’s advisory expertise across financial management, banking operations, governance, process improvement, and organizational development.",
};

const expertiseAreas = [
  {
    icon: Landmark,
    title: "Financial Advisory & Governance",
    description:
      "Supporting organizations with financial management, corporate governance, restructuring support, and operational accountability frameworks.",
  },
  {
    icon: Building2,
    title: "Banking Operations & Process Management",
    description:
      "Deep operational expertise across treasury operations, settlements, branch supervision, liquidity management, and institutional process optimization.",
  },
  {
    icon: UsersRound,
    title: "Leadership & Organizational Development",
    description:
      "Executive training, workforce development, customer service improvement, and leadership support designed to strengthen organizational performance.",
  },
  {
    icon: ShieldCheck,
    title: "Business Process Improvement",
    description:
      "Practical process reviews and operational restructuring initiatives that improve efficiency, accountability, and long-term sustainability.",
  },
];

const perspectives = [
  {
    title: "Financial Discipline Remains a Competitive Advantage",
    summary:
      "Organizations with strong financial controls, clear reporting structures, and disciplined planning are better positioned to navigate uncertainty and sustain growth.",
    author: "Bukki Orekoya",
  },
  {
    title: "Operational Excellence Requires Structure",
    summary:
      "Strong operational systems are built through process clarity, accountability, and continuous improvement across critical business functions.",
    author: "Cecilia Osoka",
  },
  {
    title: "Retirement Planning Should Start Earlier",
    summary:
      "Long-term financial security is best achieved through consistent planning, informed decision-making, and structured retirement preparation.",
    author: "Inyang Sami-Orungbe",
  },
];

const industries = [
  "Financial Institutions",
  "Corporate Organizations",
  "Small & Medium Enterprises",
  "Professional Services",
  "Investment & Pension Services",
  "Public & Private Sector Institutions",
];

export default function InsightPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="border-b border-[#1A1A1A]/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
              Advisory Perspectives
            </span>

            <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Executive insight shaped by{" "}
              <span className="italic text-[#93457A]">
                experience and operational expertise
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
              Averti Professional Managers brings together decades of
              multidisciplinary experience across finance, banking operations,
              governance, business development, process improvement, and
              organizational management. Our advisory approach is grounded in
              practical expertise, institutional discipline, and sustainable
              business performance.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
              Core Advisory Areas
            </span>

            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Practical expertise for organizations navigating growth and
              operational complexity.
            </h2>

            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-[#4A4A4A]">
              Our work focuses on strengthening organizational systems,
              improving operational performance, and supporting sustainable
              decision-making across institutions and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="border border-[#1A1A1A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#93457A]/20 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#93457A]/20 text-[#93457A]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl font-medium leading-tight">
                    {area.title}
                  </h3>

                  <p className="mt-5 text-sm font-light leading-7 text-[#4A4A4A]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Perspectives */}
      <section className="border-y border-[#1A1A1A]/10 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
              Leadership Perspectives
            </span>

            <h2 className="mt-5 font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Experience-driven perspectives from Averti’s consultants.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {perspectives.map((item) => (
              <article
                key={item.title}
                className="border border-[#1A1A1A]/10 bg-white p-8"
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93457A]">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span>Executive Perspective</span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-normal leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm font-light leading-7 text-[#4A4A4A]">
                  {item.summary}
                </p>

                <div className="mt-8 border-t border-[#1A1A1A]/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A4A4A]">
                    {item.author}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
              Industries & Institutions
            </span>

            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Supporting organizations across diverse sectors.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {industries.map((industry) => (
              <div
                key={industry}
                className="border-t border-[#1A1A1A]/10 bg-white px-2 py-5 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-10 border border-[#1A1A1A]/10 bg-[#93457A] p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Engage With Averti
            </span>

            <h2 className="mt-5 max-w-2xl font-serif text-2xl font-normal leading-tight sm:text-3xl">
              Partner with experienced professionals committed to practical,
              sustainable business solutions.
            </h2>

            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/75">
              We support organizations with strategic guidance, operational
              improvement, financial advisory, and institutional development
              built on decades of multidisciplinary experience.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              <span className=" hidden md:flex pr-1">Schedule </span> Consultation
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}