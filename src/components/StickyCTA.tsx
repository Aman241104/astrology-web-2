"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyCTA() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-10 md:right-10 md:left-auto md:w-auto p-4 md:p-0">
      <div className="flex items-center gap-3 md:flex-col md:items-end">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919784412832"
          className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 md:px-10 md:py-6 rounded-[2rem] font-black text-sm md:text-xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform border-b-4 border-green-700 pulse-gold uppercase tracking-tighter"
        >
          <MessageCircle size={24} fill="currentColor" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919784412832"
          className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-emerald-950 text-white px-6 py-4 md:px-10 md:py-6 rounded-[2rem] font-black text-sm md:text-xl shadow-[0_20px_50px_rgba(0,43,0,0.4)] hover:scale-110 transition-transform border-b-4 border-black uppercase tracking-tighter"
        >
          <Phone size={24} fill="currentColor" />
          <span className="md:inline hidden">Call Now</span>
          <span className="md:hidden inline">+91-9784412832</span>
        </a>
      </div>
    </div>
  );
}
