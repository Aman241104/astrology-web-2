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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 flex flex-col items-center text-center">
              <Quote className="text-gold/30 mb-6" size={48} />
              <div className="flex space-x-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" className="text-gold" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 leading-relaxed font-medium">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <span className="block font-bold text-emerald-900 text-lg">{review.name}</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">{review.location}</span>
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
