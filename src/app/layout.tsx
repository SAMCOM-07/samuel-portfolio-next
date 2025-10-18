import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Samuel Shonde | Frontend Developer & Designer",
    template: "%s | Samuel Shonde",
  },
  description:
    "Portfolio of Samuel Shonde — a frontend developer skilled in Next.js, React, TypeScript, and Tailwind CSS. I design and build modern, responsive, and performance-driven web experiences.",
  keywords: [
    "Samuel Shonde",
    "Frontend Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio Website",
  ],
  authors: [{ name: "Samuel Shonde", url: "https://samuelshonde.vercel.app/" }],
  creator: "Samuel Shonde",
  openGraph: {
    title: "Samuel Shonde | Website Developer",
    description:
      "I’m a frontend developer passionate about building visually appealing, performant, and user-friendly web experiences with React, Next.js, and Tailwind CSS.",
    url: "https://samuelshonde.vercel.app/",
    siteName: "Samuel Shonde Portfolio",
    // images: [
    //   {
    //     url: "/",
    //     width: 1200,
    //     height: 630,
    //     alt: "Samuel Shonde Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Shonde | Website Developer",
    description:
      "Explore the portfolio of Samuel Shonde — modern frontend developer creating engaging digital experiences with React, Next.js, and TypeScript.",
    creator: "@sammyshowed",
    // images: ["/og-image.png"],
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
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppContextProvider>
            <Navbar />
            {children}
            <Footer />
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
