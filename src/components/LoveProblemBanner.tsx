"use client";

import { MessageCircle, Heart, Star, Phone } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-12 md:py-20">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-arabesque opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
           
           {/* Visual Element Container */}
           <div className="w-full max-w-[450px] lg:max-w-[500px] relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gold/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <a 
                href="https://wa.me/919784412832?text=Bismillah. I need help with my love life."
                className="block relative aspect-[4/3] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[6px] md:border-[10px] border-gold shadow-[0_40px_100px_rgba(0,0,0,0.8)] scale-100 group-hover:scale-[1.02] transition-all duration-700 cursor-pointer"
              >
                 <img 
                   src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop" 
                   alt="Love Problem Solution Specialist" 
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
                 
                 {/* Floating Badges inside Image */}
                 <div className="absolute bottom-6 left-6 bg-gold text-emerald-950 px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                   100% Guaranteed
                 </div>
              </a>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-full p-2 md:p-3 shadow-[0_20px_50px_rgba(37,211,102,0.5)] z-20 animate-bounce">
                 <div className="bg-green-500 p-3 md:p-5 rounded-full text-white">
                    <MessageCircle size={28} className="md:w-8 md:h-8" fill="currentColor" />
                 </div>
              </div>

              {/* Verified Heart Badge */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gold text-emerald-950 p-3 md:p-5 rounded-full shadow-2xl z-20 border-4 border-emerald-900 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                 <Heart size={28} className="fill-emerald-950 md:w-6 md:h-6" />
              </div>
           </div>

           {/* TEXT CONTENT */}
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">Immediate Solutions within 24 Hours</span>
              </div>

              <div className="relative mb-6 md:mb-8 w-full">
                 <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                   LOVE <span className="text-gradient-gold">PROBLEM</span>
                 </h2>
                 <div className="flex flex-col md:flex-row items-center lg:items-end gap-3 mt-1">
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                      SOLVED PERMANENTLY
                    </h3>
                    <span className="text-xl md:text-3xl font-serif italic text-gold drop-shadow-md transform -rotate-2 bg-white/5 px-3 py-1 rounded-lg">
                      Free Advice
                    </span>
                 </div>
              </div>

              <p className="text-white/70 text-base md:text-xl font-medium mb-8 max-w-2xl leading-relaxed">
                Don't let misunderstandings or external influences destroy your beautiful relationship. Mohammed Arif Khan uses pure Rohani methods to restore love, trust, and passion between partners. 
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-10">
                 {[
                   "Get Lost Love Back", 
                   "Love Marriage Specialist", 
                   "Husband Wife Conflict", 
                   "Breakup Resolution",
                   "Parental Approval",
                   "Stop Separation"
                 ].map((service, idx) => (
                   <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2 group/item hover:bg-gold hover:border-gold transition-all cursor-default">
                      <Star size={10} className="text-gold fill-gold group-hover/item:text-emerald-950 group-hover/item:fill-emerald-950 transition-colors" />
                      <span className="text-[9px] md:text-xs font-bold text-white group-hover/item:text-emerald-950 uppercase tracking-widest">{service}</span>
                   </div>
                 ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="tel:+919784412832"
                  className="w-full sm:w-auto bg-white hover:bg-gold text-emerald-950 px-10 py-4 rounded-2xl font-black text-lg shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <Phone size={20} fill="currentColor" />
                  <span>Call: +91-9784412832</span>
                </a>
                <a
                  href="https://wa.me/919784412832"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group border-2 border-white/10"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  <span>Chat with Expert</span>
                </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
