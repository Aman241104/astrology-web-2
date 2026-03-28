"use client";

import { MessageCircle, Heart, UserCheck, Flame, Sparkles, ShieldCheck, Star, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceCardsDetailed() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t("services.love_detailed_title"),
      icon: Heart,
      color: "bg-pink-50 text-pink-600",
      img: "/bring-back-ex.png",
      desc: t("services.love_detailed_desc"),
      points: t("services.love_points") as unknown as string[]
    },
    {
      title: t("services.husband_detailed_title"),
      icon: UserCheck,
      color: "bg-orange-50 text-orange-600",
      img: "/husband-back.png",
      desc: t("services.husband_detailed_desc"),
      points: t("services.husband_points") as unknown as string[]
    },
    {
      title: t("services.ex_detailed_title"),
      icon: Flame,
      color: "bg-amber-50 text-amber-600",
      img: "/get-love-back.png",
      desc: t("services.ex_detailed_desc"),
      points: t("services.ex_points") as unknown as string[]
    },
    {
      title: t("services.marriage_detailed_title"),
      icon: Sparkles,
      color: "bg-yellow-50 text-yellow-600",
      img: "/love-marriage.png",
      desc: t("services.marriage_detailed_desc"),
      points: t("services.marriage_points") as unknown as string[]
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#f4faf7] px-4 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Featured Specialist Image (Hero Style) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 md:mb-32">
          <div className="flex-1 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-block bg-white/80 backdrop-blur-sm border border-emerald-100 px-6 py-2 rounded-full mb-6 shadow-sm">
               <span className="text-emerald-800 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t("top_solutions.authority")}</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-black text-emerald-950 uppercase tracking-tight mb-8 leading-none">
              {t("top_solutions.title")} <span className="text-gradient-gold italic">{t("top_solutions.subtitle")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl font-medium leading-relaxed italic mb-8">
              {t("top_solutions.desc")}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <div className="flex items-center gap-2 bg-emerald-900 text-gold px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                  <Star size={14} fill="currentColor" />
                  <span>{t("top_solutions.gold_medalist")}</span>
               </div>
               <div className="flex items-center gap-2 bg-white text-emerald-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-emerald-100 shadow-sm">
                  <ShieldCheck size={14} className="text-green-600" />
                  <span>{t("top_solutions.verified_expert")}</span>
               </div>
            </div>
          </div>

          <div className="flex-1 relative group max-w-md w-full hidden md:block">
            {/* Visual Backdrops */}
            <div className="absolute inset-0 bg-gold rounded-[3rem] rotate-6 scale-95 opacity-20 -z-10 transition-transform group-hover:rotate-12 duration-700" />
            <div className="absolute inset-0 bg-emerald-900 rounded-[3rem] -rotate-3 scale-95 opacity-10 -z-10 transition-transform group-hover:-rotate-6 duration-700" />
            
            {/* Main Specialist Image */}
            <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" 
                alt="Maulana Mohammed Arif Khan" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 border border-emerald-50 rtl:flex-row-reverse">
                 <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-emerald-950 shrink-0">
                    <Zap size={24} fill="currentColor" />
                 </div>
                 <div className="rtl:text-right">
                    <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest leading-none mb-1">{t("top_solutions.guaranteed_relief")}</p>
                    <p className="text-xs font-bold text-gray-500">{t("top_solutions.fast_results")}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <a 
              key={idx} 
              href={`https://wa.me/919784412832?text=Bismillah.%20Mohammed%20Arif%20Khan,%20I%20want%20to%20consult%20about%20${encodeURIComponent(card.title)}`}
              className="bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col transition-all duration-700 md:hover:shadow-[0_40px_100px_rgba(0,68,0,0.15)] md:hover:-translate-y-3 active:scale-[0.98] group border border-emerald-50/50"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 md:group-hover:opacity-20 transition-opacity" />
                
                {/* Floating Icon inside Image */}
                <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 md:group-hover:rotate-[15deg] md:group-hover:scale-110 border-4 border-white`}>
                  <card.icon size={28} />
                </div>
              </div>
              
              <div className="p-8 md:p-10 pt-12 flex flex-col flex-grow bg-white text-center">
                <h3 className="font-serif text-xl md:text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-tight mb-4 min-h-[3rem] flex items-center justify-center md:group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
                  {card.desc}
                </p>

                {/* Rich Detail Points */}
                <div className="mb-8 space-y-2 text-left rtl:text-right">
                   {Array.isArray(card.points) && card.points.map((point, i) => (
                     <div key={i} className="flex items-center gap-2 rtl:flex-row-reverse">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-[10px] md:text-xs font-bold text-emerald-900 uppercase tracking-wider">{point}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto bg-[#25D366] md:hover:bg-emerald-950 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_15px_35px_rgba(37,211,102,0.3)] md:hover:shadow-emerald-900/30 group/btn rtl:flex-row-reverse">
                  <div className="bg-white rounded-full p-1 md:group-hover/btn:bg-green-500 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] md:group-hover/btn:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span>{t("common.whatsapp_expert")}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-arabesque opacity-[0.02] pointer-events-none" />
    </section>
  );
}
