"use client";

import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  "New problem solved in London, UK",
  "Recently helped a client from Dubai, UAE",
  "Consultation successful for a sister in Mumbai",
  "Love Marriage approved in Toronto, Canada",
  "Husband-Wife dispute resolved in Lucknow",
];

export default function SuccessToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const showToast = () => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showToast, 3000);
    const interval = setInterval(showToast, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-20 md:bottom-24 left-4 right-4 md:right-auto md:left-6 z-[70] transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-white/95 backdrop-blur-md border border-emerald-100 p-3 md:p-4 rounded-2xl shadow-2xl flex items-center space-x-3 md:space-x-4 max-w-sm mx-auto md:mx-0">
        <div className="bg-gold/20 p-1.5 md:p-2 rounded-full text-gold shrink-0">
          <CheckCircle size={20} className="md:w-6 md:h-6" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Recent Success</p>
          <p className="text-xs md:text-sm font-bold text-emerald-900 line-clamp-1">{message}</p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-emerald-900 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
