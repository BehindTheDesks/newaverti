"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Insight", href: "/insight" },
    { name: "Contact", href: "/contact" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-brand-purple border-b border-[#93457A]/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-90 duration-300"
          >
            <Image
              src="/images/averti_logo_new.png"
              alt="Averti Consulting Logo"
              width={130}
              height={30}
              priority
              style={{ height: "auto" }}
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-sm md:text-lg font-medium transition-all duration-200 relative py-1 ${
                    active 
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FAF8F5] after:rounded-full" 
                      : "text-[#FAF8F5]/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide text-[#93457A] bg-[#FAF8F5] hover:text-white hover:bg-brand-purple transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book A Consultation
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-full text-[#FAF8F5] hover:bg-white/10 active:scale-95 transition-all duration-200"
              aria-label="Open Menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Drawer (Sliding Sidebar) */}
      <aside 
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#93457a] shadow-2xl flex flex-col p-8 md:hidden transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-90 duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/averti_logo_new.png"
              alt="Averti Consulting Logo"
              width={120}
              height={30}
              style={{ height: "auto" }}
              className="h-7 w-auto object-contain rounded-md"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-full text-[#FAF8F5] hover:bg-white/10 active:scale-95 transition-all duration-200"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col space-y-6 flex-grow">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-xl font-medium font-serif flex items-center justify-between group transition-all duration-200 ${
                  active 
                    ? "text-white translate-x-2" 
                    : "text-[#FAF8F5]/80 hover:text-white hover:translate-x-2"
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className={`w-4 h-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${active ? "opacity-100" : ""}`} />
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-[#93457A] bg-[#FAF8F5] hover:text-white hover:bg-brand-purple transition-all duration-300"
          >
            Book A Consultation
          </Link>
        </div>
      </aside>
    </>
  );
}
