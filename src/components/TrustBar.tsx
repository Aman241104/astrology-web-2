"use client";

import { CreditCard, ShieldCheck, Headphones, ThumbsUp, Lock } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: (
        <div className="relative">
          <CreditCard className="text-emerald-950" size={32} />
          <div className="absolute -bottom-1 -right-1 bg-emerald-950 rounded-full p-0.5 border border-white">
            <Lock className="text-gold" size={12} fill="currentColor" />
          </div>
        </div>
      ),
      title: "Secure Communication",
      sub: "100% Privacy Maintained",
    },
    {
      icon: <ShieldCheck className="text-emerald-950" size={32} />,
      title: "Pure Halal Methods",
      sub: "Quranic & Sunnah Based",
    },
    {
      icon: <Headphones className="text-emerald-950" size={32} />,
      title: "24/7 Spiritual Help",
      sub: "Always Here For You",
    },
    {
      icon: <ThumbsUp className="text-emerald-950" size={32} />,
      title: "Trusted Worldwide",
      sub: "Million of Happy Souls",
    }
  ];

  return (
    <div className="bg-white py-12 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-2 md:px-6 group">
              {/* Vertical Dashed Separator (Desktop) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-24 border-r-2 border-dashed border-gold/20"></div>
              )}
              
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-gold to-gold-600 rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-[0_15px_35px_rgba(212,175,55,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                <div className="scale-90 md:scale-125">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-emerald-950 font-black text-sm md:text-xl uppercase tracking-tighter mb-2 md:mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-emerald-900/60 font-black text-[9px] md:text-xs uppercase tracking-widest leading-relaxed max-w-[140px] md:max-w-[240px]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
