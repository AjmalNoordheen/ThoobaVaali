import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "Thooba Vaali",
  description: "ദൗത്യബോധത്തോടെ നന്മയുടെ കൈത്താങ്ങ്",
  keywords: [
    "Thooba Vali Charitable Trust",
    "Thooba Vali",
    "Charity",
    "Social Service",
    "Community Support",
    "Non-profit Organization",
    "Malayalam Charity",
  ],
  authors: [{ name: "Thooba Vali Charitable Trust" }],
  openGraph: {
    title: "Thooba Vali Charitable Trust",
    description: "ദൗത്യബോധത്തോടെ നന്മയുടെ കൈത്താങ്ങ്",
    url: "https://thooba-vaali.vercel.app/",
    siteName: "Thooba Vali Charitable Trust",
    images: ['/Thooba.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
