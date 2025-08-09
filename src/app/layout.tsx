import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
// import { Geist, Geist_Mono } from "next/font/google";
import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   weight: ["600"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   weight: ["600"],
// });

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["600"], // ✅ Load only weight 600
});

export const metadata: Metadata = {
  title: "Sarkar Nayan Next",
  description: "Passionate Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${geistSans.variable} ${geistSans.variable} antialiased`}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
