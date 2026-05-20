import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Our Team | Averti Consulting",
  description:
    "Meet the senior partners and enterprise architects behind Averti's high-stakes consulting framework.",
};

export default function TeamPage() {
  return <TeamContent />;
}
