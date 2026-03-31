"use client";

import { Star, ShieldCheck, Globe, Trophy } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: <Trophy size={40} className="text-gold" />, title: "Gold Medalist", desc: "10 Times Awarded" },
    { icon: <ShieldCheck size={40} className="text-gold" />, title: "ISO Certified", desc: "Global Standards" },
    { icon: <Globe size={40} className="text-gold" />, title: "Global Presence", desc: "Serving 25+ Countries" },
    { icon: <Star size={40} className="text-gold" />, title: "4.9/5 Rating", desc: "By 100k+ Clients" },
  ];

  return (
    <div className="bg-emerald-950 py-16 border-y border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 bg-white/5 p-6 rounded-full group-hover:bg-gold/20 transition-all duration-500 shadow-2xl border border-white/5 group-hover:border-gold/30 group-hover:scale-110">
                {badge.icon}
              </div>
              <h4 className="text-white font-black text-lg md:text-xl uppercase tracking-widest mb-2">
                {badge.title}
              </h4>
              <p className="text-gold font-black text-xs md:text-sm uppercase tracking-[0.2em]">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
