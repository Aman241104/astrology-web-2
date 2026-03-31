"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, UserMinus, ShieldCheck, Zap, Star, Phone } from "lucide-react";

export default function CompactServicesGrid() {
  const { t } = useLanguage();

  const services = [
    { icon: <Heart size={48} fill="currentColor" />, title: "Love Problem Solution", color: "bg-red-600", desc: "Get your love back within 24 hours" },
    { icon: <Users size={48} fill="currentColor" />, title: "Intercaste Marriage", color: "bg-gold", desc: "Gain parental approval for marriage" },
    { icon: <UserMinus size={48} fill="currentColor" />, title: "Get Ex Love Back", color: "bg-blue-600", desc: "Powerful wazifa to reunite couples" },
    { icon: <ShieldCheck size={48} fill="currentColor" />, title: "Husband Wife Dispute", color: "bg-emerald-700", desc: "Restore harmony in your marriage" },
    { icon: <Zap size={48} fill="currentColor" />, title: "Family Conflict", color: "bg-purple-700", desc: "Solve property & family arguments" },
    { icon: <Star size={48} fill="currentColor" />, title: "Business & Career", color: "bg-amber-600", desc: "Remove obstacles in your progress" },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-12 bg-gold" />
            <span className="text-gold font-black uppercase tracking-[0.4em] text-sm">Specialized Services</span>
            <div className="h-1 w-12 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-emerald-950 uppercase tracking-tighter mb-6 leading-none">
            Spiritual <span className="text-gradient-gold italic">Solutions</span>
          </h2>
          <p className="text-emerald-900/60 font-bold uppercase tracking-widest text-sm md:text-lg max-w-2xl mx-auto">
            Accurate and effective astrological solutions for all your personal life problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((item, i) => (
            <a 
              key={i} 
              href="https://wa.me/919784412832"
              className="group relative bg-white rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col items-center text-center border-b-[12px] border-emerald-50 hover:border-gold hover:-translate-y-4"
            >
               <div className={`w-24 h-24 rounded-[2rem] ${item.color} text-white flex items-center justify-center mb-8 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500 shadow-xl`}>
                  {item.icon}
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-emerald-950 uppercase tracking-tighter mb-4 leading-none">
                 {item.title}
               </h3>
               <p className="text-gray-500 font-bold text-sm mb-8 leading-relaxed uppercase tracking-wide">
                 {item.desc}
               </p>
               
               <div className="mt-auto flex items-center gap-3 bg-emerald-950 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest group-hover:bg-gold group-hover:text-emerald-950 transition-colors">
                  <Phone size={14} fill="currentColor" />
                  <span>Consult Now</span>
               </div>

               <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Star size={24} className="text-gold fill-gold" />
               </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner-style CTA */}
        <div className="mt-20 bg-spiritual-dark p-12 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-arabesque opacity-10" />
           <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Not listed above? <span className="text-gold">I Solve Every Problem.</span>
              </h3>
              <a 
                href="https://wa.me/919784412832"
                className="inline-flex items-center gap-4 bg-gold text-emerald-950 px-12 py-5 rounded-3xl font-black text-xl uppercase shadow-2xl hover:scale-105 transition-transform border-b-8 border-gold-600"
              >
                <span>Discuss Your Issue Privately</span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
