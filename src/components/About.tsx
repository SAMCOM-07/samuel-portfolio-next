import Card from "./Card";

const About = () => {
  return (
    <div className="px-6 mt-18 mx-auto max-w-5xl relative">
      <div className="absolute items-center bg-purple-900/50 w-46 h-46 blur-[120px] right-4 top-4"></div>
      <div className="absolute items-center bg-blue-900/50 w-46 h-46 blur-[120px] bottom-4 left-4"></div>
      <h1 className="mb-8 text-center">About Me</h1>
      <Card>
        <p className="p-4 flex flex-col gap-6">
          <span className='text-foreground/60 font-medium leading-6'>
            I&#39;m Nathanael Omebele, a Computer Science graduate and full stack
            developer from Nigeria, passionate about solving complex problems
            and creating seamless digital experiences. My approach emphasizes
            minimalism.
          </span>
          <span className='text-foreground/60 font-medium leading-6'>
            Beyond crafting beautiful web applications, I bring a versatile
            skill set and a business-first mindset to every project. I&#39;m also
            constantly exploring new technologies, diving deep into system
            architecture and performance optimization.
          </span>
          <span className='text-foreground/60 font-medium leading-6'>
            I believe in the power of elegant code, thoughtful design, and
            user-centered development. Let&#39;s build something amazing together.
            I&#39;m currently available for collaborations, freelancing, and
            full-time opportunities. Oh, before I forget, you should note that I
            don&#39;t always sound so serious.
          </span>
        </p>
      </Card>
    </div>
  );
};

export default About;
