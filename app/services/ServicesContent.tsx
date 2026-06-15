"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  Scale,
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
    icon: ClipboardCheck,
    title: "Auditing Services",
    tagline: "Assurance & Accountability",
    description:
      "Independent audit and assurance services designed to strengthen governance, enhance transparency, and provide stakeholders with confidence in financial and operational reporting.",
    bullets: [
      "Statutory audits",
      "Internal audit reviews",
      "Risk and control assessments",
      "Compliance evaluations",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Accountancy Services",
    tagline: "Financial Accuracy & Control",
    description:
      "Professional accounting solutions that support sound financial management, accurate reporting, and effective business decision-making.",
    bullets: [
      "Financial statement preparation",
      "Bookkeeping and records management",
      "Accounting system reviews",
      "Management accounts",
    ],
  },
  {
    icon: Landmark,
    title: "Taxation Services",
    tagline: "Compliance & Tax Efficiency",
    description:
      "Comprehensive tax advisory and compliance support that helps organizations meet regulatory obligations while optimizing tax efficiency.",
    bullets: [
      "Corporate tax advisory",
      "Tax planning strategies",
      "Regulatory compliance support",
      "Tax risk management",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Financial Management Advisory",
    tagline: "Strategic Financial Stewardship",
    description:
      "Financial advisory services focused on strengthening organizational performance, improving resource allocation, and supporting sustainable growth.",
    bullets: [
      "Financial planning and analysis",
      "Budgeting and forecasting",
      "Performance evaluation",
      "Strategic financial guidance",
    ],
  },
  {
    icon: UsersRound,
    title: "Human Capital Development",
    tagline: "Building Organizational Capability",
    description:
      "People-focused solutions designed to enhance workforce effectiveness, leadership capability, and long-term organizational performance.",
    bullets: [
      "Leadership development",
      "Performance management systems",
      "Workforce planning",
      "Talent development initiatives",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Consultancy Services",
    tagline: "Knowledge, Growth & Transformation",
    description:
      "Professional training and consulting engagements that equip organizations with the skills, systems, and strategies required for sustainable success.",
    bullets: [
      "Executive development programmes",
      "Corporate training workshops",
      "Business process improvement",
      "Organizational consulting",
    ],
  },
];
const capabilities = [
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    desc: "Strengthening institutional accountability through structured oversight and risk-conscious advisory systems.",
  },
  {
    icon: Building2,
    title: "Enterprise Operations",
    desc: "Improving efficiency, coordination and operational resilience across growing organizations.",
  },
  {
    icon: Scale,
    title: "Corporate Administration",
    desc: "Supporting organizations with structured advisory, documentation and secretarial services.",
  },
];

const operatingModel = [
  {
    number: "01",
    title: "Assessment & Discovery",
    desc: "We begin by understanding your operational realities, financial structure and organizational priorities.",
  },
  {
    number: "02",
    title: "Strategic Structuring",
    desc: "Recommendations are translated into practical systems, governance models and measurable implementation plans.",
  },
  {
    number: "03",
    title: "Execution Support",
    desc: "We provide ongoing guidance and oversight to ensure sustainable execution and long-term operational value.",
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
      {/* HERO */}
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
            <SectionLabel>Professional Services</SectionLabel>

            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Strategic Advisory for{" "}
              <span className="italic text-[#93457A]">
                business growth
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
              Averti Professional Managers delivers multidisciplinary auditing, accountancy services, taxation, financial management,  reporting accountants, human capital development, training and consultancy services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-[#93457A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#7B3566]"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-all duration-300 hover:border-[#93457A]/40 hover:text-[#93457A]"
              >
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/60 bg-[#1A1A1A] shadow-2xl lg:max-w-[660px]">
              <Image
                src="/images/averti_homepage.jpeg"
                alt="Professional advisory meeting at Averti"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 660px"
                className="object-cover opacity-95 transition-transform duration-700 hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
            
          </div>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className=" space-y-16">
          <div className="flex flex-col items-center">
            <SectionLabel>Core Service Areas</SectionLabel>

            <h2 className="mt-5 uppercase max-w-6xl text-center font-serif text-2xl font-normal leading-tight sm:text-3xl">
              Solutions designed around operational clarity and business growth.
            </h2>
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
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={reveal}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex min-h-[360px] flex-col justify-between border border-[#1A1A1A]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#93457A]/30 hover:shadow-xl sm:p-8"
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
                    Discuss this service

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

      {/* OPERATING MODEL */}
      {/* <Reveal className="border-y border-[#1A1A1A]/10 bg-white/45">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Our Approach</SectionLabel>

            <h2 className="mt-5 max-w-md font-serif text-3xl font-normal leading-tight sm:text-4xl">
              A collaborative framework built around measurable outcomes.
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
                alt="Averti consulting team collaborating"
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
                Sustainable business growth begins with disciplined structure,
                informed decisions and consistent execution.
              </p>
            </div>
          </div>
        </div>
      </Reveal> */}

      {/* CAPABILITIES */}
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

      {/* CTA */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 border border-[#1A1A1A]/10 bg-[#93457A] p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FAF8F5]/70">
              Let&apos;s Build With Clarity
            </span>

            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Partner with Averti for structured, practical and growth-focused
              advisory solutions.
            </h2>

            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#FAF8F5]/75">
              From governance and finance to workforce development and operational
              efficiency, we help organizations move forward with confidence and
              clarity.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact Us

              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}