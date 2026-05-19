import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RefinedStrategies from "@/components/RefinedStrategies";
import InnovationGrid from "@/components/InnovationGrid";
import SuccessMetrics from "@/components/SuccessMetrics";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: STICKY NAVIGATION BAR WITH GLASSMORPHISM                      */}
      {/* ========================================================================= */}
      <Navbar />

      <main className="flex-grow">
        {/* ========================================================================= */}
        {/* SECTION 2: HERO BANNER, INTRO COPY & RETAINER STATS CARD                  */}
        {/* ========================================================================= */}
        <Hero />

        {/* ========================================================================= */}
        {/* SECTION 3: REFINED STRATEGIES (CORE SPECIALTIES WITH CUSTOM SVG ICONS)    */}
        {/* ========================================================================= */}
        <RefinedStrategies />

        {/* ========================================================================= */}
        {/* SECTION 4: INNOVATION PRINCIPLES & C-SUITE grid PRINCIPLES                */}
        {/* ========================================================================= */}
        <InnovationGrid />

        {/* ========================================================================= */}
        {/* SECTION 5: SUCCESS METRICS BANNER (DARK BRAND ACCENT BLOCK)                */}
        {/* ========================================================================= */}
        <SuccessMetrics />

        {/* ========================================================================= */}
        {/* SECTION 6: THE AVERTI COLLECTIVE (EXECUTIVE MANAGEMENT PORTRAITS)         */}
        {/* ========================================================================= */}
        <Team />

        {/* ========================================================================= */}
        {/* SECTION 7: CALL TO ACTION (CONSULTATION DIALOGUE TRIGGER)                 */}
        {/* ========================================================================= */}
        <CTA />
      </main>

      {/* ========================================================================= */}
      {/* SECTION 8: BRAND FOOTER & INFORMATION DIRECTORY                            */}
      {/* ========================================================================= */}
      <Footer />
    </div>
  );
}

