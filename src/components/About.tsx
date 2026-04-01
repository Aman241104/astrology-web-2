"use client";

import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const features = t("about.features") as unknown as string[];

  return (
    <section id="about" className="py-6 md:py-12 bg-emerald-50/50 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        <div className="flex-1 relative group w-full max-w-[450px]">
          <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,43,0,0.15)] border-[6px] md:border-[10px] border-white transition-transform duration-700 group-hover:scale-[1.01] aspect-[4/5]">
            <Image
              src="/specialist.png"
              alt="Mohammed Arif Khan"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 object-cover"
              priority
            />
          </div>
          
          <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-white p-4 md:p-6 rounded-[1.5rem] shadow-2xl z-20 border border-gold/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 rtl:-left-auto rtl:-right-3 md:rtl:-right-4">
            <span className="block text-3xl md:text-4xl font-black text-emerald-900 leading-none">25+</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gold font-black mt-1 block">{t("about.years")}</span>
          </div>
        </div>

        <div className="flex-1 rtl:text-right">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-900 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3">
            {t("about.meet")}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950 mb-4 leading-tight tracking-tighter">
            {t("about.title")} <br className="hidden md:block" /> <span className="text-gradient-gold">{t("about.subtitle")}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed font-medium italic border-l-4 border-gold pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
            {t("about.quote")}
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            {t("about.desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8 rtl:text-right">
            {Array.isArray(features) && features.slice(0, 6).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 group/item rtl:space-x-reverse rtl:flex-row-reverse rtl:justify-start">
                <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-gold transition-transform flex-shrink-0">
                  <CheckCircle2 size={12} fill="currentColor" className="text-emerald-900" />
                </div>
                <span className="text-emerald-950 font-bold text-xs md:text-sm leading-none rtl:mr-2">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 rtl:flex-row-reverse">
            <a
              href="tel:+919784412832"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-950 hover:bg-gold text-white hover:text-emerald-950 px-6 py-3 rounded-xl font-black text-base shadow-xl transition-all group"
            >
              <Phone size={18} fill="currentColor" />
              <span>{t("common.call_now")}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
