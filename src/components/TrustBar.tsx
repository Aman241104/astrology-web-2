"use client";

import { MessageSquare, ShieldCheck, Headphones, ThumbsUp, Lock } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: (
        <div className="relative">
          <MessageSquare className="text-emerald-950" size={32} />
          <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-0.5 border border-white">
            <Lock className="text-emerald-950" size={12} fill="currentColor" />
          </div>
        </div>
      ),
      title: "Highly Private",
      sub: "Secure & Confidential spiritual consultation.",
    },
    {
      icon: <ShieldCheck className="text-emerald-950" size={32} />,
      title: "Pure Halal",
      sub: "Strictly Quranic and Sunnah-based remedies.",
    },
    {
      icon: <Headphones className="text-emerald-950" size={32} />,
      title: "24/7 Service",
      sub: "Available worldwide for your spiritual help.",
    },
    {
      icon: <ThumbsUp className="text-emerald-950" size={32} />,
      title: "Trusted Expert",
      sub: "20+ years of proven Rohani Ilaj success.",
    }
  ];

  return (
    <div className="bg-white py-12 md:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-2 md:px-6 group">
              {/* Vertical Dashed Separator (Desktop) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-24 border-r-2 border-dashed border-gold/20"></div>
              )}
              
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-gold to-gold-600 rounded-[1.2rem] md:rounded-[2rem] flex items-center justify-center mb-4 md:mb-6 shadow-[0_10px_25px_rgba(212,175,55,0.2)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="scale-75 md:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-emerald-900 font-bold text-sm md:text-xl uppercase tracking-tighter mb-1.5 md:mb-3 leading-tight transition-colors group-hover:text-gold">
                {item.title}
              </h3>
              <p className="text-gray-500 font-medium text-[10px] md:text-sm leading-relaxed max-w-[140px] md:max-w-[240px]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
