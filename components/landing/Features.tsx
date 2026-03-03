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
  { icon: Building2, title: "Business Registration", desc: "Set up your business profile in minutes.", color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { icon: Users, title: "Customer Management", desc: "Store and access all customer details instantly.", color: "text-brand-violet", bg: "bg-brand-violet/10" },
  { icon: Calendar, title: "Service Scheduling", desc: "Schedule visits and never miss an appointment.", color: "text-brand-sky", bg: "bg-brand-sky/10" },
  { icon: RefreshCcw, title: "AMC Plan Management", desc: "Track AMC contracts with auto renewal reminders.", color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { icon: BarChart2, title: "Sales Tracking", desc: "Monitor your daily and monthly sales performance.", color: "text-brand-violet", bg: "bg-brand-violet/10" },
  { icon: FileText, title: "Invoice Creation", desc: "Generate and share professional invoices in seconds.", color: "text-brand-sky", bg: "bg-brand-sky/10" },
  { icon: CreditCard, title: "Payment Tracking", desc: "Know who has paid and who owes you money.", color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { icon: TrendingUp, title: "Earnings Dashboard", desc: "Clear view of all your income at a glance.", color: "text-brand-violet", bg: "bg-brand-violet/10" },
];

export const comingSoon = [
  { icon: Mic, title: "AI Voice Logging" },
  { icon: LineChart, title: "Revenue Forecasting" },
  { icon: MessageCircle, title: "WhatsApp Campaigns" },
  { icon: AlertTriangle, title: "Churn Alerts" },
];

export default function Features() {
  return (
    <section id="features" className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-brand-purple-light/30">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-purple/30 text-brand-purple bg-brand-purple/5">
            ✦ Core Features
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Everything You Need to Run a{" "}
            <span className="text-brand-purple">Smarter Service Business</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Powerful tools built specifically for Indian service professionals — simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                className="group rounded-2xl p-6 border transition-all duration-300 cursor-default hover:shadow-lg hover:-translate-y-1 bg-card border-border shadow-sm">
                <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${f.bg}`}>
                  <Icon size={22} className={f.color} />
                </div>
                <h3 className="font-display font-bold text-base mb-2 text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-5 text-muted-foreground">
            Coming Soon
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoon.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title}
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border-2 border-dashed border-brand-purple/30 text-brand-purple bg-brand-purple/5">
                  <Icon size={15} />
                  {c.title}
                  <span className="text-xs font-bold rounded-full px-2 py-0.5 ml-1 bg-brand-purple text-white">
                    Soon
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
