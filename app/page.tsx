import Hero from "@/components/home_section/Hero";
import RefinedStrategies from "@/components/home_section/RefinedStrategies";
import InnovationGrid from "@/components/home_section/InnovationGrid";
import SuccessMetrics from "@/components/home_section/SuccessMetrics";
import Team from "@/components/home_section/Team";
import CTA from "@/components/home_section/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      {/* REPLACE WITH VISION AND MISSON ALONGSIDE CORE VALUES */}
      {/* <RefinedStrategies /> */}
      <InnovationGrid />
      <SuccessMetrics />
      <Team />
      <CTA />
    </>
  );
}


