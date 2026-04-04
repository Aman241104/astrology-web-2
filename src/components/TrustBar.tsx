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
      title: "Full Privacy",
      sub: "Full Confidentiality Maintained",
    },
    {
      icon: <ShieldCheck className="text-emerald-950" size={32} />,
      title: "Pure Halal",
      sub: "Quranic & Sunnah Solutions",
    },
    {
      icon: <Headphones className="text-emerald-950" size={32} />,
      title: "24/7 Support",
      sub: "Always Available Globally",
    },
    {
      icon: <ThumbsUp className="text-emerald-950" size={32} />,
      title: "Trusted Expert",
      sub: "Millions of Success Stories",
    }
  ];

  return (
    <div className="bg-white py-4 md:py-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-10 lg:gap-8">
          {trustItems.map((item, index) => (
            <a 
              key={index} 
              href="https://wa.me/919784412832?text=Bismillah.%20Mohammed%20Arif%20Khan,%20I%20want%20to%20know%20more%20about%20your%20services."
              className="relative flex flex-col items-center text-center px-2 md:px-6 group transition-all md:hover:-translate-y-1 active:scale-[0.98]"
            >
              {/* Vertical Dashed Separator (Desktop) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-20 border-r-2 border-dashed border-gold/20"></div>
              )}
              
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold to-gold-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-[0_15px_30px_rgba(212,175,55,0.3)] md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-500 border-4 border-white">
                <div className="scale-75 md:scale-100">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-emerald-950 font-black text-sm md:text-lg uppercase tracking-tighter mb-1 md:mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-emerald-900/60 font-black text-[8px] md:text-[10px] uppercase tracking-widest leading-relaxed max-w-[120px] md:max-w-[200px]">
                {item.sub}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
