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
        y: 60, 
        opacity: 0, 
        stagger: 0.15,
        clearProps: "all"
      })
      .from(".parallax-blur", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        stagger: 0.3
      }, "-=1");

      // Counter animation
      const target = { val: 0 };
      gsap.to(target, {
        val: 76950,
        duration: 3,
        delay: 0.5,
        ease: "power3.out",
        onUpdate: () => setCount(Math.floor(target.val)),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden bg-emerald-950 text-white px-4"
    >
      {/* Background Image & Parallax Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/80 to-emerald-950 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000&auto=format&fit=crop" 
          alt="Islamic Pattern Background"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="parallax-blur absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] opacity-50" />
        <div className="parallax-blur absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute inset-0 bg-arabesque opacity-[0.03] z-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center hero-content">
        <div className="inline-flex flex-col items-center mb-8">
          <div className="flex space-x-1.5 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={22} fill="#D4AF37" className="text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            ))}
          </div>
          <div className="px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-sm">
            <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
              Registered Spiritual Specialist
            </span>
          </div>
        </div>

        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 md:mb-8 tracking-tighter">
          <span className="block text-white drop-shadow-2xl">Famous <span className="text-gradient-gold">Molvi Ji</span></span>
          <span className="block mt-2">
            <span className="text-gold font-sans tabular-nums drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              {count.toLocaleString()}+
            </span> <span className="text-white/90">Cases Solved</span>
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 text-gold/80 font-bold text-[11px] md:text-sm uppercase tracking-widest">
          <span className="px-3 py-1 border border-gold/10 rounded-lg bg-gold/5 backdrop-blur-sm">#Love Problem</span>
          <span className="px-3 py-1 border border-gold/10 rounded-lg bg-gold/5 backdrop-blur-sm">#Lost Love Back</span>
          <span className="px-3 py-1 border border-gold/10 rounded-lg bg-gold/5 backdrop-blur-sm">#Stop Divorce</span>
        </div>

        <p className="text-base md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-4">
          !! आपका आत्मविशवास ही मेरी शक्ति है !! <br className="hidden md:block" />
          सभी समस्याओ का हल पाए !! निराश एक बार अवश्य फ़ोन करे। <br className="hidden md:block" />
          <span className="text-gold italic">Pure Islamic Spiritual Remedies for lasting peace.</span>
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gold hover:bg-white text-emerald-950 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-black text-base md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 animate-glow border-2 border-gold"
          >
            <Phone size={18} className="md:w-5 md:h-5" fill="currentColor" />
            <span>Call Now: +91 XXXXX XXXXX</span>
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-400 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-black text-base md:text-lg transition-all shadow-xl hover:scale-105 active:scale-95 border-2 border-white/20"
          >
            <MessageCircle size={18} className="md:w-5 md:h-5" fill="currentColor" />
            <span>WhatsApp Expert</span>
          </a>
        </div>

        {/* New Top Services Section from Image 6 */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="bg-gold py-3 px-8 rounded-xl inline-block mb-12 shadow-2xl transform -rotate-1">
            <h2 className="text-emerald-950 font-black text-2xl md:text-4xl uppercase tracking-tighter italic">Top Services</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Couple Problem", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop" },
              { label: "Love Back", img: "https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=200&h=200&auto=format&fit=crop" },
              { label: "Late Marriage", img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=200&h=200&auto=format&fit=crop" },
              { label: "Cheating In Love", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=200&h=200&auto=format&fit=crop" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                  <div className="absolute inset-0 bg-gold rounded-full -m-1 group-hover:m-[-4px] transition-all duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <a 
                    href="https://wa.me/91XXXXXXXXXX"
                    className="absolute -bottom-2 right-0 bg-green-500 text-white p-2 rounded-full shadow-lg border-2 border-white hover:bg-green-400 transition-colors"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                  </a>
                </div>
                <span className="font-black text-white text-xs md:text-sm uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
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
