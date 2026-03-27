"use client";

import { PhoneCall, MessageSquare, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "1. Contact Maulana Ji",
    desc: "Call or Message on WhatsApp to share your problems with Hazrat Sahab. Initial consultation is private.",
    icon: PhoneCall,
    color: "bg-emerald-800"
  },
  {
    title: "2. Spiritual Analysis",
    desc: "Hazrat Sahab performs a detailed spiritual analysis (Istikhara) to identify the root cause of your problem.",
    icon: MessageSquare,
    color: "bg-gold"
  },
  {
    title: "3. Pure Quranic Remedy",
    desc: "Receive powerful and Halal Wazifas or Duas tailored specifically to your situation for spiritual shifts.",
    icon: HeartHandshake,
    color: "bg-emerald-900"
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-32 bg-emerald-950 text-white px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border-2 border-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-2 border-gold/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-gold/20">
             Easy Process
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter leading-none">
            3 Simple Steps to Solve Your Problems
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 md:gap-12 lg:gap-16 relative scrollbar-hide snap-x snap-mandatory px-4 -mx-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 -z-10"></div>

          {steps.map((s, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-emerald-900/40 border border-white/5 hover:border-gold/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-3 min-w-[280px] md:min-w-0 snap-center shadow-lg relative overflow-hidden">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl ${s.color} flex items-center justify-center mb-8 shadow-xl border-4 border-emerald-950 group-hover:rotate-12 group-hover:scale-110 transition-all text-white`}>
                <s.icon size={36} />
              </div>
              <h3 className="font-serif text-xl md:text-3xl font-bold mb-4 md:mb-6 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-sm md:text-xl text-white/70 font-medium leading-relaxed italic line-clamp-3 md:line-clamp-none">{s.desc}</p>

              {/* Step Number Badge */}
              <div className="absolute top-2 right-4 text-4xl md:text-7xl font-black text-white/5 group-hover:text-gold/10 transition-colors pointer-events-none">
                0{i + 1}
              </div>
              <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

