"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Phone, MessageCircle, Star, ShieldCheck, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const heroRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
      gsap.from(".hero-visual", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[85vh] md:min-h-screen flex items-center pt-32 md:pt-40 pb-10 md:pb-20 overflow-hidden bg-spiritual-dark px-4 md:px-10"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-5" />
        <div className="absolute top-[20%] left-[10%] w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="hero-text-content flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 rounded-full border border-gold/30 mb-4 md:mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Star size={14} className="text-gold fill-gold animate-spin-slow" />
              <span className="text-gold text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">
                {t("hero.gold_medalist")}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4 md:mb-8 tracking-tighter text-white uppercase">
              Stop Your <span className="text-gradient-gold italic">Pain</span> <br />
              <span className="text-white">Get Your Love Back</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 md:mb-10">
              {["Lost Love Specialist", "Marriage Solution", "Breakup Recovery"].map((tag, i) => (
                <div key={i} className="px-3 py-1.5 bg-emerald-900/40 backdrop-blur-md border border-gold/20 rounded-xl shadow-xl flex items-center gap-2">
                  <Star size={12} className="text-gold fill-gold" />
                  <span className="text-[9px] md:text-xs font-bold text-white uppercase tracking-widest">{tag}</span>
                </div>
              ))}
            </div>

            <p className="text-white/80 text-sm md:text-2xl mb-8 md:mb-12 max-w-xl leading-relaxed font-bold italic border-l-4 border-gold pl-4 md:pl-8">
              "Don't suffer in silence. I have helped thousands reunite with their soulmates within 24 hours. Your solution is just one call away."
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-all uppercase group"
              >
                <MessageCircle size={28} fill="currentColor" className="group-hover:animate-bounce" />
                <span>Chat Now</span>
              </a>
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-emerald-950 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:bg-gold transition-all uppercase"
              >
                <Phone size={24} fill="currentColor" />
                <span style={{ direction: 'ltr' }}>+91-9784412832</span>
              </a>
            </div>

            {/* Trust Indicator below buttons */}
            <div className="mt-10 flex items-center gap-4 text-white/50">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-950 bg-emerald-900 overflow-hidden relative">
                       <Image src={`/profile-circle.png`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex gap-0.5">
                     {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-gold fill-gold" />)}
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest">50k+ Success Stories</span>
               </div>
            </div>
          </div>

          {/* RIGHT: Visual Element */}
          <div className="hero-visual relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] md:max-w-[550px] aspect-square md:aspect-[4/5] rounded-[3rem] md:rounded-[5rem] overflow-hidden border-[8px] md:border-[16px] border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
              <Image 
                src="/get-love-back.png" 
                alt="Love Problem Solution" 
                fill
                priority
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              
              {/* Verified Heart Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gold text-emerald-950 px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 whitespace-nowrap">
                 <Heart size={14} fill="currentColor" />
                 <span>Verified Specialist</span>
              </div>
            </div>

            {/* Compact Floating 24/7 Element */}
            <div className="absolute -top-4 -right-4 md:-top-10 md:-right-10 bg-emerald-900 p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-2 md:border-4 border-gold pulse-gold z-30">
               <p className="text-xl md:text-4xl font-black text-white leading-none tracking-tighter uppercase">24/7</p>
               <p className="text-[8px] md:text-sm font-bold text-gold uppercase tracking-widest">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More compact */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer">
         <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
         <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gold/60">SCROLL</span>
      </div>
    </section>
  );
}
