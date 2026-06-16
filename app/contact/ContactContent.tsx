"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, Mail, MapPin, Send, ShieldCheck, LucideIcon, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { motion, useReducedMotion, type Transition } from "motion/react";

type FormData = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type ContactDetail = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  detail: string;
  href?: string;
  external?: boolean;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
};

const contactDetails: ContactDetail[] = [
  {
    icon: MapPin,
    eyebrow: "Address",
    title: "2 Adepegba Street, Ilupeju",
    detail: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=2+Adepegba+Street+Ilupeju+Lagos",
  },
  {
    icon: Mail,
    eyebrow: "Email Address",
    title: "info@averti.com.ng",
    detail: "",
    href: "mailto:info@averti.com.ng",
  },
  {
    icon: Phone,
    eyebrow: "Phone Number",
    title: "08074620351",
    detail: "",
    href: "tel:+2348074620351",
  },
  {
    icon: Clock3,
    eyebrow: "Working Hours",
    title: "Monday — Friday · 09:00 — 17:00 WAT",
    detail: "",
    href: "",
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/averti-professional-mangers/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/avertipm?igsh=ZzRxZWk4YmJjdTRI/",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/avertipm?mibextid=wwXIfr",
  },
  
];

const interestOptions = [
  "Strategic Advisory Session",
  "Operational Integration",
  "Risk & Integrity Systems",
  "Technological Architecture",
  "2026 Whitepaper Request",
  "Other Board Inquiry",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function getPrefillFromUrl() {
  if (typeof window === "undefined") {
    return initialFormData;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const adviser = searchParams.get("adviser");
  const service = searchParams.get("service");
  const reading = searchParams.get("reading");
  const whitepaper = searchParams.get("interest");

  if (adviser) {
    return {
      ...initialFormData,
      interest: "Strategic Advisory Session",
      message: `I would like to request a strategic briefing with ${adviser}.`,
    };
  }

  if (service) {
    return {
      ...initialFormData,
      interest: service,
      message: `I am interested in learning more about your ${service} solutions.`,
    };
  }

  if (reading) {
    return {
      ...initialFormData,
      interest: "Research & Insights Discussion",
      message: `I read your article "${reading}" and would like to discuss its implications for my firm.`,
    };
  }

  if (whitepaper) {
    return {
      ...initialFormData,
      interest: "2026 Whitepaper Request",
      message:
        'Please send the full publication for "Bridging Legacy Autonomy with Intelligence".',
    };
  }

  return initialFormData;
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const fieldClass = "w-full border border-[#1A1A1A]/12 bg-[#FAF8F5]/50 px-4 py-3.5 text-sm text-[#1A1A1A] outline-none transition-all duration-300 placeholder:text-[#4A4A4A]/40 focus:border-[#93457A]/60 focus:bg-white focus:ring-4 focus:ring-[#93457A]/8 hover:border-[#1A1A1A]/25";

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setFormData((current) => ({
        ...current,
        ...getPrefillFromUrl(),
      }));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const updateField =
    (field: keyof FormData) =>
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const transition: Transition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A1A1A]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <motion.aside
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="lg:col-span-5"
        >
          <motion.div variants={reveal} transition={transition}>
            <h2 className="mt-5 max-w-sm font-serif text-3xl font-normal leading-tight sm:text-4xl">
              Have an inquiry? Send us a Message.
            </h2>
            <p className="mt-6 max-w-md text-sm font-light leading-7 text-[#4A4A4A]">
              Consultation requests are reviewed and sent back with the necessary informaton needed for the growth of your organization.
            </p>
          </motion.div>

          <div className="mt-12 divide-y divide-[#1A1A1A]/10 border-y border-[#1A1A1A]/10">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.eyebrow}
                  variants={reveal}
                  transition={transition}
                  whileHover={{ y: reduceMotion ? 0 : -3 }}
                  className="group grid grid-cols-[52px_1fr] gap-5 py-8 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#93457A]/15 bg-white text-[#93457A] transition-all duration-300 group-hover:border-[#93457A]/40 group-hover:bg-[#93457A]/5">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93457A]">
                      {item.eyebrow}
                    </h3>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="group/link mt-3 inline-flex items-center gap-2 font-serif text-xl leading-snug text-[#1A1A1A] transition-all duration-300 hover:text-[#93457A]"
                      >
                        <span className="border-b border-transparent transition-all duration-300 group-hover/link:border-[#93457A]/40">
                          {item.title}
                        </span>

                        <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:opacity-100">
                          →
                        </span>
                      </a>
                    ) : (
                      <p className="mt-3 font-serif text-xl leading-snug text-[#1A1A1A]">
                        {item.title}
                      </p>
                    )}

                    <p className="mt-2 text-sm font-light leading-6 text-[#4A4A4A]">
                      {item.detail}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-6 border border-[#1A1A1A]/10 bg-white p-6"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#93457A]">
              Connect
            </h3>
            <div className="mt-4 space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-[#1A1A1A]/8 pb-3 transition-colors duration-300 last:border-b-0 last:pb-0 hover:text-[#93457A]"
                  >
                    <span className="inline-flex items-center gap-3 text-sm font-medium text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#93457A]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#4A4A4A]">
                      View
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={transition}
            className="mt-10 border border-[#93457A]/15 bg-white/60 p-6"
          >
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#93457A]" />
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Confidentiality Assured
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                  Inquiry data and briefing content are handled with strict
                  discretion. NDAs are available before detailed operational
                  scoping.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.aside>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.16 }}
          transition={transition}
          className="lg:col-span-7"
        >
          <div className="border border-[#1A1A1A]/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-[#1A1A1A]/10 pb-7">
                  <h2 className="mt-4 text-[#93457A] font-serif text-xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                    Professional Inquiry
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field id="name" label="Full Name">
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={updateField("name")}
                      placeholder="Adewale Johnson"
                      className={fieldClass}
                    />
                  </Field>

                  <Field id="email" label="Professional Email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={updateField("email")}
                      placeholder="a.johnson@firm.com"
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field id="company" label="Organization">
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={updateField("company")}
                      placeholder="Enterprise Group Ltd."
                      className={fieldClass}
                    />
                  </Field>

                  <Field id="interest" label="Inquiry Type">
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={updateField("interest")}
                      className={`${fieldClass} appearance-none`}
                    >
                      <option value="">Select focus area</option>
                      {interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Message">
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={updateField("message")}
                    placeholder="Briefly outline your strategic objectives..."
                    className={`${fieldClass} resize-none leading-7`}
                  />
                </Field>

                <div className="flex flex-col gap-5 border-t border-[#1A1A1A]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-[#93457A] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#7B3566] disabled:cursor-not-allowed disabled:bg-[#4A4A4A]/45"
                  >
                    {isSubmitting ? (
                      <span>Validating Request...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  
                  
                </div>
              </form>
            ) : (
              <motion.div
                variants={reveal}
                initial="hidden"
                animate="show"
                transition={transition}
                className="flex min-h-[460px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#93457A]/10 text-[#93457A]">
                  <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                </div>
                <h2 className="mt-8 font-serif text-3xl font-normal">
                  Inquiry Scoped & Dispatched
                </h2>
                <p className="mt-4 max-w-md text-sm font-light leading-7 text-[#4A4A4A]">
                  Thank you,{" "}
                  <span className="font-semibold text-[#93457A]">
                    {formData.name}
                  </span>
                  . Your request has been securely routed. A senior advisory
                  partner will establish contact within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData(initialFormData);
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-[#93457A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#93457A] transition-all duration-300 hover:bg-[#93457A] hover:text-white"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      <motion.section
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        transition={transition}
        className="border-y border-[#1A1A1A]/10"
      >
        <div className="relative min-h-[360px] overflow-hidden bg-[#1A1A1A] sm:min-h-[460px]">
          <Image
            src="/images/hero-conference.png"
            alt="Quiet executive room prepared for confidential advisory discussion"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/35" />
        </div>
      </motion.section>
    </div>
  );
}
