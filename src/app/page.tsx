import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoint from '@/components/PainPoint';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PainPoint />
      <HowItWorks />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
