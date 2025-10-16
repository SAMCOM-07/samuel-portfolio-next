import { Download, Projector } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="h-[500px] md:h-screen overflow-hidden w-full grid place-content-center place-items-center text-center max-w-[90%] mx-auto px-6 z-40">

        {/* background */}
        <div className="mainbg h-[500px] md:h-screen w-full -z-20 absolute inset-0 top-18"></div>

        {/* First animation group */}
        <div className="flex flex-col items-center slide-up-animation">
          <div className="group relative grid w-max overflow-hidden rounded-full px-3 py-1 transition-colors duration-400">
            {/* Rotating light ring */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 before:absolute before:inset-0 before:w-[200%] before:aspect-square before:bg-[conic-gradient(from_0deg,transparent_0deg,var(--foreground)_45deg,transparent_360deg)] before:content-[''] before:translate-x-[-25%] before:translate-y-[-25%] before:animate-spin-slow"></span>
            </span>

            {/* Background layer */}
            <span className="absolute inset-0.5 rounded-full bg-background transition-colors duration-200 group-hover:bg-background/90"></span>

            {/* Text */}
            <span className="z-10 flex items-center gap-2 text-sm font-medium">
              <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <h3 className="font-bold text-sm w-fit">Available for work</h3>
            </span>
          </div>
          <h1 className="font-bold text-5xl md:text-7xl mt-6">Shonde Samuel</h1>
          <span className="font-bold text-5xl md:text-6xl mt-2">
            Website Developer
          </span>
        </div>

        {/* Second animation - starts 1s later */}
        <p className="text-muted-foreground max-w-xs mt-4">
          Passionate about building outstanding websites using the latest web
          technologies.
        </p>

        <div className="flex gap-6 mt-6">
          <Link
            href={"#"}
            className="hover:-translate-y-1 transition-transform duration-500 px-4 py-2 bg-purpple/80 text-white rounded-full flex items-center gap-2 text-sm"
          >
            <Download size={18} />
            <span>My Resume</span>
          </Link>
          <Link
            href={"/projects"}
            className="hover:-translate-y-1 transition-transform duration-500 px-4 py-2 bg-background/75 border border-border rounded-full flex items-center gap-2 text-sm"
          >
            <Projector size={18} />
            <span>My Projects</span>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
