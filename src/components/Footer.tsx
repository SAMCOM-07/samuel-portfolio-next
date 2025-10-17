import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='conpad py-8 border-t border-border flex flex-row items-center justify-center gap-4'>
      <Link target="_blank" href={"https://github.com/SAMCOM-07"}>
        <Github className="w-8 h-8 rounded-sm p-2 hover focus active" />
      </Link>
      <Link target="_blank" href={"https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"}>
        <Twitter className="w-8 h-8 rounded-sm p-2 hover focus active" />
      </Link>
      <Link target="_blank" href={"https://www.linkedin.com/in/samuel-shonde"}>
        <Linkedin className="w-8 h-8 rounded-sm p-2 hover focus active" />
      </Link>
    </div>
  )
}

export default Footer
