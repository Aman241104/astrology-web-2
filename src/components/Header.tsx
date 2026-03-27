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

  const tagline = "!! फ़ोन उठाओ समस्या बताओ, समाधान पाओ !! | 24/7 Available | Islamic Spiritual Specialist";

  return (
    <>
      {/* Top Bar with Marquee on Mobile */}
      <div className="bg-gold text-emerald-950 py-2.5 px-4 z-[70] fixed top-0 left-0 right-0 h-10 flex items-center overflow-hidden border-b border-black/5 shadow-sm">
        <div className="md:hidden w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee font-black uppercase tracking-wider text-[11px]">
            {tagline} &nbsp;&nbsp;&nbsp;&nbsp; {tagline}
          </div>
        </div>
        <div className="hidden md:flex w-full justify-center items-center font-black uppercase tracking-widest text-xs lg:text-sm">
          {tagline}
        </div>
      </div>

      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-10",
          isScrolled
            ? "bg-emerald-950/90 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-b border-white/10"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl md:text-2xl lg:text-3xl font-black text-white group-hover:text-gold transition-colors duration-300">
              Mohammed <span className="text-gold group-hover:text-white transition-colors duration-300">Arif Khan</span>
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-gold/50" />
              <span className="text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-white/60 font-bold">
                Spiritual Healer
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] font-bold text-white/80">
            <Link href="/" className="hover:text-gold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all">Home</Link>
            <Link href="#services" className="hover:text-gold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all">Services</Link>
            <Link href="#about" className="hover:text-gold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all">About</Link>
            <Link href="#testimonials" className="hover:text-gold transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all">Stories</Link>
          </nav>

          <div className="flex items-center space-x-3 md:space-x-5">
            <a
              href="tel:+919784412832"
              className="flex items-center space-x-2 bg-gold hover:bg-white text-emerald-950 px-4 py-2.5 md:px-7 md:py-3.5 rounded-xl font-black transition-all shadow-[0_5px_15px_rgba(212,175,55,0.3)] text-[11px] md:text-sm uppercase tracking-wider group"
            >
              <Phone size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href="https://wa.me/919784412832"
              className="bg-green-500 hover:bg-green-400 text-white p-2.5 md:p-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center hover:rotate-[10deg] active:scale-90"
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
