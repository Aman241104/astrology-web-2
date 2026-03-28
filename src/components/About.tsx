"use client";

import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const features = t("about.features") as unknown as string[];

  return (
    <section id="about" className="py-8 md:py-12 bg-emerald-50/50 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        <div className="flex-1 relative group">
          <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,43,0,0.15)] border-[8px] md:border-[12px] border-white transition-transform duration-700 group-hover:scale-[1.01]">
            <img
              src="/specialist.png"
              alt="Mohammed Arif Khan"
              className="w-full h-auto grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-emerald-900/5 group-hover:bg-transparent transition-colors" />
            
            {/* Overlay Info */}
            <div className="absolute bottom-6 right-6 bg-gold text-emerald-950 px-6 py-3 rounded-2xl font-black shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform rtl:right-auto rtl:left-6 rtl:-rotate-3 rtl:group-hover:rotate-0">
              <span className="text-sm uppercase tracking-tighter">{t("common.verified_expert")}</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-900/10 rounded-full blur-3xl" />
          
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-8 bg-white p-5 md:p-8 rounded-[2rem] shadow-2xl z-20 border border-gold/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 rtl:-left-auto rtl:-right-4 md:rtl:-right-8 rtl:rotate-3 rtl:group-hover:rotate-0">
            <span className="block text-4xl md:text-5xl font-black text-emerald-900 leading-none">25+</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-black mt-2 block">{t("about.years")}</span>
          </div>
        </div>

        <div className="flex-1 lg:pl-6 rtl:lg:pl-0 rtl:lg:pr-6 rtl:text-right">
          <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-900 rounded-full font-bold text-xs uppercase tracking-widest mb-4">
            {t("about.meet")}
          </div>
          <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">{t("about.gold_medalist")}</h4>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-emerald-950 mb-6 leading-tight tracking-tighter">
            {t("about.title")} <br className="hidden md:block" /> <span className="text-gradient-gold">{t("about.subtitle")}</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed font-medium italic border-l-4 border-gold pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
            {t("about.quote")}
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            {t("about.desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 rtl:text-right">
            {Array.isArray(features) && features.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 group/item rtl:space-x-reverse rtl:flex-row-reverse rtl:justify-start">
                <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover/item:scale-110 transition-transform flex-shrink-0">
                  <CheckCircle2 size={14} fill="currentColor" className="text-emerald-900" />
                </div>
                <span className="text-emerald-950 font-bold text-sm md:text-base leading-none rtl:mr-3">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 rtl:flex-row-reverse">
            <a
              href="https://wa.me/919784412832?text=Bismillah. Mohammed Arif Khan, I need your guidance."
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 bg-[#25D366] hover:bg-emerald-950 text-white px-8 py-4 rounded-xl font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse rtl:space-x-reverse"
            >
              <span>{t("common.whatsapp_specialist")}</span>
              <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366] group-hover:fill-white group-hover:rotate-12 transition-all duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </a>
            <a
              href="tel:+919784412832"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-4 bg-gold hover:bg-white text-emerald-950 px-8 py-4 rounded-xl font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse rtl:space-x-reverse"
            >
              <Phone size={22} fill="currentColor" />
              <span>{t("common.call_now")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
