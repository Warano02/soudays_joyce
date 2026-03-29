import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soudays & Joyce - Notre Mariage",
  description: "Bienvenue sur le site officiel du mariage de Soudays et Joyce. Découvrez notre histoire, les détails de l'événement, notre galerie et confirmez votre présence.",
  keywords: ["mariage", "Soudays & Joyce", "wedding", "invitation", "RSVP", "galerie mariage"],
  authors: [{ name: "Soudays & Joyce" }],
  creator: "Soudays & Joyce",
  publisher: "Soudays & Joyce",
  alternates: {
    canonical: "https://www.soudays-joyce-mariage.com",
  },
  openGraph: {
    title: "Soudays & Joyce - Notre Mariage",
    description: "Bienvenue sur le site officiel du mariage de Soudays et Joyce. Découvrez notre histoire, les détails de l'événement, notre galerie et confirmez votre présence.",
    url: "https://www.soudays-joyce-mariage.com",
    siteName: "Soudays & Joyce Mariage",
    images: [
      {
        url: "/images/hero-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Soudays & Joyce - Mariage"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Soudays & Joyce - Notre Mariage",
    description: "Découvrez le site officiel du mariage de Soudays et Joyce.",
    images: ["/images/hero-placeholder.jpg"],
    creator: "@SoudaysJoyce"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
