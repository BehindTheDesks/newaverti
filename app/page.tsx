import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home_section/Hero";
import RefinedStrategies from "@/components/home_section/RefinedStrategies";
import InnovationGrid from "@/components/home_section/InnovationGrid";
import SuccessMetrics from "@/components/home_section/SuccessMetrics";
import Team from "@/components/home_section/Team";
import CTA from "@/components/home_section/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">


      <main className="flex-grow">
        <Hero />

        <RefinedStrategies />

        <InnovationGrid />

        <SuccessMetrics />

        <Team />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

