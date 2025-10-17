import About from '@/components/About'
import Card from '@/components/Card'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
      <About />

      {/* my tech journey */}
      <section className='max-w-5xl mx-auto px-6'>
        <h1 className="mb-8 mt-24 text-center">💻 My Tech Journey</h1>
        <Card>
          <p className="p-4 flex flex-col gap-6">
            <span className="text-muted-foreground font-medium leading-6">
              My journey into tech began with a deep curiosity about how technology shapes the modern world. I&#39;ve always been fascinated by how a simple idea could evolve into something people use every day. This curiosity led me to explore website development, starting first with WordPress, where I built small websites and blogs for clients and personal practice.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              As my interest grew, I transitioned into more advanced technologies, learning HTML, CSS, and JavaScript, and later moving into React and Next.js. These frameworks opened up endless possibilities for me — from building static pages to developing full-scale, interactive web applications.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              Over time, I&#39;ve worked on multiple real-world and personal projects, each one improving my understanding of design systems, UI/UX, responsive layouts, accessibility, and code optimization. I&#39;ve also developed strong skills in collaboration, version control (Git/GitHub), and project deployment using platforms like Vercel and Netlify.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              My tech journey is still ongoing, and I&#39;m excited about the endless opportunities in software development, especially in building tools that help businesses and individuals succeed online.
            </span>
          </p>
        </Card>
      </section>

      {/* my aim/mission */}
      <section className='max-w-5xl mx-auto px-6'>
        <h1 className="mb-8 mt-24 text-center">🎯 My Aim / Mission</h1>
        <Card>
          <p className="p-4 flex flex-col gap-6">
            <span className="text-muted-foreground font-medium leading-6">
              My mission as a developer goes beyond just writing code — it&#39;s about creating meaningful solutions that have real impact. I aim to grow into a well-rounded Software Developer with expertise in both frontend and backend technologies, capable of building complete systems and leading innovative projects.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              I envision myself working in collaborative startup environments and cooperative organizations, where ideas are shared freely, creativity is encouraged, and growth is constant. I also plan to build and manage my own startup, focusing on developing tools, platforms, or services that simplify lives and empower others through technology.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              In the long run, I want to be recognized not just for technical skills, but for problem-solving, creativity, and leadership. My journey is driven by passion, purpose, and the desire to make technology a force for good in every project I touch.
            </span>
          </p>
        </Card>
      </section>

      {/* what i offer */}
      {/* <section className='max-w-5xl mx-auto px-6'>
        <h1 className="mb-8 mt-24 text-center">🎯 My Aim / Mission</h1>
        <Card>
          <p className="p-4 flex flex-col gap-6">
            <span className="text-muted-foreground font-medium leading-6">
              My mission as a developer goes beyond just writing code — it&#39;s about creating meaningful solutions that have real impact. I aim to grow into a well-rounded Software Developer with expertise in both frontend and backend technologies, capable of building complete systems and leading innovative projects.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              I envision myself working in collaborative startup environments and cooperative organizations, where ideas are shared freely, creativity is encouraged, and growth is constant. I also plan to build and manage my own startup, focusing on developing tools, platforms, or services that simplify lives and empower others through technology.
            </span>
            <span className="text-muted-foreground font-medium leading-6">
              In the long run, I want to be recognized not just for technical skills, but for problem-solving, creativity, and leadership. My journey is driven by passion, purpose, and the desire to make technology a force for good in every project I touch.
            </span>
          </p>
        </Card>
      </section> */}
    </div>
  )
}

export default AboutPage
