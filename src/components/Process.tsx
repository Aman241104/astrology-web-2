"use client";

import { PhoneCall, MessageSquare, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "1. Contact Maulana Ji",
    desc: "Call or Message on WhatsApp to share your problems with Hazrat Sahab. Initial consultation is free and private.",
    icon: PhoneCall,
  },
  {
    title: "2. Spiritual Analysis",
    desc: "Hazrat Sahab performs a detailed spiritual analysis (Istikhara) to identify the root cause of your problem.",
    icon: MessageSquare,
  },
  {
    title: "3. Pure Quranic Remedy",
    desc: "Receive powerful and Halal Wazifas or Duas tailored specifically to your situation for spiritual shifts.",
    icon: HeartHandshake,
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-emerald-950 text-white px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest mb-4">How It Works</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            3 Simple Steps to Solve Your Problems
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6 text-emerald-950 shadow-2xl transition-transform hover:scale-110">
                <step.icon size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed text-lg">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gold opacity-30">
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                    <path d="M0 12H46M46 12L36 2M46 12L36 22" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
    </section>
  );
}
