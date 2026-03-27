"use client";

import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    { label: "Quranic & Halal Remedies", hazrat: "Pure Rohani Ilaj", others: "Doubtful Methods" },
    { label: "Confidentiality", hazrat: "100% Private", others: "Risk of Leak" },
    { label: "Consultation Fee", hazrat: "Free Initial Advice", others: "High Demands" },
    { label: "Effective Outcomes", hazrat: "Proven Results", others: "Generic Advice" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-gold/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Why We Are Different</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-900 mb-2 leading-tight">
            SPIRITUAL COMPARISON
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full mt-4"></div>
        </div>

        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gold/10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,100,0,0.1)] bg-white">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50/80">
                    <th className="py-8 px-6 text-left border-b-2 border-gold/10 text-emerald-900/40 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                      Feature Comparison
                    </th>
                    <th className="py-8 px-6 text-center border-b-2 border-gold bg-gold/10 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                       <div className="text-emerald-900 font-black text-sm md:text-xl uppercase tracking-tighter italic drop-shadow-sm">Mohammed Arif Khan</div>
                       <div className="text-[8px] md:text-[10px] text-emerald-800 font-bold uppercase tracking-[0.3em] mt-1">Recommended Specialist</div>
                    </th>
                    <th className="py-8 px-6 text-center border-b-2 border-gray-200">
                       <div className="text-gray-400 font-black text-sm md:text-xl uppercase tracking-tighter">Other Experts</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {rows.map((row, i) => (
                    <tr key={i} className="group hover:bg-emerald-50/50 transition-all duration-300">
                      <td className="py-8 px-6 font-bold text-gray-700 text-xs md:text-lg uppercase tracking-tight group-hover:text-emerald-900 transition-colors">
                        {row.label}
                      </td>
                      <td className="py-8 px-6 text-center bg-gold/[0.03] group-hover:bg-gold/[0.08] transition-colors relative">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center shadow-[0_8px_25px_rgba(0,100,0,0.3)] border-2 border-gold/30 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="text-gold" size={22} />
                          </div>
                          <span className="font-black text-emerald-950 text-[10px] md:text-sm uppercase tracking-tighter">{row.hazrat}</span>
                        </div>
                      </td>
                      <td className="py-8 px-6 text-center">
                        <div className="flex flex-col items-center gap-3 opacity-30 group-hover:opacity-50 transition-opacity">
                          <XCircle className="text-red-400" size={24} />
                          <span className="font-bold text-gray-500 text-[10px] md:text-sm uppercase tracking-tighter">{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-emerald-900 p-6 md:p-8 rounded-[3rem] border border-gold/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 group relative overflow-hidden">
           <div className="flex items-center gap-6 relative z-10">
             <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 text-gold border border-gold/20">
               <Info size={32} />
             </div>
             <div>
               <p className="text-lg md:text-xl font-bold text-white uppercase tracking-tight leading-tight mb-1">
                 Trusted Worldwide
               </p>
               <p className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-[0.2em]">Spiritual Guidance for global citizens</p>
             </div>
           </div>
           
           <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner relative z-10 text-white">
              {["UK", "USA", "UAE", "CANADA", "INDIA"].map((p, idx) => (
                <div key={idx} className={`px-5 py-2.5 rounded-xl shadow-sm font-bold text-[10px] md:text-sm italic bg-emerald-950/50 border border-white/10 hover:scale-105 transition-transform cursor-default`}>
                  {p}
                </div>
              ))}
           </div>
           <div className="absolute inset-0 bg-arabesque opacity-5" />
        </div>
      </div>
    </section>
  );
}
