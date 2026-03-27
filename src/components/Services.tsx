"use client";

import { MessageCircle, Heart, Users, Home, UserCheck, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Get Your Love Back",
    desc: "A single call has the power to alter your situation. Restore the passion and love in your life instantly.",
    icon: Heart,
    img: "https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bring Back Ex Partner",
    desc: "Recover lost relationships and rekindle the flame with specialized Islamic Duas and Wazifas.",
    icon: Users,
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Breakup Problem Solution",
    desc: "Specialized remedies to resolve misunderstandings and heal the pain of a recent breakup.",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1526653054275-5a4f37ea1c64?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Love Marriage Specialist",
    desc: "Remove all barriers in your love marriage and convince your parents for a blissful union.",
    icon: UserCheck,
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Husband Wife Problem Solution",
    desc: "Stop an unwanted divorce or marital conflicts and re-establish love in your life.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Family Problem Solution",
    desc: "Resolve household conflicts and bring peace back to your family through spiritual guidance.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1590059378132-7a083436098c?q=80&w=800&auto=format&fit=crop"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-white px-4 relative overflow-hidden">
      {/* Section Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-emerald-100 text-emerald-900 px-6 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 border border-emerald-200">
             Al-Quran Solutions & Spiritual Healing
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-emerald-950 mb-4 tracking-tight">
            Our Specialist <span className="text-red-700">Spiritual Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-medium italic leading-relaxed">
            "Seek help through patience and prayer." — Mohammed Arif Khan provides pure spiritual healing 
            through the deep wisdom of the Holy Quran and decades of experience in Rohani Ilaj.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group relative bg-white rounded-[2.5rem] border border-emerald-100/80 transition-all duration-500 hover:border-gold hover:shadow-[0_30px_70px_rgba(0,43,0,0.2)] overflow-hidden flex flex-col h-full shadow-lg"
            >
              {/* Service Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                   <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center text-emerald-950 shadow-lg">
                      <service.icon size={20} />
                   </div>
                   <span className="text-white font-black uppercase tracking-tighter text-sm">Top Specialist</span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-950 leading-tight">
                    {service.title}
                  </h3>
                  <span className="text-emerald-100 font-black text-4xl transition-colors tracking-tighter">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base font-medium">
                  {service.desc} We offer specialized prayers and spiritual guidance to bring immediate peace and resolution to your {service.title.toLowerCase()} concerns.
                </p>
              </div>
                
              <div className="mt-auto px-8 md:px-10 pb-8 md:pb-10 pt-0">
                <div className="pt-6 border-t border-emerald-50 flex items-center justify-between">
                  <a
                    href={`https://wa.me/919784412832?text=Bismillah.%20Hello%20Mohammed%20Arif%20Khan,%20I%20want%20to%20consult%20about%20${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center space-x-3 font-black text-emerald-950 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full"
                  >
                    <MessageCircle size={18} fill="currentColor" className="text-green-500" />
                    <span>Consult Now</span>
                  </a>
                  <a 
                    href="tel:+919784412832"
                    className="p-2 bg-gold text-emerald-950 rounded-full transition-all hover:scale-110 shadow-md"
                  >
                    <Zap size={20} fill="currentColor" />
                  </a>
                </div>
              </div>
              
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-arabesque opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-emerald-900 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Facing a different problem? <br className="hidden md:block" /> Talk to Mohammed Arif Khan directly.
            </h3>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
              Whatever your worry may be, whether it is personal, professional, or spiritual, there is always a solution in the Holy Quran. 
              Get a 100% confidential and free consultation within 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gold hover:bg-white text-emerald-950 px-10 py-5 rounded-full font-black text-xl shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Zap size={24} fill="currentColor" />
                <span>Call: +91-9784412832</span>
              </a>
              <a
                href="https://wa.me/919784412832"
                className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-full font-black text-xl shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={24} fill="currentColor" className="text-green-500" />
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10" />
        </div>
      </div>
    </section>
  );
}
