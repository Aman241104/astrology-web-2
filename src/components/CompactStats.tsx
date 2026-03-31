"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CompactStats() {
  const { t } = useLanguage();
  
  const stats = [
    { label: "Cases Solved", value: "75k+" },
    { label: "Years Exp.", value: "25+" },
    { label: "Happy Clients", value: "100k+" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <div className="bg-emerald-950 py-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-around gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-2xl md:text-4xl font-black text-gold mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
