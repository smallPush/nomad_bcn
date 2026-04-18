import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoint from '@/components/PainPoint';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Events from '@/components/Events';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <PainPoint />
      <HowItWorks />
      <Features />
      <Events />
      <AboutUs />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
