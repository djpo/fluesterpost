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

export const metadata: Metadata = {
  title: "Flüsterpost",
  description: "Get lost in translation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-r from-blue-500 to-purple-500
          text-(--foreground)
        `}
      >
        <header className="flex p-3 bg-(--dark-gray-translucent) justify-between">
          <p className="text-xl font-semibold text-white">Flüsterpost</p>
        </header>

        {children}
      </body>
    </html>
  );
}
