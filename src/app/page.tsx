import Header from "@/components/Header";
import TrustHeader from "@/components/TrustHeader";
import Hero from "@/components/Hero";
import ServiceIconBar from "@/components/ServiceIconBar";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import LoveProblemBanner from "@/components/LoveProblemBanner";
import ServiceCardsDetailed from "@/components/ServiceCardsDetailed";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import ComparisonTable from "@/components/ComparisonTable";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LoveProblemBanner />
      <Services />
      <TrustHeader />
      <TrustBar />
      <WhyChoose />
      <ServiceIconBar />
      <ServiceCardsDetailed />
      <Process />
      <ComparisonTable />
      <About />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
