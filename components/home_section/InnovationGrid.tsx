"use client";

import { motion } from "motion/react";

interface PrincipleItemProps {
  number: string;
  title: string;
  description: string;
}

function PrincipleItem({ number, title, description }: PrincipleItemProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#93457A]">
          {number}
        </span>

        <span className="text-xs font-semibold tracking-[0.25em] text-[#1A1A1A]">
          {title}
        </span>
      </div>

      <p className="text-base leading-relaxed text-[#4A4A4A]">
        {description}
      </p>
    </motion.div>
  );
}

export default function InnovationGrid() {
  return (
    <section id="expertise" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-2xl p- md:p-5 border border-[#1A1A1A]/5 shadow-sm flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight font-serif text-[#1A1A1A]">
              Structured Expertise. Measurable Execution.
            </h2>

            <p className="text-base leading-relaxed text-[#4A4A4A]">
              Averti Professional Managers operates across audit, financial advisory, taxation, process management and human capital development — delivering practical solutions grounded in industry experience and regulatory understanding.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
            >

              <PrincipleItem
                number="01"
                title="Audit & Assurance Discipline"
                description="We strengthen financial reliability through statutory audits, internal control reviews, forensic investigations and risk assessments aligned with international standards."
              />

              <PrincipleItem
                number="02"
                title="Financial & Tax Advisory"
                description="We support organizations with valuation, restructuring, tax planning, compliance and capital advisory across complex operating environments."
              />

              <PrincipleItem
                number="03"
                title="Process & Systems Optimization"
                description="We improve operational efficiency through process mapping, business re-engineering, systems reviews and implementation of structured controls."
              />

              <PrincipleItem
                number="04"
                title="Human Capital & Capacity Building"
                description="We design and deliver training, organizational development and workforce optimization programs that align talent with business objectives."
              />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}