"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = t("testimonials.reviews") as unknown as any[];

  return (
    <section id="testimonials" className="py-8 md:py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-emerald-900 mb-3">
            {t("testimonials.title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {t("testimonials.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Array.isArray(reviews) && reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="flex-1 p-6 md:p-8 rounded-[2rem] bg-emerald-50 border border-emerald-100 relative mb-6 transition-all duration-500 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,43,0,0.08)] hover:-translate-y-1 rtl:text-right">
                <Quote className="text-gold/10 absolute top-6 right-6 rtl:right-auto rtl:left-6" size={40} />
                <div className="flex space-x-1 mb-4 relative z-10 rtl:space-x-reverse rtl:justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" className="text-gold" />
                  ))}
                </div>
                <p className="text-emerald-950 font-medium italic mb-6 leading-relaxed text-base relative z-10">
                  "{review.text}"
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-inherit border-r border-b border-emerald-100 rotate-45 rtl:left-auto rtl:right-10 rtl:border-r-0 rtl:border-b-0 rtl:border-l rtl:border-t" />
              </div>
              <div className="pl-10 flex items-center gap-3 rtl:pl-0 rtl:pr-10 rtl:flex-row-reverse">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-black text-emerald-950 shadow-md text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="rtl:text-right">
                  <span className="block font-black text-emerald-900 text-base uppercase tracking-tighter">{review.name}</span>
                  <span className="text-[9px] text-gold font-black uppercase tracking-[0.2em]">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-emerald-50 pt-10">
          <p className="text-xl font-serif font-bold text-emerald-900 mb-6">
            {t("testimonials.join")}
          </p>
          <a
            href="https://wa.me/919784412832"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-emerald-950 text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse"
          >
            <span>{t("common.whatsapp_advice")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
