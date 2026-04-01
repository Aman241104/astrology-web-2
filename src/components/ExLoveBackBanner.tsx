"use client";

import Image from "next/image";
import { Zap, Star, Phone, MessageCircle } from "lucide-react";

export default function ExLoveBackBanner() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.4)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-1 bg-gold rounded-full" />
              <span className="text-gold text-[9px] md:text-xs font-black uppercase tracking-[0.3em]">Quick Results Guaranteed</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-6 md:mb-8 tracking-tighter">
             Dua For <br />
             <span className="text-gradient-gold italic">Ex Love</span> Back
            </h2>            
            <p className="text-base md:text-xl text-white/70 font-medium mb-8 max-w-xl">
              Don't let a temporary misunderstanding end your beautiful relationship. Our powerful spiritual wazaif and remedies have reunited thousands of couples within 24-72 hours.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
               {[
                 "Rohani Specialist",
                 "Love Problem Expert",
                 "Relationship Reconnection",
                 "Stop Divorce"
               ].map((item, i) => (                 <div key={i} className="px-3 py-1.5 border border-white/20 rounded-full bg-white/5 flex items-center gap-2">
                    <Star size={10} className="text-gold fill-gold" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-3 bg-white text-emerald-950 px-8 py-3.5 rounded-xl font-black text-base shadow-2xl hover:bg-gold transition-all">
                <Phone size={20} fill="currentColor" />
                <span>Get Instant Help</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-black text-base shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={20} fill="currentColor" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-gold/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative aspect-square max-w-[400px] mx-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[6px] md:border-[12px] border-white/10 rotate-3 group-hover:rotate-0 transition-all duration-700">
              <Image 
                src="/bring-back-ex.png" 
                alt="Get Love Back Specialist" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
