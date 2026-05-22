"use client";

import { motion } from "motion/react";

const metrics = [
  {
    value: "120+",
    label: "Years of Combined Experience",
  },
  {
    value: "8",
    label: "Core Advisory Service Areas",
  },
  {
    value: "Multi-Sector",
    label: "Industry Experience Across Nigeria",
  },
  {
    value: "End-to-End",
    label: "Strategic & Operational Support",
  },
];

export default function SuccessMetrics() {
  return (
    <section
      id="impact"
      className="w-full py-20 lg:py-24 bg-[#93457A] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 block">
              Why Organizations Choose Averti
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight text-white max-w-lg">
              Experience grounded in execution and institutional understanding.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-white/75 max-w-md">
              We support organizations with practical advisory solutions across finance, governance, operations, compliance, and human capital management.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">

              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="space-y-3 border-l border-white/15 pl-5"
                >
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white">
                    {metric.value}
                  </span>

                  <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 leading-relaxed">
                    {metric.label}
                  </span>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}