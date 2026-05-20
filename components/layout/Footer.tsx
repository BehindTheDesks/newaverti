"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#582C83]  border-[#582C83]/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight text-[#FAF8F5] font-serif hover:text-[#582C83] transition-colors duration-300"
            >
              Averti
            </Link>
            <p className="text-xs leading-relaxed text-[#FAF8F5] max-w-sm">
              Pioneering tomorrow&apos;s business standards through rigorous
              precision and innovative strategy.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-items-end">
            
            {/* Consulting */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]">
                Consulting
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="#privacy" 
                    className="text-xs text-[#FAF8F5] hover:text-[#582C83] transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#terms" 
                    className="text-xs text-[#FAF8F5] hover:text-[#582C83] transition-colors duration-200"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]">
                Connect
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#FAF8F5] hover:text-[#582C83] transition-colors duration-200"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#insights" 
                    className="text-xs text-[#FAF8F5] hover:text-[#582C83] transition-colors duration-200"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#FAF8F5]">
          <p>© 2026 Averti Consulting. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
