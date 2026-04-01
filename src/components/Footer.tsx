"use client";

import { Phone, MessageCircle, MapPin, Mail, Share2, Video, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-20 md:pb-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1 rtl:text-right">
            <h3 className="font-serif text-xl font-bold text-gold mb-4">{t("hero.mohammed")} {t("hero.arif_khan")}</h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {t("footer.about_desc")}
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse rtl:justify-end">
              <a href="#" className="p-1.5 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Share2 size={18} /></a>
              <a href="#" className="p-1.5 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Video size={18} /></a>
              <a href="#" className="p-1.5 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Globe size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rtl:text-right">
            <h4 className="font-serif text-lg font-bold text-gold mb-4">{t("footer.our_services")}</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              {(t("footer.links") as unknown as string[]).map((link, idx) => (
                <li key={idx}><a href="#" className="hover:text-gold transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="rtl:text-right">
            <h4 className="font-serif text-lg font-bold text-gold mb-4">{t("footer.contact_us")}</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>{t("common.available_globally")}</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+919784412832" className="hover:text-gold transition-colors ltr:direction-ltr" style={{ direction: 'ltr' }}>+91-9784412832</a>
              </li>
            </ul>
          </div>

          <div className="rtl:text-right">
            <h4 className="font-serif text-lg font-bold text-gold mb-4">{t("footer.available_24_7")}</h4>
            <p className="text-white/70 text-xs mb-4 leading-relaxed">
              {t("footer.footer_desc")}
            </p>
            <a
              href="https://wa.me/919784412832"
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] font-bold py-3 rounded-lg transition-all shadow-lg group rtl:space-x-reverse text-sm"
            >
              <span>{t("common.message_whatsapp")}</span>
            </a>
          </div>
        </div>

        {/* SEO City Cloud */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-[9px] text-white/30 uppercase font-bold tracking-widest text-center max-w-5xl mx-auto">
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] gap-2">
          <p>© {new Date().getFullYear()} {t("hero.mohammed")} {t("hero.arif_khan")}. {t("common.all_rights_reserved")}</p>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">{t("common.privacy_policy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("common.terms_of_service")}</a>
          </div>
        </div>
        
        <p className="mt-8 text-center text-[10px] text-white/30 max-w-4xl mx-auto">
          {t("common.disclaimer")}
        </p>
      </div>

      {/* Decorative Arabesque */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none" />
    </footer>
  );
}
