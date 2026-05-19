"use client";

import Link from "next/link";

interface StrategyCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function StrategyCard({ title, description, href, icon }: StrategyCardProps) {
  return (
    <div className="group relative bg-[#FAF8F5]/40 hover:bg-white rounded-2xl p-8 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full transform hover:-translate-y-1">
      <div className="space-y-6">
        {/* Icon Container */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#582C83]/5 text-[#582C83] group-hover:bg-[#582C83] group-hover:text-white transition-all duration-500">
          {icon}
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight text-[#1A1A1A]">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#4A4A4A]">
            {description}
          </p>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="pt-6">
        <Link
          href={href}
          className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-[#582C83] hover:text-[#481D73] transition-all duration-300 group/link"
        >
          Learn More
          <svg
            className="ml-2 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function RefinedStrategies() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="flex items-start gap-5 border-l-2 border-[#582C83] pl-6 max-w-2xl">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight font-serif text-[#1A1A1A]">
              Refined Strategies
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
              Our specialities are designed to address complexity with surgical clarity.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Strategic Intelligence */}
          <StrategyCard
            title="Strategic Intelligence"
            description="Navigating market volatility with predictive modeling and deep industry insights."
            href="#strategic-intelligence"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                {/* Custom SVG: Line graph going up-right with nodes */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 18h18M6 15l4-4 4 4 6-6"
                />
                <circle cx="6" cy="15" r="1.5" fill="currentColor" />
                <circle cx="10" cy="11" r="1.5" fill="currentColor" />
                <circle cx="14" cy="15" r="1.5" fill="currentColor" />
                <circle cx="20" cy="9" r="1.5" fill="currentColor" />
              </svg>
            }
          />

          {/* Digital Resiliency */}
          <StrategyCard
            title="Digital Resiliency"
            description="Building enterprise architectures that scale with technological acceleration."
            href="#digital-resiliency"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                {/* Custom SVG: Caliper / Drawing compass */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v4m0 0a4 4 0 100 8m0-8a4 4 0 110 8m-4-4h8M9 20l3-5 3 5"
                />
              </svg>
            }
          />

          {/* Capital Optimization */}
          <StrategyCard
            title="Capital Optimization"
            description="Maximizing shareholder value through rigorous fiscal governance and efficiency."
            href="#capital-optimization"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                {/* Custom SVG: Vertical opposing arrows */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7l4-4m0 0l4 4m-4-4v18M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
