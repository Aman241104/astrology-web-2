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
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(headlineRef.current, { y: 50, opacity: 0, delay: 0.5 })
        .from(subheadlineRef.current, { y: 30, opacity: 0 }, "-=0.7")
        .from(ctaRef.current, { y: 20, opacity: 0 }, "-=0.7")
        .from(".hero-badge", { scale: 0, opacity: 0, stagger: 0.2 }, "-=0.5");

      // Counter animation
      const target = { val: 0 };
      gsap.to(target, {
        val: 76950,
        duration: 2.5,
        delay: 1,
        ease: "power2.out",
        onUpdate: () => setCount(Math.floor(target.val)),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-emerald-950 text-white px-4"
    >
      {/* Background Image & Motifs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop" 
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-700 rounded-full blur-[120px] opacity-20" />
        <div className="absolute inset-0 bg-arabesque opacity-20 z-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="#D4AF37" className="text-gold hero-badge" />
            ))}
          </div>
          <span className="text-gold text-xs md:text-sm font-bold tracking-widest uppercase hero-badge">
            5 Star Rated Islamic Specialist
          </span>
        </div>

        <h1 
          ref={headlineRef}
          className="font-serif text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6"
        >
          Famous <span className="text-gradient-gold">Molvi Ji</span> in India <br />
          <span className="text-gold font-sans tracking-tighter">
            {count.toLocaleString()}+
          </span> Cases Solved
        </h1>

        <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-6 md:mb-8 text-gold font-bold text-[10px] md:text-base hero-badge">
          <span>#Love Problem</span>
          <span className="opacity-50">•</span>
          <span>#BF-GF Dispute</span>
          <span className="opacity-50">•</span>
          <span>#Lost Love Back</span>
        </div>

        <p 
          ref={subheadlineRef}
          className="text-sm md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed font-sans"
        >
          !! आपका आत्मविशवास ही मेरी शक्ति है !! <br className="hidden md:block" />
          सभी समस्याओ का हल पाए !! निराश एक बार अवश्य फ़ोन करे। <br className="hidden md:block" />
          Pure Islamic Spiritual Remedies.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gold hover:bg-gold-600 text-emerald-950 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 animate-glow"
          >
            <Phone size={18} className="md:w-5 md:h-5" fill="currentColor" />
            <span>Call Now: +91 XXXXX XXXXX</span>
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 border-2 border-white/20"
          >
            <MessageCircle size={18} className="md:w-5 md:h-5" fill="currentColor" />
            <span>WhatsApp Expert</span>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
          <div className="flex flex-col items-center hero-badge">
            <span className="text-2xl font-bold text-gold">20+</span>
            <span className="text-xs uppercase tracking-widest">Years Experience</span>
          </div>
          <div className="flex flex-col items-center hero-badge">
            <span className="text-2xl font-bold text-gold">Highly</span>
            <span className="text-xs uppercase tracking-widest">Confidential</span>
          </div>
          <div className="flex flex-col items-center hero-badge">
            <span className="text-2xl font-bold text-gold">24/7</span>
            <span className="text-xs uppercase tracking-widest">Global Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
