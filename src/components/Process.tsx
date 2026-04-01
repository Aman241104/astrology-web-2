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
    <section className="py-8 md:py-16 bg-emerald-950 text-white px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border-2 border-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-2 border-gold/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4 border border-gold/20">
             {t("process.subtitle")}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter leading-none">
            {t("process.title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-10 relative overflow-x-auto pb-6 md:pb-0 scrollbar-hide snap-x snap-mandatory px-4 -mx-4 rtl:flex-row-reverse">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-[1px] bg-gold/20 -z-10"></div>

          {steps.map((s, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-emerald-950/40 border border-white/5 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 min-w-[280px] md:min-w-0 snap-center shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="relative mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${s.color} flex items-center justify-center relative z-10 shadow-2xl border border-white/10 group-hover:rotate-6 transition-transform duration-500 text-white`}>
                  <s.icon size={28} className="md:w-10 md:h-10" />
                </div>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-black text-white mb-3 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm md:text-base text-white/60 font-medium leading-relaxed italic line-clamp-3 md:line-clamp-none">{s.desc}</p>
              {/* Step Number Badge */}
              <div className="absolute top-2 right-4 text-4xl md:text-6xl font-black text-white/5 group-hover:text-gold/10 transition-colors pointer-events-none rtl:right-auto rtl:left-4">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA for Process Section */}
        <div className="mt-12 text-center border-t border-white/10 pt-10">
           <p className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-6">{t("process.cta_text")}</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 rtl:flex-row-reverse">
              <a
                href="https://wa.me/919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] px-8 py-3.5 rounded-xl font-black text-base transition-all shadow-lg group rtl:flex-row-reverse"
              >
                <span>{t("common.start_consultation")}</span>
              </a>
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-gold text-white hover:text-emerald-950 px-8 py-3.5 rounded-xl font-black text-base transition-all border border-white/10 rtl:flex-row-reverse"
              >
                <PhoneCall size={18} />
                <span>{t("common.call_specialist")}</span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
