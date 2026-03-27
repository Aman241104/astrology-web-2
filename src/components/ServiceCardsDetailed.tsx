"use client";

import { MessageCircle, Star, Phone } from "lucide-react";

export default function ServiceCardsDetailed() {
  const cards = [
    {
      title: "Love Marriage Specialist",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      desc: "Are you facing hurdles in your love marriage? Mohammed Arif Khan specializes in resolving parental opposition and planetary influences to ensure a blissful union through pure Quranic Wazifas.",
    },
    {
      title: "Family Problem Solution",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      desc: "Stop family disputes and household conflicts today. We provide individualized spiritual treatments to promote peace, understanding, and love among family members through divine guidance.",
    },
    {
      title: "Get Lost Love Back",
      img: "https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=800&auto=format&fit=crop",
      desc: "Don't suffer in silence after a breakup. Our fast and efficient on-call Rohani solutions help you revive lost love and rekindle the passion in your relationship with 100% guaranteed results.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-emerald-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-red-700 inline-block px-6 py-1.5 rounded-full text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-4 shadow-lg">
            Guaranteed Life Problem Solutions
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-emerald-950 uppercase tracking-tighter leading-none">
            Our Exclusive <span className="text-red-700">Services</span>
          </h2>
          <p className="text-emerald-900/70 font-bold mt-4 uppercase tracking-[0.2em] text-xs md:text-sm italic">
            Trusted by millions for genuine spiritual results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-red-800 rounded-[3rem] p-8 md:p-10 shadow-2xl flex flex-col items-center text-center group border-b-[12px] border-gold transition-all hover:-translate-y-2">
              <div className="bg-gold w-full py-3 rounded-2xl mb-8 shadow-lg group-hover:scale-105 transition-transform">
                <h3 className="text-emerald-950 font-black uppercase tracking-tighter text-xl md:text-2xl">{card.title}</h3>
              </div>
              
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
                <div className="absolute inset-0 bg-gold rounded-full -m-2 animate-pulse opacity-40" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl transition-transform duration-700 group-hover:rotate-3">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white/50 uppercase font-black text-[10px] tracking-[0.3em] mb-2 italic">Specialized Spiritual Healer</p>
                <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 w-full">
                <a 
                  href={`https://wa.me/919784412832?text=Hi, I need help with ${card.title}`}
                  className="bg-gold hover:bg-white text-emerald-950 px-8 py-3.5 rounded-full font-black text-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl group-hover:shadow-gold/20"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  <span>Chat Now</span>
                </a>
                <a 
                  href="tel:+919784412832"
                  className="text-white/80 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  <span>Or Call Directly</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
