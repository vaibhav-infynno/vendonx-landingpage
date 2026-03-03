import { FadeIn } from "@/components/ui/FadeIn";
import { Bell, FileText, PenTool, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Bell,
    title: "Forgetting Service Dates",
    desc: "Missing customer visits means lost trust and revenue.",
  },
  {
    icon: FileText,
    title: "Missing AMC Renewals",
    desc: "Customers whose AMCs lapse silently stop calling you.",
  },
  {
    icon: TrendingDown,
    title: "Unknown Monthly Earnings",
    desc: "No clear picture of how much you earn each month.",
  },
  {
    icon: PenTool,
    title: "Manual Invoice Writing",
    desc: "Writing bills by hand is slow, error-prone, and unprofessional.",
  },
];

export default function PainPoints() {
  return (
    <section
      id="pain-points"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-brand-purple-light/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Running Your Business on Paper?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  className="bg-card rounded-2xl p-6 text-center border border-border 
                             shadow-sm hover:shadow-xl hover:-translate-y-2 
                             transition-all duration-300 group h-full"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-4 w-14 h-14 rounded-xl 
                                  bg-brand-purple-light
                                  flex items-center justify-center">
                    <Icon className="text-brand-purple" size={26} />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-2">
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
          <div className="text-center mt-14">
            <p className="text-lg font-semibold text-foreground">
              VendoNX solves all of this —{" "}
              <span className="bg-gradient-orange bg-clip-text text-transparent">
                and more.
              </span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}