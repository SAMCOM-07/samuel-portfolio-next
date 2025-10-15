import React from "react";
import { Clock, Github, Linkedin, LocationEdit, Mail, Twitter } from "lucide-react";
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
      icon: <Mail size={18} />,
      title: "Email",
      href: "#",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a.",
    },
    {
      icon: <Github size={18} />,
      title: "Github",
      href: "#",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a.",
    },
    {
      icon: <Linkedin size={18} />,
      title: "LinkedIn",
      href: "#",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a.",
    },
    {
      icon: <Twitter size={18} />,
      title: "Twitter",
      href: "#",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, a.",
    },
  ];

  return (
    <div className="max-w-lg mb-8">
      <h1 className="text-lg font-bold">Let&#39;s Connect</h1>
      <div className="flex flex-col gap-3 mt-4">
        {data.map((d) => (
          <Link
            key={d.title}
            href={d.href}
            className="flex items-center gap-4 p-6 rounded-md bg-transparent border border-border focus:shadow-[0_0_7px] hover:shadow-[0_0_7px] shadow-purpple focus:translate-x-3 hover:translate-x-3 transition-transform duration-500 group"
          >
            <span className="p-2 rounded-full bg-purpple group-hover:shadow-[0_0_10px] shadow-purpple group-hover:scale-105 transition-all duration-300 text-white">
              {d.icon}
            </span>
            <span className="">
              <h2 className="font-semibold">{d.title}</h2>
              <p className="text-muted-foreground text-sm leading-4">
                {d.text}
              </p>
            </span>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center mt-8 text-muted-foreground">
        <LocationEdit size={18}/>
        <span>Based in Nigeria, Available Worldwide</span>
      </div>
      <div className="flex gap-2 items-center mt-4 text-muted-foreground">
        <Clock size={18}/>
        <span>Usually responds within 24 hours</span>
      </div>
    </div>
  );
};

export default Connect;
