"use client";

import { MessageCircle, Heart, Users, Home, UserCheck, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.love_title"),
      desc: t("services.love_desc"),
      icon: Heart,
      img: "/get-love-back.png"
    },
    {
      title: t("services.ex_title"),
      desc: t("services.ex_desc"),
      icon: Users,
      img: "/bring-back-ex.png"
    },
    {
      title: t("services.breakup_title"),
      desc: t("services.breakup_desc"),
      icon: ShieldCheck,
      img: "/breakup-solution.png"
    },
    {
      title: t("services.marriage_title"),
      desc: t("services.marriage_desc"),
      icon: UserCheck,
      img: "/love-marriage.png"
    },
    {
      title: t("services.dispute_title"),
      desc: t("services.dispute_desc"),
      icon: Home,
      img: "/husband-wife.png"
    },
    {
      title: t("services.family_title"),
      desc: t("services.family_desc"),
      icon: Zap,
      img: "/family-conflict.png"
    },
  ];

  return (
    <section id="services" className="py-12 md:pt-16 md:pb-8 bg-white px-4 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-[0.02] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-emerald-50 text-emerald-700 px-6 py-2 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 border border-emerald-100 shadow-sm">
             {t("services.tagline")}
          </div>
          <h2 className="font-serif text-4xl md:text-7xl font-black text-emerald-950 mb-6 tracking-tight">
            {t("services.title")} <span className="text-gradient-gold italic">{t("services.subtitle")}</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed italic">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <a
              key={idx}
              href={`https://wa.me/919784412832?text=Bismillah.%20Mohammed%20Arif%20Khan,%20I%20want%20to%20consult%20about%20${encodeURIComponent(service.title)}`}
              className="group relative bg-white rounded-[2.5rem] border border-gray-100 transition-all duration-500 md:hover:shadow-[0_40px_100px_rgba(0,43,0,0.12)] md:hover:-translate-y-2 active:scale-[0.98] overflow-hidden flex flex-col h-full shadow-sm"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent opacity-60 md:group-hover:opacity-90 transition-opacity" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 md:group-hover:bg-gold md:group-hover:text-emerald-950 transition-all duration-500 shadow-xl md:group-hover:rotate-[15deg] rtl:left-auto rtl:right-6">
                  <service.icon size={24} />
                </div>

                <div className="absolute bottom-6 left-8 right-8 rtl:text-right">
                   <h3 className="font-serif text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tighter md:group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col flex-grow bg-white rtl:text-right">
                <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base font-medium flex-grow">
                  {service.desc}
                </p>
                
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between rtl:flex-row-reverse">
                  <div className="inline-flex items-center space-x-3 font-black text-emerald-950 md:group-hover:text-[#25D366] transition-colors text-xs md:text-sm uppercase tracking-widest group/link rtl:space-x-reverse">
                    <div className="bg-[#25D366] rounded-full p-1.5 shadow-md md:group-hover/link:scale-110 transition-transform flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <span>{t("common.whatsapp_expert")}</span>
                  </div>
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-900 opacity-0 md:group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} className="rtl:rotate-180" />
                  </div>
                </div>
              </div>
              
              {/* Corner Number */}
              <div className="absolute top-4 right-6 text-white/20 font-black text-4xl italic md:group-hover:text-gold/30 transition-colors rtl:right-auto rtl:left-6">
                0{idx + 1}
              </div>
            </a>
          ))}
        </div>

        {/* Global CTA Section */}
        <div className="mt-12 md:mt-16 p-10 md:p-16 rounded-[3rem] bg-emerald-950 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-2xl rtl:lg:text-right">
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-6 tracking-tighter leading-tight">
                {t("services.facing_unique")} <br /> {t("services.talk_to")}
              </h3>
              <p className="text-white/60 text-lg md:text-xl font-medium">
                {t("services.talk_desc")}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 rtl:flex-row-reverse">
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto bg-gold hover:bg-white text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 rtl:flex-row-reverse"
              >
                <Zap size={24} fill="currentColor" />
                <span>{t("common.call_now")}</span>
              </a>
              <a
                href="https://wa.me/919784412832"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-white hover:text-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-white/10 rtl:flex-row-reverse"
              >
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t("common.whatsapp")}</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-arabesque opacity-10 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
