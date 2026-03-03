import { Quote, Star } from "lucide-react";

export const testimonials = [
  { name: "Ashvin Panchal", role: "RO Technician, Ahmedabad", avatar: "A", text: "My daily work has become smooth and tension-free. VendoNX handles everything so I can focus on service.", lang: "en", colorClass: "text-brand-purple", bgClass: "bg-brand-purple" },
  { name: "Bipin Prajapati", role: "AC Repair Expert, Surat", avatar: "B", text: "Customers trust me more because my work is well organized. Every invoice, every visit — all tracked.", lang: "en", colorClass: "text-brand-violet", bgClass: "bg-brand-violet" },
  { name: "Priyank Patel", role: "Home Service Vendor, Vadodara", avatar: "P", text: "AMC અને બિલ – બધું સરળ બની ગયું છે. VendoNX ખૂબ જ સરળ અને ઉપયોગી app છે.", lang: "gu", colorClass: "text-brand-sky", bgClass: "bg-brand-sky" },
  { name: "Miral Patel", role: "Electrician, Rajkot", avatar: "M", text: "Now I feel I have proper control on my business. Income is clear, customers are happy, I am happy.", lang: "en", colorClass: "text-brand-purple", bgClass: "bg-brand-purple" },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-background to-brand-purple-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Vendors Say
          </h2>
          <p className="text-lg max-w-xl mx-auto text-muted-foreground">
            Real stories from real service professionals across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name}
              className="rounded-2xl p-6 border transition-all duration-300 relative bg-card border-border shadow-sm hover:shadow-md"
            >
              <Quote size={40} className={`absolute top-5 right-5 opacity-10 ${t.colorClass}`} />

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" className={t.colorClass} />
                ))}
              </div>

              <p className="text-base leading-relaxed mb-6 italic text-foreground/80" lang={t.lang}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0 text-white ${t.bgClass}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
