import { ArrowRight, Bell, Smartphone, TrendingUp, UserCheck } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

const steps = [
  { num: "01", icon: Smartphone, title: "Download & Register", desc: "Install VendoNX and create your business profile in 2 minutes.", highlight: "Free & instant" },
  { num: "02", icon: UserCheck, title: "Add Customers", desc: "Add customers, service history, and AMC plans in one place.", highlight: "No paperwork" },
  { num: "03", icon: Bell, title: "Smart Reminders", desc: "Auto alerts for renewals, service dates, and pending payments.", highlight: "Works offline" },
  { num: "04", icon: TrendingUp, title: "Track Earnings", desc: "Generate invoices and watch your earnings dashboard in real time.", highlight: "Full control" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-purple/30 text-brand-purple bg-brand-purple/5">
            ✦ How It Works
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            From Download to Growing Business
          </h2>
          <p className="text-base max-w-xl mx-auto text-muted-foreground">
            Four simple steps to transform how you manage your service business.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[100px] left-[60%] right-[-40%] h-[2px] z-0 bg-gradient-to-r from-brand-purple/30 to-brand-purple/10" />
                )}

                <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs mb-4 relative z-10 bg-gradient-orange text-white shadow-md shadow-brand-purple/30">
                  {step.num}
                </div>

                <div className="mb-5">
                  <PhoneFrame size="sm" alt={`Step ${step.num}: ${step.title}`} />
                </div>

                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 bg-brand-purple/10">
                  <Icon size={16} className="text-brand-purple" />
                </div>

                <h3 className="font-display font-bold text-sm md:text-base mb-1.5 text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed mb-2 max-w-[180px] text-muted-foreground">
                  {step.desc}
                </p>
                <span className="inline-flex text-[11px] font-semibold rounded-full px-2.5 py-0.5 bg-brand-purple/10 text-brand-purple">
                  {step.highlight}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="#download" className="inline-flex items-center justify-center gap-2 bg-gradient-orange text-white px-7 py-3.5 text-sm font-bold rounded-xl shadow-lg hover:scale-105 transition">
            Get Started Free
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
