"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content Side */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-12 animate-[fadeIn_1s_ease-out]">
          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#582C83]">
              The Future of Enterprise
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
              Future-Proofing Your Business Through{" "}
              <span className="italic font-light text-[#582C83] relative inline-block">
                Strategic Precision
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] max-w-xl font-normal">
            Averti provides high-stakes consulting that bridges traditional
            authority with modern efficiency. We design resilient architectures
            for tomorrow&apos;s market leaders.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#expertise"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-[#582C83] hover:bg-[#481D73] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Our expertise
            </Link>
            <Link
              href="#impact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[#1A1A1A] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Client impact
            </Link>
          </div>
        </div>

        {/* Right Graphic/Media Side */}
        <div className="lg:col-span-6 relative animate-[fadeIn_1.2s_ease-out]">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Dark Conference Room Rendering */}
            <Image
              src="/images/averti_team.jpeg"
              alt="Luxury Dark Executive Conference Room"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Accent overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Metric Card Overlay */}
          <div className="absolute -bottom-6 left-6 sm:left-12 bg-white/95 backdrop-blur-md px-8 py-6 rounded-xl shadow-xl border border-gray-100 flex flex-col justify-center animate-[slideUp_0.8s_ease-out_delay-300ms]">
            <span className="text-3xl sm:text-4xl font-bold font-serif text-[#582C83] leading-none mb-1">
              94%
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#4A4A4A] uppercase leading-none">
              Client Retention Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
