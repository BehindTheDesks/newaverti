"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Compass, Eye, Shield } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const values = [
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "Confidentiality, candor, and analytical discipline anchor every engagement, giving leadership counsel they can act on with confidence.",
  },
  {
    icon: Award,
    title: "Strategic Precision",
    desc: "Recommendations are shaped by evidence, operating context, and the pressures that define each enterprise mandate.",
  },
  {
    icon: Compass,
    title: "Forward Navigation",
    desc: "We design structures that anticipate technological shifts, regulatory movement, and the next horizon of enterprise risk.",
  },
  {
    icon: Eye,
    title: "Clear Vision",
    desc: "Complexity is translated into concise decision architecture for executives, boards, and transformation leaders.",
  },
];

const disciplines = [
  "Enterprise architecture",
  "Corporate finance",
  "Operational integration",
  "Risk and integrity systems",
];

const advantages = [
  {
    number: "01",
    title: "Senior-led expertise",
    desc: "Engagements are directed by experienced operators and strategists, not routed through generic delivery layers.",
  },
  {
    number: "02",
    title: "Bespoke operating architecture",
    desc: "We reject template playbooks in favor of systems shaped around each client's market position, governance, and growth pressure.",
  },
  {
    number: "03",
    title: "Durable executive partnership",
    desc: "Every mandate is evaluated against resilience, clarity, and the ability to perform under pressure long after launch.",
  },
];

const proofPoints = [
  { value: "04", label: "Integrated advisory disciplines" },
  { value: "20+", label: "Years of senior operating perspective" },
  { value: "01", label: "Unified partner-led delivery model" },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
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

export default function AboutContent() {
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
            <SectionLabel>Our Identity</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.04] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              About Averti
            </h1>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
              Averti Professional Managers is anchored in intellectual rigor and
              strategic partnership. We guide complex organizations through
              tectonic shifts in global markets with precision, discretion, and
              foresight.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-px border-y border-[#1A1A1A]/10 bg-[#1A1A1A]/10 sm:grid-cols-3 lg:max-w-xl">
              {proofPoints.map((point) => (
                <div key={point.label} className="bg-[#FAF8F5] py-5 sm:px-5">
                  <span className="font-serif text-3xl font-normal text-[#93457A]">
                    {point.value}
                  </span>
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#4A4A4A]">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] lg:col-span-7">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/60 bg-[#1A1A1A] shadow-2xl lg:max-w-[680px]"
            >
              <Image
                src="/images/hero-conference.png"
                alt="Executive conference setting for strategic advisory work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover opacity-95 transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </motion.div>
            <div className="absolute -bottom-8 left-4 w-[min(82%,360px)] border border-[#1A1A1A]/10 bg-[#FAF8F5]/95 p-6 shadow-xl backdrop-blur sm:left-10">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93457A]">
                Est. London
              </span>
              <p className="mt-3 font-serif text-2xl leading-snug text-[#1A1A1A]">
                Strategic governance for moments that define enterprise value.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-14 border-b border-[#1A1A1A]/10 pb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Our Position</SectionLabel>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              A multidisciplinary advisory house for consequential decisions.
            </h2>
          </div>
          <div className="space-y-7 lg:col-span-5">
            <p className="text-sm font-light leading-7 text-[#4A4A4A] sm:text-base">
              Our DNA is built upon the intersection of management consultancy,
              legal advisory, and operational auditing. We do not simply provide
              advice; we architect solutions that are resilient to market
              volatility and regulatory shifts.
            </p>
            <p className="text-sm font-light leading-7 text-[#4A4A4A] sm:text-base">
              By integrating specialist vertical knowledge with a horizontal
              perspective, Averti empowers leaders to move from reactive survival
              to proactive market leadership.
            </p>
          </div>
          <div className="border-l border-[#93457A]/30 pl-6 lg:col-span-2 lg:self-end">
            <span className="font-serif text-5xl font-normal text-[#93457A]">
              120+
            </span>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4A4A4A]">
              Years combined experience
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((discipline) => (
            <div
              key={discipline}
              className="border-t border-[#1A1A1A]/15 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]"
            >
              {discipline}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="bg-[#93457A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FAF8F5]/70">
              The Averti Ethos
            </span>
            <blockquote className="mt-6 max-w-4xl font-serif text-3xl font-normal italic leading-tight sm:text-4xl lg:text-5xl">
              &ldquo;Navigating complexity through clarity and purpose is not a
              choice, but the ultimate strategic imperative.&rdquo;
            </blockquote>
          </div>
          <p className="max-w-md text-sm font-light leading-7 text-[#FAF8F5]/75 lg:col-span-4">
            Our work creates calm inside high-pressure decisions, giving
            executive teams the structure to act with conviction.
          </p>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Guided by Immutable Values</SectionLabel>
            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Principles that keep judgment clear under pressure.
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
                  <p className="mt-4 text-sm font-light leading-7 text-[#4A4A4A]">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal className="border-y border-[#1A1A1A]/10 bg-white/45">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-[#1A1A1A]/10 bg-[#1A1A1A] lg:col-span-5">
            <Image
              src="/images/averti_team.jpeg"
              alt="Averti advisors gathered in a formal strategy setting"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>The Averti Advantage</SectionLabel>
            <h2 className="mt-5 max-w-xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Designed for leaders who need judgment, discretion, and operating
              clarity.
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
                    <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                      {advantage.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 border border-[#1A1A1A]/10 bg-[#1A1A1A] p-8 text-white sm:p-10 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E67E22]">
              Begin a Strategic Dialogue
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Bring Averti&apos;s perspective to your next enterprise decision.
            </h2>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-white/70">
              Let us discuss how a more disciplined advisory posture can elevate
              your organization&apos;s strategic and operational resilience.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-transparent hover:text-white"
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
