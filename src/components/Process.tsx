"use client";

import { PhoneCall, MessageSquare, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("process.step1_title"),
      desc: t("process.step1_desc"),
      icon: PhoneCall,
      color: "bg-emerald-800"
    },
    {
      title: t("process.step2_title"),
      desc: t("process.step2_desc"),
      icon: MessageSquare,
      color: "bg-gold"
    },
    {
      title: t("process.step3_title"),
      desc: t("process.step3_desc"),
      icon: HeartHandshake,
      color: "bg-emerald-900"
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-emerald-950 text-white px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border-2 border-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-2 border-gold/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-gold/20">
             {t("process.subtitle")}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter leading-none">
            {t("process.title")}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 md:gap-12 lg:gap-16 relative scrollbar-hide snap-x snap-mandatory px-4 -mx-4 rtl:flex-row-reverse">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-20 lg:top-24 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent -z-10">
            <div className="absolute inset-0 bg-gold/20 blur-[4px]" />
          </div>

          {steps.map((s, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-emerald-950/40 border border-white/5 hover:border-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-3 min-w-[300px] md:min-w-0 snap-center shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gold/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl ${s.color} flex items-center justify-center relative z-10 shadow-2xl border-2 border-white/10 group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500 text-white`}>
                  <s.icon size={36} className="md:w-12 md:h-12" />
                </div>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed italic line-clamp-3 md:line-clamp-none">{s.desc}</p>
              {/* Step Number Badge */}
              <div className="absolute top-2 right-4 text-4xl md:text-7xl font-black text-white/5 group-hover:text-gold/10 transition-colors pointer-events-none rtl:right-auto rtl:left-4">
                0{i + 1}
              </div>
              <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* New CTA for Process Section */}
        <div className="mt-20 text-center">
           <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-8">{t("process.cta_text")}</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 rtl:flex-row-reverse">
              <a
                href="https://wa.me/919784412832?text=Bismillah.%20I%20want%20to%20start%20the%203-step%20process%20for%20my%20problem."
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl group rtl:flex-row-reverse"
              >
                <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span>{t("common.start_consultation")}</span>
              </a>
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gold text-emerald-950 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl rtl:flex-row-reverse"
              >
                <PhoneCall size={22} />
                <span>{t("common.call_specialist")}</span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
