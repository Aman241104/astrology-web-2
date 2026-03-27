"use client";

import { Star, Phone, CheckCircle2 } from "lucide-react";

export default function TrustHeader() {
  const flags = [
    { country: "USA", url: "https://flagcdn.com/w40/us.png" },
    { country: "UK", url: "https://flagcdn.com/w40/gb.png" },
    { country: "UAE", url: "https://flagcdn.com/w40/ae.png" },
    { country: "India", url: "https://flagcdn.com/w40/in.png" },
    { country: "Canada", url: "https://flagcdn.com/w40/ca.png" },
    { country: "Germany", url: "https://flagcdn.com/w40/de.png" },
  ];

  const badges = [
    "Love Problem Specialist",
    "Husband Wife Problem Specialist",
    "Love Marriage Specialist",
    "Lost Love Back Expert",
    "Quick Solution In 24 Hours",
  ];

  return (
    <div className="bg-white pt-24 md:pt-28">
      {/* Top Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Brand Profile */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-900 rounded-full flex items-center justify-center p-1 border-4 border-gold shadow-xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1590059378132-7a083436098c?q=80&w=200&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-full" 
              alt="Hazrat Profile"
            />
          </div>
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
              <span className="bg-gold text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded">5.0</span>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={12} fill="#D4AF37" className="text-gold" />
              ))}
              <span className="text-emerald-900 text-[10px] font-black uppercase tracking-tighter ml-1">World Famous Specialist</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-emerald-900 uppercase tracking-tighter leading-none mb-2">
              HAZRAT <span className="text-gold">ABDUL REHMAN</span>
            </h2>
            <div className="inline-block bg-gold/10 border border-gold/20 px-3 py-1 rounded-lg">
              <p className="text-[10px] md:text-xs font-black text-emerald-900 uppercase tracking-widest">
                ( 10 Times Gold-Medalist Rohani specialist )
              </p>
            </div>
          </div>
        </div>

        {/* Center: Global Trust */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs md:text-sm font-black text-emerald-900 uppercase tracking-widest">
            Proven Spiritual Solutions Globally
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {flags.map((flag, idx) => (
              <img key={idx} src={flag.url} alt={flag.country} className="h-5 md:h-7 w-auto shadow-sm rounded-sm" />
            ))}
          </div>
          <div className="bg-emerald-900 text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg border-b-4 border-gold/50">
            One Call Can Change Your Life
          </div>
        </div>

        {/* Right: Contact & Rating */}
        <div className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black text-emerald-900 uppercase tracking-widest italic">Contact Anytime</span>
            <span className="bg-gold text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded">24/7 LIVE</span>
          </div>
          <a href="tel:+91XXXXXXXXXX" className="text-2xl md:text-4xl font-black text-emerald-900 tracking-tighter hover:text-gold transition-colors">
            +91 XXXXX XXXXX
          </a>
          <div className="flex items-center gap-3 mt-1">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-5 grayscale opacity-70" />
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
          {badges.map((badge, idx) => (
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
