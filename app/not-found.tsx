import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF8F5] px-6 text-[#1A1A1A]">
      <div className="max-w-2xl text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93457A]">
          Page Not Found
        </span>

        <h1 className="mt-6 font-serif text-5xl font-normal leading-tight sm:text-6xl">
          The page you&apos;re looking for does not exist.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-8 text-[#4A4A4A] sm:text-lg">
          The requested page may have been moved, renamed, or is currently
          unavailable. Return to the main experience to continue exploring
          Averti&apos;s advisory capabilities and institutional expertise.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#93457A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#7B3566]"
          >
            Return Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/15 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-all duration-300 hover:border-[#93457A]/40 hover:text-[#93457A]"
          >
            Contact Averti
          </Link>
        </div>
      </div>
    </div>
  );
}