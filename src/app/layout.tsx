import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mohammed Arif Khan | Islamic Spiritual Healer & Love Problem Specialist",
  description: "Get Pure Halal Islamic spiritual remedies for love marriage, husband-wife disputes, and family problems. 24/7 available for Rohani Ilaj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mohammed Arif Khan - Islamic Spiritual Healer",
    "description": "Expert Islamic spiritual solutions for love problems, marriage disputes, and family issues. Pure Halal and Quranic remedies.",
    "url": "https://yourdomain.com",
    "telephone": "+919784412832",
    "areaServed": ["IN", "UK", "US", "AE", "CA"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
