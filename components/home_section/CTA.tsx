"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-[fadeIn_1s_ease-out]">
        
        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight font-serif text-[#1A1A1A]">
            Private conversation with out Team
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-xl mx-auto">
            Schedule a private consultation with our principal partners to discuss
            your organization&apos;s requirements.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center text-base justify-center px-10 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-white bg-[#93457A] hover:bg-[#7B3566] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Initiate Dialogue
          </Link>
        </div>

      </div>
    </section>
  );
}
