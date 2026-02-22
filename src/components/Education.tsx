'use client'

import Card from './Card'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='mt-22 space-y-6 mx-auto max-w-5xl px-6'
      aria-labelledby="education-heading"
    >
      <h1 id="education-heading" className='text-center'>Education</h1>
      <Card>
        <article className='p-4 space-y-4'>
          <h2 className='text-lg lg:text-2xl font-semibold'>Bachelor of Engineering (B.Eng) - <span className='text-base'>Computer Engineering</span></h2>
          <div className='flex items-start gap-4 md:text-xl justify-between'>
            <span className='text-sm'>Ekiti State University, Ado-Ekiti, Ekiti State, Nigeria.
            </span>
            <time className='text-xs text-nowrap' dateTime="2021/2026">2021 - 2026</time>
          </div>
        </article>
      </Card>
    </motion.section>
  )
}

export default Education
