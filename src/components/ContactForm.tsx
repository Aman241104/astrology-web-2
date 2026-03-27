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
            <button className="w-full bg-emerald-950 hover:bg-emerald-900 text-white font-black py-6 rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="text-xl uppercase tracking-widest">Send Request</span>
              <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-gold" />
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
