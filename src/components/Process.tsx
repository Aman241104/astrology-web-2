"use client";

import { PhoneCall, MessageSquare, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("process.step1_title"),
      desc: t("process.step1_desc"),
      icon: PhoneCall,
      color: "bg-emerald-800",
      time: "Instant"
    },
    {
      title: t("process.step2_title"),
      desc: t("process.step2_desc"),
      icon: MessageSquare,
      color: "bg-gold",
      time: "In Depth"
    },
    {
      title: t("process.step3_title"),
      desc: t("process.step3_desc"),
      icon: HeartHandshake,
      color: "bg-emerald-900",
      time: "Permanent"
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-emerald-950 text-white px-4 relative overflow-hidden ltr">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 rounded-full border border-gold/20 mb-4">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">{t("process.subtitle")}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            3 Simple <span className="text-gradient-gold italic">Steps</span>
          </h2>
          <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] md:text-sm max-w-xl mx-auto">
            Our spiritual consultation process is fast, private, and highly effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Animated Connecting Path (Desktop) */}
          <div className="hidden md:block absolute top-[15%] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gold/30 -z-0" />

          {steps.map((s, i) => (
            <div key={i} className="group relative">
              <div className="relative z-10 flex flex-col items-center text-center p-8 md:p-10 rounded-[2.5rem] bg-emerald-900/40 backdrop-blur-xl border border-white/5 hover:border-gold/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-2">
                
                {/* Step Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] ${s.color} flex items-center justify-center relative z-10 shadow-2xl border-2 border-white/10 group-hover:rotate-[10deg] transition-all duration-500`}>
                    <s.icon size={36} className="md:w-12 md:h-12 text-white" />
                  </div>
                  {/* Floating Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-emerald-950 font-black text-lg border-4 border-emerald-950 shadow-xl group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                </div>

                <div className="mb-4 inline-block bg-white/5 px-3 py-1 rounded-full border border-white/10">
                   <span className="text-[10px] font-black text-gold uppercase tracking-widest">{s.time}</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">
                  {s.title.split('. ')[1] || s.title}
                </h3>
                
                <p className="text-sm md:text-lg text-white/60 font-medium leading-relaxed italic">
                  {s.desc}
                </p>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none" />
              </div>

              {/* Mobile Arrow */}
              {i < 2 && (
                <div className="flex md:hidden justify-center my-4 animate-bounce">
                  <ArrowRight size={32} className="text-gold rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Journey Completion CTA */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
           <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 pr-8 sm:pr-12 group hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-emerald-950 shadow-xl group-hover:rotate-6 transition-transform">
                 <Sparkles size={32} fill="currentColor" />
              </div>
              <div className="text-left">
                 <p className="text-gold font-black uppercase tracking-[0.2em] text-[10px] mb-1">{t("process.cta_text")}</p>
                 <a 
                   href="https://wa.me/919784412832"
                   className="text-xl md:text-3xl font-black text-white hover:text-gold transition-colors tracking-tighter uppercase flex items-center gap-3"
                 >
                   Start Your Healing Now <ArrowRight size={24} />
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
