"use client";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Arhaan Malik",
    location: "London, UK",
    text: "I was on the verge of divorce, but Hazrat Sahab's Wazifa changed everything. My wife returned, and now we are living happily. Truly a miracle!",
    stars: 5,
  },
  {
    name: "Sana Khan",
    location: "Dubai, UAE",
    text: "My parents were against my love marriage. After consulting Maulana Sahab, they themselves agreed within 15 days. Thank you so much!",
    stars: 5,
  },
  {
    name: "Faiz Ahmed",
    location: "Mumbai, India",
    text: "Lost my job and my love at the same time. Hazrat Sahab gave me a special Dua, and within a week, I got a new job and my partner back.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories from real people who found their solutions through 
            Islamic spiritual guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="flex-1 p-8 md:p-10 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 relative mb-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,100,0,0.1)] hover:-translate-y-2">
                <Quote className="text-gold/20 absolute top-8 right-8" size={60} />
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" className="text-gold" />
                  ))}
                </div>
                <p className="text-emerald-950 font-medium italic mb-8 leading-relaxed text-lg relative z-10">
                  "{review.text}"
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-4 left-12 w-8 h-8 bg-inherit border-r border-b border-emerald-100 rotate-45" />
              </div>
              <div className="pl-12 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-black text-emerald-950 shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-black text-emerald-900 text-lg uppercase tracking-tighter">{review.name}</span>
                  <span className="text-[10px] text-gold font-black uppercase tracking-[0.2em]">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-serif font-bold text-emerald-900 mb-8">
            Join 50,000+ happy clients. Your solution is just a call away.
          </p>
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-block bg-gold hover:bg-gold-600 text-emerald-950 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
