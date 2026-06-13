'use client'

import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { Home, User, Projector, MessageCircleMore } from "lucide-react";

const MobileHamburgerMenu = () => {

  const hamContent = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "/about", icon: User },
    { name: "Projects", link: "/projects", icon: Projector },
    { name: "Contact", link: "/contact", icon: MessageCircleMore },
  ]
  

  const pathname = usePathname();


  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {/* Glassmorphism container with gradient border */}
        <div className="flex items-center justify-center gap-2 px-2 py-2 rounded-full bg-gradient-to-br from-purpple/10 via-accent/5 to-purpple/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purpple/20">
          {/* Animated gradient background overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purpple/5 via-transparent to-accent/5 pointer-events-none" />

          {/* Navigation links */}
          <div className="relative flex items-center justify-center gap-2">
            {hamContent.map((item, index) => {

              const isActive = pathname === item.link;

              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`group relative px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${isActive ? 'text-purpple bg-purpple/15 ring ring-purpple/50' : 'text-foreground/60 hover:text-foreground/80'} hover:ring hover:ring-purpple/30`}
                  aria-label={`Go to ${item.name} page`}
                >
                  {/* Hover glow effect */}
                  {/* <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purpple/0 via-purpple/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" /> */}

                  <span className="relative flex items-center justify-center gap-1.5">
                    <item.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="hidden sm:inline">{item.name}</span>
                  </span>
                </Link>
              )
            }
            )}
          </div>
        </div>

        {/* Decorative blur elements */}
        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-purpple/20 to-accent/20 blur-2xl -z-10 opacity-50" />
      </div>
    </div>
  );
}

export default MobileHamburgerMenu;
