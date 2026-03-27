import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OtherServices from "@/components/OtherServices";
import Process from "@/components/Process";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SuccessToast from "@/components/SuccessToast";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OtherServices />
      <Process />
      <WhyChoose />
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
