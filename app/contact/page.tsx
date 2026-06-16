import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Our Advisors | Corporate Inquiries",
  description:
    "Initiate a confidential strategic dialogue with Averti's senior advisory partners. Request consultation sessions, operational integration scoping, or Board inquiries.",
  alternates: {
    canonical: "https://averti.com.ng/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
