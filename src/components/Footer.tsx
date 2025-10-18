import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  
  return (
    <div className='conpad py-12 border-t border-border flex flex-row items-center justify-center gap-3'>
      <Link target="_blank" href={"mailto:shondesamuel07@gmail.com"}>
        <Mail className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"https://github.com/SAMCOM-07"}>
        <Github className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"https://x.com/SammyShowed"}>
        <FaXTwitter className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/samuel-shonde"}>
        <Linkedin className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"https://www.tiktok.com/@samuel_loveth07"}>
        <FaTiktok className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"https://wa.me/+2349061873560"}>
        <FaWhatsapp className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
      <Link target="_blank" href={"tel:+2349061873560"}>
        <Phone className="w-9 h-9 rounded-sm p-2 hover focus active border border-border" />
      </Link>
    </div>
  )
}

export default Footer
