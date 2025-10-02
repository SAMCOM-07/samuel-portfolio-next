"use client";

import {
  Github,
  Menu,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { navPages, isOpen, setIsOpen, dropdownRef } = useAppContext();

  return (
    <div
      ref={dropdownRef}
      className="conpad flex items-center justify-between z-50 gap-4 py-4 bg-background/75 border-b border-b-muted sticky inset-0 backdrop-blur-xs"
    >
      <div className="flex items-center gap-6">
        {/* logo */}
        <Link href={"/"} className="font-bold text-3xl">
          S
        </Link>

        {/* nav links */}
        <nav className="hidden md:flex items-center gap-4">
          {navPages.map((page, index) => (
            <ul key={index}>
              <Link
                href={page.url}
                className="text-muted-foreground font-medium rounded-full px-3 py-2 hover"
              >
                {page.page}
              </Link>
            </ul>
          ))}
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
          className="md:hidden hover rounded-md w-8 h-8 grid place-content-center"
        >
          {!isOpen ? <Menu size={18} /> : <X size={18} />}
        </button>
      </div>

      {/* hamburger menu */}
      {isOpen && <HamburgerMenu />}

      <div className="md:flex gap-2 hidden">
        <Link href={"#"}>
          <Github className="w-8 h-8 rounded-sm p-2 hover" />
        </Link>
        <Link href={"#"}>
          <Twitter className="w-8 h-8 rounded-sm p-2 hover" />
        </Link>
        {/* <button><Moon className='w-8 h-8 rounded-sm p-2 hover'/></button> */}

        {/* THeme toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
