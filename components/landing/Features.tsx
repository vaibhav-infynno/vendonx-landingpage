import { FadeIn } from "@/components/ui/FadeIn";
import {
    AlertTriangle,
    BarChart2,
    Building2,
    Calendar,
    CreditCard,
    FileText,
    LineChart, MessageCircle,
    Mic,
    RefreshCcw,
    TrendingUp,
    Users,
} from "lucide-react";

export const features = [
  { icon: Building2, title: "Business Registration", desc: "Set up your business profile in minutes.", color: "brand-violet" },
  { icon: Users, title: "Customer Management", desc: "Store and access all customer details instantly.", color: "brand-sky" },
  { icon: Calendar, title: "Service Scheduling", desc: "Schedule visits and never miss an appointment.", color: "brand-violet" },
  { icon: RefreshCcw, title: "AMC Plan Management", desc: "Track AMC contracts with auto renewal reminders.", color: "brand-sky" },
  { icon: BarChart2, title: "Sales Tracking", desc: "Monitor your daily and monthly sales performance.", color: "brand-violet" },
  { icon: FileText, title: "Invoice Creation", desc: "Generate and share professional invoices in seconds.", color: "brand-sky" },
  { icon: CreditCard, title: "Payment Tracking", desc: "Know who has paid and who owes you money.", color: "brand-violet" },
  { icon: TrendingUp, title: "Earnings Dashboard", desc: "Clear view of all your income at a glance.", color: "brand-sky" },
];

export const comingSoon = [
  { icon: Mic, title: "AI Voice Logging" },
  { icon: LineChart, title: "Revenue Forecasting" },
  { icon: MessageCircle, title: "WhatsApp Campaigns" },
  { icon: AlertTriangle, title: "Churn Alerts" },
];

export default function Features() {
  return (
    <section id="features" className="py-14 md:py-20 relative overflow-hidden bg-section-light">

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-violet/20 text-brand-violet bg-brand-violet/5">
              ✦ Core Features
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-brand-dark">
              Everything You Need to Run a{" "}
              <span className="text-brand-violet">Smarter Service Business</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Powerful tools built specifically for Indian service professionals — simple, fast, and reliable.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div
                  className="group rounded-2xl p-6 border transition-all duration-300 cursor-default hover:shadow-lg hover:-translate-y-1 bg-background border-border shadow-sm h-full flex flex-col items-start text-left">
                  <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: `hsl(var(--${f.color}) / 0.1)` }}>
                    <Icon size={22} style={{ color: `hsl(var(--${f.color}))` }} />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2 text-brand-dark">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Coming Soon */}
        <FadeIn delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-5 text-muted-foreground">
              Coming Soon
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {comingSoon.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title}
                    className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border-2 border-dashed border-muted-foreground/25 text-muted-foreground bg-muted/50">
                    <Icon size={15} />
                    {c.title}
                    <span className="text-xs font-bold rounded-full px-2 py-0.5 ml-1 bg-brand-violet text-white">
                      Soon
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
