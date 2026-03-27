"use client";

import { MessageCircle, Star } from "lucide-react";

export default function ServiceCardsDetailed() {
  const cards = [
    {
      title: "Love Marriage Specialist",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      desc: "Resolving planetary influences for peaceful relationships and conflict resolution through pure spiritual direction.",
    },
    {
      title: "Family Problem Solution",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      desc: "Providing individualised treatments and promoting peace through Quranic guidance to resolve family issues.",
    },
    {
      title: "Get Lost Love Back",
      img: "https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=800&auto=format&fit=crop",
      desc: "Fast and efficient on-call resolution to help you revive lost love and increase compatibility through spiritual shifts.",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-red-700 inline-block px-6 py-1 rounded text-white font-bold text-sm uppercase tracking-widest mb-4">
            We Have All Life Problem Solutions
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-black text-emerald-950 uppercase tracking-tighter">
            Our Exclusive <span className="text-red-700">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-red-800 rounded-[3rem] p-8 md:p-10 shadow-2xl flex flex-col items-center text-center group border-b-[12px] border-gold">
              <div className="bg-gold w-full py-2 rounded-xl mb-10 shadow-lg group-hover:scale-105 transition-transform">
                <h3 className="text-emerald-950 font-black uppercase tracking-tighter text-xl">{card.title}</h3>
              </div>
              
              <div className="relative w-48 h-48 md:w-60 md:h-60 mb-10">
                <div className="absolute inset-0 bg-gold rounded-full -m-2 animate-pulse opacity-50" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>

              <div className="mb-10">
                <p className="text-white/40 uppercase font-black text-[10px] tracking-[0.3em] mb-2 italic">Best Specialist</p>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <a 
                href="https://wa.me/91XXXXXXXXXX"
                className="mt-auto bg-gold hover:bg-white text-emerald-950 px-10 py-3 rounded-full font-black text-lg flex items-center gap-2 transition-all active:scale-95 shadow-xl"
              >
                <MessageCircle size={20} fill="currentColor" />
                <span>Chat</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
