"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, UserMinus, ShieldCheck, Zap, Star, Phone, ArrowRight } from "lucide-react";

export default function CompactServicesGrid() {
  const { t } = useLanguage();

  const services = [
    { 
      icon: <Heart size={24} fill="currentColor" />, 
      title: "Get Your Love Back", 
      color: "bg-red-600", 
      desc: "Restore your relationship with powerful spiritual healing and bring back the love of your life within 24 hours.",
      img: "/get-love-back.png"
    },
    { 
      icon: <UserMinus size={24} fill="currentColor" />, 
      title: "Bring Back Ex Partner", 
      color: "bg-blue-600", 
      desc: "Reunite with your ex-partner and clear all misunderstandings using effective Rohani Ilaj and spiritual wazaif.",
      img: "/bring-back-ex.png"
    },
    { 
      icon: <ShieldCheck size={24} fill="currentColor" />, 
      title: "Breakup Problem Solution", 
      color: "bg-emerald-700", 
      desc: "Solve deep-rooted breakup issues and stop permanent separation with our expert spiritual guidance.",
      img: "/breakup-solution.png"
    },
    { 
      icon: <Users size={24} fill="currentColor" />, 
      title: "Love Marriage Specialist", 
      color: "bg-gold", 
      desc: "Remove all barriers in your love marriage and gain parental approval for a happy, blissful union.",
      img: "/love-marriage.png"
    },
    { 
      icon: <Heart size={24} fill="currentColor" />, 
      title: "Husband Wife Problem Solution", 
      color: "bg-pink-600", 
      desc: "End marital conflicts and restore mutual love, trust, and understanding between husband and wife.",
      img: "/husband-wife.png"
    },
    { 
      icon: <Zap size={24} fill="currentColor" />, 
      title: "Family Problem Solution", 
      color: "bg-purple-700", 
      desc: "Resolve family disputes, property issues, and household tensions with pure Quranic remedies.",
      img: "/family-conflict.png"
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-arabesque opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-sm">Specialized Services</span>
            <div className="h-[1px] w-8 md:w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-7xl lg:text-8xl font-black text-emerald-950 uppercase tracking-tighter mb-4 md:mb-8 leading-[0.9]">
            Spiritual <span className="text-gradient-gold italic">Solutions</span>
          </h2>
          <p className="text-emerald-900/60 font-bold uppercase tracking-widest text-[9px] md:text-base max-w-2xl mx-auto leading-relaxed">
            Accurate and effective spiritual remedies for all life problems.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible gap-4 md:gap-10 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {services.map((item, i) => (
            <a 
              key={i} 
              href={`https://wa.me/919784412832?text=Bismillah.%20I%20want%20to%20consult%20about%20${encodeURIComponent(item.title)}`}
              className="group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,43,0,0.1)] transition-all duration-700 flex flex-col border border-emerald-50/50 w-[80vw] md:w-auto shrink-0 snap-center"
            >
               {/* Image Header */}
               <div className="relative h-40 md:h-64 w-full overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className={`absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.color} text-white flex items-center justify-center shadow-xl group-hover:rotate-[15deg] transition-all duration-500 border border-white/10`}>
                     <div className="scale-75 md:scale-100">{item.icon}</div>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 md:bottom-6 md:left-8 md:right-8">
                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>
               </div>

               <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <p className="text-gray-500 font-medium text-[11px] md:text-base mb-6 md:mb-10 leading-relaxed italic">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto pt-4 md:pt-6 border-t border-emerald-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-950 font-black text-[9px] md:text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
                      <div className="bg-[#25D366] rounded-full p-1.5 shadow-sm text-white">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <span className="md:inline hidden">Consult on WhatsApp</span>
                      <span className="md:hidden inline">Consult</span>
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-950 group-hover:bg-gold group-hover:translate-x-1 transition-all">
                       <ArrowRight size={14} />
                    </div>
                  </div>
               </div>
            </a>
          ))}
          </div>

          {/* Bottom Banner-style CTA */}
        <div className="mt-20 bg-spiritual-dark p-12 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-arabesque opacity-10" />
           <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Not listed above? <span className="text-gold">I Solve Every Problem.</span>
              </h3>
              <a 
                href="https://wa.me/919784412832"
                className="inline-flex items-center gap-4 bg-gold text-emerald-950 px-12 py-5 rounded-3xl font-black text-xl uppercase shadow-2xl hover:scale-105 transition-transform border-b-8 border-gold-600"
              >
                <span>Discuss Your Issue Privately</span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
}
