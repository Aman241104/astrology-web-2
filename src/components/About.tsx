"use client";

import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-emerald-50 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1590059378132-7a083436098c?q=80&w=800&auto=format&fit=crop"
              alt="Hazrat Abdul Rehman Khan"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-900/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gold/20">
            <span className="block text-3xl font-bold text-emerald-900">20+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years of Service</span>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Gold Medalist & Registered Specialist</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-8 leading-tight">
            World Renowned Maulana <br /> Hazrat Abdul Rehman Khan
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Spiritual healing is always the best method for conquering the everyday challenges of life. 
            Hazrat Abdul Rehman Khan is a well-known specialist who has made Indian Islamic healing (Rohani Ilaj) 
            popular around the world. With over two decades of experience, he has received numerous honors for his work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Full Privacy Maintained",
              "Quranic & Halal Remedies",
              "Global Reach (UK, USA, UAE)",
              "Effective Outcomes Quickly",
              "Expert in Rohani Ilaj",
              "No Side Effects",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-emerald-900 font-medium">
                <CheckCircle2 size={20} className="text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
          >
            Ask a Question Now
          </a>
        </div>
      </div>
    </section>
  );
}
