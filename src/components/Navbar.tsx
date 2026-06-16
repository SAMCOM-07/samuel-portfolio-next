"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { navPages, isOpen, setIsOpen, dropdownRef } = useAppContext();
  const pathname = usePathname();

  return (
    <nav
      ref={dropdownRef}
      role="navigation"
      aria-label="Main hamburger menu"
      className="z-50 gap-4 py-4 bg-background/50 border-b border-b-muted sticky inset-0 backdrop-blur-sm"
    >
      <div className="conpad flex items-center justify-between slide-down-animation">
        {/* logo */}
        <Link
          href={"/"}
          aria-label="Go to homepage"
          className="font-bold text-3xl"
        >
          S
        </Link>

        {/* nav links */}
        <ul
          className="hidden md:flex items-center gap-2 bg-gradient-to-br from-purpple/10 via-accent/5 to-purpple/5 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-sm shadow-purpple/20 hover:border-white/20 transition-colors duration-300"
          role="menubar"
          aria-label="Desktop navigation links"
        >
          {navPages.map((page, index) => {
            const isActive = pathname === page.url;

            return (
              <li key={index} role="none" className={`text-sm rounded-full px-3 py-2 hover:ring ring-purpple/40 focus active transition-all duration-300 ${isActive
                ? "text-purpple bg-purpple/15 ring ring-purpple/50"
                : "text-muted-foreground"
                }`}>
                <Link
                  href={page.url}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`Go to ${page.page} page`}
                >
                  {page.page}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* theme toggle */}
        <ThemeToggle aria-label="Toggle theme" />
        {/* <div className="flex items-center gap-2">
          <span className="md:hidden">
            <ThemeToggle aria-label="Toggle theme" />
          </span>

          
          <button
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden hover focus active rounded-md w-8 h-8 grid place-content-center"
          >
            {!isOpen ? <Menu size={18} aria-hidden="true" /> : <X size={18} aria-hidden="true" />}
          </button>
        </div> */}

        {/* hamburger menu */}
        {/* {isOpen ? <HamburgerMenu /> : null} */}

        {/* <div
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
            href={"https://x.com/SammyShowed"}
            aria-label="Visit Samuel's Twitter profile"
          >
            <FaXTwitter
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/samuelshonde"}
            aria-label="Visit Samuel's LinkedIn profile"
          >
            <Linkedin
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;