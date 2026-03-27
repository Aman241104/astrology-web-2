"use client";

import { MessageCircle, Heart, Star, Phone } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 md:py-32">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-arabesque opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
           
           {/* Visual Element Container */}
           <div className="w-full max-w-[450px] lg:max-w-[550px] relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gold/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <a 
                href="https://wa.me/91XXXXXXXXXX"
                className="block relative aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-gold shadow-[0_40px_100px_rgba(0,0,0,0.7)] scale-100 group-hover:scale-[1.03] transition-all duration-700 cursor-pointer"
              >
                 <img 
                   src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop" 
                   alt="Love Problem Solution Specialist" 
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
              </a>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white rounded-full p-2 md:p-3 shadow-[0_20px_50px_rgba(37,211,102,0.4)] z-20 animate-bounce">
                 <div className="bg-green-500 p-4 md:p-6 rounded-full text-white">
                    <MessageCircle size={32} className="md:w-10 md:h-10" fill="currentColor" />
                 </div>
              </div>

              {/* Verified Heart Badge */}
              <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 bg-gold text-emerald-950 p-4 md:p-6 rounded-full shadow-2xl z-20 border-4 border-emerald-900 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                 <Heart size={32} className="fill-emerald-950 md:w-8 md:h-8" />
              </div>
           </div>

           {/* TEXT CONTENT */}
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">Live Consultation Available</span>
              </div>

              <div className="relative mb-8 md:mb-12 w-full">
                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                   LOVE <span className="text-gradient-gold">PROBLEM</span>
                 </h2>
                 <div className="flex flex-col md:flex-row items-center lg:items-end gap-3 mt-2">
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                      SOLUTION
                    </h3>
                    <span className="text-2xl md:text-4xl font-serif italic text-gold drop-shadow-md transform -rotate-2">
                      Expert Guidance
                    </span>
                 </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-10 md:mb-14">
                 {[
                   "Get Lost Love Back", 
                   "Family Approval", 
                   "Husband Wife Peace", 
                   "Stop Separation"
                 ].map((service, idx) => (
                   <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-xl flex items-center gap-2 group/item hover:bg-gold/20 transition-all cursor-default">
                      <Star size={12} className="text-gold fill-gold group-hover/item:scale-125 transition-transform" />
                      <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">{service}</span>
                   </div>
                 ))}
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="w-full sm:w-auto bg-white text-emerald-950 px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all hover:bg-gold hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group"
              >
                <span>Call Now: +91 XXXXX XXXXX</span>
                <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
