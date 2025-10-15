// import { Link } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Card from "./Card";
import Link from "next/link";

const About = ({ showMore }: { showMore?: string }) => {
  return (
    <div
      className="px-6 mt-18 mx-auto max-w-5xl relative slide-up-animation"
    >
      <div className="blurpurple"></div>
      <div className="blurblue"></div>
      <h1 className="mb-8 text-center">About Me</h1>
      <Card>
        <p className="p-4 flex flex-col gap-6">
          <span className="text-muted-foreground font-medium leading-6">
            I&#39;m Shonde Samuel, a Computer Engineering Undergraduate and full
            stack developer from Nigeria, passionate about solving complex
            problems and creating seamless digital experiences. My approach
            emphasizes minimalism.
          </span>
          <span className="text-muted-foreground font-medium leading-6">
            Beyond crafting beautiful web applications, I bring a versatile
            skill set and a business-first mindset to every project. I&#39;m
            also constantly exploring new technologies, diving deep into system
            architecture and performance optimization.
          </span>
          <span className="text-muted-foreground font-medium leading-6">
            I believe in the power of elegant code, thoughtful design, and
            user-centered development. Let&#39;s build something amazing
            together. I&#39;m currently available for collaborations,
            freelancing, and full-time opportunities. Oh, before I forget, you
            should note that I don&#39;t always sound so serious.
          </span>
        </p>
        {showMore ? (
          <Link
            href="/about"
            className="mt-4 text-primary text-center hover:underline flex items-center justify-center gap-1 font-medium group bg-secondary py-1 px-3 rounded-lg w-fit mx-auto mb-2"
          >
            {showMore}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        ) : null}
      </Card>
    </div>
  );
};

export default About;
