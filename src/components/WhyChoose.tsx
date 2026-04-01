"use client";

import { Star, ShieldCheck, Zap, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();
  const leftList = t("why_choose.list") as unknown as string[];

  return (
    <section className="py-12 md:py-20 bg-spiritual-dark relative overflow-hidden px-4">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-5" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-4">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">{t("why_choose.specialties")}</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            {t("why_choose.title")} <span className="text-gradient-gold italic">{t("why_choose.subtitle")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Specialty Cards */}
          <div className="lg:col-span-5 space-y-4">
            {Array.isArray(leftList) && leftList.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[2rem] flex items-center gap-5 transition-all duration-500 hover:bg-white/10 hover:border-gold/50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center text-emerald-950 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:rotate-[15deg] transition-transform">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <span className="font-black text-white uppercase tracking-tight text-lg md:text-xl block leading-none mb-1">
                    {item}
                  </span>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest opacity-60">Guaranteed Result</span>
                </div>
                <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap size={16} className="text-gold fill-gold" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Expert Authority Box */}
          <div className="lg:col-span-7">
            <div className="relative p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-white/20 to-gold rounded-[3.5rem] opacity-50" />
              <div className="relative bg-emerald-950/90 backdrop-blur-3xl p-8 md:p-16 rounded-[3.4rem] overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-1 bg-gold rounded-full" />
                    <p className="text-gold font-black uppercase tracking-[0.2em] text-sm md:text-lg">
                      {t("why_choose.tagline")}
                    </p>
                  </div>

                  <div className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed mb-12 space-y-6 italic">
                    <p className="relative">
                      <span className="text-5xl font-serif text-gold/20 absolute -top-6 -left-8">"</span>
                      {t("why_choose.desc1")}
                    </p>
                    <p>
                      {t("why_choose.desc2")}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {[
                      { icon: ShieldCheck, label: "100% Halal" },
                      { icon: Heart, label: "Private" },
                      { icon: Zap, label: "Fast Help" }
                    ].map((feat, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 text-center">
                        <feat.icon className="text-gold" size={28} />
                        <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">{feat.label}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="https://wa.me/919784412832"
                    className="flex items-center justify-center gap-4 bg-gold text-emerald-950 px-10 py-5 rounded-2xl font-black text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(212,175,55,0.3)] uppercase"
                  >
                    <span>{t("common.consult_specialist")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
