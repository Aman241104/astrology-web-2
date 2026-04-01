"use client";

import { MessageCircle, Star, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function OneClickSolutionBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-16 bg-gold relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-emerald-950 uppercase tracking-tighter mb-2 leading-[0.9]">
              Need <span className="italic">Immediate</span> <br className="md:hidden" /> Help?
            </h2>
            <p className="text-emerald-900 font-black uppercase tracking-widest text-[10px] md:text-xs opacity-80">
              Get your first spiritual consultation for FREE.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
             <a 
               href="https://wa.me/919784412832"
               className="flex items-center justify-center gap-2 bg-emerald-950 text-white px-6 py-3.5 rounded-xl font-black text-base shadow-2xl hover:scale-105 transition-all"
             >
               <span>WhatsApp Now</span>
             </a>
             <a 
               href="tel:+919784412832"
               className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-6 py-3.5 rounded-xl font-black text-base shadow-2xl hover:bg-emerald-50 transition-all ltr:direction-ltr"
               style={{ direction: 'ltr' }}
             >
               <span>+91-9784412832</span>
             </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Stars */}
      <div className="absolute top-4 left-10 opacity-20">
        <Star size={40} fill="currentColor" className="text-emerald-950" />
      </div>
      <div className="absolute bottom-4 right-10 opacity-20">
        <Star size={60} fill="currentColor" className="text-emerald-950" />
      </div>
    </section>
  );
}
