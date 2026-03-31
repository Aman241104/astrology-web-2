"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Phone, MessageCircle, Star, ShieldCheck, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-text-content > *", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.1,
        clearProps: "all"
      })
      .from(".hero-image-container", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
      }, "-=1");

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
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-spiritual-dark px-4 md:px-10"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-5" />
        <div className="absolute top-[20%] left-[10%] w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-700/10 rounded-full blur-[120px]" />
        
        {/* Floating Particles/Stars */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gold rounded-full opacity-20 animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-10 items-center relative z-10">
        
        {/* LEFT: Text Content */}
        <div className="hero-text-content flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold/10 rounded-full border border-gold/30 mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Star size={16} className="text-gold fill-gold animate-spin-slow" />
            <span className="text-gold text-xs md:text-sm font-black tracking-[0.3em] uppercase">
              10 Times Gold Medalist Specialist
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-8 tracking-tighter text-white uppercase">
            World Renowned <br />
            <span className="text-gradient-gold italic pr-4">Mohammed</span> <br />
            <span className="text-white">Arif Khan</span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            {["Vashikaran", "Love Problem", "Lost Love Back", "Marriage Expert"].map((tag, i) => (
              <div key={i} className="px-5 py-2 bg-emerald-900/40 backdrop-blur-md border border-gold/20 rounded-2xl shadow-xl flex items-center gap-2 hover:border-gold/50 transition-colors">
                <ShieldCheck size={14} className="text-gold" />
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{tag}</span>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-3xl text-white/70 max-w-xl mb-12 leading-tight font-medium italic">
            "Your confidence is my strength. Get immediate solution to all life problems within 24-72 hours."
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a
              href="tel:+919784412832"
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-emerald-950 px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 border-b-8 border-gray-200 uppercase tracking-tighter"
            >
              <Phone size={24} fill="currentColor" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919784412832"
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-12 py-6 rounded-3xl font-black text-xl transition-all shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 border-b-8 border-green-700 group uppercase tracking-tighter"
            >
              <MessageCircle size={24} fill="currentColor" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center gap-8 py-8 border-t border-white/5 w-full">
             <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 text-gold mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" className="animate-pulse" />)}
                </div>
                <p className="text-lg font-black text-white uppercase tracking-widest">
                  {count.toLocaleString()}+ <span className="text-gold">Happy Clients Globally</span>
                </p>
             </div>
          </div>

        </div>

        {/* RIGHT: Hero Image */}
        <div className="hero-image-container relative order-1 lg:order-2 flex justify-center float-slow">
          <div className="relative w-full max-w-[550px] aspect-[4/5]">
            {/* Spiritual Backdrops */}
            <div className="absolute inset-0 bg-gold rounded-[5rem] rotate-12 scale-95 opacity-10 animate-pulse" />
            <div className="absolute inset-0 bg-white rounded-[5rem] -rotate-6 scale-95 opacity-5" />
            
            {/* Main Specialist Image with Ornate Border */}
            <div className="w-full h-full rounded-[5rem] overflow-hidden border-[16px] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative group">
              <Image 
                src="/hero-image.png" 
                alt="Mohammed Arif Khan" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 550px"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-8 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-6 border-4 border-gold group-hover:scale-110 transition-transform">
                 <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-emerald-950 shadow-inner">
                    <Heart size={32} fill="currentColor" />
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-black text-emerald-950 uppercase tracking-[0.2em] leading-none mb-2">Verified Expert</p>
                    <p className="text-2xl font-black text-gold uppercase tracking-tighter leading-none">Spiritual Healer</p>
                 </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 bg-emerald-900 p-10 rounded-[4rem] shadow-2xl border-4 border-gold hidden lg:block pulse-gold">
               <Zap className="text-gold mb-4" size={48} fill="currentColor" />
               <p className="text-4xl font-black text-white leading-none tracking-tighter uppercase">24/7</p>
               <p className="text-sm font-bold text-gold uppercase tracking-widest">Available</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 cursor-pointer">
         <div className="w-[2px] h-20 bg-gradient-to-b from-gold to-transparent" />
         <span className="text-xs font-black uppercase tracking-[0.5em] text-gold">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
