import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Download, Star } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 bg-gradient-to-br from-background via-brand-purple-light to-brand-sky-light">
      
      {/* Decorative blur blobs */}
      <div className="absolute -top-24 -left-16 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none animate-blob" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none animate-blob [animation-delay:1s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-50">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold bg-brand-purple-light text-brand-purple border border-brand-purple">
                <Star size={14} fill="currentColor" stroke="none" />
                Trusted by 1,000+ vendors across India
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Manage Your Service{" "}
                <span className="bg-gradient-orange bg-clip-text text-transparent">
                  Business
                </span>{" "}
                Smarter with VendoNX
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                Customer tracking, AMC plans, invoices & earnings — one simple app for Indian service professionals.
              </p>
            </FadeIn>

            {/* Buttons */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-purple to-brand-violet text-white px-8 py-4 rounded-2xl font-semibold text-base shadow-orange hover:opacity-90 hover:scale-[1.02] transition-all"
                >
                  <Download size={20} strokeWidth={2} />
                  Download for Android
                  <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base border-2 border-brand-purple text-brand-purple bg-brand-purple/5 hover:bg-brand-purple/10 hover:border-brand-purple/40 hover:scale-[1.02] transition-all"
                >
                  <Download size={20} strokeWidth={2} />
                  Download for iOS
                </a>
              </div>
            </FadeIn>

            {/* Rating */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" className="text-brand-sky" />
                  ))}
                  <span className="ml-2 font-bold text-sm text-foreground">
                    4.8 / 5
                  </span>
                </div>

                <span className="hidden sm:block text-muted-foreground">•</span>

                <span className="text-sm text-muted-foreground">
                  Free. No credit card required.
                </span>
              </div>
            </FadeIn>
          </div>



          {/* Right Phone */}
          <div className="flex-shrink-0 relative">
            <FadeIn delay={0.3} direction="down" duration={0.8}>
              <PhoneFrame size="lg" glow alt="VendoNX app dashboard preview" priority />

              {/* Floating Tags */}
              <div className="absolute -top-4 -right-8 bg-card text-brand-purple text-xs font-bold px-4 py-2 rounded-xl shadow-md border border-border">
                ⚡ Free Download
              </div>

              <div className="absolute -bottom-4 -left-8 bg-card border border-border px-4 py-2 rounded-xl shadow-md">
                <div className="text-xs font-semibold text-foreground">
                  1,000+ Vendors
                </div>
                <div className="flex mt-1 gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} fill="currentColor" stroke="none" className="text-brand-sky" />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full">
          <path
            d="M0 60L1440 60L1440 30C1200 60 720 0 0 30L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}