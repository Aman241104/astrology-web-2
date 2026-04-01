"use client";

import Image from "next/image";
import { ShieldCheck, Heart, Phone, MessageCircle } from "lucide-react";

export default function HusbandWifeBanner() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-spiritual-dark">
      <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          <div className="relative group">
            <div className="relative aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border-[6px] md:border-[12px] border-white/10">
              <Image 
                src="/husband-wife.png" 
                alt="Wazifa For Husband Back" 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold border border-gold/30 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Relationship Healing Expert
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] mb-6 uppercase tracking-tighter">
              Wazifa For <br />
              <span className="text-gradient-gold italic">Husband</span> Back
            </h2>
            <p className="text-base md:text-xl text-white/70 mb-8 leading-relaxed font-medium italic border-l-4 border-gold pl-6">
              Stop marital conflicts and bring your husband's focus back to the family. Our powerful spiritual wazaif can rekindle love and commitment permanently within days.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full">
              {[
                "Restore Mutual Love",
                "Stop Extra-Marital Affairs",
                "End Daily Conflicts",
                "Divorce Prevention",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-gold/50 transition-colors">
                  <Heart className="text-gold fill-gold" size={16} />
                  <span className="text-xs font-black text-white uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-3 bg-white text-emerald-950 px-8 py-3.5 rounded-xl font-black text-base shadow-xl hover:bg-gold transition-all uppercase">
                <Phone size={20} fill="currentColor" />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-black text-base shadow-xl hover:scale-105 transition-all uppercase">
                <MessageCircle size={20} fill="currentColor" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
