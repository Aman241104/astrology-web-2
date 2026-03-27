"use client";

import { Star, Phone, MessageCircle } from "lucide-react";

export default function WhyChoose() {
  const leftList = [
    "Dua For Love Marriage",
    "Dua For Gf/ Bf Solution",
    "Dua For Husband Back",
    "Dua For Wife Back",
    "Wazifa For Fast Marriage",
  ];

  return (
    <section className="py-16 md:py-32 bg-emerald-900 relative overflow-hidden px-4">
      {/* Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Service Capsules */}
        <div className="flex-1 w-full max-w-md space-y-4">
          {leftList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gold p-4 md:p-5 rounded-r-full flex items-center gap-4 shadow-xl border-l-8 border-white group hover:translate-x-4 transition-transform duration-300"
            >
              <div className="w-10 h-10 bg-emerald-950 rounded-full flex items-center justify-center text-gold shadow-inner group-hover:rotate-[360deg] transition-transform duration-700">
                <Star size={20} fill="currentColor" />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-tighter text-lg md:text-xl">
                {item}
              </span>
            </div>
          ))}
          
          <div className="pt-8 text-center lg:text-left">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="text-3xl md:text-5xl font-black text-white tracking-tighter block mb-2 drop-shadow-lg"
            >
              +91 XXXXX XXXXX
            </a>
            <div className="inline-block bg-emerald-950/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <span className="text-gold font-bold uppercase tracking-widest text-sm">Call Us For Best Solutions</span>
            </div>
          </div>
        </div>

        {/* Right Side: Description Box */}
        <div className="flex-[1.5] w-full">
          <div className="bg-emerald-950/40 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border-4 border-gold shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 tracking-tighter uppercase">
                WHY <span className="text-gold">CHOOSE US?</span>
              </h2>
              
              <div className="inline-block bg-gold px-8 py-2 rounded-full mb-10 shadow-lg">
                <p className="text-emerald-950 font-black uppercase tracking-tighter text-sm md:text-lg">
                  Know Why You Can Choose Hazrat Abdul Rehman
                </p>
              </div>

              <div className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed mb-12 space-y-6 italic">
                <p>
                  The well-known spiritual specialist Hazrat Abdul Rehman is available to assist those who are experiencing difficulties. His spiritual answers are worthwhile, and individuals can use them to solve a variety of concerns.
                </p>
                <p>
                  From marital troubles, career issues, money difficulties, relationship issues, and marital issues, among others. He receives visits from people all around the world who are looking for the best spiritual guidance.
                </p>
              </div>

              <a 
                href="https://wa.me/91XXXXXXXXXX"
                className="inline-flex items-center gap-4 bg-gold hover:bg-white text-emerald-950 px-12 py-6 rounded-full font-black text-xl md:text-2xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95 group"
              >
                <span>CHAT TO SPECIALIST</span>
                <MessageCircle size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
