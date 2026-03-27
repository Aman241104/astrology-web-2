"use client";

import { MessageCircle, Heart, Star } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-emerald-950">
      {/* Main Banner Container */}
      <div className="relative flex flex-col items-center py-12 md:py-20 lg:py-24">
        
        {/* Intense Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
           <div className="absolute inset-0" style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.4) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
           
           {/* Visual Element Container */}
           <div className="w-full max-w-[360px] md:max-w-[450px] lg:max-w-[550px] relative my-6 md:my-0 order-2 md:order-1 group">
              <a 
                href="https://wa.me/91XXXXXXXXXX"
                className="block relative aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden border-[10px] md:border-[15px] border-gold shadow-[0_30px_70px_rgba(0,0,0,0.6)] scale-105 group-hover:scale-110 transition-all duration-500 cursor-pointer"
              >
                 <img 
                   src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop" 
                   alt="Love Problem Solution Specialist" 
                   className="w-full h-full object-cover"
                 />
                 {/* Decorative Corner Accents */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-gold -translate-y-1/2 translate-x-1/2 rotate-45 shadow-2xl"></div>
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold translate-y-1/2 -translate-x-1/2 rotate-45 shadow-2xl"></div>
                 <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors" />
              </a>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-8 -left-4 md:-bottom-10 md:-left-8 bg-white rounded-full p-2 md:p-3 shadow-2xl z-20 animate-bounce">
                 <div className="bg-green-500 p-4 md:p-6 rounded-full">
                    <MessageCircle size={32} className="text-white fill-white md:w-12 md:h-12" />
                 </div>
              </div>

              {/* Verified Heart Badge */}
              <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 bg-gold text-emerald-950 p-3 md:p-5 rounded-full shadow-2xl z-20 border-4 border-emerald-900 rotate-12">
                 <Heart size={32} className="fill-emerald-900 md:w-10 md:h-10" />
              </div>
           </div>

           {/* TEXT CONTENT */}
           <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 flex-1">
              <div className="relative mb-8 w-full">
                 <h2 className="text-5xl md:text-[70px] lg:text-[90px] font-serif font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                   LOVE PROBLEM
                 </h2>
                 <div className="flex flex-col md:flex-row items-center md:items-end gap-3 mt-2">
                    <h3 className="text-4xl md:text-[50px] lg:text-[70px] font-black text-gold uppercase tracking-tighter leading-none drop-shadow-lg">
                      SOLUTION
                    </h3>
                    <span className="text-3xl md:text-[40px] lg:text-[60px] font-serif italic text-gold/80 drop-shadow-md transform -rotate-2 md:mb-1">
                      Islamic Specialist
                    </span>
                 </div>
              </div>

              {/* Services List */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-10">
                 {[
                   "Get Lost Love Back", 
                   "Marriage Approval", 
                   "Husband Wife Peace", 
                   "Stop Separation"
                 ].map((service, idx) => (
                   <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 px-5 md:px-7 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
                      <Star size={14} className="text-gold fill-gold" />
                      <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.1em]">{service}</span>
                   </div>
                 ))}
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="bg-gold hover:bg-gold-600 text-emerald-950 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group"
              >
                <span>Call Hazrat Sahab Now</span>
                <div className="w-8 h-8 bg-emerald-900/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Star size={16} fill="currentColor" />
                </div>
              </a>
           </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
    </section>
  );
}
