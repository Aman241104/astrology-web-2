"use client";

import Image from "next/image";
import { Heart, CheckCircle, Phone, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MarriageObstaclesBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group order-2 lg:order-1 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[500px] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[12px] border-emerald-950/5 group-hover:border-gold/20 transition-all duration-700">
              <Image 
                src="/love-marriage.png"
                alt="Marriage Obstacles Specialist"
                fill                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-10 -right-4 bg-emerald-950 p-10 rounded-[3rem] shadow-2xl hidden md:block max-w-[240px] rotate-3 group-hover:rotate-0 transition-transform border-4 border-gold pulse-gold">
               <Heart className="text-gold mb-4 animate-pulse" size={48} fill="currentColor" />
               <p className="text-xl font-black text-white uppercase leading-none tracking-tighter">
                 Convince Parents <br /> <span className="text-gold">Instantly</span>
               </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-100 text-emerald-900 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">
              <Star size={16} fill="currentColor" className="text-gold" />
              #1 Marriage Specialist
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-emerald-950 leading-[0.85] mb-10 uppercase tracking-tighter">
             Dua For <br />
             <span className="text-gradient-gold italic">Love Marriage</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium italic border-l-8 border-gold pl-8">
             Remove all obstacles in your path to a blissful marriage. Our spiritual remedies can soften hearts and align your life to ensure a smooth path to your union within 24-72 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
             {[
               "Parent's Approval",
               "Social Barriers",
               "Spiritual Compatibility",
               "Family Conflict"
             ].map((item, i) => (                <div key={i} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 group/item hover:bg-white hover:shadow-xl transition-all">
                  <CheckCircle className="text-emerald-600 group-hover/item:text-gold" size={24} />
                  <span className="text-sm font-black text-emerald-950 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+919784412832" className="flex items-center justify-center gap-4 bg-emerald-950 text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all border-b-8 border-emerald-800 uppercase">
                <Phone size={24} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/919784412832" className="flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all border-b-8 border-green-700 uppercase">
                <MessageCircle size={24} fill="currentColor" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
