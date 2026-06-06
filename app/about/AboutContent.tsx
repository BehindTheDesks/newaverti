"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Compass,
  Eye,
  Shield,
  BriefcaseBusiness,
  Users,
  LineChart,
  Scale,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const values = [
  {
    icon: Shield,
    title: "Integrity & Confidentiality",
    desc: "We uphold the highest level of professionalism, discretion and ethical responsibility across every engagement and client interaction.",
  },
  {
    icon: Award,
    title: "Practical Expertise",
    desc: "Our recommendations are built from decades of hands-on industry experience across finance, governance, operations and business management.",
  },
  {
    icon: Compass,
    title: "Strategic Innovation",
    desc: "We help organizations adapt to changing regulations, market realities and emerging business challenges with forward-thinking solutions.",
  },
  {
    icon: Eye,
    title: "Sustainable Impact",
    desc: "We focus on long-term operational efficiency, business continuity and measurable transformation that strengthens organizational performance.",
  },
];

const disciplines = [
  "Auditing",
  "Accountancy Services",
  "Taxation",
  "Financial Management",
  "Training & Development",
  "Consultancy Services",
  "Reporting Accountants",
  "Human Capital Development",
];

const advantages = [
  {
    number: "01",
    title: "100+ Years Combined Experience",
    desc: "Our team is composed of seasoned professionals with extensive experience across multiple sectors of the Nigerian economy.",
  },
  {
    number: "02",
    title: "Tailored Business Solutions",
    desc: "We take time to understand each client’s operations, culture and strategic direction before developing practical recommendations.",
  },
  {
    number: "03",
    title: "Execution-Focused Advisory",
    desc: "Beyond strategy development, we support implementation, process improvement and sustainable organizational transformation.",
  },
];

// const services = [
//   {
//     icon: Scale,
//     title: "Audit & Assurance",
//     desc: "Statutory audit, forensic audit, due diligence, internal control reviews and risk management support.",
//   },
//   {
//     icon: BriefcaseBusiness,
//     title: "Business Advisory",
//     desc: "Strategic planning, business development, restructuring, venture support and operational consulting.",
//   },
//   {
//     icon: LineChart,
//     title: "Financial Services",
//     desc: "Business valuation, mergers & acquisitions, capital structuring and financial performance optimization.",
//   },
//   {
//     icon: Users,
//     title: "Human Capital",
//     desc: "Recruitment, training, talent management, performance systems and workforce development strategies.",
//   },
// ];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-sm sm:text-base font-semibold uppercase tracking-[0.28em] text-[#93457A]">
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

