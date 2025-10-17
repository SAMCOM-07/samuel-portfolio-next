import Card from "./Card";
import ShowMoreButton from "./ShowMoreButton";

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
            Hello, I&#39;m Samuel Shonde, a creative and detail-oriented Frontend Developer with a strong passion for crafting visually appealing and highly functional web experiences. I specialize in using Next.js, React, and Tailwind CSS to bring ideas to life on the web — from personal portfolios to dynamic business platforms.

          </span>
          <span className="text-muted-foreground font-medium leading-6">
            My development philosophy revolves around building solutions that are user-centered, scalable, and performance-driven. I believe that every website should not only look great but also serve a purpose — whether that&#39;s helping a brand grow, improving user engagement, or simplifying processes through technology.
          </span>
          <span className="text-muted-foreground font-medium leading-6">
            I&#39;m a developer who enjoys challenges, values continuous learning, and strives to stay updated with the latest trends in web technologies. My goal with every project is to blend creativity with technical precision to produce clean, impactful digital experiences.

          </span>
        </p>
        {showMore ? (
          <ShowMoreButton text={showMore} href="/about" />
        ) : null}
      </Card>
    </div>
  );
};

export default About;
