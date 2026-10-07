"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { navPages } = useAppContext();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all duration-200">
      <div className="conpad h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          aria-label="Samuel Shonde Homepage"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-border/80 group-hover:ring-brand/60 transition-all duration-200">
            <Image
              src="/samuel-logo.avif"
              alt="Samuel Shonde Logo"
              width={32}
              height={32}
              priority
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-foreground group-hover:text-brand transition-colors">
              Samuel Shonde
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:inline leading-none font-medium">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-secondary/70 px-2 py-1 rounded-full border border-border/70 shadow-xs"
          role="navigation"
          aria-label="Desktop navigation"
        >
          {navPages.map((page) => {
            const isActive = pathname === page.url;

            return (
              <Link
                key={page.url}
                href={page.url}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                  isActive
                    ? "bg-card text-foreground shadow-xs border border-border/80"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                }`}
              >
                {page.page}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: CTA + Socials + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-1 text-muted-foreground">
            <Link
              href="https://github.com/SAMCOM-07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Samuel's GitHub"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github size={15} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuelshonde"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Samuel's LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin size={15} />
            </Link>
            <Link
              href="https://x.com/SammyShowed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Samuel's Twitter / X"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:text-foreground hover:bg-secondary transition-colors"
            >
              <FaXTwitter size={14} />
            </Link>
          </div>

          <div className="h-4 w-px bg-border/60 hidden lg:block" />

          {/* Let's Talk CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-md shadow-purple-900/30 hover:shadow-purple-500/20 active:scale-95 transition-all"
          >
            <span>Let&#39;s Talk</span>
            <ArrowUpRight size={13} />
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
