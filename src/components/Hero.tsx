"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Phone, MessageCircle, Star } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-content > *", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.1,
        clearProps: "all"
      })
      .from(".parallax-blur", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2
      }, "-=0.8");

      // Counter animation
      const target = { val: 0 };
      gsap.to(target, {
        val: 76950,
        duration: 2.5,
        delay: 0.2,
        ease: "power3.out",
        onUpdate: () => setCount(Math.floor(target.val)),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 md:pt-32 pb-12 overflow-hidden bg-emerald-950 text-white px-4"
    >
      {/* Background Image & Parallax Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-950/85 to-emerald-950 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop" 
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="parallax-blur absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/15 rounded-full blur-[120px] opacity-40" />
        <div className="parallax-blur absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] opacity-40" />
        <div className="absolute inset-0 bg-arabesque opacity-[0.04] z-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center hero-content">
        <div className="inline-flex flex-col items-center mb-6">
          <div className="flex space-x-1.5 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="#D4AF37" className="text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
            ))}
          </div>
          <div className="px-4 py-1 bg-gold/20 border border-gold/30 rounded-full backdrop-blur-md">
            <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
              Registered Spiritual Specialist | Gold Medalist
            </span>
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 md:mb-6 tracking-tighter">
          <span className="block text-white">World Famous <span className="text-gradient-gold">Mohammed Arif Khan</span></span>
          <span className="block mt-1">
            <span className="text-gold font-sans tabular-nums drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              {count.toLocaleString()}+
            </span> <span className="text-white/90">Life Problems Solved</span>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 text-gold/90 font-bold text-[10px] md:text-xs uppercase tracking-widest">
          <span className="px-3 py-1.5 border border-gold/20 rounded-lg bg-gold/10 backdrop-blur-sm shadow-xl">#Love Marriage</span>
          <span className="px-3 py-1.5 border border-gold/20 rounded-lg bg-gold/10 backdrop-blur-sm shadow-xl">#Lost Love Back</span>
          <span className="px-3 py-1.5 border border-gold/20 rounded-lg bg-gold/10 backdrop-blur-sm shadow-xl">#Family Problem</span>
          <span className="px-3 py-1.5 border border-gold/20 rounded-lg bg-gold/10 backdrop-blur-sm shadow-xl">#Husband Wife</span>
        </div>

        <p className="text-base md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4">
          !! आपका आत्मविशवास ही मेरी शक्ति है !! सभी समस्याओ का तुरंत समाधान पाए !! <br className="hidden md:block" />
          निशुल्क परामर्श के लिए एक बार अवश्य फ़ोन करे। <br className="hidden md:block" />
          <span className="text-gold italic font-bold">100% Guaranteed & Permanent Spiritual Results within hours.</span>
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="tel:+919784412832"
            className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-gold hover:bg-white text-emerald-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-lg md:text-xl transition-all shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 border-2 border-gold"
          >
            <Phone size={22} fill="currentColor" />
            <span>Call Now: +91-9784412832</span>
          </a>
          <a
            href="https://wa.me/919784412832"
            className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-green-500 hover:bg-green-400 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-lg md:text-xl transition-all shadow-[0_20px_50px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 border-2 border-white/20"
          >
            <MessageCircle size={22} fill="currentColor" />
            <span>WhatsApp Expert</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-black text-gold">25+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-black text-gold">100%</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Confidential</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-black text-gold">Free</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">First Consultation</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-black text-gold">24/7</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
