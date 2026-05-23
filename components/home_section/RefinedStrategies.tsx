"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface StrategyCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function StrategyCard({ title, description, href, icon }: StrategyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#FAF8F5]/40 hover:bg-white rounded-2xl p-8 border border-[#1A1A1A]/5 hover:border-[#1A1A1A]/15 hover:shadow-sm transition-all duration-500 flex flex-col justify-between h-full"
    >
      <div className="space-y-6">
        {/* Icon */}
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#93457A]/5 text-[#93457A] group-hover:bg-[#93457A]/10 transition-all duration-300">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-tight text-[#1A1A1A]">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-[#4A4A4A]">
            {description}
          </p>
        </div>
      </div>

      {/* Link */}
      {/* <div className="pt-7">
        <Link
          href={href}
          className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-[#93457A] group/link"
        >
          <span className="border-b border-transparent group-hover/link:border-[#93457A]/40 transition-all duration-300">
            Explore
          </span>

          <svg
            className="ml-2 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div> */}
    </motion.div>
  );
}

export default function RefinedStrategies() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div className="max-w-2xl space-y-3 border-l border-[#93457A] pl-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#1A1A1A]">
            Refined Strategies
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#4A4A4A] leading-relaxed">
            Our specialties are designed to address complexity with clarity, structure and execution discipline.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StrategyCard
            title="Strategic Intelligence"
            description="Navigating market volatility with predictive modeling and deep industry insight."
            href="#strategic-intelligence"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M6 15l4-4 4 4 6-6" />
                <circle cx="6" cy="15" r="1.5" fill="currentColor" />
                <circle cx="10" cy="11" r="1.5" fill="currentColor" />
                <circle cx="14" cy="15" r="1.5" fill="currentColor" />
                <circle cx="20" cy="9" r="1.5" fill="currentColor" />
              </svg>
            }
          />

          <StrategyCard
            title="Digital Resiliency"
            description="Designing enterprise systems that scale with technological acceleration."
            href="#digital-resiliency"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 0a4 4 0 100 8m0-8a4 4 0 110 8m-4-4h8M9 20l3-5 3 5" />
              </svg>
            }
          />

          <StrategyCard
            title="Capital Optimization"
            description="Improving enterprise value through disciplined financial governance and efficiency."
            href="#capital-optimization"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}