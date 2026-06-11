"use client";

import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  imageSrc: string;
  href: string;
}

function TeamMember({ name, imageSrc, href }: TeamMemberProps) {
  return (
    <div className="group space-y-4">
      {/* Portrait Image Container */}
      <Link
        href={href}
        className="relative block aspect-[3/4] overflow-hidden rounded-xl border border-gray-100 bg-[#FAF8F5] shadow-md"
        aria-label={`View ${name}'s profile`}
      >
        <Image
          src={imageSrc}
          alt={`Professional studio headshot of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Name and Designation */}
      <div className="space-y-1 pl-1 flex flex-col items-center">
        <h4 className="text-2xl sm:text-3xl font-center font-medium tracking-tight text-[#1A1A1A] font-serif">
          {name}
        </h4>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-wide font-serif text-[#1A1A1A]">
            AVERTI {" "} FOUNDING {" "} PARTNERS
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Inyang Sami-Orungbe"
            imageSrc="/images/inyang_sami_orungbe.jpeg"
            href="/team#inyang-sami-orungbe"
          />
          <TeamMember
            name="Bukki Orekoya"
            imageSrc="/images/bukki_orekoya.jpeg"
            href="/team#bukki-orekoya"
          />
          <TeamMember
            name="Cecilia Osoka"
            imageSrc="/images/cecilia_osoka.jpeg"
            href="/team#cecilia-osoka"
          />
        </div>

      </div>
    </section>
  );
}
