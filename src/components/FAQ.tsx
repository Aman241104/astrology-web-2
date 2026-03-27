"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CircleHelp, ShieldCheck, Clock, MessageSquare, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this consultation private?",
    answer: "Yes, absolutely. We maintain high confidentiality. Your personal details, problems, and identity will never be shared with anyone.",
    icon: ShieldCheck
  },
  {
    question: "How long does it take to see outcomes?",
    answer: "While every situation is unique, many of our clients start seeing positive spiritual shifts within 24 to 72 hours of performing the suggested Duas and Wazifas.",
    icon: Clock
  },
  {
    question: "Do you practice Black Magic (Sifli Ilm)?",
    answer: "No. We strictly follow Islamic principles. All our remedies are based on the Holy Quran and Sunnah. We do not engage in any form of black magic or haram practices.",
    icon: CircleHelp
  },
  {
    question: "Can you help with inter-caste marriage problems?",
    answer: "Yes, Hazrat Sahab specializes in resolving hurdles related to inter-caste and love marriages, helping you gain parental approval through spiritual means.",
    icon: Heart
  },
  {
    question: "Are there any side effects of your remedies?",
    answer: "Since our remedies are based on Quranic verses and pure prayers, there are absolutely no side effects. They bring peace, love, and positivity into your life.",
    icon: MessageSquare
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-emerald-50/30 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-900 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            Help Center
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-emerald-950 mb-6 tracking-tighter">
            Common Questions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Everything you need to know about our Islamic spiritual services.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-emerald-100/50 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,43,0,0.08)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                    openIndex === idx ? "bg-emerald-950 text-gold" : "bg-emerald-50 text-emerald-900 group-hover:bg-gold/20 group-hover:text-gold"
                  )}>
                    <faq.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <span className={cn(
                    "font-bold text-base md:text-2xl transition-colors",
                    openIndex === idx ? "text-emerald-950" : "text-gray-700 group-hover:text-emerald-900"
                  )}>
                    {faq.question}
                  </span>
                </div>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                  openIndex === idx ? "bg-gold text-emerald-950 rotate-180" : "bg-emerald-50 text-emerald-900"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 md:px-24 md:pb-10 text-gray-600 leading-relaxed text-sm md:text-lg font-medium border-t border-emerald-50/50 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-arabesque opacity-[0.03] pointer-events-none" />
    </section>
  );
}
