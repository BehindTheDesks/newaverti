"use client";

interface PrincipleItemProps {
  number: string;
  title: string;
  description: string;
}

function PrincipleItem({ number, title, description }: PrincipleItemProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#582C83]">
          {number}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
          {title}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[#4A4A4A]">
        {description}
      </p>
    </div>
  );
}

export default function InnovationGrid() {
  return (
    <section id="expertise" className="w-full py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column Accent Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-10 md:p-12 border border-gray-100 shadow-sm flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-normal leading-tight font-serif text-[#1A1A1A]">
              Innovation is our baseline.
            </h2>
            <p className="text-base leading-relaxed text-[#4A4A4A] font-normal">
              We don&apos;t just solve problems; we redefine the parameters of
              success for a digital-first global economy.
            </p>
          </div>

          {/* Right Column 2x2 Principles Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              <PrincipleItem
                number="01"
                title="Precision Execution"
                description="Rigorous project management that ensures timelines are met with uncompromising quality."
              />
              <PrincipleItem
                number="02"
                title="Data Integrity"
                description="Decisions driven by advanced analytics and verified real-time global market data."
              />
              <PrincipleItem
                number="03"
                title="Executive Focus"
                description="High-level partnership designed specifically for the needs of C-suite leadership."
              />
              <PrincipleItem
                number="04"
                title="Ethical Modernity"
                description="Aligning profit with purpose through sustainable and responsible consulting frameworks."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
