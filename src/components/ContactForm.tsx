"use client";

import { Send, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto bg-emerald-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side: Info */}
        <div className="flex-1 p-10 md:p-16 text-white relative">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Get a Free Spiritual Callback</h2>
            <p className="text-white/70 mb-8 text-lg">
              Don't suffer in silence. Share your worry with Hazrat Sahab and get 
              Effective Quranic guidance quickly.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Call Us 24/7</p>
                  <p className="text-xl font-bold">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-arabesque opacity-10" />
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-white p-10 md:p-16">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl border border-emerald-100 bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-emerald-900"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                className="w-full px-5 py-4 rounded-xl border border-emerald-100 bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-emerald-900"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-emerald-900 mb-2 uppercase tracking-wide">Problem Type</label>
              <select className="w-full px-5 py-4 rounded-xl border border-emerald-100 bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all text-emerald-900">
                <option>Love Problem</option>
                <option>Marriage Issues</option>
                <option>Ex Love Back</option>
                <option>Family Dispute</option>
                <option>Other Problem</option>
              </select>
            </div>
            <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 group">
              <span>Send Request</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-center text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
              Full Privacy & Confidentiality Maintained
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
