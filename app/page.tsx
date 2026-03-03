import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import PainPoints from "@/components/landing/PainPoints";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PainPoints />
    </main>
  );
}