"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Cpu,
  Landmark,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Strategic Advisory",
    tagline: "Securing Market Dominance",
    description:
      "High-stakes corporate planning and portfolio optimization that positions your organization ahead of market disruption.",
    bullets: [
      "Geopolitical risk mapping",
      "Capital allocation posture",
      "Executive succession resilience",
      "Enterprise portfolio health",
    ],
  },
  {
    icon: Settings,
    title: "Operational Integration",
    tagline: "Agile Scale & Efficiency",
    description:
      "Restructuring core systems to maximize output, streamline communication flows, and build structural operating leverage.",
    bullets: [
      "Operating model redesign",
      "Agile leadership orchestration",
      "Supply chain fortification",
      "Resource reallocation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Risk & Integrity Systems",
    tagline: "Defending Enterprise Value",
    description:
      "Establishing regulatory posture, continuous compliance systems, and threat mitigation models for exposed enterprise environments.",
    bullets: [
      "Regulatory preparedness",
      "Continuous threat assessment",
      "Board fiduciary frameworks",
      "Brand equity defenses",
    ],
  },
  {
    icon: Cpu,
    title: "Technological Architecture",
    tagline: "Engineering the Future",
    description:
      "Integrating AI frameworks, secure technical systems, and next-generation computing architecture into the enterprise core.",
    bullets: [
      "AI integration strategy",
      "Legacy modernization",
      "Zero-trust infrastructure",
      "Software R&D operations",
    ],
  },
];

const capabilities = [
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Capital discipline, governance, and operating leverage for financial institutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Transformation",
    desc: "Executive operating models for organizations navigating structural change.",
  },
  {
    icon: UsersRound,
    title: "Human Capital Systems",
    desc: "Leadership pipelines, culture architecture, and performance readiness.",
  },
];

const operatingModel = [
  {
    number: "01",
    title: "Diagnostic clarity",
    desc: "We establish the strategic, operational, and regulatory reality before recommending movement.",
  },
  {
    number: "02",
    title: "Executive architecture",
    desc: "We translate ambition into decision systems, governance cadence, and accountable workstreams.",
  },
  {
    number: "03",
    title: "Measured transition",
    desc: "We support implementation with calm oversight, clear indicators, and disciplined iteration.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
      {children}
    </span>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function ServicesContent() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A1A1A]">
      <motion.section
        variants={reveal}
        initial="hidden"
        animate="show"
        transition={{
          duration: reduceMotion ? 0 : 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden border-b border-[#1A1A1A]/10"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="flex flex-col justify-center lg:col-span-5">
            <SectionLabel>What We Deliver</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Architectures for secure{" "}
              <span className="italic text-[#93457A]">
                acceleration and defense
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
              We design advisory systems that strengthen corporate efficiency,
              fortify technical infrastructure, and give leadership teams a
              disciplined path through consequential market shifts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[#93457A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#7B3566]"
              >
                Explore Capabilities
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-all duration-300 hover:border-[#93457A]/40 hover:text-[#93457A]"
              >
                Request Briefing
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/60 bg-[#1A1A1A] shadow-2xl lg:max-w-[660px]">
              <Image
                src="/images/hero-conference.png"
                alt="Executive advisory setting for enterprise strategy work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 660px"
                className="object-cover opacity-95 transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
            <div className="absolute -bottom-8 left-4 w-[min(84%,380px)] border border-[#1A1A1A]/10 bg-[#FAF8F5]/95 p-6 shadow-xl backdrop-blur sm:left-10">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93457A]">
                Strategic Operating Posture
              </span>
              <p className="mt-3 font-serif text-2xl leading-snug">
                Services framed around decision quality, execution, and durable
                enterprise value.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Core Service Offerings</SectionLabel>
            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Integrated advisory for the moments that shape the enterprise.
            </h2>
            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-[#4A4A4A]">
              Each service area is structured to clarify risk, improve
              executive alignment, and create measurable operating momentum.
            </p>
          </div>

          <motion.div
            id="services"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.14 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={reveal}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group flex min-h-[360px] flex-col justify-between border border-[#1A1A1A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#93457A]/30 hover:shadow-xl sm:p-8 ${
                    index === 0 ? "lg:mt-10" : ""
                  } ${index === 3 ? "lg:-mt-10" : ""}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-6 border-b border-[#1A1A1A]/10 pb-7">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93457A]">
                          {service.tagline}
                        </span>
                        <h3 className="mt-3 font-serif text-2xl font-medium leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#93457A]/20 text-[#93457A] transition-colors duration-300 group-hover:bg-[#93457A] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="mt-7 text-sm font-light leading-7 text-[#4A4A4A]">
                      {service.description}
                    </p>
                    <ul className="mt-7 grid grid-cols-1 gap-3">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-xs leading-6 text-[#4A4A4A]"
                        >
                          <span className="mt-2 h-px w-5 shrink-0 bg-[#93457A]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="mt-10 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-colors duration-300 hover:text-[#7B3566]"
                  >
                    Discuss this solution
                    <ArrowRight
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Reveal>

      <Reveal className="border-y border-[#1A1A1A]/10 bg-white/45">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Unlocking Strategic Value</SectionLabel>
            <h2 className="mt-5 max-w-md font-serif text-3xl font-normal leading-tight sm:text-4xl">
              A measured method for turning ambition into operating reality.
            </h2>
            <div className="mt-10 divide-y divide-[#1A1A1A]/10">
              {operatingModel.map((item) => (
                <article
                  key={item.number}
                  className="grid grid-cols-[48px_1fr] gap-5 py-6 first:pt-0"
                >
                  <span className="font-serif text-xl text-[#93457A]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7">
            <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-[#1A1A1A]/10 bg-[#1A1A1A]">
              <Image
                src="/images/averti_team.jpeg"
                alt="Averti consultants collaborating on enterprise strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
            <div className="absolute -bottom-8 right-4 w-[min(84%,420px)] border border-[#1A1A1A]/10 bg-[#FAF8F5]/95 p-7 shadow-xl backdrop-blur sm:right-10">
              <span className="font-serif text-5xl leading-none text-[#93457A]/35">
                &rdquo;
              </span>
              <p className="mt-3 font-serif text-2xl italic leading-snug">
                Precision is not just a value; it is the cornerstone of trust in
                every strategic partnership we build.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-[#1A1A1A] py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 sm:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="border border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <Icon className="h-5 w-5 text-[#E67E22]" aria-hidden="true" />
                <h3 className="mt-8 font-serif text-xl font-medium">
                  {capability.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-white/65">
                  {capability.desc}
                </p>
              </article>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 border border-[#1A1A1A]/10 bg-[#93457A] p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FAF8F5]/70">
              Proven Across Ecosystems
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              We translate complexity into tactical market postures.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#FAF8F5]/75">
              We stand prepared to counsel enterprise leaders on transitions,
              integration, and security challenges with the discipline required
              for durable outcomes.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Secure Strategic Audit
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
