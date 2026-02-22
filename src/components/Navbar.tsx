"use client";

import {
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const { navPages, isOpen, setIsOpen, dropdownRef } = useAppContext();
  const pathname = usePathname();

  return (
    <nav
      ref={dropdownRef}
      aria-label="Main navigation"
      className="z-50 gap-4 py-4 bg-background/50 border-b border-b-muted sticky inset-0 backdrop-blur-sm"
    >
      <div className="conpad flex items-center justify-between slide-down-animation">
        <div className="flex items-center gap-6">
          {/* logo */}
          <Link
            href={"/"}
            aria-label="Samuel's Portfolio - Home"
            className="font-bold text-3xl focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            S
          </Link>

          {/* nav links */}
          <ul
            className="hidden md:flex items-center gap-4 list-none"
            role="list"
          >
            {navPages.map((page, index) => {
              const isActive = pathname === page.url;

              return (
                <li key={index}>
                  <Link
                    href={page.url}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Navigate to ${page.page} page`}
                    className={`text-sm rounded-full px-3 py-2 hover focus active focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground"
                      }`}
                  >
                    {page.page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <span className="md:hidden">
            <ThemeToggle />
          </span>

          {/* hamburger section */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
            className="md:hidden hover focus active rounded-md w-8 h-8 grid place-content-center focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            {!isOpen ? <Menu size={18} aria-hidden="true" /> : <X size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* hamburger menu */}
        {isOpen && <HamburgerMenu />}

        <div
          className="md:flex gap-2 hidden"
          role="group"
          aria-label="Social media links and theme toggle"
        >
          <ThemeToggle />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/SAMCOM-07"}
            aria-label="Visit Samuel's GitHub profile (opens in new tab)"
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
          >
            <Github
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://x.com/SammyShowed"}
            aria-label="Visit Samuel's Twitter profile (opens in new tab)"
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
          >
            <FaXTwitter
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/samuelshonde"}
            aria-label="Visit Samuel's LinkedIn profile (opens in new tab)"
            className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
          >
            <Linkedin
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;