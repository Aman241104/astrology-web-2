"use client";

import { Star, Phone, MessageCircle } from "lucide-react";

export default function WhyChoose() {
  const leftList = [
    "Dua For Love Marriage",
    "Dua For Gf/ Bf Solution",
    "Dua For Husband Back",
    "Dua For Wife Back",
    "Wazifa For Fast Marriage",
    "Rohani Ilaj For Peace",
  ];

  return (
    <section className="py-12 md:py-20 bg-emerald-900 relative overflow-hidden px-4">
      {/* Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side: Service Capsules */}
        <div className="flex-1 w-full max-w-md space-y-3">
          <div className="mb-6 text-center lg:text-left">
            <h3 className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-2">Our Specialties</h3>
            <div className="h-1 w-20 bg-gold mx-auto lg:mx-0 rounded-full" />
          </div>
          {leftList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gold p-4 md:p-5 rounded-r-full flex items-center gap-4 shadow-2xl border-l-8 border-white group hover:translate-x-6 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-emerald-950 rounded-full flex items-center justify-center text-gold shadow-inner group-hover:rotate-[360deg] transition-transform duration-700">
                <Star size={20} fill="currentColor" />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-tighter text-lg md:text-xl">
                {item}
              </span>
            </div>
          ))}
          
          <div className="pt-6 text-center lg:text-left">
            <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-2">Available 24/7 for Global Support</p>
            <a 
              href="tel:+919784412832" 
              className="text-3xl md:text-5xl font-black text-white tracking-tighter block mb-4 drop-shadow-lg hover:text-gold transition-colors"
            >
              +91-9784412832
            </a>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="tel:+919784412832" className="bg-emerald-950/50 hover:bg-gold hover:text-emerald-950 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 transition-all text-gold font-bold uppercase tracking-widest text-xs">Call Us Now</a>
              <a href="https://wa.me/919784412832" className="bg-green-500/80 hover:bg-green-500 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 transition-all text-white font-bold uppercase tracking-widest text-xs">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Right Side: Description Box */}
        <div className="flex-[1.5] w-full">
          <div className="bg-emerald-950/60 backdrop-blur-2xl p-8 md:p-12 lg:p-16 rounded-[3rem] border-4 border-gold shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 tracking-tighter uppercase leading-none">
                WHY <span className="text-gold">CHOOSE US?</span>
              </h2>
              
              <div className="inline-block bg-gold px-8 py-2 rounded-full mb-8 shadow-lg">
                <p className="text-emerald-950 font-black uppercase tracking-tighter text-sm md:text-lg leading-none">
                  Pure Spiritual Guidance & Guaranteed Results
                </p>
              </div>

              <div className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-10 space-y-6 italic">
                <p>
                  The world-renowned spiritual specialist Mohammed Arif Khan is dedicated to assisting those facing life's toughest challenges. His spiritual solutions are derived from deep Quranic wisdom, offering a path to resolution that is both pure and effective.
                </p>
                <p>
                  Whether you are struggling with marital conflicts, career setbacks, deep-rooted family issues, or lost love, Mohammed Arif Khan provides personalized Rohani Ilaj that has helped millions worldwide find peace and happiness.
                </p>
                <p className="hidden md:block">
                   Our methods are 100% Halal, safe, and confidential. We believe in providing immediate relief and permanent solutions to all your worries through the power of prayer and spiritual alignment.
                </p>
              </div>

              <a 
                href="https://wa.me/919784412832?text=Bismillah. Mohammed Arif Khan, I want to discuss my problem."
                className="inline-flex items-center gap-4 bg-gold hover:bg-white text-emerald-950 px-10 py-5 rounded-full font-black text-xl md:text-2xl shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 group"
              >
                <span>CONSULT SPECIALIST</span>
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
