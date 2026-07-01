import type { Metadata } from "next";
import { Nunito, Caveat } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "я рядом — для мамы",
  description: "Тёплое место, где дочь всегда рядом.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "я рядом",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${nunito.variable} ${caveat.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
