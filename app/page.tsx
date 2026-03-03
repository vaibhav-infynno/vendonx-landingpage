import ContactUs from "@/components/landing/ContactUs";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import PainPoints from "@/components/landing/PainPoints";
import Pricing from "@/components/landing/Pricing";
import StatsBar from "@/components/landing/StatsBar";
import Testimonials from "@/components/landing/Testimonials";
import WhoIsItFor from "@/components/landing/WhoIsItFor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PainPoints />
      <StatsBar />
      <Features />
      <HowItWorks />
      <WhoIsItFor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <ContactUs />
      <Footer />
    </main>
  );
}