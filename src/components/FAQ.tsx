"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this consultation private?",
    answer: "Yes, absolutely. We maintain high confidentiality. Your personal details, problems, and identity will never be shared with anyone.",
  },
  {
    question: "How long does it take to see outcomes?",
    answer: "While every situation is unique, many of our clients start seeing positive spiritual shifts within 24 to 72 hours of performing the suggested Duas and Wazifas.",
  },
  {
    question: "Do you practice Black Magic (Sifli Ilm)?",
    answer: "No. We strictly follow Islamic principles. All our remedies are based on the Holy Quran and Sunnah. We do not engage in any form of black magic or haram practices.",
  },
  {
    question: "Can you help with inter-caste marriage problems?",
    answer: "Yes, Hazrat Sahab specializes in resolving hurdles related to inter-caste and love marriages, helping you gain parental approval through spiritual means.",
  },
  {
    question: "Are there any side effects of your remedies?",
    answer: "Since our remedies are based on Quranic verses and pure prayers, there are absolutely no side effects. They bring peace, love, and positivity into your life.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-emerald-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            Common Questions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Everything you need to know about our Islamic spiritual services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between group"
              >
                <span className="font-bold text-lg text-emerald-900 group-hover:text-emerald-700 transition-colors">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="text-gold" />
                ) : (
                  <ChevronDown className="text-gray-400 group-hover:text-gold transition-colors" />
                )}
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-emerald-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
