import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://averti.com.ng"),
  title: {
    default: "Averti Professional Managers | Premium Advisory & Consulting",
    template: "%s | Averti Professional Managers",
  },
  description:
    "Averti Professional Managers provides high-stakes consulting, strategic management, and resilient technological architectures to steer global enterprises toward long-term growth.",
  keywords: [
    "executive consulting",
    "management consulting",
    "business advisory",
    "corporate strategy",
    "operational excellence",
    "risk management",
    "financial advisory",
    "Averti Professional Managers",
    "Lagos Nigeria",
  ],
  openGraph: {
    title: "Averti Professional Managers | Premium Advisory & Consulting",
    description:
      "Averti provides high-stakes consulting that bridges traditional authority with modern efficiency. We design resilient architectures for tomorrow's market leaders.",
    url: "https://averti.com.ng",
    siteName: "Averti Professional Managers",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/averti_homepage.jpeg",
        width: 1200,
        height: 630,
        alt: "Averti Professional Managers - Strategic Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Averti Professional Managers | Premium Advisory & Consulting",
    description:
      "Averti provides high-stakes consulting that bridges traditional authority with modern efficiency. We design resilient architectures for tomorrow's market leaders.",
    images: ["/images/averti_homepage.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1A1A1A] font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


