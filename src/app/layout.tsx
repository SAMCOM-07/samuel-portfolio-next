import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "@/context/AppContext";

import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Samuel Shonde Portfolio",
  description: "Frontend Developer Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`font-inter`}
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
