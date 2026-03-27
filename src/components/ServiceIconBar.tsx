"use client";

import { Heart, Briefcase, Users, UserX, TrendingUp, Sparkles } from "lucide-react";

export default function ServiceIconBar() {
  const items = [
    { label: "Love", icon: Heart, color: "text-red-500" },
    { label: "Career", icon: Briefcase, color: "text-amber-600" },
    { label: "Marriage", icon: Users, color: "text-blue-500" },
    { label: "Breakup", icon: UserX, color: "text-rose-600" },
    { label: "Business", icon: TrendingUp, color: "text-emerald-600" },
    { label: "Healer", icon: Sparkles, color: "text-purple-500" },
  ];

  return (
    <section className="bg-emerald-900 py-12 md:py-16 relative overflow-hidden">
      {/* Bokeh Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gold rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-2/3 w-24 h-24 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center min-w-[120px] md:min-w-[160px] transform hover:scale-110 transition-all duration-500 cursor-pointer group border-b-4 border-transparent hover:border-gold"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-transform group-hover:rotate-[10deg]">
                <item.icon size={48} className={item.color} />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-widest text-xs md:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
