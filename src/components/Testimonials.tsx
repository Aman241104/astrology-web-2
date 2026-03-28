"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const reviews = t("testimonials.reviews") as unknown as any[];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("testimonials.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {Array.isArray(reviews) && reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="flex-1 p-8 md:p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 relative mb-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,100,0,0.1)] hover:-translate-y-2 rtl:text-right">
                <Quote className="text-gold/20 absolute top-8 right-8 rtl:right-auto rtl:left-8" size={60} />
                <div className="flex space-x-1 mb-6 relative z-10 rtl:space-x-reverse rtl:justify-end">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" className="text-gold" />
                  ))}
                </div>
                <p className="text-emerald-950 font-medium italic mb-8 leading-relaxed text-lg relative z-10">
                  "{review.text}"
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-4 left-12 w-8 h-8 bg-inherit border-r border-b border-emerald-100 rotate-45 rtl:left-auto rtl:right-12 rtl:border-r-0 rtl:border-b-0 rtl:border-l rtl:border-t" />
              </div>
              <div className="pl-12 flex items-center gap-4 rtl:pl-0 rtl:pr-12 rtl:flex-row-reverse">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-black text-emerald-950 shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="rtl:text-right">
                  <span className="block font-black text-emerald-900 text-lg uppercase tracking-tighter">{review.name}</span>
                  <span className="text-[10px] text-gold font-black uppercase tracking-[0.2em]">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-serif font-bold text-emerald-900 mb-8">
            {t("testimonials.join")}
          </p>
          <a
            href="https://wa.me/919784412832"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-emerald-950 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95 group rtl:flex-row-reverse"
          >
            <span>{t("common.whatsapp_advice")}</span>
            <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
