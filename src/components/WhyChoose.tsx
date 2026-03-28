"use client";

import { Star, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();

  const leftList = t("why_choose.list") as unknown as string[];

  return (
    <section className="py-8 md:py-12 bg-emerald-900 relative overflow-hidden px-4">
      {/* Bokeh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Side: Service Capsules */}
        <div className="flex-1 w-full max-w-md space-y-3 rtl:text-right">
          <div className="mb-6 text-center lg:text-left rtl:lg:text-right">
            <h3 className="text-gold font-black uppercase tracking-[0.3em] text-xs mb-2">{t("why_choose.specialties")}</h3>
            <div className="h-1 w-20 bg-gold mx-auto lg:mx-0 rounded-full rtl:lg:mr-0 rtl:lg:ml-auto" />
          </div>
          {Array.isArray(leftList) && leftList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gold p-4 md:p-5 rounded-r-full flex items-center gap-4 shadow-2xl border-l-8 border-white group hover:translate-x-6 transition-all duration-300 cursor-default rtl:rounded-r-none rtl:rounded-l-full rtl:border-l-0 rtl:border-r-8 rtl:hover:-translate-x-6 rtl:hover:translate-x-0 rtl:flex-row-reverse"
            >
              <div className="w-10 h-10 bg-emerald-950 rounded-full flex items-center justify-center text-gold shadow-inner group-hover:rotate-[360deg] transition-transform duration-700">
                <Star size={20} fill="currentColor" />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-tighter text-lg md:text-xl">
                {item}
              </span>
            </div>
          ))}
          
          <div className="pt-6 text-center lg:text-left rtl:lg:text-right">
            <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-2">{t("common.available_globally")}</p>
            <a 
              href="tel:+919784412832" 
              className="text-3xl md:text-5xl font-black text-white tracking-tighter block mb-4 drop-shadow-lg hover:text-gold transition-colors ltr:direction-ltr"
              style={{ direction: 'ltr' }}
            >
              +91-9784412832
            </a>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start rtl:lg:justify-end">
              <a href="tel:+919784412832" className="bg-emerald-950/50 hover:bg-gold hover:text-emerald-950 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 transition-all text-gold font-bold uppercase tracking-widest text-xs">{t("common.call_now")}</a>
              <a href="https://wa.me/919784412832" className="bg-[#25D366] hover:bg-white hover:text-[#25D366] backdrop-blur-md px-6 py-2 rounded-full border border-white/20 transition-all text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2 group rtl:flex-row-reverse">
                <div className="bg-white rounded-full p-0.5 group-hover:bg-[#25D366] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t("common.whatsapp")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Description Box */}
        <div className="flex-[1.5] w-full">
          <div className="bg-emerald-950/60 backdrop-blur-2xl p-8 md:p-12 lg:p-16 rounded-[3rem] border-4 border-gold relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 tracking-tighter uppercase leading-none">
                {t("why_choose.title")} <span className="text-gold">{t("why_choose.subtitle")}</span>
              </h2>
              
              <div className="inline-block bg-gold px-8 py-2 rounded-full mb-8 shadow-lg">
                <p className="text-emerald-950 font-black uppercase tracking-tighter text-sm md:text-lg leading-none">
                  {t("why_choose.tagline")}
                </p>
              </div>

              <div className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-10 space-y-6 italic">
                <p>
                  {t("why_choose.desc1")}
                </p>
                <p>
                  {t("why_choose.desc2")}
                </p>
                <p className="hidden md:block">
                   {t("why_choose.desc3")}
                </p>
              </div>

              <a 
                href="https://wa.me/919784412832?text=Bismillah. Mohammed Arif Khan, I want to discuss my problem."
                className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] px-10 py-5 rounded-full font-black text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse"
              >
                <span>{t("common.consult_specialist")}</span>
                <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366] group-hover:fill-white group-hover:rotate-12 transition-all duration-500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
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
