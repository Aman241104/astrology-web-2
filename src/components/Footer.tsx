"use client";

import { Phone, MessageCircle, MapPin, Mail, Share2, Video, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-24 md:pb-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-gold mb-6">Hazrat Abdul Rehman</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Providing Pure Halal Islamic spiritual solutions and Rohani Ilaj 
              for relationship and personal life issues. Helping thousands globally with 
              pure Quranic remedies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Share2 size={20} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Video size={20} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-gold hover:text-emerald-950 rounded-lg transition-all" aria-label="Social"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-gold transition-colors">Dua for Love Back</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Love Marriage Solution</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Husband Wife Dispute</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Intercaste Marriage</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Convince Parents</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold shrink-0" />
                <span>Available Globally (UK, USA, Canada, UAE, India)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-gold transition-colors">+91 XXXXX XXXXX</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-gold shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-gold transition-colors">info@example.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold mb-6">Available 24/7</h4>
            <p className="text-white/70 mb-6 leading-relaxed">
              Don't wait for your problems to grow. Call Maulana Sahab now for an immediate solution.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg"
            >
              <MessageCircle size={20} fill="currentColor" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* SEO City Cloud */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <h4 className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-6 text-center">Serving Worldwide</h4>
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
          <p>© {new Date().getFullYear()} Hazrat Abdul Rehman Khan. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <p className="mt-8 text-center text-[10px] text-white/30 max-w-4xl mx-auto">
          Disclaimer: Spiritual healing and Islamic remedies are based on faith and belief. 
          Outcomes may vary from person to person. We do not practice or encourage black magic (Sifli Ilm). 
          Our methods are Pure Halal and Sharia-compliant.
        </p>
      </div>

      {/* Persistent Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-emerald-900 border-t border-gold/20 flex z-40 h-16 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
        <a
          href="tel:+91XXXXXXXXXX"
          className="flex-1 flex flex-col items-center justify-center space-y-0.5 text-gold border-r border-gold/10"
        >
          <Phone size={20} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call Now</span>
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="flex-1 flex flex-col items-center justify-center space-y-0.5 text-green-500"
        >
          <MessageCircle size={20} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
      </div>

      {/* Decorative Arabesque */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none" />
    </footer>
  );
}
