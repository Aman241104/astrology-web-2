"use client";

import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-emerald-50/50 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        <div className="flex-1 relative group">
          <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,43,0,0.15)] border-[8px] md:border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.01]">
            <img
              src="https://images.unsplash.com/photo-1584043762279-bb996969560a?q=80&w=800&auto=format&fit=crop"
              alt="Mohammed Arif Khan"
              className="w-full h-auto grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-emerald-900/5 group-hover:bg-transparent transition-colors" />
            
            {/* Overlay Info */}
            <div className="absolute bottom-6 right-6 bg-gold text-emerald-950 px-6 py-3 rounded-2xl font-black shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-sm uppercase tracking-tighter">Verified Expert</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-900/10 rounded-full blur-3xl" />
          
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl z-20 border border-gold/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <span className="block text-4xl md:text-5xl font-black text-emerald-900 leading-none">25+</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-black mt-2 block">Years of Global Service</span>
          </div>
        </div>

        <div className="flex-1 lg:pl-6">
          <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-900 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
            Meet the Specialist
          </div>
          <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">Gold Medalist & Registered Rohani Specialist</h4>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-emerald-950 mb-6 leading-tight tracking-tighter">
            World Renowned Maulana <br className="hidden md:block" /> <span className="text-gradient-gold">Mohammed Arif Khan</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed font-medium italic border-l-4 border-gold pl-6">
            "Spiritual healing is not just a practice; it is the divine light that guides lost souls through the darkest tunnels of life back to happiness."
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Mohammed Arif Khan is a globally recognized authority in Islamic spiritual healing (Rohani Ilaj). For over 25 years, he has dedicated his life to helping individuals overcome seemingly impossible obstacles using pure Quranic remedies and ancient spiritual wisdom. He has been honored multiple times for his contributions to spiritual science and peace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {[
              "100% Privacy Maintained",
              "Pure Quranic & Halal Methods",
              "Global Reach (UK, USA, UAE, CA)",
              "Fast & Permanent Outcomes",
              "Specialist in Love & Marriage",
              "No Side Effects, Pure Healing",
              "Direct Phone Consultation",
              "Expert in Ilm-e-Jafar",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 group/item">
                <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover/item:scale-110 transition-transform flex-shrink-0">
                  <CheckCircle2 size={14} fill="currentColor" className="text-emerald-900" />
                </div>
                <span className="text-emerald-950 font-bold text-sm md:text-base leading-none">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/919784412832?text=Bismillah. Mohammed Arif Khan, I need your guidance."
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 bg-emerald-950 hover:bg-emerald-900 text-white px-8 py-4 rounded-xl font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Talk to Mohammed Arif Khan</span>
              <MessageCircle size={24} fill="currentColor" className="text-green-500 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="tel:+919784412832"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 bg-gold hover:bg-white text-emerald-950 px-8 py-4 rounded-xl font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group"
            >
              <Phone size={22} fill="currentColor" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
