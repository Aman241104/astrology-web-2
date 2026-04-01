"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyCTA() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-10 md:right-10 md:left-auto md:w-auto p-2 md:p-0">
      <div className="flex items-center gap-2 md:flex-col md:items-end">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919784412832"
          className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 md:px-10 md:py-6 rounded-[1.5rem] font-black text-[11px] md:text-xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform border-b-2 md:border-b-4 border-green-700 pulse-gold uppercase tracking-tighter"
        >
          <MessageCircle size={18} fill="currentColor" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919784412832"
          className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-950 text-white px-4 py-2.5 md:px-10 md:py-6 rounded-[1.5rem] font-black text-[11px] md:text-xl shadow-[0_10px_30px_rgba(0,43,0,0.4)] hover:scale-105 transition-transform border-b-2 md:border-b-4 border-black uppercase tracking-tighter"
        >
          <Phone size={18} fill="currentColor" />
          <span className="md:inline hidden">Call Now</span>
          <span className="md:hidden inline">+91-9784412832</span>
        </a>
      </div>
    </div>
  );
}
