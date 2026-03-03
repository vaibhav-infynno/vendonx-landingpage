import { FadeIn } from "@/components/ui/FadeIn";
import { Quote, Star } from "lucide-react";

export const testimonials = [
  { name: "Ashvin Panchal", role: "RO Technician, Ahmedabad", avatar: "A", text: "My daily work has become smooth and tension-free. VendoNX handles everything so I can focus on service.", lang: "en", color: "brand-violet" },
  { name: "Bipin Prajapati", role: "AC Repair Expert, Surat", avatar: "B", text: "Customers trust me more because my work is well organized. Every invoice, every visit — all tracked.", lang: "en", color: "brand-sky" },
  { name: "Priyank Patel", role: "Home Service Vendor, Vadodara", avatar: "P", text: "AMC અને બિલ – બધું સરળ બની ગયું છે. VendoNX ખૂબ જ સરળ અને ઉપયોગી app છે.", lang: "gu", color: "brand-violet" },
  { name: "Miral Patel", role: "Electrician, Rajkot", avatar: "M", text: "Now I feel I have proper control on my business. Income is clear, customers are happy, I am happy.", lang: "en", color: "brand-sky" },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
              What Our Vendors Say
            </h2>
            <p className="text-lg max-w-xl mx-auto text-muted-foreground">
              Real stories from real service professionals across India
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div
                className="rounded-2xl p-6 border transition-all duration-300 relative bg-background border-border shadow-sm hover:shadow-md h-full"
              >
                <Quote size={40} className="absolute top-5 right-5 opacity-10" style={{ color: `hsl(var(--${t.color}))` }} />

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="hsl(var(--brand-sky))" stroke="none" />
                  ))}
                </div>

                <p className="text-base leading-relaxed mb-6 italic" style={{ color: "hsl(var(--foreground) / 0.8)" }} lang={t.lang}>
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0"
                    style={{ background: `hsl(var(--${t.color}) / 0.12)`, color: `hsl(var(--${t.color}))` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-brand-dark">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
