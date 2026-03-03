import { ArrowRight, Shield, Smartphone, Star, Wifi, Zap } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

export default function FinalCTA() {
  return (
    <section id="download" className="py-14 md:py-20 relative overflow-hidden bg-brand-dark">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-brand-purple" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-sky" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold bg-white/10 text-white/90">
              <Zap size={12} fill="currentColor" />
              Join 1,000+ vendors already on VendoNX
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-white">
              Start Managing Your Business the{" "}
              <span className="text-brand-sky">Smart Way</span>
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-white/70">
              Download now and take complete control — customers, invoices, earnings, all in one app.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a href="#" className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-300 group bg-gradient-to-br from-brand-purple to-brand-sky text-white shadow-lg shadow-brand-purple/40 hover:opacity-90">
                <Smartphone size={18} />
                <span className="text-left">
                  <span className="block text-[10px] opacity-70 font-normal leading-none mb-0.5">Get it on</span>
                  Google Play
                </span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-3.5 text-sm font-semibold border border-white/20 bg-white/5 text-white transition-all duration-300 hover:bg-white/10">
                <Smartphone size={18} />
                <span className="text-left">
                  <span className="block text-[10px] opacity-60 font-normal leading-none mb-0.5">Download on the</span>
                  App Store
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-white/60">
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
          </div>

          <div className="flex-shrink-0">
            <PhoneFrame size="lg" glow alt="VendoNX app preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
