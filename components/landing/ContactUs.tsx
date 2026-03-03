"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background to-brand-purple-light/20">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-purple/30 text-brand-purple bg-brand-purple/5">
                ✦ Get In Touch
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Have a Question?{" "}
                <span className="text-brand-purple">Let's Talk.</span>
              </h2>
              <p className="text-base mb-10 text-muted-foreground">
                We'd love to hear from you. Whether you need help getting started or have feedback — reach out!
              </p>
            </FadeIn>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "hello@vendonx.in" },
                { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
              ].map(({ icon: Icon, label, value }, i) => (
                <FadeIn key={label} delay={0.2 + (i * 0.1)}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-purple/10">
                      <Icon size={18} className="text-brand-purple" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{label}</div>
                      <div className="text-sm text-muted-foreground">{value}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-lg w-full">
            <FadeIn delay={0.3} direction="left">
              <div className="rounded-3xl p-8 border bg-card border-border shadow-md">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-display font-bold text-xl mb-2 text-foreground">Thank you!</h3>
                    <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: "name" as const, label: "Your Name", type: "text", placeholder: "Enter your name", max: 100 },
                      { name: "email" as const, label: "Email Address", type: "email", placeholder: "you@example.com", max: 255 },
                      { name: "subject" as const, label: "Subject", type: "text", placeholder: "What is this about?", max: 200 },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium mb-1.5 text-foreground">{field.label}</label>
                        <input
                          type={field.type}
                          value={form[field.name]}
                          onChange={e => setForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                          placeholder={field.placeholder}
                          maxLength={field.max}
                          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-brand-purple/50 bg-muted border border-border text-foreground placeholder:text-muted-foreground"
                          required
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">Message</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="How can we help you?"
                        maxLength={1000}
                        rows={4}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-brand-purple/50 bg-muted border border-border text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                    <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-bold rounded-xl bg-gradient-orange text-white shadow-orange hover:opacity-90 transition-opacity">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
