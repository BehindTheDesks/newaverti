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
                width={140}
                height={36}
                style={{ height: "auto" }}
                className="h-9 w-auto object-contain"
              />
            </Link>
            
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            
            {/* Consulting */}
            <div className="space-y-4">
              <h5 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#93457A]">
                AVERTI
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/services" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/team" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Core Team
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h5 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#93457A]">
                Connect
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://www.linkedin.com/company/averti-professional-managers/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.instagram.com/avertipm?igsh=ZzRxZWk4YmJjdTRI/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.facebook.com/share/1Cwu1P3zay/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-[#93457A] hover:text-[#93457A] transition-colors duration-200"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[#93457A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-sm text-[#93457A]">
          <p>© 2026 Averti Professional Managers. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
