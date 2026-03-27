"use client";

import { Send, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto bg-emerald-900 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,43,0,0.3)] flex flex-col md:flex-row border border-white/5">
        {/* Left Side: Info */}
        <div className="flex-1 p-10 md:p-20 text-white relative">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/30 rounded-full text-gold font-black text-[10px] uppercase tracking-[0.2em] mb-8">
              Priority Callback
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Talk to <br className="hidden md:block" /> Mohammed Arif Khan
            </h2>
            <p className="text-white/70 mb-12 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-gold pl-6">
              "Every problem has a Quranic solution." Share your worry privately and get 
              Effective spiritual guidance quickly.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-950 transition-all duration-500 shadow-xl">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-black mb-1">Call Us 24/7</p>
                  <p className="text-2xl md:text-3xl font-black tracking-tighter text-gold">+91-9784412832</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-arabesque opacity-[0.05]" />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-white p-10 md:p-20">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-xs font-black text-emerald-900/40 mb-3 uppercase tracking-widest group-focus-within:text-gold transition-colors">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-6 py-5 rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all text-emerald-900 font-bold text-lg"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-black text-emerald-900/40 mb-3 uppercase tracking-widest group-focus-within:text-gold transition-colors">WhatsApp Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                className="w-full px-6 py-5 rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all text-emerald-900 font-bold text-lg"
              />
            </div>
            <div className="group">
              <label className="block text-xs font-black text-emerald-900/40 mb-3 uppercase tracking-widest group-focus-within:text-gold transition-colors">Select Problem</label>
              <div className="relative">
                <select className="w-full px-6 py-5 rounded-2xl border border-emerald-100 bg-emerald-50/30 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all text-emerald-900 font-bold text-lg appearance-none cursor-pointer">
                  <option>Love Problem Solution</option>
                  <option>Marriage Issues specialist</option>
                  <option>Ex Love Back Expert</option>
                  <option>Family Dispute specialist</option>
                  <option>Other Spiritual problem</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-900/30">
                  <Phone size={18} className="rotate-90" />
                </div>
              </div>
            </div>
            <button className="w-full bg-[#25D366] hover:bg-emerald-950 text-white font-black py-6 rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="text-xl uppercase tracking-widest">WhatsApp Request</span>
              <div className="bg-white rounded-full p-1 group-hover:bg-[#25D366] transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366] group-hover:fill-white group-hover:rotate-12 transition-all duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.136 1.36.117 1.871.05.57-.075 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] pt-4">
              Full Privacy & Confidentiality Maintained
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
