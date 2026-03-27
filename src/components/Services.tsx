"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Heart, Users, Home, UserCheck, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Get Your Love Back",
    desc: "A single call has the power to alter your situation. Restore the passion and love in your life instantly.",
    icon: Heart,
  },
  {
    title: "Bring Back Ex Partner",
    desc: "Recover lost relationships and rekindle the flame with specialized Islamic Duas and Wazifas.",
    icon: Users,
  },
  {
    title: "Breakup Problem Solution",
    desc: "Specialized remedies to resolve misunderstandings and heal the pain of a recent breakup.",
    icon: ShieldCheck,
  },
  {
    title: "Love Marriage Specialist",
    desc: "Remove all barriers in your love marriage and convince your parents for a blissful union.",
    icon: UserCheck,
  },
  {
    title: "Husband Wife Problem Solution",
    desc: "Stop an unwanted divorce or marital conflicts and re-establish love in your life.",
    icon: Home,
  },
  {
    title: "Family Problem Solution",
    desc: "Resolve household conflicts and bring peace back to your family through spiritual guidance.",
    icon: Zap,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-16 md:py-32 bg-white px-4 relative overflow-hidden">
      {/* Section Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      
      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <div className="inline-block bg-emerald-100 text-emerald-900 px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-emerald-200">
             Al-Quran Solutions
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">
            Our Spiritual Services
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-medium italic">
            "Seek help through patience and prayer." — Pure spiritual healing through 
            the wisdom of the Holy Quran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group relative p-8 md:p-10 bg-white rounded-[2.5rem] border border-emerald-100/80 transition-all duration-500 hover:bg-emerald-950 hover:border-gold hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(0,43,0,0.4)] overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[15deg]">
                    <service.icon size={36} className="text-emerald-900 group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-emerald-100 group-hover:text-gold/20 font-black text-4xl md:text-5xl transition-colors tracking-tighter">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-950 group-hover:text-white mb-5 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 mb-10 leading-relaxed text-sm md:text-base font-medium transition-colors">
                  {service.desc}
                </p>
                
                <div className="flex items-center justify-between border-t border-emerald-50/50 group-hover:border-white/10 pt-6">
                  <a
                    href={`https://wa.me/91XXXXXXXXXX?text=Bismillah.%20Hello%20Hazrat%20Sahab,%20I%20want%20to%20consult%20about%20${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center space-x-3 font-black text-emerald-950 group-hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-widest"
                  >
                    <MessageCircle size={20} fill="currentColor" className="text-green-500 group-hover:scale-110 transition-transform" />
                    <span>Consult Now</span>
                  </a>
                  <Zap size={20} className="text-gold opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                </div>
              </div>
              
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-arabesque opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-emerald-900 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Facing a different problem? Talk to Hazrat Sahab directly.
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Whatever your worry may be, there is always a solution in the Quran. 
              Get a free consultation within 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="w-full sm:w-auto bg-gold hover:bg-gold-600 text-emerald-950 px-8 py-4 rounded-full font-bold shadow-lg transition-all"
              >
                Direct Call: +91 XXXXX XXXXX
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="w-full sm:w-auto border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold shadow-lg transition-all"
              >
                WhatsApp Expert
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
        </div>
      </div>
    </section>
  );
}
