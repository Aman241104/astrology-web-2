import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CompactServicesGrid from "@/components/CompactServicesGrid";
import OneClickSolutionBanner from "@/components/OneClickSolutionBanner";
import LoveProblemBanner from "@/components/LoveProblemBanner";
import MarriageObstaclesBanner from "@/components/MarriageObstaclesBanner";
import ExLoveBackBanner from "@/components/ExLoveBackBanner";
import HusbandWifeBanner from "@/components/HusbandWifeBanner";
import Process from "@/components/Process";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBadges />
      <CompactServicesGrid />
      
      {/* Other Specialized Services Section Heading */}
      <div className="bg-white pt-20 pb-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-gold" />
          <span className="text-gold font-black uppercase tracking-[0.4em] text-xs md:text-sm">More Specialized Help</span>
          <div className="h-[1px] w-12 bg-gold" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-emerald-950 uppercase tracking-tighter leading-none">
          Other <span className="text-gradient-gold italic">Services</span>
        </h2>
      </div>

      <OneClickSolutionBanner />
      <LoveProblemBanner />
      <HusbandWifeBanner />
      <ExLoveBackBanner />
      <MarriageObstaclesBanner />
      <Process />
      <WhyChoose />
      <About />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
