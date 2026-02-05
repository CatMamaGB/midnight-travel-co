import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Midnight Travel Co. | Premium Travel Planning & VIP Concierge Services",
    template: "%s | The Midnight Travel Co.",
  },
  description: "Experience luxury travel planning with The Midnight Travel Co. Specializing in Disney, Universal, VIP concierge services, and special events. Your dream vacation starts here.",
  openGraph: {
    title: "The Midnight Travel Co. | Premium Travel Planning & VIP Concierge Services",
    description: "Experience luxury travel planning with The Midnight Travel Co. Specializing in Disney, Universal, VIP concierge services, and special events.",
    url: "https://www.themidnighttravelco.com",
    siteName: "The Midnight Travel Co.",
    images: [
      {
        url: "/og-image.jpg", // Placeholder - update with actual image path
        width: 1200,
        height: 630,
        alt: "The Midnight Travel Co.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Midnight Travel Co. | Premium Travel Planning & VIP Concierge Services",
    description: "Experience luxury travel planning with The Midnight Travel Co. Specializing in Disney, Universal, VIP concierge services, and special events.",
    images: ["/og-image.jpg"], // Placeholder - update with actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
