"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF8F5]/80 border-b border-[#582C83]/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-serif hover:text-[#582C83] transition-colors duration-300"
        >
          Averti
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <Link 
            href="#services" 
            className="text-sm font-medium text-[#4A4A4A] hover:text-[#582C83] transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            href="#expertise" 
            className="text-sm font-medium text-[#4A4A4A] hover:text-[#582C83] transition-colors duration-200"
          >
            Expertise
          </Link>
          <Link 
            href="#team" 
            className="text-sm font-medium text-[#4A4A4A] hover:text-[#582C83] transition-colors duration-200"
          >
            Team
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium text-[#4A4A4A] hover:text-[#582C83] transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#582C83] hover:bg-[#481D73] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Book A Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
