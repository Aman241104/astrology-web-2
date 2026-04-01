"use client";

import Image from "next/image";
import { MessageCircle, Heart, Star, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LoveProblemBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-6 md:py-10">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-arabesque opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
           
           {/* Visual Element Container */}
           <div className="w-full max-w-[400px] lg:max-w-[450px] relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gold/30 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <a 
                href="https://wa.me/919784412832"
                className="block relative aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-gold shadow-[0_30px_80px_rgba(0,0,0,0.8)] scale-100 group-hover:scale-[1.02] transition-all duration-700 cursor-pointer"
              >
                 <Image 
                   src="/love-banner.png" 
                   alt="Love Problem Solution Specialist" 
                   fill
                   sizes="(max-width: 768px) 100vw, 450px"
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
              </a>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-white rounded-full p-1.5 md:p-2.5 shadow-[0_15px_40px_rgba(37,211,102,0.5)] z-20 animate-bounce rtl:-left-auto rtl:-right-3 md:rtl:-right-4">
                 <div className="bg-green-500 p-2 md:p-4 rounded-full text-white">
                    <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" />
                 </div>
              </div>
           </div>

           {/* TEXT CONTENT */}
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 flex-1 rtl:lg:text-right rtl:lg:items-end">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 mb-4 backdrop-blur-md rtl:flex-row-reverse">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                <span className="text-[9px] md:text-xs font-black text-white uppercase tracking-[0.2em]">{t("banner.immediate")}</span>
              </div>

              <div className="relative mb-4 md:mb-6 w-full">
                 <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                   {t("banner.title")} <span className="text-gradient-gold">{t("banner.highlight")}</span>
                 </h2>
                 <div className="flex flex-col md:flex-row items-center lg:items-end gap-2 mt-1 rtl:flex-row-reverse rtl:lg:items-start">
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                      {t("banner.subtitle")}
                    </h3>
                 </div>
              </div>

              <p className="text-white/70 text-sm md:text-lg font-medium mb-6 max-w-xl leading-relaxed">
                {t("banner.desc")}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto rtl:flex-row-reverse">
                <a
                  href="tel:+919784412832"
                  className="w-full sm:w-auto bg-white hover:bg-gold text-emerald-950 px-8 py-3 rounded-xl font-black text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group rtl:flex-row-reverse"
                >
                  <Phone size={18} fill="currentColor" />
                  <span style={{ direction: 'ltr' }}>+91-9784412832</span>
                </a>
                <a
                  href="https://wa.me/919784412832"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white px-8 py-3 rounded-xl font-black text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group border-2 border-white/10 rtl:flex-row-reverse"
                >
                  <span>{t("common.chat_with_expert")}</span>
                </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
