'use client';

import React, { useState } from 'react';
import { Clock, Github, Linkedin, Mail, MapPin, MessageSquare, Copy, Check } from 'lucide-react';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';

interface ConnectItem {
  icon: React.ReactNode;
  title: string;
  href: string;
  description: string;
  tag: string;
}

const Connect = () => {
  const [copied, setCopied] = useState(false);

  const connectionChannels: ConnectItem[] = [
    {
      icon: <Mail size={18} />,
      title: 'Email',
      href: 'mailto:shondesamuel07@gmail.com',
      description: 'shondesamuel07@gmail.com',
      tag: 'Direct',
    },
    {
      icon: <Linkedin size={18} />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/samuelshonde',
      description: 'in/samuelshonde',
      tag: 'Professional',
    },
    {
      icon: <Github size={18} />,
      title: 'GitHub',
      href: 'https://github.com/SAMCOM-07',
      description: '@SAMCOM-07',
      tag: 'Repositories',
    },
    {
      icon: <FaXTwitter size={17} />,
      title: 'Twitter / X',
      href: 'https://x.com/SammyShowed',
      description: '@SammyShowed',
      tag: 'Updates',
    },
    {
      icon: <FaWhatsapp size={17} />,
      title: 'WhatsApp',
      href: 'https://wa.me/+2349061873560',
      description: '+234 906 187 3560',
      tag: 'Chat',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shondesamuel07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-2">
            <MessageSquare size={13} />
            <span>Direct Channels</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Let&#39;s Connect
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Available for full-time engineering roles, high-impact contracts & advisory.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-secondary/80 hover:bg-secondary border border-border/60 text-foreground transition-all active:scale-95 shadow-xs"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} className="text-brand" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-2.5">
        {connectionChannels.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-card border border-border/70 hover:border-brand/50 shadow-xs hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-secondary/80 text-foreground group-hover:text-brand group-hover:bg-brand/10 transition-colors shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono font-medium text-muted-foreground px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 group-hover:border-brand/30 transition-colors shrink-0">
              {item.tag}
            </span>
          </Link>
        ))}
      </div>

      {/* Meta Indicators */}
      <div className="mt-6 pt-5 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-brand shrink-0" />
          <span>Lagos, Nigeria · Global Remote</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-emerald-400 shrink-0" />
          <span>SLA: &lt; 24h response time</span>
        </div>
      </div>
    </div>
  );
};

export default Connect;