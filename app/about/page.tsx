
import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Averti Consulting",
  description:
    "Discover our heritage, core principles and the high-stakes advisory framework that steers global enterprises toward long-term resilience.",
};

export default function AboutPage() {
  return <AboutContent />;
}