
import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Our Firm | Executive Advisory & Strategy",
  description:
    "Discover our heritage, core principles, and the high-stakes advisory framework that steers global enterprises toward long-term resilience and market leadership.",
  alternates: {
    canonical: "https://averti.com.ng/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}