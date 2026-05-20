"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  return (
    <div className="group space-y-4">
      {/* Portrait Image Container */}
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md border border-gray-100 bg-[#FAF8F5]">
        <Image
          src={imageSrc}
          alt={`Professional studio headshot of ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft elegant gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" /> */}
      </div>

      {/* Name and Designation */}
      <div className="space-y-1 pl-1">
        <h4 className="text-lg font-medium tracking-tight text-[#1A1A1A] font-serif">
          {name}
        </h4>
        <p className="text-[10px] font-bold tracking-wider uppercase text-[#93457A]">
          {role}
        </p>
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
          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight font-serif text-[#1A1A1A]">
            The Averti Collective
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
            Our partners bring decades of institutional knowledge from the
            world&apos;s leading financial and tech firms.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Bukki Orekoya"
            role="Management & Financial Consultant"
            imageSrc="/images/bukki_orekoya.jpeg"
          />
          <TeamMember
            name="Cecilia Osoka"
            role="Head of Strategy"
            imageSrc="/images/cecilia_osoka.jpeg"
          />
          <TeamMember
            name="Inyang Sami-Orungbe"
            role="Tech Architecture"
            imageSrc="/images/inyang_sami_orungbe.jpeg"
          />
        </div>

      </div>
    </section>
  );
}
