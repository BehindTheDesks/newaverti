import type { Metadata } from "next";
import Hero from "@/components/home_section/Hero";
import InnovationGrid from "@/components/home_section/InnovationGrid";
import SuccessMetrics from "@/components/home_section/SuccessMetrics";
import Team from "@/components/home_section/Team";
import CTA from "@/components/home_section/CTA";

export const metadata: Metadata = {
  title: "Averti Professional Managers | Executive Advisory & Strategy",
  description:
    "Averti Professional Managers provides premium advisory, strategic management, and technical solutions for high-stakes enterprise growth and long-term resilience.",
  alternates: {
    canonical: "https://averti.com.ng",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <InnovationGrid />
      <SuccessMetrics />
      <Team />
      <CTA />
    </>
  );
}


