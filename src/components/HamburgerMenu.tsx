import { useAppContext } from "@/context/AppContext";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const HamburgerMenu = () => {
  const { navPages, setIsOpen } = useAppContext();

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fade-up-animation absolute z-40 inset-0 top-16 bg-background/85 w-full h-screen backdrop-blur-lg md:hidden"
    >
      <div className="w-[90%] mx-auto rounded-md p-6 bg-background border border-muted mt-6 shadow-[0_0_10px] shadow-muted flex flex-col gap-4">
        {navPages.map((page, index) => (
          <Link
            href={page.url}
            key={index}
            className="text-muted-foreground flex items-center gap-4 hover p-2 rounded-md cursor-pointer hover:ml-2 transition-all "
          >
            <span>{page.icon}</span>
            {page.page}
          </Link>
        ))}
        <Link
          href={"/contact"}
          className="text-center bg-background border-2 w-full border-muted p-2 rounded-md hover:scale-105 transition-all"
        >
          Get In Touch
        </Link>
        <div className="flex gap-2 self-center">
          <Link href={"https://github.com/SAMCOM-07"}>
            <Github className="w-8 h-8 rounded-sm p-2 hover" />
          </Link>
          <Link href={"https://x.com/SammyShowed?t=CdJOVmklEH6ZYQi9sLimxA&s=09"}>
            <Twitter className="w-8 h-8 rounded-sm p-2 hover" />
          </Link>
          <Link href={"https://www.linkedin.com/in/samuel-shonde"}>
            <Linkedin className="w-8 h-8 rounded-sm p-2 hover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
