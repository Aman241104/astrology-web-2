"use client";

import { Phone, MessageCircle, MapPin, Mail, Share2, Video, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-24 md:pb-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1 rtl:text-right">
            <h3 className="font-serif text-2xl font-bold text-gold mb-6">{t("hero.mohammed")} {t("hero.arif_khan")}</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              {t("footer.about_desc")}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse rtl:justify-end">
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Share2 size={20} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Video size={20} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rtl:text-right">
            <h4 className="font-serif text-xl font-bold text-gold mb-6">{t("footer.our_services")}</h4>
            <ul className="space-y-4 text-white/70">
              {(t("footer.links") as unknown as string[]).map((link, idx) => (
                <li key={idx}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="rtl:text-right">
            <h4 className="font-serif text-xl font-bold text-gold mb-6">{t("footer.contact_us")}</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>{t("common.available_globally")}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+919784412832" className="hover:text-gold transition-colors ltr:direction-ltr" style={{ direction: 'ltr' }}>+91-9784412832</a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail size={20} className="text-gold shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-gold transition-colors">info@example.com</a>
              </li>
            </ul>
          </div>

          <div className="rtl:text-right">
            <h4 className="font-serif text-xl font-bold text-gold mb-6">{t("footer.available_24_7")}</h4>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t("footer.footer_desc")}
            </p>
            <a
              href="https://wa.me/919784412832"
              className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] font-bold py-4 rounded-xl transition-all shadow-lg group rtl:space-x-reverse"
            >
              <div className="bg-white group-hover:bg-[#25D366] rounded-full p-1 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span>{t("common.message_whatsapp")}</span>
            </a>
          </div>
        </div>

        {/* SEO City Cloud */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <h4 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-6 text-center">{t("common.serving_worldwide")}</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-white/40 uppercase font-bold tracking-widest text-center max-w-5xl mx-auto">
            <span>Mumbai</span> <span>•</span> <span>Delhi</span> <span>•</span> <span>Bangalore</span> <span>•</span> 
            <span>Hyderabad</span> <span>•</span> <span>Ahmedabad</span> <span>•</span> <span>Chennai</span> <span>•</span> 
            <span>Kolkata</span> <span>•</span> <span>Surat</span> <span>•</span> <span>Pune</span> <span>•</span> 
            <span>Jaipur</span> <span>•</span> <span>Lucknow</span> <span>•</span> <span>Kanpur</span> <span>•</span> 
            <span>Nagpur</span> <span>•</span> <span>Indore</span> <span>•</span> <span>Thane</span> <span>•</span> 
            <span>Bhopal</span> <span>•</span> <span>Visakhapatnam</span> <span>•</span> <span>London</span> <span>•</span> 
            <span>Dubai</span> <span>•</span> <span>Toronto</span> <span>•</span> <span>New York</span> <span>•</span> 
            <span>Abu Dhabi</span> <span>•</span> <span>Singapore</span> <span>•</span> <span>Melbourne</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
          <p>© {new Date().getFullYear()} {t("hero.mohammed")} {t("hero.arif_khan")}. {t("common.all_rights_reserved")}</p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">{t("common.privacy_policy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("common.terms_of_service")}</a>
          </div>
        </div>
        
        <p className="mt-8 text-center text-[10px] text-white/30 max-w-4xl mx-auto">
          {t("common.disclaimer")}
        </p>
      </div>

      {/* Persistent Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-emerald-900 border-t border-gold/20 flex z-40 h-16 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] rtl:flex-row-reverse">
        <a
          href="tel:+919784412832"
          className="flex-1 flex flex-col items-center justify-center space-y-0.5 text-gold border-r border-gold/10 rtl:border-r-0 rtl:border-l"
        >
          <Phone size={20} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t("common.call_now")}</span>
        </a>
        <a
          href="https://wa.me/919784412832"
          className="flex-1 flex flex-col items-center justify-center space-y-0.5 text-[#25D366]"
        >
          <MessageCircle size={20} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t("common.whatsapp")}</span>
        </a>
      </div>

      {/* Decorative Arabesque */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none" />
    </footer>
  );
}
