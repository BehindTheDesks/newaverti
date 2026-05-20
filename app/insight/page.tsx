import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Analysis | Averti Consulting",
  description: "Read Averti's high-stakes thought leadership articles, geopolitical research, and systemic market analysis.",
};

export default function InsightPage() {
  const articles = [
    {
      category: "Macro Strategy",
      date: "May 2026",
      readTime: "7 min read",
      title: "Systemic Resilience in High-Volatility Interest Ecosystems",
      summary: "An analytical breakdown of enterprise capital allocation strategies during periods of rapid regulatory adjustment and sovereign shift.",
      author: "Bukki Orekoya",
    },
    {
      category: "Tech Sovereignty",
      date: "April 2026",
      readTime: "9 min read",
      title: "Zero-Trust Infrastructures: Transitioning Beyond Perimeter Defenses",
      summary: "How modern enterprise conglomerates are re-architecting their databases and network integrity to prepare for sovereign artificial intelligence mandates.",
      author: "Inyang Sami-Orungbe",
    },
    {
      category: "Corporate Structure",
      date: "March 2026",
      readTime: "6 min read",
      title: "Antitrust Posturing: Designing Mergers for Regulatory Smoothness",
      summary: "An exploration of predictive compliance blueprints that allow international organizations to navigate antitrust oversight without losing momentum.",
      author: "Cecilia Osoka",
    },
    {
      category: "Supply Chain",
      date: "February 2026",
      readTime: "8 min read",
      title: "Resilient Logistics: Supply Chain Redundancy vs Cost Minimization",
      summary: "An empirical look at why hyper-efficient single-source supply structures fail under micro-geopolitical friction, and how to construct sustainable buffers.",
      author: "Cecilia Osoka",
    },
    {
      category: "Capital Markets",
      date: "January 2026",
      readTime: "5 min read",
      title: "Restructuring Under Distress: Operational Leverage Playbooks",
      summary: "Practical board-level methodologies to quickly compress operational overhead and release capital without damaging primary asset operations.",
      author: "Bukki Orekoya",
    },
    {
      category: "Machine Intelligence",
      date: "December 2025",
      readTime: "11 min read",
      title: "The LLM Integration Fallacy: Avoiding Superficial Tech Layers",
      summary: "Why deploying off-the-shelf generative models without custom vector integrity and deep database connections creates organizational vulnerability.",
      author: "Inyang Sami-Orungbe",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Header Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93457A]">
            Our Research
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
            Thought leadership built on{" "}
            <span className="italic font-light text-[#93457A]">
              rigorous precision
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-light">
            Averti's insights represent intensive analyses of emerging micro-risks, organizational challenges, and systems design. We research structural movements before they affect client bottom lines.
          </p>
        </section>

        {/* Featured Editorial Post */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#93457A]">
              <span>Featured Intelligence Report</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#4A4A4A]">15 min read</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] leading-tight">
              Bridging Legacy Autonomy with Intelligence: The 2026 Enterprise Blueprint
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-light">
              Our comprehensive annual whitepaper outlines the structural convergence of global operations, decentralized financial safeguards, and machine intelligence pipelines. We outline a seven-phase architecture designed to secure institutional asset value over the next five years.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#1A1A1A]">
              Co-Authored by the Averti Principal Directors
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <Link 
              href="/contact?interest=2026-Whitepaper"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#93457A] hover:bg-[#7B3566] transition-all duration-300 text-center"
            >
              Request full publication
              <BookOpen className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-normal">
              Executive Briefings & Analyses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <article 
                key={idx} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#93457A]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Article Metadata */}
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#93457A]">
                    <span>{article.category}</span>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title and Summary */}
                  <h3 className="text-lg font-serif font-medium text-[#1A1A1A] leading-snug hover:text-[#93457A] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-[#4A4A4A] leading-relaxed font-light">
                    {article.summary}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#4A4A4A]">
                    By {article.author}
                  </span>
                  
                  <Link 
                    href={`/contact?reading=${encodeURIComponent(article.title)}`}
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#93457A] hover:text-[#7B3566]"
                  >
                    Discuss article
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
