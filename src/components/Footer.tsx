import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  
  return (
    <footer className='conpad py-12 border-t border-border' role="contentinfo">
      <nav className='flex flex-row items-center justify-center gap-3' role="navigation" aria-label="Social media links">
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"mailto:shondesamuel07@gmail.com"}
          aria-label="Send email to Samuel (opens email client)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <Mail className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"https://github.com/SAMCOM-07"}
          aria-label="Visit Samuel's GitHub profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <Github className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"https://x.com/SammyShowed"}
          aria-label="Visit Samuel's Twitter profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <FaXTwitter className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/samuelshonde"}
          aria-label="Visit Samuel's LinkedIn profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <Linkedin className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"https://www.tiktok.com/@samuel_loveth07"}
          aria-label="Visit Samuel's TikTok profile (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <FaTiktok className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"https://wa.me/+2349061873560"}
          aria-label="Chat with Samuel on WhatsApp (opens in new tab)"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <FaWhatsapp className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
        <Link 
          target="_blank" 
          rel="noopener noreferrer"
          href={"tel:+2349061873560"}
          aria-label="Call Samuel at +234 906 187 3560"
          className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm transition-colors"
        >
          <Phone className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" aria-hidden="true" />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
