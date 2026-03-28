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
            <span className={cn(
              "font-serif text-xl md:text-2xl lg:text-3xl font-black transition-colors duration-300",
              isScrolled ? "text-white" : "text-emerald-950"
            )}>
              Mohammed <span className="text-gold">Arif Khan</span>
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-gold/50" />
              <span className={cn(
                "text-[9px] md:text-[11px] tracking-[0.3em] uppercase font-bold",
                isScrolled ? "text-white/60" : "text-emerald-900/60"
              )}>
                Spiritual Healer
              </span>
            </div>
          </Link>

          <nav className={cn(
            "hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.15em] font-bold transition-colors",
            isScrolled ? "text-white/80" : "text-emerald-900/80"
          )}>
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
              className="bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] p-2.5 md:p-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center hover:rotate-[10deg] active:scale-90 border border-white/10"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
