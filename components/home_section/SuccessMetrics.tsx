"use client";

export default function SuccessMetrics() {
  return (
    <section id="impact" className="w-full py-16 lg:py-20 bg-[#4C2A75] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]/60 block">
              Metrics of Success
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight font-serif text-white max-w-xl">
              Delivering tangible growth in an intangible world.
            </h2>
          </div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif tracking-tight text-white block">
                $4.2B
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF8F5]/60 block">
                Assets Optimized
              </span>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif tracking-tight text-white block">
                30%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF8F5]/60 block">
                Efficiency Gain
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
