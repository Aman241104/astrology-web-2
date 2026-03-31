import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import CompactServicesGrid from "@/components/CompactServicesGrid";
import OneClickSolutionBanner from "@/components/OneClickSolutionBanner";
import LoveProblemBanner from "@/components/LoveProblemBanner";
import IntercasteMarriageBanner from "@/components/IntercasteMarriageBanner";
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
      <OneClickSolutionBanner />
      <LoveProblemBanner />
      <IntercasteMarriageBanner />
      <ExLoveBackBanner />
      <OneClickSolutionBanner />
      <HusbandWifeBanner />
      <Process />
      <ComparisonTable />
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
