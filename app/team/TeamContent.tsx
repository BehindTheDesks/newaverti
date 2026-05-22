"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Award, Building, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const leaders = [
  {
    name: "Inyang Sami-Orungbe",
    role: "Financial Planning & Business Development Consultant",
    imageSrc: "/images/inyang_sami_orungbe.jpeg",
    intro:
      "Inyang is an experienced business development and financial planning professional with over 28 years of expertise spanning banking, pensions, investment advisory, customer relations, and strategic marketing.",
    bio: "With a strong background in financial services and business management, Inyang has held leadership positions across banking, telecommunications, pensions, and asset management. She previously worked at IBTC Bank before taking on strategic roles at Intercellular Nigeria Plc, where she led units covering marketing research, product development, customer support, and corporate planning. As the pioneer Head of Marketing at CrusaderSterling Pensions Limited, she played a key role in growing the organization’s assets under management from inception to over ₦9 billion within 25 months. She later headed Business Development at ASSUR Asset Management Limited, where she managed investment portfolios for high net-worth individuals and institutions exceeding ₦14 billion. Her expertise covers financial planning, retirement advisory, business development, customer service, and strategic relationship management.",
    specialties: [
      "Financial & Retirement Planning",
      "Business Development & Marketing",
      "Customer Relationship Management",
    ],
    education:
      "B.Sc. Business Administration, Rivers State University of Science and Technology | MBA, ESUT Business School Lagos",
    quote:
      "Sustainable growth is achieved through strategic relationships, disciplined planning, and consistent value creation.",
  },
  {
    name: "Bukki Orekoya",
    role: "Management & Financial Consultant",
    imageSrc: "/images/bukki_orekoya.jpeg",
    intro:
      "Bukki is a Chartered Accountant and seasoned management consultant with over 32 years of experience spanning auditing, financial advisory, corporate restructuring, and executive training.",
    bio: "A Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), Bukki began her professional journey at KPMG Audit where she gained extensive experience in audit, reporting, capital restructuring, and privatisation advisory. She later became the first Nigerian Chief Accountant and Company Secretary of Paterson Candy International Nigeria Ltd, where she played a key role in the computerisation of the company’s accounting systems and oversight of major engineering and water treatment contracts. In addition to her financial expertise, she is an accredited management trainer and has facilitated professional development programmes for ICAN and other leading institutions across Nigeria.",
    specialties: [
      "Audit & Financial Advisory",
      "Corporate Restructuring",
      "Management Training",
    ],
    education:
      "B.Sc. Economics, Obafemi Awolowo University | Fellow, Institute of Chartered Accountants of Nigeria (ICAN)",
    quote:
      "Sustainable business performance begins with discipline, structure, and informed financial leadership.",
  },
  {
    name: "Cecilia Osoka",
    role: "Accounting, Banking & Operations Consultant",
    imageSrc: "/images/cecilia_osoka.jpeg",
    intro:
      "Cecilia is a seasoned finance and banking professional with over 27 years of experience spanning accounting, audit, treasury operations, banking administration, consultancy, and professional training.",
    bio: "A Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Senior Honorary Member of the Chartered Institute of Bankers of Nigeria (CIBN), Cecilia began her career in audit and accountancy before transitioning into the banking sector. She held senior operational and treasury leadership roles at Merchant Bank of Commerce, United Bank for Africa (UBA), and Ecobank Nigeria, where she oversaw large-scale banking operations, process management, systems implementation, and branch operational supervision. Her expertise also includes change management, banking process documentation, operational training, and enterprise-wide financial operations coordination. Since leaving the banking sector, she has continued to provide consulting, accounting, and training services to organizations and professionals.",
    specialties: [
      "Banking Operations & Treasury Management",
      "Process & Change Management",
      "Accounting & Financial Consultancy",
    ],
    education:
      "B.Sc. Accounting, University of Lagos | MBA, Obafemi Awolowo University | Fellow, Institute of Chartered Accountants of Nigeria (ICAN)",
    quote:
      "Operational excellence is built through discipline, structure, and continuous improvement.",
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

export default function TeamContent() {
  const [openProfile, setOpenProfile] = useState<string | null>(
    leaders[0]?.name ?? null
  );
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A1A1A]">
      <motion.section
        variants={reveal}
        initial="hidden"
        animate="show"
        transition={transition}
        className="border-b border-[#1A1A1A]/10"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-6">
            <SectionLabel>Institutional Leadership</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Guided by strategic insight.{" "}
              <span className="italic text-[#93457A]">
                Anchored in precision.
              </span>
            </h1>
          </div>
          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <p className="max-w-xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
              Meet the executive leadership driving transformation and
              sustainable growth for ambitious organizations.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="grid grid-cols-1 gap-10 border-b border-[#1A1A1A]/10 pb-14 lg:grid-cols-12 lg:gap-16"
        >
          <div className="border-l-2 border-[#93457A] pl-5 lg:col-span-4">
            <h2 className="font-serif text-2xl font-normal">Our Leadership</h2>
          </div>
          <p className="max-w-3xl text-sm font-light leading-7 text-[#4A4A4A] lg:col-span-7 lg:col-start-6">
            Averti&apos;s leadership team brings together decades of
            multidisciplinary expertise across global finance, strategy, and
            operations. We are committed to engineering institutional rigor and
            delivering precision-led solutions for complex business challenges.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.14,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 space-y-10 lg:mt-16 lg:space-y-14"
        >
          {leaders.map((leader, index) => {
            const isOpen = openProfile === leader.name;
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={leader.name}
                variants={reveal}
                transition={transition}
                className="border-b border-[#1A1A1A]/10 pb-10 lg:pb-14"
              >
                <div
                  className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="group relative aspect-[4/5] overflow-hidden border border-[#1A1A1A]/10 bg-[#93457A]/5">
                      <Image
                        src={leader.imageSrc}
                        alt={`Studio portrait of ${leader.name}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:text-right" : "lg:col-start-7"
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93457A]">
                      {leader.role}
                    </span>
                    <h3 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-4xl">
                      {leader.name}
                    </h3>
                    <p className="mt-5 text-sm font-light leading-7 text-[#4A4A4A] sm:text-base sm:leading-8">
                      {leader.intro}
                    </p>

                    <div
                      className={`mt-7 flex flex-wrap gap-2 ${
                        isReversed ? "lg:justify-end" : ""
                      }`}
                    >
                      {leader.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="border border-[#1A1A1A]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4A4A4A]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenProfile(isOpen ? null : leader.name)
                      }
                      aria-expanded={isOpen}
                      className={`mt-8 inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#93457A] transition-colors duration-300 hover:text-[#7B3566] ${
                        isReversed ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span>{isOpen ? "Close Profile" : "Read More"}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        } ${isReversed ? "mr-2" : "ml-2"}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={
                            reduceMotion
                              ? false
                              : { height: 0, opacity: 0, y: -8 }
                          }
                          animate={
                            reduceMotion
                              ? undefined
                              : { height: "auto", opacity: 1, y: 0 }
                          }
                          exit={
                            reduceMotion
                              ? undefined
                              : { height: 0, opacity: 0, y: -8 }
                          }
                          transition={{
                            duration: reduceMotion ? 0 : 0.42,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className={`mt-8 border-t border-[#1A1A1A]/10 pt-7 ${
                              isReversed ? "lg:ml-auto" : ""
                            }`}
                          >
                            <p className="text-sm font-light leading-7 text-[#4A4A4A]">
                              {leader.bio}
                            </p>
                            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                              <div>
                                <div
                                  className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                    isReversed ? "lg:justify-end" : ""
                                  }`}
                                >
                                  <Award
                                    className="h-4 w-4 text-[#93457A]"
                                    aria-hidden="true"
                                  />
                                  <span>Credentials</span>
                                </div>
                                <p className="mt-3 text-xs font-light leading-6 text-[#4A4A4A]">
                                  {leader.education}
                                </p>
                              </div>
                              <div>
                                <div
                                  className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                    isReversed ? "lg:justify-end" : ""
                                  }`}
                                >
                                  <Building
                                    className="h-4 w-4 text-[#93457A]"
                                    aria-hidden="true"
                                  />
                                  <span>Advisory View</span>
                                </div>
                                <p className="mt-3 font-serif text-lg italic leading-snug text-[#93457A]">
                                  &ldquo;{leader.quote}&rdquo;
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
        className="border-y border-[#1A1A1A]/10 bg-white/45"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24">
          <SectionLabel>Philosophy</SectionLabel>
          <blockquote className="mx-auto mt-7 max-w-3xl font-serif text-3xl font-normal italic leading-tight sm:text-4xl">
            &ldquo;Institutional success is the product of calculated foresight
            and the relentless pursuit of operational excellence.&rdquo;
          </blockquote>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 text-left sm:grid-cols-2">
            <div className="border-t border-[#93457A]/30 pt-5">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Strategic Partnership
              </h3>
              <p className="mt-4 text-sm font-light leading-7 text-[#4A4A4A]">
                We align our objectives with your long-term vision, ensuring
                every intervention serves as a catalyst for sustainable value.
              </p>
            </div>
            <div className="border-t border-[#93457A]/30 pt-5">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Execution Capability
              </h3>
              <p className="mt-4 text-sm font-light leading-7 text-[#4A4A4A]">
                Strategy without execution is a liability. We pride ourselves on
                the meticulous delivery of complex transformations.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
        className="mx-auto max-w-7xl px-6 py-20 sm:py-24"
      >
        <div className="border border-[#1A1A1A]/10 bg-white p-8 text-center sm:p-12 lg:p-16">
          <h2 className="font-serif text-3xl font-normal leading-tight sm:text-4xl">
            Ready to transform your trajectory?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-[#4A4A4A]">
            Engage with our executive partners to discuss how Averti can
            engineer your organization&apos;s next phase of growth.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#93457A] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#7B3566]"
          >
            Connect for Strategic Consultation
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
