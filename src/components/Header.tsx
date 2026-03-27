"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gold text-emerald-950 py-2 px-4 text-center text-[10px] md:text-sm font-bold z-[70] fixed top-0 left-0 right-0 h-10 flex items-center justify-center">
        !! फ़ोन उठाओ समस्या बताओ, समाधान पाओ !! | 24/7 Available | Islamic Spiritual Specialist
      </div>
      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10",
          isScrolled
            ? "bg-emerald-900/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-emerald-950/20 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold text-gold">
              Hazrat Abdul Rehman
            </span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-white/80">
              Islamic Spiritual Healer
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 text-white/90 font-medium">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="#services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="#about" className="hover:text-gold transition-colors">About</Link>
            <Link href="#testimonials" className="hover:text-gold transition-colors">Success Stories</Link>
          </nav>

          <div className="flex items-center space-x-3 md:space-x-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center space-x-2 bg-gold hover:bg-gold-600 text-emerald-950 px-3 py-2 md:px-5 md:py-2.5 rounded-full font-bold transition-all shadow-md text-sm md:text-base"
            >
              <Phone size={18} fill="currentColor" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-md transition-all flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} fill="currentColor" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
