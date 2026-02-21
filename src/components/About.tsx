'use client';

import Card from "./Card";
import Faqs from "./Faq";
import ShowMoreButton from "./ShowMoreButton";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export const About = ({ showMore }: { showMore?: string }) => {
  return (
    <motion.div
      className="px-6 mt-18 mx-auto max-w-5xl relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* background blurs */}
      <div className="blurpurple"></div>
      <div className="blurblue"></div>

      {/* Heading */}
      <motion.h1 variants={fadeUp} className="mb-8 text-center">
        About Me
      </motion.h1>

      {/* Card section */}
      <motion.div variants={fadeUp}>
        <Card>
          <motion.p
            variants={containerVariants}
            className="p-4 flex flex-col gap-6"
          >
            <motion.span
              variants={fadeUp}
              className="text-muted-foreground font-medium leading-6"
            >
              Hello, I&#39;m Shonde Samuel, a creative & detail-oriented Frontend Developer with a strong passion for crafting visually appealing and highly functional web experiences. I specialize in using{" "}
              <span className="text-purpple">
                Next.js, React, TypeScript and Tailwind CSS
              </span>{" "}
              to bring ideas to life on the web — from personal portfolios to dynamic business platforms.
            </motion.span>

            <motion.span
              variants={fadeUp}
              className="text-muted-foreground font-medium leading-6"
            >
              My development philosophy revolves around building solutions that are user-centered, scalable, and performance-driven. I believe that every website should not only look great but also serve a purpose — whether that&#39;s helping a brand grow, improving user engagement, or simplifying processes through technology.
            </motion.span>

            <motion.span
              variants={fadeUp}
              className="text-muted-foreground font-medium leading-6"
            >
              I&#39;m a developer who enjoys challenges, values continuous learning, and strives to stay updated with the latest trends in web technologies. My goal with every project is to blend creativity with technical precision to produce clean, impactful digital experiences.
            </motion.span>
          </motion.p>

          {showMore ? (
            <motion.div variants={fadeUp}>
              <ShowMoreButton text={showMore} href="/about" />
            </motion.div>
          ) : null}
        </Card>
      </motion.div>
    </motion.div>
  );
};


// About Page Component
export const AboutMe = () => {
  return (
    <motion.div
      className="mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* About Section */}
      <About />

      {/* My Tech Journey */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.h1 variants={fadeUp} className="mb-8 mt-24 text-center">
          💻 My Tech Journey
        </motion.h1>
        <motion.div variants={fadeUp}>
          <Card>
            <motion.p
              variants={containerVariants}
              className="p-4 flex flex-col gap-6"
            >
              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                My journey into tech began with a deep curiosity about how
                technology shapes the modern world. I&#39;ve always been
                fascinated by how a simple idea could evolve into something
                people use every day. This curiosity led me to explore website
                development, starting first with WordPress, where I built small
                websites and blogs for clients and personal practice.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                As my interest grew, I transitioned into more advanced
                technologies, learning HTML, CSS, and JavaScript, and later
                moving into React and Next.js. These frameworks opened up
                endless possibilities for me — from building static pages to
                developing full-scale, interactive web applications.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                Over time, I&#39;ve worked on multiple real-world and personal
                projects, each one improving my understanding of design systems,
                UI/UX, responsive layouts, accessibility, and code optimization.
                I&#39;ve also developed strong skills in collaboration, version
                control (Git/GitHub), and project deployment using platforms
                like Vercel and Netlify.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                My tech journey is still ongoing, and I&#39;m excited about the
                endless opportunities in software development, especially in
                building tools that help businesses and individuals succeed
                online.
              </motion.span>
            </motion.p>
          </Card>
        </motion.div>
      </motion.section>

      {/* My Aim / Mission */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.h1 variants={fadeUp} className="mb-8 mt-24 text-center">
          🎯 My Aim / Mission
        </motion.h1>
        <motion.div variants={fadeUp}>
          <Card>
            <motion.p
              variants={containerVariants}
              className="p-4 flex flex-col gap-6"
            >
              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                My mission as a developer goes beyond just writing code — it&#39;s
                about creating meaningful solutions that have real impact. I aim
                to grow into a well-rounded Software Developer with expertise in
                both frontend and backend technologies, capable of building
                complete systems and leading innovative projects.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                I envision myself working in collaborative startup environments
                and cooperative organizations, where ideas are shared freely,
                creativity is encouraged, and growth is constant. I also plan to
                build and manage my own startup, focusing on developing tools,
                platforms, or services that simplify lives and empower others
                through technology.
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="text-muted-foreground font-medium leading-6"
              >
                In the long run, I want to be recognized not just for technical
                skills, but for problem-solving, creativity, and leadership. My
                journey is driven by passion, purpose, and the desire to make
                technology a force for good in every project I touch.
              </motion.span>
            </motion.p>
          </Card>
        </motion.div>
      </motion.section>

      {/* My Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 mt-24"
      >
        <motion.h1 variants={fadeUp} className="mb-8 text-center">
          🚀 My Skills
        </motion.h1>
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Next.js", img: "/stack-images/next-logo.png" },
            { name: "React.js", img: "/stack-images/react-logo.png" },
            { name: "Node.js", img: "/stack-images/javascript-logo.png" },
            { name: "TailwindCss", img: "/stack-images/tailwind-logo.png" },
            { name: "TypeScript", img: "/stack-images/typescript-logo.png" },
            { name: "Firebase", img: "/stack-images/firebase-logo.png" },
          ].map((skill, index) => (
            <Card key={index}>
              <div className="flex items-center gap-4 p-4">
                <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-18"
      >
        <Faqs />
      </motion.div>
    </motion.div>
  );
};