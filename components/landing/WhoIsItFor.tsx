import { FadeIn } from "@/components/ui/FadeIn";
import { Droplets, Settings, Sparkles, Users, Wind, Zap } from "lucide-react";

export const vendors = [
  { icon: Droplets, label: "RO Technicians", emoji: "💧", color: "text-brand-purple", bgHover: "hover:bg-brand-purple/5", borderHover: "hover:border-brand-purple/30" },
  { icon: Wind, label: "AC Repair", emoji: "❄️", color: "text-brand-violet", bgHover: "hover:bg-brand-violet/5", borderHover: "hover:border-brand-violet/30" },
  { icon: Zap, label: "Electricians", emoji: "⚡", color: "text-brand-sky", bgHover: "hover:bg-brand-sky/5", borderHover: "hover:border-brand-sky/30" },
  { icon: Sparkles, label: "Cleaners", emoji: "🧹", color: "text-brand-purple", bgHover: "hover:bg-brand-purple/5", borderHover: "hover:border-brand-purple/30" },
  { icon: Settings, label: "Mechanics", emoji: "🔧", color: "text-brand-violet", bgHover: "hover:bg-brand-violet/5", borderHover: "hover:border-brand-violet/30" },
  { icon: Users, label: "Any Service Provider", emoji: "👨🔧", color: "text-brand-sky", bgHover: "hover:bg-brand-sky/5", borderHover: "hover:border-brand-sky/30" },
];

export default function WhoIsItFor() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-brand-purple-light/50 to-brand-sky-light/30">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Who Is VendoNX For?
            </h2>
            <p className="text-lg max-w-xl mx-auto text-muted-foreground">
              Built for every local service professional across India
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {vendors.map((v, i) => (
            <FadeIn key={v.label} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-6 text-center cursor-default group transition-all duration-300 border bg-card border-border shadow-sm hover:-translate-y-1 hover:shadow-md ${v.bgHover} ${v.borderHover} h-full`}
              >
                <div className="text-4xl mb-3 flex justify-center">{v.emoji}</div>
                <h3 className={`font-display font-bold text-sm md:text-base group-hover:${v.color} transition-colors text-foreground`}>
                   {v.label}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
