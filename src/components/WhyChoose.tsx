"use client";

import { Star, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();

  const leftList = t("why_choose.list") as unknown as string[];

  return (
    <section className="py-6 md:py-12 bg-emerald-900 relative overflow-hidden px-4">
      {/* Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Side: Service Capsules */}
        <div className="flex-1 w-full max-w-md space-y-2 rtl:text-right">
          <div className="mb-4 text-center lg:text-left rtl:lg:text-right">
            <h3 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-1">{t("why_choose.specialties")}</h3>
            <div className="h-0.5 w-16 bg-gold mx-auto lg:mx-0 rounded-full rtl:lg:mr-0 rtl:lg:ml-auto" />
          </div>
          {Array.isArray(leftList) && leftList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gold py-3 px-4 md:px-5 rounded-r-full flex items-center gap-3 shadow-xl border-l-4 border-white group hover:translate-x-2 transition-all duration-300 cursor-default rtl:rounded-r-none rtl:rounded-l-full rtl:border-l-0 rtl:border-r-4 rtl:hover:-translate-x-2 rtl:flex-row-reverse"
            >
              <div className="w-8 h-8 bg-emerald-950 rounded-full flex items-center justify-center text-gold shadow-inner group-hover:rotate-[360deg] transition-transform duration-700 shrink-0">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-tighter text-base md:text-lg">
                {item}
              </span>
            </div>
          ))}
          
          <div className="pt-4 text-center lg:text-left rtl:lg:text-right">
            <p className="text-white/60 font-bold uppercase tracking-widest text-[9px] mb-1">{t("common.available_globally")}</p>
            <a 
              href="tel:+919784412832" 
              className="text-2xl md:text-4xl font-black text-white tracking-tighter block mb-3 drop-shadow-lg hover:text-gold transition-colors ltr:direction-ltr"
              style={{ direction: 'ltr' }}
            >
              +91-9784412832
            </a>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start rtl:lg:justify-end">
              <a href="tel:+919784412832" className="bg-emerald-950/50 hover:bg-gold hover:text-emerald-950 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 transition-all text-gold font-bold uppercase tracking-widest text-[10px]">{t("common.call_now")}</a>
            </div>
          </div>
        </div>

        {/* Right Side: Description Box */}
        <div className="flex-[1.5] w-full">
          <div className="bg-emerald-950/60 backdrop-blur-2xl p-6 md:p-10 lg:p-12 rounded-[2.5rem] border-2 border-gold relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-6xl font-serif font-black text-white mb-4 tracking-tighter uppercase leading-none">
                {t("why_choose.title")} <span className="text-gold">{t("why_choose.subtitle")}</span>
              </h2>
              
              <div className="inline-block bg-gold px-6 py-1.5 rounded-full mb-6 shadow-lg">
                <p className="text-emerald-950 font-black uppercase tracking-tighter text-xs md:text-base leading-none">
                  {t("why_choose.tagline")}
                </p>
              </div>

              <div className="text-white/90 text-base md:text-lg font-medium leading-relaxed mb-8 space-y-4 italic">
                <p>
                  {t("why_choose.desc1")}
                </p>
                <p>
                  {t("why_choose.desc2")}
                </p>
              </div>

              <a 
                href="https://wa.me/919784412832"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] px-8 py-3.5 rounded-xl font-black text-lg transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse"
              >
                <span>{t("common.consult_specialist")}</span>
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
