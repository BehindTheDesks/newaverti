"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-10"
        >
          <div className="space-y-4">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-[#93457A]">
              The Future of Enterprise
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
              Strategic Advisory for{" "}
              <span className=" font-semibold text-[#93457A]">
                Business Growth
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A4A4A] max-w-xl">
            Averti Professional Managers partners with organizations to deliver practical solutions across auditing, accountancy services, taxation, financial management,  reporting accountants, human capital development, training and consultancy services.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#93457A] hover:bg-[#7B3566] transition-all duration-300"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-[#1A1A1A] bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/20 group">
            <Image
              src="/images/averti_team.jpeg"
              alt="Averti Professional Managers"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}