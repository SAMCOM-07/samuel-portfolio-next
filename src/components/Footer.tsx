'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { href: 'mailto:shondesamuel07@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://github.com/SAMCOM-07', icon: Github, label: 'GitHub' },
    { href: 'https://x.com/SammyShowed', icon: FaXTwitter, label: 'Twitter' },
    { href: 'https://www.linkedin.com/in/samuelshonde', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://wa.me/+2349061873560', icon: FaWhatsapp, label: 'WhatsApp' },
    { href: 'https://www.tiktok.com/@samuel_loveth07', icon: FaTiktok, label: 'TikTok' },
    { href: 'tel:+2349061873560', icon: Phone, label: 'Phone' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border/50 bg-card/30 backdrop-blur-md pt-10 pb-24 md:pb-12 mt-auto">
      <div className="conpad flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold text-sm tracking-tight text-foreground">
            Samuel Shonde
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Samuel Shonde. Crafted with Next.js, React & TypeScript.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                target="_blank"
                href={link.href}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 rounded-lg border border-border/70 bg-card hover:bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                <Icon className="w-4 h-4" />
              </Link>
            );
          })}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-lg border border-border/70 bg-card hover:bg-secondary text-muted-foreground hover:text-foreground flex items-center justify-center transition-all duration-200 hover:scale-105 ml-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
