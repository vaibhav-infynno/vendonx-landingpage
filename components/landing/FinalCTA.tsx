import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Shield, Smartphone, Star, Wifi, Zap } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

export default function FinalCTA() {
  return (
    <section id="download" className="py-14 md:py-20 relative overflow-hidden bg-section-light">

      <div className="container mx-auto px-6 relative z-10">
        <div className="rounded-3xl overflow-hidden border bg-background border-border"
          style={{ boxShadow: "0 4px 32px hsl(0 0% 0% / 0.06)" }}>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
            <div className="flex-1 text-center lg:text-left">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold bg-brand-sky/10 text-brand-violet">
                <Zap size={12} fill="currentColor" />
                Join 1,000+ vendors already on VendoNX
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-brand-dark">
                Start Managing Your Business the{" "}
                <span className="text-brand-violet">Smart Way</span>
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-muted-foreground">
                Download now and take complete control — customers, invoices, earnings, all in one app.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <a href="#" className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-300 group bg-brand-purple text-white"
                  style={{ boxShadow: "0 4px 16px hsl(var(--brand-purple) / 0.25)" }}>
                  <Smartphone size={18} />
                  <span className="text-left">
                    <span className="block text-[10px] opacity-70 font-normal leading-none mb-0.5">Get it on</span>
                    Google Play
                  </span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-semibold border-2 border-border bg-background text-brand-dark transition-all duration-300 hover:bg-muted/50">
                  <Smartphone size={18} />
                  <span className="text-left">
                    <span className="block text-[10px] opacity-60 font-normal leading-none mb-0.5">Download on the</span>
                    App Store
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield size={13} className="text-brand-sky" />
                  Free to download
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={13} className="text-brand-sky" />
                  No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <Wifi size={13} className="text-brand-sky" />
                  Works offline
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="flex-shrink-0">
            <FadeIn direction="left" delay={0.2}>
              <PhoneFrame size="lg" glow alt="VendoNX app preview" />
            </FadeIn>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
