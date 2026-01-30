import { useAppContext } from "@/context/AppContext";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

const HamburgerMenu = () => {
  const { navPages, setIsOpen } = useAppContext();
  const pathname = usePathname();

  return (
    <div
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fade-up-animation absolute z-40 inset-0 top-13 bg-background/85 w-full h-screen backdrop-blur-lg md:hidden"
    >
      <div
        className="w-[90%] mx-auto rounded-md p-6 bg-background border border-muted mt-6 shadow-[0_0_10px] shadow-muted flex flex-col gap-4"
        role="navigation"
        aria-label="Main navigation"
      >
        {navPages.map((page, index) => {
          const isActive = pathname === page.url;

          return (
            <Link
              href={page.url}
              key={index}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to ${page.page} page`}
              className={`text-muted-foreground flex items-center gap-4 hover focus active p-2 rounded-md cursor-pointer hover:ml-2 transition-all ${isActive && "bg-accent"
                }`}
            >
              <span aria-hidden="true">{page.icon}</span>
              {page.page}
            </Link>
          );
        })}
        <Link
          href={"/contact"}
          aria-label="Go to contact page"
          className="text-center bg-background border-2 w-full border-muted p-2 rounded-md hover:scale-105 transition-all"
        >
          Get In Touch
        </Link>
        <div
          className="flex gap-2 self-center"
          role="group"
          aria-label="Social media links"
        >
          <Link
            target="_blank"
            href={"https://github.com/SAMCOM-07"}
            aria-label="Visit Samuel's GitHub profile"
          >
            <Github
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            href={
              "https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"
            }
            aria-label="Visit Samuel's Twitter profile"
          >
            <FaXTwitter
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/samuelshonde"}
            aria-label="Visit Samuel's LinkedIn profile"
          >
            <Linkedin
              className="w-8 h-8 rounded-sm p-2 hover focus active"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div >
  );
};

export default HamburgerMenu;