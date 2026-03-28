"use client";

import Image from "next/image";
import { Star, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustHeader() {
  const { t } = useLanguage();

  const flags = [
    { country: "USA", url: "https://flagcdn.com/w40/us.png" },
    { country: "UK", url: "https://flagcdn.com/w40/gb.png" },
    { country: "UAE", url: "https://flagcdn.com/w40/ae.png" },
    { country: "India", url: "https://flagcdn.com/w40/in.png" },
    { country: "Canada", url: "https://flagcdn.com/w40/ca.png" },
    { country: "Germany", url: "https://flagcdn.com/w40/de.png" },
  ];

  const badges = t("trust.badges") as unknown as string[];

  return (
    <div className="bg-white py-6 md:py-8">
      {/* Top Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Brand Profile */}
        <div className="flex items-center gap-4 text-center lg:text-left rtl:lg:text-right">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-900 rounded-full flex items-center justify-center p-1 border-4 border-gold shadow-xl shrink-0 overflow-hidden relative">
            <Image 
              src="/profile-circle.png" 
              fill
              sizes="(max-width: 768px) 80px, 96px"
              className="object-cover rounded-full" 
              alt="Mohammed Arif Khan Profile"
              priority
            />
          </div>
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-1 rtl:lg:justify-end">
              <span className="bg-gold text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded">5.0</span>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} fill="#D4AF37" className="text-gold" />
              ))}
              <span className="text-emerald-900 text-[10px] font-black uppercase tracking-tighter ml-1">{t("trust.profile_status")}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-emerald-900 uppercase tracking-tighter leading-none mb-2">
              {t("hero.mohammed")} <span className="text-gold">{t("hero.arif_khan")}</span>
            </h2>
            <div className="inline-block bg-gold/10 border border-gold/20 px-3 py-1 rounded-lg">
              <p className="text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest">
                {t("trust.gold_medalist")}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Global Trust */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs md:text-sm font-black text-emerald-900 uppercase tracking-widest">
            {t("trust.title")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {flags.map((flag, idx) => (
              <div key={idx} className="relative h-5 w-7 md:h-7 md:w-10 shadow-sm rounded-sm overflow-hidden">
                <Image 
                  src={flag.url} 
                  alt={flag.country} 
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="bg-emerald-900 text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg border-b-4 border-gold/50">
            {t("trust.cta")}
          </div>
        </div>

        {/* Right: Contact & Rating */}
        <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right rtl:lg:items-start rtl:lg:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black text-emerald-900 uppercase tracking-widest italic">{t("common.contact_anytime")}</span>
            <span className="bg-gold text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded">{t("common.live_24_7")}</span>
          </div>
          <a href="tel:+919784412832" className="text-2xl md:text-4xl font-black text-emerald-900 tracking-tighter hover:text-gold transition-colors ltr:direction-ltr" style={{ direction: 'ltr' }}>
            +91-9784412832
          </a>
          <div className="flex items-center gap-3 mt-1">
            <Image 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              width={92}
              height={30}
              className="h-5 w-auto grayscale opacity-70" 
            />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="#D4AF37" className="text-gold" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Service Bar */}
      <div className="bg-emerald-950 py-4 md:py-6 overflow-x-auto scrollbar-hide border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4 min-w-max md:min-w-0">
          {Array.isArray(badges) && badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/95 px-4 py-2 rounded-full shadow-lg">
              <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center text-emerald-950">
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-tighter">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
