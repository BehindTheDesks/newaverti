import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Leadership & Senior Advisory Partners | Team",
  description:
    "Meet the senior partners, enterprise architects, and advisory consultants steering Averti's high-stakes corporate consulting frameworks.",
  alternates: {
    canonical: "https://averti.com.ng/team",
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
