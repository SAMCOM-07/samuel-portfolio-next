"use client";

import { useAppContext } from "@/context/AppContext";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const { navPages, setIsOpen } = useAppContext();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus first link when menu opens
  useEffect(() => {
    if (firstLinkRef.current) {
      firstLinkRef.current.focus();
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      id="mobile-menu"
      className="fade-up-animation absolute z-40 inset-0 top-13 bg-background/85 w-full h-screen backdrop-blur-lg md:hidden"
    >
      {/* Backdrop - clickable to close */}
      <div
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu content */}
      <nav
        ref={menuRef}
        className="relative w-[90%] mx-auto rounded-md p-6 bg-background border border-muted mt-6 shadow-[0_0_10px] shadow-muted flex flex-col gap-4"
        aria-label="Mobile menu navigation"
      >
        {navPages.map((page, index) => {
          const isActive = pathname === page.url;

          return (
            <Link
              onClick={() => setIsOpen(false)}
              href={page.url}
              key={index}
              ref={index === 0 ? firstLinkRef : null}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Navigate to ${page.page} page`}
              className={`text-muted-foreground flex items-center gap-4 hover focus active p-2 rounded-md cursor-pointer hover:ml-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary ${isActive && "bg-accent"
                }`}
            >
              <span aria-hidden="true">{page.icon}</span>
              {page.page}
            </Link>
          );
        })}
        <Link
          href={"Shonde-Samuel-Resume.pdf"}
          download
          aria-label="Download Resume PDF"
          className="text-center text-white bg-purpple w-full ring-muted p-2 rounded-md hover:ring-2 transition-all flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-white"
        >
          <Download size={20} aria-hidden="true" /> <span>Download Resume</span>
        </Link>
        <div
          className="flex gap-2 self-center"
          role="group"
          aria-label="Social media links"
        >
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
            href={
              "https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"
            }
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
      </nav>
    </div >
  );
};

export default HamburgerMenu;