"use client";

import Image from "next/image";
import { ShieldCheck, Heart, Phone, MessageCircle } from "lucide-react";

export default function HusbandWifeBanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-spiritual-dark">
      <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group">
            <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border-[12px] border-white/10">
              <Image 
                src="/husband-wife.png" 
                alt="Husband Wife Problem Solution" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
            </div>
            
            <div className="absolute -top-10 -left-10 bg-gold p-10 rounded-[3rem] shadow-2xl hidden md:block animate-bounce pulse-gold">
               <ShieldCheck className="text-emerald-950 mb-4" size={48} />
               <p className="text-xl font-black text-emerald-950 uppercase tracking-tighter leading-none">
                 100% Privacy <br /> Guaranteed
               </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block px-6 py-2 bg-gold/20 text-gold border border-gold/30 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              Relationship Healing Expert
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] mb-10 uppercase tracking-tighter">
              Wazifa For <br />
              <span className="text-gradient-gold italic">Husband</span> Back
            </h2>
            <p className="text-xl text-white/70 mb-12 leading-relaxed font-medium italic border-l-8 border-gold pl-8">
              Stop marital conflicts and bring your husband's focus back to the family. Our powerful spiritual wazaif can rekindle love and commitment permanently within days.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full">
              {[
                "Restore Mutual Love",
                "Stop Extra-Marital Affairs",
                "End Daily Conflicts",
                "Divorce Prevention",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors">
                  <Heart className="text-gold fill-gold" size={20} />
                  <span className="text-sm font-black text-white uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-4 bg-white text-emerald-950 px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:bg-gold transition-all border-b-8 border-gray-200 uppercase">
                <Phone size={24} fill="currentColor" />
                <span>Call Specialist</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all border-b-8 border-green-700 uppercase">
                <MessageCircle size={24} fill="currentColor" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
