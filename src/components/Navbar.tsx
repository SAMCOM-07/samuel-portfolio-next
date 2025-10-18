"use client";

import {
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { navPages, isOpen, setIsOpen, dropdownRef } = useAppContext();
  const pathname = usePathname();

  return (
    <div
      ref={dropdownRef}
      className="conpad flex items-center justify-between z-50 gap-4 py-4 bg-background/50 border-b border-b-muted sticky inset-0 backdrop-blur-sm"
    >
      <div className="flex items-center gap-6">
        {/* logo */}
        <Link href={"/"} className="font-bold text-3xl">
          S
        </Link>

        {/* nav links */}
        <nav className="hidden md:flex items-center gap-4">
          {navPages.map((page, index) => {

            const isActive = pathname === page.url;

            return (
              <ul key={index}>
                <Link
                  href={page.url}
                  className={`text-sm rounded-full px-3 py-2 hover focus active ${isActive ? 'bg-accent text-foreground' : 'text-muted-foreground'}`}
                >
                  {page.page}
                </Link>
              </ul>
            )
          })}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <span className="md:hidden">
          <ThemeToggle />
        </span>
        {/* hamburger section */}
        {/* trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hover focus active rounded-md w-8 h-8 grid place-content-center"
        >
          {!isOpen ? <Menu size={18} /> : <X size={18} />}
        </button>
      </div>

      {/* hamburger menu */}
      {isOpen && <HamburgerMenu />}

      <div className="md:flex gap-2 hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        <Link target="_blank" href={"https://github.com/SAMCOM-07"}>
          <Github className="w-8 h-8 rounded-sm p-2 hover focus active" />
        </Link>
        <Link target="_blank" href={"https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"}>
          <FaXTwitter className="w-8 h-8 rounded-sm p-2 hover focus active" />
        </Link>
        <Link target="_blank" href={"https://www.linkedin.com/in/samuel-shonde"}>
          <Linkedin className="w-8 h-8 rounded-sm p-2 hover focus active" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
