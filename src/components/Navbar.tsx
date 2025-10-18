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
      role="navigation"
      aria-label="Main navigation bar"
      className="z-50 gap-4 py-4 bg-background/50 border-b border-b-muted sticky inset-0 backdrop-blur-sm"
    >
      <div className="conpad flex items-center justify-between slide-down-animation">
        <div className="flex items-center gap-6">
          {/* logo */}
          <Link
            href={"/"}
            aria-label="Go to homepage"
            className="font-bold text-3xl"
          >
            S
          </Link>

          {/* nav links */}
          <nav
            className="hidden md:flex items-center gap-4"
            role="menubar"
            aria-label="Desktop navigation links"
          >
            {navPages.map((page, index) => {
              const isActive = pathname === page.url;

              return (
                <ul key={index} role="none">
                  <Link
                    href={page.url}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    aria-label={'Go to ${page.page} page'}
                    className={`text-sm rounded-full px-3 py-2 hover focus active ${isActive
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground"
                      }`}
                  >
                    {page.page}
                  </Link>
                </ul>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <span className="md:hidden">
            <ThemeToggle aria-label="Toggle theme" />
          </span>

          {/* hamburger section */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden hover focus active rounded-md w-8 h-8 grid place-content-center"
          >
            {!isOpen ? <Menu size={18} aria-hidden="true" /> : <X size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* hamburger menu */}
        {isOpen && <HamburgerMenu />}

        <div
          className="md:flex gap-2 hidden"
          role="group"
          aria-label="Social media and theme controls"
        >
          <ThemeToggle aria-label="Toggle theme" />
          <Link
            target="_blank"
            href={"https://github.com/SAMCOM-07"}
            aria-label="Visit Samuel's GitHub profile"
          >
            <Github
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"}
            aria-label="Visit Samuel's Twitter profile"
          >
            <FaXTwitter
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/samuel-shonde"}
            aria-label="Visit Samuel's LinkedIn profile"
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