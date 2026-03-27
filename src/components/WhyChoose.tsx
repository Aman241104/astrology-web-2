"use client";

import { ShieldCheck, Clock, Heart, Lock, Star, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Full Privacy",
    desc: "Your personal information and problems are kept completely confidential.",
    icon: Lock,
  },
  {
    title: "24/7 Available",
    desc: "Get solutions to your problems anytime, anywhere in the world.",
    icon: Clock,
  },
  {
    title: "Rohani Ilaj Specialist",
    desc: "All solutions are based on pure Islamic spiritual healing and Quranic wisdom.",
    icon: Sparkles,
  },
  {
    title: "20+ Years Experience",
    desc: "Trusted by over 50,000+ happy clients globally for two decades.",
    icon: Star,
  },
  {
    title: "Fast Outcomes",
    desc: "Experience initial changes and spiritual shifts within just 24 hours.",
    icon: Zap,
  },
  {
    title: "No Side Effects",
    desc: "Pure Halal and Sharia-compliant methods with zero negative effects.",
    icon: Heart,
  },
];

import { Zap } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Why Choose Us?</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            BEST SERVICES FOR ALL PROBLEMS
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A single call has the power to alter your situation and direction. 
            Choose the most trusted Muslim Specialist for complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-emerald-50 border-l-4 border-gold shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-emerald-900 text-gold rounded-full flex items-center justify-center mb-6 shadow-md">
                <reason.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-emerald-900 rounded-3xl text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              !! फ़ोन उठाओ समस्या बताओ, समाधान पाओ !!
            </h3>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Don't be disappointed anymore. Hazrat Abdul Rehman Khan is here to 
              transform your life with the power of Islamic Dua and Wazifa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center space-x-3 bg-gold text-emerald-950 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span>Call: +91 XXXXX XXXXX</span>
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="flex items-center space-x-3 bg-green-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
        </div>
      </div>
    </section>
  );
}
