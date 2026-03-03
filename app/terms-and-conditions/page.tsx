import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Subtle background elements for theme consistency */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-brand-purple/20 animate-blob" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl bg-brand-sky/20 animate-blob [animation-delay:2s]" />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-dark">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-10 font-medium">Last updated: November 1, 2025</p>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-8 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-sm leading-relaxed">
            <p className="text-lg text-foreground font-medium">
              By using the VendoNX app, you agree to the following terms:
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">1</span>
                Using the App
              </h2>
              <p>VendoNX helps vendors manage customers, jobs, and payments. Do not use it for illegal or harmful activities.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">2</span>
                Account Responsibility
              </h2>
              <p>Provide correct details during registration and keep your password secure.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">3</span>
                Payments and Transactions
              </h2>
              <p>All transactions between you and your customers are your responsibility. VendoNX is not liable for disputes or unpaid bills.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">4</span>
                Notifications & Reminders
              </h2>
              <p>Automatic WhatsApp or SMS reminders are for business use only. You are responsible for compliance with local laws.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">5</span>
                Subscription and Charges
              </h2>
              <p>Some features may require payment. Fees will be clearly shown before purchase.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">6</span>
                Limitation of Liability
              </h2>
              <p>VendoNX provides tools but does not guarantee business outcomes or payments.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">7</span>
                Intellectual Property
              </h2>
              <p>The VendoNX name, logo, and content belong to us. Do not copy or reuse without permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">8</span>
                Termination
              </h2>
              <p>We may suspend accounts in case of misuse. You may stop using the app anytime.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">9</span>
                Governing Law
              </h2>
              <p>These terms are governed by the laws of India and under Ahmedabad jurisdiction.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">10</span>
                Contact Us
              </h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <div className="mt-6 p-6 bg-gradient-to-r from-brand-purple/5 to-brand-violet/5 rounded-2xl border border-brand-purple/10 inline-block">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-brand-purple">Phone:</span> 
                  <a href="tel:+918488838308" className="text-brand-purple hover:underline hover:text-brand-purple-hover transition-colors font-display text-lg tracking-wide">
                    +91-84888-38308
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
