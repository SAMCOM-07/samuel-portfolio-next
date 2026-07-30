import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "@/context/AppContext";
import Chatbot from "@/components/Chatbot";
import MobileHamburgerMenu from "@/components/MobileHamburgerMenu";

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
  metadataBase: new URL("https://samuel.mevads.dev"),

  title: {
    default: "Samuel Shonde - Website Developer",
    template: "%s - Samuel Shonde",
  },
  description:
    "Samuel Shonde is a dedicated Full Stack Developer specializing in Next.js, React, TypeScript, and Tailwind CSS. I create modern, responsive, and high-performance web solutions with a focus on user experience and clean code architecture.",
  keywords: [
    "Samuel Shonde",
    "Shonde Samuel",
    "Software Engineer",
    "Web Developer",
    "Software Developer",
    "Full Stack Developer",
    "Samcom",
    "Frontend Developer",
    "Backend Developer",
    "Website Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio Website",
  ],
  authors: [{ name: "Samuel Shonde", url: "https://samuel.mevads.dev/" }],
  creator: "Samuel Shonde",
  openGraph: {
    title: "Samuel Shonde - Website Developer",
    description:
      "I'm a frontend developer passionate about building visually appealing, performant, and user-friendly web experiences with React, Next.js, and Tailwind CSS.",
    url: "https://samuel.mevads.dev/",
    siteName: "Samuel Shonde Portfolio",
    images: [
      {
        url: "/samuel-logo.avif",
        width: 1200,
        height: 630,
        alt: "Samuel Shonde Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Shonde - Website Developer",
    description:
      "Explore the portfolio of Samuel Shonde — modern frontend developer creating engaging digital experiences with React, Next.js, and TypeScript.",
    creator: "@sammyshowed",
    images: ["/samuel-logo.avif"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><meta name="google-site-verification" content="eZVRIvht6oFzvPIJWz_W2c7i-DyF3mbcmwAAkdWfluE" /></head>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased scrollbar`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppContextProvider>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Chatbot />

            {/* mobile hamburger menu */}
            <MobileHamburgerMenu />

            <Footer />
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
