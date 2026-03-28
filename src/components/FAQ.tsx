"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CircleHelp, ShieldCheck, Clock, MessageSquare, Heart, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const rawFaqs = t("faq.items");
  const faqs = Array.isArray(rawFaqs) ? rawFaqs.map((item, idx) => ({
    ...item,
    icon: [ShieldCheck, Clock, CircleHelp, Heart, MessageSquare][idx] || CircleHelp
  })) : [];

  return (
    <section className="py-12 md:py-20 bg-emerald-50/30 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-900 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            {t("faq.subtitle")}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tighter">
            {t("faq.title")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            {t("faq.desc")}
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-emerald-100/50 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,43,0,0.08)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 md:p-8 text-left flex items-center justify-between group rtl:text-right"
              >
                <div className="flex items-center gap-4 md:gap-6 rtl:flex-row-reverse">
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                    openIndex === idx ? "bg-emerald-950 text-gold" : "bg-emerald-50 text-emerald-900 group-hover:bg-gold/20 group-hover:text-gold"
                  )}>
                    <faq.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <span className={cn(
                    "font-bold text-base md:text-2xl transition-colors",
                    openIndex === idx ? "text-emerald-950" : "text-gray-700 group-hover:text-emerald-900"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                  openIndex === idx ? "bg-gold text-emerald-950 rotate-180" : "bg-emerald-50 text-emerald-900"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 md:px-24 md:pb-10 text-gray-600 leading-relaxed text-sm md:text-lg font-medium border-t border-emerald-50/50 pt-6 rtl:text-right">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New CTA for FAQ Section */}
        <div className="mt-16 text-center bg-white p-8 md:p-12 rounded-[3rem] border border-emerald-100 shadow-xl">
           <h3 className="font-serif text-2xl md:text-3xl font-black text-emerald-950 mb-4">{t("faq.still_questions")}</h3>
           <p className="text-gray-600 mb-8 font-medium">{t("faq.still_desc")}</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rtl:flex-row-reverse">
              <a
                href="https://wa.me/919784412832?text=Bismillah.%20I%20have%20a%20question%20about%20your%20services."
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-emerald-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg group rtl:flex-row-reverse"
              >
                <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t("common.ask_on_whatsapp")}</span>
              </a>
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-50 hover:bg-gold text-emerald-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border border-emerald-100 rtl:flex-row-reverse"
              >
                <PhoneCall size={18} />
                <span>{t("common.call_directly")}</span>
              </a>
           </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
