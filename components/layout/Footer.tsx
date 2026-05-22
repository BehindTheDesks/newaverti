"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#93457A]/5  border-[#93457A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <Link 
              href="/" 
              className="inline-block transition-opacity hover:opacity-90 duration-300"
            >
              <Image
                src="/images/averti_logo.png"
                alt="Averti Consulting Logo"
                width={120}
                height={36}
                style={{ height: "auto" }}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed text-[#93457A] max-w-sm">
              Pioneering tomorrow&apos;s business standards through rigorous
              precision and innovative strategy.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            
            {/* Consulting */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#93457A]">
                Consulting
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="#privacy" 
                    className="text-xs text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#terms" 
                    className="text-xs text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#93457A]">
                Connect
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#insights" 
                    className="text-xs text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#93457A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#93457A]">
          <p>© 2026 Averti Consulting. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
