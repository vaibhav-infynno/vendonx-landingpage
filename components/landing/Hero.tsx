import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Download, Star } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-background" aria-label="Hero">
      
      {/* Decorative blur blob */}
      <div className="absolute top-[-100px] right-[5%] w-[500px] h-[500px] bg-brand-sky/6 rounded-full blur-3xl pointer-events-none animate-blob" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-50">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-semibold border border-brand-sky/25 bg-brand-sky/10 text-brand-violet">
                <Star size={14} fill="currentColor" stroke="none" />
                <span>Trusted by 1,000+ vendors across India</span>
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-brand-dark">
                Manage Your Service{" "}
                <span className="text-brand-violet">
                  Business
                </span>{" "}
                Smarter with VendoNX
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Customer tracking, AMC plans, invoices & earnings — one simple app for Indian service professionals.
              </p>
            </FadeIn>

            {/* Buttons */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-bold min-h-[56px] transition-all duration-300 group bg-brand-purple text-white shadow-orange hover:-translate-y-0.5"
                >
                  <Download size={20} />
                  Download for Android
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold min-h-[56px] border-2 border-border text-brand-dark bg-background hover:bg-muted transition-all duration-300"
                >
                  <Download size={20} />
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
                  <span className="ml-2 font-bold text-sm text-brand-dark">
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
              <PhoneFrame size="lg" glow alt="VendoNX app dashboard preview" />

              {/* Floating Tags */}
              <div className="absolute -top-3 -right-8 bg-background text-brand-violet text-xs font-bold px-3.5 py-2 rounded-xl shadow-md z-20">
                ⚡ Free Download
              </div>

              <div className="absolute -bottom-3 -left-8 bg-background border border-border px-3.5 py-2 rounded-xl shadow-md z-20">
                <div className="text-xs font-semibold text-brand-dark">
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


    </section>
  );
}