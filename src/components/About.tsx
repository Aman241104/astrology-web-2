"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 bg-emerald-50/50 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
        <div className="flex-1 relative group">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,43,0,0.2)] border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1590059378132-7a083436098c?q=80&w=800&auto=format&fit=crop"
              alt="Hazrat Abdul Rehman Khan"
              className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-900/10 rounded-full blur-3xl" />
          
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 md:p-10 rounded-3xl shadow-2xl z-20 border border-gold/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <span className="block text-4xl md:text-6xl font-black text-emerald-900 leading-none">20+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-black mt-2 block">Years of Global Service</span>
          </div>
        </div>

        <div className="flex-1 lg:pl-10">
          <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-900 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            Meet the Specialist
          </div>
          <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">Gold Medalist & Registered Specialist</h4>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-emerald-950 mb-8 leading-[1.1] tracking-tighter">
            World Renowned Maulana <br className="hidden md:block" /> <span className="text-gradient-gold">Hazrat Abdul Rehman</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-medium italic">
            "Spiritual healing is the light that guides you through the darkest tunnels of life."
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed">
            Hazrat Abdul Rehman Khan is a well-known specialist who has made Indian Islamic healing (Rohani Ilaj) 
            popular around the world. With over two decades of experience, he has received numerous honors for 
            providing Pure Quranic solutions to complex life challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
            {[
              "Full Privacy Maintained",
              "Quranic & Halal Remedies",
              "Global Reach (UK, USA, UAE)",
              "Effective Outcomes Quickly",
              "Expert in Rohani Ilaj",
              "No Side Effects",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 group/item">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover/item:scale-110 transition-transform">
                  <CheckCircle2 size={16} fill="currentColor" className="text-emerald-900" />
                </div>
                <span className="text-emerald-950 font-bold text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-flex items-center space-x-4 bg-emerald-950 hover:bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group"
          >
            <span>Consult Hazrat Sahab</span>
            <MessageCircle size={24} fill="currentColor" className="text-green-500 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
