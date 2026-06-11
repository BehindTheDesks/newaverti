import Hero from "@/components/home_section/Hero";
import InnovationGrid from "@/components/home_section/InnovationGrid";
import SuccessMetrics from "@/components/home_section/SuccessMetrics";
import Team from "@/components/home_section/Team";
import CTA from "@/components/home_section/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* REPLACE WITH VISION AND MISSON ALONGSIDE CORE VALUES */}
      <InnovationGrid />
      <SuccessMetrics />
      <Team />
      <CTA />
    </>
  );
}


