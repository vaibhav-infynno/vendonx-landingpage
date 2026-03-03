import { FadeIn } from "@/components/ui/FadeIn";
import { Bell, FileText, PenTool, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Bell,
    title: "Forgetting Service Dates",
    desc: "Missing customer visits means lost trust and revenue.",
    color: "brand-violet"
  },
  {
    icon: FileText,
    title: "Missing AMC Renewals",
    desc: "Customers whose AMCs lapse silently stop calling you.",
    color: "brand-sky"
  },
  {
    icon: TrendingDown,
    title: "Unknown Monthly Earnings",
    desc: "No clear picture of how much you earn each month.",
    color: "brand-violet"
  },
  {
    icon: PenTool,
    title: "Manual Invoice Writing",
    desc: "Writing bills by hand is slow, error-prone, and unprofessional.",
    color: "brand-sky"
  },
];

export default function PainPoints() {
  return (
    <section
      id="pain-points"
      className="py-14 md:py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-brand-dark">
              Still Running Your Business on Paper?
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Thousands of service vendors lose customers and income every day due
              to these common problems.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, index) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={index * 0.1}>
                <div
                  className="bg-background rounded-2xl p-5 text-center border border-border 
                             shadow-sm hover:translate-y-[-2px] hover:shadow-md hover:border-brand-purple/20
                             transition-all duration-300 group h-full"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `hsl(var(--${p.color}) / 0.1)` }}>
                    <Icon size={24} style={{ color: `hsl(var(--${p.color}))` }} />
                  </div>

                  <h3 className="font-display font-bold text-base text-brand-dark mb-1.5">
                    {p.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-brand-dark">
              VendoNX solves all of this —{" "}
              <span className="text-brand-violet">
                and more.
              </span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}