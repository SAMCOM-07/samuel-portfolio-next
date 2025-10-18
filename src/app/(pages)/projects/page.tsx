import { ProjectsPage } from '@/components/Projects'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured projects by Samuel Shonde — from modern landing pages to full-stack web applications built with React, Next.js, and Tailwind CSS.",
};



const MyProjects = () => {
  return (
    <div>
      <ProjectsPage />
    </div>
  )
}

export default MyProjects
