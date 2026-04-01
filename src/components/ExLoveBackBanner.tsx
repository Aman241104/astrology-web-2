"use client";

import Image from "next/image";
import { Zap, Star, Phone, MessageCircle } from "lucide-react";

export default function ExLoveBackBanner() {
  return (
    <section className="relative py-20 overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.4)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-gold rounded-full" />
              <span className="text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Quick Results Guaranteed</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.85] mb-8 tracking-tighter">
             Dua For <br />
             <span className="text-gradient-gold italic">Ex Love</span> Back
            </h2>            
            <p className="text-white/70 text-lg md:text-xl font-medium mb-10 max-w-xl">
              Don't let a temporary misunderstanding end your beautiful relationship. Our powerful spiritual wazaif and remedies have reunited thousands of couples within 24-72 hours.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
               {[
                 "Rohani Specialist",
                 "Love Problem Expert",
                 "Relationship Reconnection",
                 "Stop Divorce"
               ].map((item, i) => (                 <div key={i} className="px-4 py-2 border border-white/20 rounded-full bg-white/5 flex items-center gap-2">
                    <Star size={12} className="text-gold fill-gold" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-4 bg-white text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-gold transition-all">
                <Phone size={22} fill="currentColor" />
                <span>Get Instant Help</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all">
                <MessageCircle size={22} fill="currentColor" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-10 bg-gold/10 blur-[100px] rounded-full animate-pulse" />
            <div className="relative aspect-square max-w-[500px] mx-auto rounded-[4rem] overflow-hidden border-[12px] border-white/10 rotate-3 group-hover:rotate-0 transition-all duration-700">
              <Image 
                src="/bring-back-ex.png" 
                alt="Get Love Back Specialist" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-emerald-50 text-emerald-950">
                 <Zap className="text-gold mb-2" size={32} fill="currentColor" />
                 <p className="text-2xl font-black leading-none uppercase">Instant</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Solution</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
