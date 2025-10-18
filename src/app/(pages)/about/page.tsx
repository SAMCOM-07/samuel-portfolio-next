import { AboutMe } from '@/components/About'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Samuel Shonde — a frontend developer with a passion for creating modern, fast, and accessible web applications using React, Next.js, and TypeScript.",
};

const AboutPage = () => {
  return (
    <div>
      <AboutMe />
    </div>
  )
}

export default AboutPage
