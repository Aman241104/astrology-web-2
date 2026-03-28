"use client";

import { MessageCircle, Heart, UserCheck, Flame, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function OtherServices() {
  const { t } = useLanguage();

  const otherServices = [
    {
      title: t("services.love_detailed_title"),
      icon: Heart,
    },
    {
      title: t("services.husband_detailed_title"),
      icon: UserCheck,
    },
    {
      title: t("services.ex_detailed_title"),
      icon: Flame,
    },
    {
      title: t("services.marriage_detailed_title"),
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 bg-emerald-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            {t("top_solutions.subtitle")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, idx) => (
            <a
              key={idx}
              href={`https://wa.me/919784412832?text=Bismillah.%20Mohammed%20Arif%20Khan,%20I%20want%20to%20consult%20about%20${encodeURIComponent(service.title)}`}
              className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm md:hover:shadow-md transition-all flex flex-col items-center text-center group active:scale-[0.98]"
            >
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-4 md:group-hover:bg-emerald-900 md:group-hover:text-white transition-all">
                <service.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <div
                className="flex items-center space-x-2 bg-green-500 md:hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-all rtl:space-x-reverse"
              >
                <div className="bg-white rounded-full p-0.5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t("common.consult_now")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
