"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919784412832?text=Bismillah.%20Hello%20Mohammed%20Arif%20Khan,%20I%20am%20facing%20some%20problems%20and%20need%20your%20spiritual%20guidance."
      className="fixed bottom-6 right-6 z-[60] group flex items-center space-x-3 transition-transform hover:scale-110 active:scale-95 hidden md:flex"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-white/90 backdrop-blur-sm text-emerald-900 px-4 py-2 rounded-2xl font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-emerald-100">
        Free Consultation
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
          <MessageCircle size={32} fill="currentColor" />
        </div>
      </div>
    </a>
  );
}
