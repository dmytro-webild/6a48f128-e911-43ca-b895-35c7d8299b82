import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Cozy Beachfront Villa | Tropical Luxury in Zanzibar',
  description: 'Escape to Cozy Beachfront Villa, an oceanfront haven in Kiwengwa, Zanzibar. Experience tropical luxury, private beach access, and authentic Swahili charm. Book your Tanzania vacation rental today!',
  keywords: ["Zanzibar beach villa, Tanzania vacation rental, oceanfront stay Kiwengwa, luxury villa Zanzibar, beachfront rental, tropical paradise Zanzibar"],
  openGraph: {
    "title": "Cozy Beachfront Villa | Tropical Luxury in Zanzibar",
    "description": "Escape to Cozy Beachfront Villa, an oceanfront haven in Kiwengwa, Zanzibar. Experience tropical luxury, private beach access, and authentic Swahili charm. Book your Tanzania vacation rental today!",
    "url": "https://www.cozybeachfrontvilla.com",
    "siteName": "Cozy Beachfront Villa",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/hotel-sea-holiday-building-coast_1253-650.jpg",
        "alt": "Luxury beachfront villa in Zanzibar"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Cozy Beachfront Villa | Tropical Luxury in Zanzibar",
    "description": "Escape to Cozy Beachfront Villa, an oceanfront haven in Kiwengwa, Zanzibar. Experience tropical luxury, private beach access, and authentic Swahili charm. Book your Tanzania vacation rental today!",
    "images": [
      "http://img.b2bpic.net/free-photo/hotel-sea-holiday-building-coast_1253-650.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
