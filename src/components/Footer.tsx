'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { href: "mailto:shondesamuel07@gmail.com", icon: Mail, label: "Email" },
    { href: "https://github.com/SAMCOM-07", icon: Github, label: "GitHub" },
    { href: "https://x.com/SammyShowed", icon: FaXTwitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/samuelshonde", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.tiktok.com/@samuel_loveth07", icon: FaTiktok, label: "TikTok" },
    { href: "https://wa.me/+2349061873560", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "tel:+2349061873560", icon: Phone, label: "Phone" },
  ];

  return (
    <div className='conpad py-12 border-t border-border flex flex-row items-center justify-center gap-3'>
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link 
            key={link.label}
            target="_blank" 
            href={link.href}
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <IconComponent className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
          </Link>
        );
      })}
    </div>
  )
}

export default Footer
