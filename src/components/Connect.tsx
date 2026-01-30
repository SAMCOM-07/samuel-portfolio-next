import React from "react";
import {
  Clock,
  Github,
  Linkedin,
  LocationEdit,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

interface DataType {
  icon: React.JSX.Element;
  title: string;
  href: string;
  text: string;
}

const Connect = () => {
  const data: DataType[] = [
    {
      icon: <Mail size={18} aria-hidden="true" />,
      title: "Email",
      href: "mailto:shondesamuel07@gmail.com",
      text: "Send me an email",
    },
    {
      icon: <Github size={18} aria-hidden="true" />,
      title: "Github",
      href: "https://github.com/SAMCOM-07",
      text: "Let's collaborate on projects",
    },
    {
      icon: <Linkedin size={18} aria-hidden="true" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/samuelshonde",
      text: "Let's connect professionally",
    },
    {
      icon: <Twitter size={18} aria-hidden="true" />,
      title: "Twitter",
      href: "https://x.com/SammyShowed",
      text: "Follow me for updates",
    },
  ];

  return (
    <section
      className="max-w-lg w-full mb-8 mx-auto px-6"
      aria-labelledby="connect-heading"
      role="region"
    >
      <h1 id="connect-heading" className="text-lg font-bold">
        Let&#39;s Connect
      </h1>

      <ul
        className="flex flex-col gap-3 mt-8"
        role="list"
        aria-label="Contact and social connection options"
      >
        {data.map((d) => (
          <li key={d.title} role="listitem">
            <Link
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={'${d.title}: ${d.text}'}
              className="flex items-center gap-4 p-6 rounded-md bg-transparent border border-border focus:shadow-[0_0_7px] active:shadow-[0_0_7px] hover:shadow-[0_0_7px] shadow-purpple focus:translate-x-3 active:translate-x-3 hover:translate-x-3 transition-transform duration-500 group"
            >
              <span
                className="p-2 rounded-full bg-purpple group-hover:shadow-[0_0_10px] shadow-purpple group-hover:scale-105 transition-all duration-300 text-white"
                aria-hidden="true"
              >
                {d.icon}
              </span>
              <span>
                <h2 className="font-semibold">{d.title}</h2>
                <p className="text-muted-foreground text-sm leading-4">
                  {d.text}
                </p>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="flex gap-2 items-center mt-8 text-muted-foreground"
        aria-label="Location information"
      >
        <LocationEdit size={18} aria-hidden="true" />
        <span>Based in Nigeria, Available Worldwide</span>
      </div>

      <div
        className="flex gap-2 items-center mt-4 text-muted-foreground"
        aria-label="Response time information"
      >
        <Clock size={18} aria-hidden="true" />
        <span>Usually responds within 24 hours</span>
      </div>
    </section>
  );
};

export default Connect;