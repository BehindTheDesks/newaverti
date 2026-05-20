import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Averti Consulting",
  description:
    "Explore our strategic advisory services, operational integration solutions, and technological architectures designed to secure enterprise leadership.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
