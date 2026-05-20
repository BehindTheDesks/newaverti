"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill from URL params (e.g. adviser, service, reading selection)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const adviser = searchParams.get("adviser");
      const service = searchParams.get("service");
      const reading = searchParams.get("reading");
      const whitepaper = searchParams.get("interest");

      let prefilledMsg = "";
      let prefilledInterest = "";

      if (adviser) {
        prefilledInterest = "Strategic Advisory Session";
        prefilledMsg = `I would like to request a strategic briefing with ${adviser}.`;
      } else if (service) {
        prefilledInterest = service;
        prefilledMsg = `I am interested in learning more about your ${service} solutions.`;
      } else if (reading) {
        prefilledInterest = "Research & Insights Discussion";
        prefilledMsg = `I read your article "${reading}" and would like to discuss its implications for my firm.`;
      } else if (whitepaper) {
        prefilledInterest = "2026 Whitepaper Request";
        prefilledMsg = `Please send the full publication for "Bridging Legacy Autonomy with Intelligence".`;
      }

      setFormData((prev) => ({
        ...prev,
        interest: prefilledInterest || prev.interest,
        message: prefilledMsg || prev.message,
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full bg-[#FAF8F5] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Intro Hero Section */}
        <section className="space-y-6 max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#93457A]">
            Initiate Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight font-serif text-[#1A1A1A]">
            Request a strategic{" "}
            <span className="italic font-light text-[#93457A]">
              boardroom briefing
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed font-light">
            We value privacy and focus. All consultation requests are processed through secure protocols and routed directly to our senior advisory partners.
          </p>
        </section>

        {/* Contact Layout Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Informational Column (Left Side) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-2xl font-serif text-[#1A1A1A]">
                Direct Contacts & HQ
              </h2>

              <div className="space-y-6">
                {/* Headquarters card */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#93457A]/5 text-[#93457A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Main Board Office
                    </h3>
                    <p className="text-sm text-[#4A4A4A] font-light leading-relaxed">
                      15 Kingsway Road, Ikoyi,<br /> Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Email card */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#93457A]/5 text-[#93457A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Advisory Routing
                    </h3>
                    <p className="text-sm text-[#4A4A4A] font-light">
                      briefings@averti.com
                    </p>
                  </div>
                </div>

                {/* Phone card */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#93457A]/5 text-[#93457A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Institutional Relations
                    </h3>
                    <p className="text-sm text-[#4A4A4A] font-light">
                      +234 (1) 460-9110
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy notice bar */}
            <div className="p-6 bg-white border border-[#93457A]/10 rounded-xl space-y-2 flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 text-[#93457A] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Confidentiality Assured
                </h4>
                <p className="text-[11px] text-[#4A4A4A] leading-relaxed font-light">
                  Averti maintains absolute zero-sharing policies regarding inquiry data and briefing content. Non-Disclosure Agreements (NDAs) are provided proactively prior to detailed operations scoping sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column (Right Side) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] border-b border-gray-100 pb-4">
                    Inquiry Details
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="name" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                      >
                        Your Name
                      </label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Adewale Johnson"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#93457A] transition-all bg-gray-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                      >
                        Business Email
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="e.g. a.johnson@firm.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#93457A] transition-all bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="company" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                      >
                        Company / Institution
                      </label>
                      <input 
                        id="company"
                        type="text" 
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="e.g. Enterprise Group Ltd"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#93457A] transition-all bg-gray-50/50"
                      />
                    </div>

                    {/* Interest / Practice Area */}
                    <div className="space-y-2">
                      <label 
                        htmlFor="interest" 
                        className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                      >
                        Practice Interest
                      </label>
                      <select
                        id="interest"
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#93457A] transition-all bg-gray-50/50 appearance-none"
                      >
                        <option value="">Select Focus Area</option>
                        <option value="Strategic Advisory Session">Strategic Advisory Session</option>
                        <option value="Operational Integration">Operational Integration</option>
                        <option value="Risk & Integrity Systems">Risk & Integrity Systems</option>
                        <option value="Technological Architecture">Technological Architecture</option>
                        <option value="2026 Whitepaper Request">2026 Whitepaper Request</option>
                        <option value="Other Board Inquiry">Other Board Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A]"
                    >
                      Briefing Scoping / Request
                    </label>
                    <textarea 
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Outline your primary strategic challenge or request details..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#93457A] transition-all bg-gray-50/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#93457A] hover:bg-[#7B3566] disabled:bg-gray-400 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Validating Security Scopes...</span>
                    ) : (
                      <>
                        <span>Submit Private Scoping Request</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-[fadeIn_0.5s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif text-[#1A1A1A] font-medium">
                      Inquiry Scoped & Dispatched
                    </h2>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-sm font-light">
                      Thank you, <span className="font-semibold text-brand-purple">{formData.name}</span>. Your request has been securely routed. A senior advisory partner will establish contact within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        interest: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide text-[#93457A] border border-[#93457A] hover:bg-[#93457A] hover:text-white transition-all duration-300"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
