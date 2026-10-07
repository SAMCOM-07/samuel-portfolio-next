import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "@/context/AppContext";
import Chatbot from "@/components/Chatbot";
import MobileHamburgerMenu from "@/components/MobileHamburgerMenu";
import CommandMenu from "@/components/CommandMenu";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuel.mevads.dev"),

  title: {
    default: "Samuel Shonde — Full-Stack Software Engineer",
    template: "%s — Samuel Shonde",
  },
  description:
    "Samuel Shonde is a Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL. Engineering scalable, high-performance web systems and digital experiences.",
  keywords: [
    "Samuel Shonde",
    "Shonde Samuel",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Web Application Architecture",
    "Frontend Engineer",
  ],
  authors: [{ name: "Samuel Shonde", url: "https://samuel.mevads.dev/" }],
  creator: "Samuel Shonde",
  openGraph: {
    title: "Samuel Shonde — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, TypeScript, and high-performance web application architecture.",
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
    title: "Samuel Shonde — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in Next.js, TypeScript, and high-performance web application architecture.",
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
      <head>
        <meta name="google-site-verification" content="eZVRIvht6oFzvPIJWz_W2c7i-DyF3mbcmwAAkdWfluE" />
      </head>
      <body
        className={`${sansFont.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-brand/25 selection:text-foreground scrollbar`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppContextProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-full focus:font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <CommandMenu />
            <Chatbot />
            <MobileHamburgerMenu />
            <Footer />
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
