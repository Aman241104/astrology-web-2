"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Phone, MessageCircle, Star, ShieldCheck, Zap, Heart } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-text-content > *", { 
        x: -60, 
        opacity: 0, 
        stagger: 0.1,
        clearProps: "all"
      })
      .from(".hero-image-container", {
        x: 60,
        opacity: 0,
        duration: 1.5,
      }, "-=1");

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
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white px-4 md:px-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] border border-emerald-100 rounded-full opacity-20 -z-10 animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT: Text Content */}
        <div className="hero-text-content flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-8 shadow-sm">
            <Star size={14} className="text-gold fill-gold" />
            <span className="text-emerald-900 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
              10 Times Gold Medalist Specialist
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tighter text-emerald-950">
            World Renowned <br />
            <span className="text-gradient-gold italic">Mohammed</span> <br />
            <span className="text-emerald-900">Arif Khan</span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {["Love Problem", "Lost Love Back", "Husband Wife", "Marriage"].map((tag, i) => (
              <div key={i} className="px-4 py-1.5 bg-white border border-emerald-100 rounded-xl shadow-sm flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span className="text-[10px] md:text-xs font-bold text-emerald-900 uppercase tracking-widest">#{tag}</span>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-2xl text-gray-600 max-w-xl mb-10 leading-relaxed font-medium">
            !! आपका आत्मविशवास ही मेरी शक्ति है !! <br />
            सभी समस्याओ का तुरंत समाधान पाए !! <br />
            <span className="text-emerald-900 font-black italic underline decoration-gold/50 underline-offset-4">
              {count.toLocaleString()}+ Cases Solved Successfully.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="tel:+919784412832"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-950 hover:bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_50px_rgba(0,43,0,0.3)] hover:scale-105 active:scale-95 border-2 border-white/10"
            >
              <Phone size={22} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919784412832"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95 border border-white/10 group"
            >
              <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 py-6 border-t border-emerald-50 w-full lg:w-auto">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                  </div>
                ))}
             </div>
             <div className="text-left">
                <div className="flex gap-0.5 text-gold mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest">Trusted by 50K+ Clients</p>
             </div>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="hero-image-container relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[4/5]">
            {/* Visual Backdrops */}
            <div className="absolute inset-0 bg-gold rounded-[4rem] rotate-6 scale-95 opacity-20 -z-10" />
            <div className="absolute inset-0 bg-emerald-900 rounded-[4rem] -rotate-3 scale-95 opacity-10 -z-10" />
            
            {/* Main Specialist Image */}
            <div className="w-full h-full rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1590059378132-7a083436098c?q=80&w=800&auto=format&fit=crop" 
                alt="Mohammed Arif Khan" 
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-100 whitespace-nowrap">
                 <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-emerald-950">
                    <Heart size={20} fill="currentColor" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest leading-none mb-1">Relationship Expert</p>
                    <p className="text-xs font-bold text-gray-500">Verified Spiritual Healer</p>
                 </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-emerald-50 hidden md:block">
               <Zap className="text-gold mb-2" size={32} fill="currentColor" />
               <p className="text-2xl font-black text-emerald-950 leading-none">Instant</p>
               <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Solutions</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce cursor-pointer">
         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900">Explore</span>
         <div className="w-[1px] h-10 bg-emerald-900" />
      </div>
    </section>
  );
}
