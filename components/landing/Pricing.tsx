import { ArrowRight, Check, Clock, Gift } from "lucide-react";

export const freeFeatures = [
  "Business Registration", "Unlimited Customers", "Service Scheduling",
  "AMC Plan Management", "Invoice Creation", "Payment Tracking",
  "Earnings Dashboard", "Sales Analytics", "3 Language Support",
  "Offline Mode", "Priority Support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 md:py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest border border-brand-purple/30 text-brand-purple bg-brand-purple/5">
            ✦ Pricing
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Start Using VendoNX — Completely Free
          </h2>
          <p className="text-lg max-w-xl mx-auto text-muted-foreground">
            No credit card. No catch. Enjoy full access while we're in early launch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border bg-card border-brand-purple/20 shadow-orange">

            <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold bg-gradient-to-br from-brand-sky to-brand-purple text-white shadow-sm">
              <Gift size={13} />
              Limited Period Offer
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-black text-7xl md:text-8xl bg-gradient-orange bg-clip-text text-transparent">
                    ₹0
                  </span>
                  <div>
                    <div className="font-semibold text-lg text-foreground">/ month</div>
                    <div className="text-sm line-through text-muted-foreground">₹200 / month</div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground">
                  Full access to all features — free for the next <span className="font-bold text-brand-purple">4–6 months</span> while we launch.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl p-4 mb-8 border border-brand-purple/20 bg-brand-purple/5">
                <Clock size={18} className="text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brand-purple">After the launch period ends</p>
                  <p className="text-sm text-muted-foreground">
                    Plans will be available at just <strong className="text-foreground">₹200/month</strong>. Early users get exclusive discounts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {freeFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-purple/10">
                      <Check size={12} className="text-brand-purple" />
                    </div>
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <a href="#download"
                className="flex items-center justify-center gap-3 w-full rounded-2xl py-4 text-base font-bold bg-gradient-orange text-white shadow-orange hover:opacity-90 transition-opacity"
              >
                <Gift size={20} />
                Get Free Access Now
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <p className="text-center text-sm mt-6 text-muted-foreground">
            No credit card required · Cancel anytime · 100% data safe · Available on Android & iOS
          </p>
        </div>
      </div>
    </section>
  );
}
