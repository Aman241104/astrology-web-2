"use client";

import { MessageCircle, Heart, UserCheck, Flame, Sparkles } from "lucide-react";

const otherServices = [
  {
    title: "Love Problem Solution",
    icon: Heart,
  },
  {
    title: "Wazifa For Husband Back",
    icon: UserCheck,
  },
  {
    title: "Dua For Ex Love Back",
    icon: Flame,
  },
  {
    title: "Dua For Love Marriage",
    icon: Sparkles,
  },
];

export default function OtherServices() {
  return (
    <section className="py-16 bg-emerald-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            Our Top Solutions
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-900 group-hover:text-white transition-all">
                <service.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=Hello%20Hazrat%20Sahab,%20I%20want%20to%20consult%20about%20${encodeURIComponent(service.title)}`}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-all active:scale-95"
              >
                <MessageCircle size={16} fill="currentColor" />
                <span>Consult Now</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
