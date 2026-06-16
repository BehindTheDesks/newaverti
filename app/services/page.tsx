import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Strategic Advisory & Operational Solutions | Services",
  description:
    "Explore our strategic advisory services, operational integration solutions, and technological architectures designed to secure enterprise leadership and market prominence.",
  alternates: {
    canonical: "https://averti.com.ng/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
