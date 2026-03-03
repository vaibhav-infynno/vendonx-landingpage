import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-dark">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10 font-medium">Last updated: November 1, 2025</p>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-8 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-sm leading-relaxed">
            <p className="text-lg text-foreground font-medium">
              Welcome to VendoX, a mobile app designed to help service providers manage their business easily. We respect your privacy and are committed to protecting your personal information.
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">1</span>
                Information We Collect
              </h2>
              <p>We collect basic information such as your name, phone number, business name, location, and customer details. Payment and transaction details (if you use our invoice or wallet features) and device information may also be collected.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">2</span>
                How We Use Your Information
              </h2>
              <p>Your information is used to manage your account, send reminders, generate invoices, and improve app performance.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">3</span>
                Sharing of Information
              </h2>
              <p>We only share your data with WhatsApp/SMS gateways or payment partners when needed. We never sell your information.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">4</span>
                Data Security
              </h2>
              <p>Your data is securely stored using encryption and trusted servers. Please keep your login credentials safe.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">5</span>
                Your Control
              </h2>
              <p>You can edit or delete your account anytime by contacting the support team.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">6</span>
                Updates to Policy
              </h2>
              <p>We may update this Privacy Policy when new features are added.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center text-sm">7</span>
                Contact Us
              </h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