export default function AboutContent() {
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
            <SectionLabel>About Averti</SectionLabel>

            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.04] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Strategic advisory built on experience, execution and trust.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#4A4A4A] sm:text-lg">
              Averti Professional Managers is a multidisciplinary consulting and
              advisory firm focused on auditing, accountancy services, taxation, financial management,  reporting accountants, human capital development, training and consultancy services.
            </p>

            
          </div>

          <div className="relative min-h-[420px] lg:col-span-7">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/60 bg-[#1A1A1A] shadow-lg lg:max-w-[680px]"
            >
              <Image
                src="/images/averti_team.jpeg"
                alt="Averti Professional Managers team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </motion.div>

            <div className="absolute -bottom-8 left-4 w-[min(82%,360px)] border border-[#1A1A1A]/10 bg-[#FAF8F5]/95 p-6 shadow backdrop-blur sm:left-10">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93457A]">
                Our Commitment
              </span>

              <p className="mt-3 font-serif text-2xl leading-snug text-[#1A1A1A]">
                We Advance, We Execute and We Finish.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* POSITION */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-14 border-b border-[#1A1A1A]/10 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Who We Are</SectionLabel>

            <h2 className="mt-5 uppercase max-w-xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Helping businesses adapt, improve and grow in a changing world.
            </h2>
          </div>

          <div className="space-y-7 lg:col-span-5">
            <p className="text-sm sm:text-xl leading-7 text-[#4A4A4A] sm:text-base">
              The modern business environment continues to evolve through
              changing regulations, global competition, economic uncertainty
              and operational complexity.
            </p>

            <p className="text-sm sm:text-xl leading-7 text-[#4A4A4A] sm:text-base">
              At Averti Professional Mangers, we work closely with our clients to understand their
              pain points.
              This allows us to develop solutions that improve efficiency,
              strengthen governance and drive sustainable performance.
            </p>
          </div>

          <div className="border-l border-[#93457A]/30 pl-6 lg:col-span-2 lg:self-end">
            <span className="font-serif text-5xl font-normal text-[#93457A]">
              100+
            </span>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A4A4A]">
              Years Combined Experience
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline) => (
            <div
              key={discipline}
              className="border-t lg:text-center border-[#1A1A1A]/15 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]"
            >
              {discipline}
            </div>
          ))}
        </div>
      </Reveal>

      {/* SERVICES */}
      {/* <Reveal className="bg-white/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <SectionLabel>Core Services</SectionLabel>

            <h2 className="mt-5 font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Broad-based professional services across critical business areas.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FAF8F5] p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#93457A]/10 text-[#93457A]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#1A1A1A]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#4A4A4A]">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal> */}

      {/* ETHOS */}
      <Reveal className="bg-[#93457A] py-20 text-white sm:py-24">
        <div className="mx-auto  max-w-7xl  gap-12 px-6 lg:items-center">
          <div className=" gap-4 flex flex-col items-center">
            <span className="text-base font-semibold uppercase tracking-[0.28em] text-[#FAF8F5]/70">
              The Averti Ethos
            </span>

            <blockquote className="mt-6 max-w-4xl font-serif text-3xl font-normal italic leading-tight sm:text-4xl lg:text-5xl text-center">
              “We offer not only transformation strategies, but the capability
              needed to execute them and deliver sustainable change.”
            </blockquote>
          </div>

          {/* <p className="max-w-md text-sm leading-7 text-[#FAF8F5]/75 lg:col-span-4">
            Our mission is to create value for organizations through strategic
            insight, operational support and long-term professional partnership.
          </p> */}
        </div>
      </Reveal>

      {/* VALUES */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Our Values</SectionLabel>

            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Principles that shape every client engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#1A1A1A]/10 bg-[#1A1A1A]/10 sm:grid-cols-2 lg:col-span-8">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group bg-[#FAF8F5] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
                >
                  <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#93457A]/20 text-[#93457A] transition-colors duration-300 group-hover:bg-[#93457A] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#1A1A1A]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#4A4A4A]">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* ADVANTAGE */}
      <Reveal className="border-y border-[#1A1A1A]/10 bg-white/45">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-[#1A1A1A] lg:col-span-5">
            <Image
              src="/images/averti_team.jpeg"
              alt="Averti Professional Managers"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>The Averti Advantage</SectionLabel>

            <h2 className="mt-5 max-w-xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Experienced professionals delivering practical business solutions.
            </h2>

            <div className="mt-10 divide-y divide-[#1A1A1A]/10">
              {advantages.map((advantage) => (
                <article
                  key={advantage.number}
                  className="grid grid-cols-[48px_1fr] gap-5 py-6 first:pt-0"
                >
                  <span className="font-serif text-xl text-[#93457A]">
                    {advantage.number}
                  </span>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]">
                      {advantage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">
                      {advantage.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-[#1A1A1A]/10 bg-[#1A1A1A] p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-8">
            <span className="text-base font-semibold uppercase tracking-[0.28em] text-[#E67E22]">
              Let’s Work Together
            </span>

            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Build stronger operations, systems and business performance with
              Averti.
            </h2>

            <p className="mt-5 max-w-xl text-sm lg:text-lg leading-7 text-white/70">
              Speak with our team about your organization’s auditing, accountancy services, taxation, financial management,  reporting accountants, human capital development, training and consultancy services.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-base font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}