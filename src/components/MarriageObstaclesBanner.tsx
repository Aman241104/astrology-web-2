"use client";

import Image from "next/image";
import { Heart, CheckCircle, Phone, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarriageObstaclesBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          <div className="relative group order-2 lg:order-1 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[400px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] border-[6px] md:border-[12px] border-emerald-950/5 group-hover:border-gold/20 transition-all duration-700">
              <Image 
                src="/love-marriage.png"
                alt="Marriage Obstacles Specialist"
                fill                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-900 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Star size={14} fill="currentColor" className="text-gold" />
              #1 Marriage Specialist
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-emerald-950 leading-[0.9] mb-6 uppercase tracking-tighter">
             Dua For <br />
             <span className="text-gradient-gold italic">Love Marriage</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-8 leading-relaxed font-medium italic border-l-4 border-gold pl-6">
             Remove all obstacles in your path to a blissful marriage. Our spiritual remedies can soften hearts and align your life to ensure a smooth path to your union within 24-72 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full">
             {[
               "Parent's Approval",
               "Social Barriers",
               "Spiritual Compatibility",
               "Family Conflict"
             ].map((item, i) => (                <div key={i} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100 group/item hover:bg-white hover:shadow-lg transition-all">
                  <CheckCircle className="text-emerald-600 group-hover/item:text-gold" size={20} />
                  <span className="text-xs font-black text-emerald-950 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-3 bg-emerald-950 text-white px-8 py-3.5 rounded-xl font-black text-base shadow-xl hover:scale-105 transition-all border-b-4 border-emerald-800 uppercase">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-xl font-black text-base shadow-xl hover:scale-105 transition-all border-b-4 border-green-700 uppercase">
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
