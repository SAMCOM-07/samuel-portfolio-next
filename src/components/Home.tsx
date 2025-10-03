import { Download, Projector } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="h-[500px] md:h-screen overflow-hidden w-full grid place-content-center place-items-center text-center max-w-[90%] mx-auto px-6 z-40">
        {/* First animation group */}
        <div className="flex flex-col items-center slide-up-animation">
          <div className="flex gap-2 items-center px-3 -z-10 py-1 rounded-full border-2 border-border bg-background">
            <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <h3 className="font-bold text-sm w-fit">Available for work</h3>
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
            href={"#"}
            className="hover:-translate-y-1 transition-transform duration-500 px-4 py-2 bg-background/75 border border-border rounded-full flex items-center gap-2 text-sm"
          >
            <Projector size={18} />
            <span>My Projects</span>
          </Link>
        </div>
      </main>

      <div className="mainbg h-[500px] md:h-screen w-full -z-20 absolute inset-0 top-18"></div>
    </>
  );
};

export default Home;
