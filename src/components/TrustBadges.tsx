"use client";

import { Star, ShieldCheck, Globe, Clock, Lock, Zap } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: <Clock size={40} className="text-gold" />, title: "25+ Years Exp", desc: "Global Service" },
    { icon: <Lock size={40} className="text-gold" />, title: "100% Privacy", desc: "Full Confidentiality" },
    { icon: <Globe size={40} className="text-gold" />, title: "Global Presence", desc: "Serving 25+ Countries" },
    { icon: <Star size={40} className="text-gold" />, title: "4.9/5 Rating", desc: "By 100k+ Clients" },
  ];

  const secondaryBadges = [
    { icon: <ShieldCheck size={24} className="text-gold" />, title: "100% Sharia Compliant" },
    { icon: <Lock size={24} className="text-gold" />, title: "100% Private" },
    { icon: <Zap size={24} className="text-gold" />, title: "Immediate Help" },
  ];

  return (
    <div className="bg-emerald-950 py-16 border-y border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-4 md:mb-6 bg-white/5 p-4 md:p-6 rounded-full group-hover:bg-gold/20 transition-all duration-500 shadow-2xl border border-white/5 group-hover:border-gold/30 group-hover:scale-110">
                {badge.icon}
              </div>
              <h4 className="text-white font-black text-base md:text-xl uppercase tracking-widest mb-1 md:mb-2">
                {badge.title}
              </h4>
              <p className="text-gold font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pt-10 border-t border-white/10">
           {secondaryBadges.map((badge, i) => (
             <div key={i} className="flex items-center gap-3">
                <div className="text-gold">{badge.icon}</div>
                <span className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs">{badge.title}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
