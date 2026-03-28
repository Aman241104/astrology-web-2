"use client";

import { Heart, Briefcase, Users, UserX, TrendingUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceIconBar() {
  const { t } = useLanguage();

  const items = [
    { label: t("icons.love"), icon: Heart, color: "text-red-500" },
    { label: t("icons.career"), icon: Briefcase, color: "text-amber-600" },
    { label: t("icons.marriage"), icon: Users, color: "text-blue-500" },
    { label: t("icons.breakup"), icon: UserX, color: "text-rose-600" },
    { label: t("icons.business"), icon: TrendingUp, color: "text-emerald-600" },
    { label: t("icons.healer"), icon: Sparkles, color: "text-purple-500" },
  ];

  return (
    <section className="bg-emerald-900 py-6 md:py-8 relative overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gold rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-2/3 w-24 h-24 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px] transform hover:scale-105 transition-all duration-300 cursor-pointer group border-b-4 border-transparent hover:border-gold"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 transition-transform group-hover:rotate-[10deg]">
                <item.icon size={40} className={item.color} />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-widest text-[10px] md:text-xs">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
