import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OtherServices from "@/components/OtherServices";
import LoveProblemBanner from "@/components/LoveProblemBanner";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import ComparisonTable from "@/components/ComparisonTable";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SuccessToast from "@/components/SuccessToast";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <LoveProblemBanner />
      <OtherServices />
      <Process />
      <WhyChoose />
      <ComparisonTable />
      <About />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <SuccessToast />
    </main>
  );
}
