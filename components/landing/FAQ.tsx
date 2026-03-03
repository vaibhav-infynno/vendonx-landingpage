"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export const faqs = [
  { q: "What is VendoNX?", a: "VendoNX is a mobile app designed specifically for Indian service technicians to manage customers, AMC plans, invoices, and earnings directly from their smartphone. It replaces paper-based work with a smart, simple digital system." },
  { q: "Who can use VendoNX?", a: "VendoNX is built for all local service providers including RO technicians, AC repair experts, electricians, cleaners, mechanics, plumbers, and any home service vendor who wants to manage their business better." },
  { q: "Is VendoNX available in Hindi and Gujarati?", a: "Yes. VendoNX fully supports three languages — English, Hindi, and Gujarati — so you can use the app comfortably in your preferred language." },
  { q: "Is VendoNX free to download?", a: "Yes, VendoNX is completely free to download and get started. No credit card required. You can manage your customers, AMC, and invoices at zero cost during our launch period." },
  { q: "Does VendoNX work offline?", a: "Yes. VendoNX works without an internet connection. You can record visits, create invoices, and manage customers offline. Your data automatically syncs to the cloud when internet is available." },
  { q: "How does AMC management work in VendoNX?", a: "You can add your customers' AMC contract details, set service intervals (monthly, quarterly, yearly), and VendoNX will automatically remind you before each service date so you never miss a renewal or visit." },
  { q: "Can I create and share invoices using VendoNX?", a: "Yes. VendoNX lets you generate professional invoices instantly and share them with customers via WhatsApp or SMS — no printer needed." },
  { q: "Is my business data safe with VendoNX?", a: "Yes. All your business data is securely stored and backed up in the cloud with encryption. Your customer information and earnings data remain private and protected." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-br from-background to-muted/80">
      
      <div className="absolute top-[-50px] right-[-50px] w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none bg-brand-purple" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-[360px] flex-shrink-0">
            <FadeIn>
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-purple/30 text-brand-purple bg-brand-purple/5">
                  ✦ FAQ
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Got Questions?{" "}
                  <span className="text-brand-purple">We've Got Answers.</span>
                </h2>
                <p className="text-base text-muted-foreground">
                  Everything you need to know about VendoNX. Can't find what you're looking for? Contact us below.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1">
            <FadeIn delay={0.2} className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-purple/40 bg-card shadow-lg shadow-brand-purple/5' : 'border-border bg-card/70 hover:bg-card'}`}>
                    <button className="w-full flex items-center justify-between p-5 text-left gap-4 min-h-[56px]"
                      onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                      <h3 className="font-display font-semibold text-base text-foreground">{faq.q}</h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-brand-purple text-white' : 'bg-brand-purple/10 text-brand-purple'}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-5 pb-5">
                        <p className="text-base leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
