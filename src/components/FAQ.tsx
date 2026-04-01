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
    <section className="py-8 md:py-16 bg-emerald-50/30 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-900 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4">
            {t("faq.subtitle")}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-emerald-950 mb-4 tracking-tighter">
            {t("faq.title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-base md:text-lg font-medium max-w-2xl mx-auto">
            {t("faq.desc")}
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl md:rounded-3xl border border-emerald-100/50 overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,43,0,0.08)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 md:p-6 text-left flex items-center justify-between group rtl:text-right"
              >
                <div className="flex items-center gap-3 md:gap-4 rtl:flex-row-reverse">
                  <div className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all duration-500",
                    openIndex === idx ? "bg-emerald-950 text-gold" : "bg-emerald-50 text-emerald-900 group-hover:bg-gold/20 group-hover:text-gold"
                  )}>
                    <faq.icon size={18} className="md:w-6 md:h-6" />
                  </div>
                  <span className={cn(
                    "font-bold text-sm md:text-xl transition-colors",
                    openIndex === idx ? "text-emerald-950" : "text-gray-700 group-hover:text-emerald-900"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <div className={cn(
                  "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500",
                  openIndex === idx ? "bg-gold text-emerald-950 rotate-180" : "bg-emerald-50 text-emerald-900"
                )}>
                  <ChevronDown size={16} />
                </div>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-5 pb-5 md:px-20 md:pb-8 text-gray-600 leading-relaxed text-xs md:text-base font-medium border-t border-emerald-50/50 pt-4 rtl:text-right">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA for FAQ Section */}
        <div className="mt-12 text-center bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-100 shadow-xl">
           <h3 className="font-serif text-xl md:text-2xl font-black text-emerald-950 mb-3">{t("faq.still_questions")}</h3>
           <p className="text-gray-600 mb-6 font-medium text-sm">{t("faq.still_desc")}</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 rtl:flex-row-reverse">
              <a
                href="https://wa.me/919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-950 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-lg group rtl:flex-row-reverse"
              >
                <span>{t("common.ask_on_whatsapp")}</span>
              </a>
           </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
