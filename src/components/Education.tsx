'use client'

import Card from './Card'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className='mt-22 space-y-6 mx-auto max-w-5xl px-6'>
      <h1 className='text-center'>Education</h1>
      <Card>
        <div className='p-4 space-y-4'>
          <h2 className='text-lg lg:text-2xl font-semibold'>Bachelor of Engineering (B.Eng) - Computer Engineering</h2>
          <div className='flex items-center gap-4 md:text-xl justify-between'>
            <span>Ekiti State University, Ado-Ekiti, Ekiti State, Nigeria.
            </span>
            <span className='text-sm'>2021 - 2026</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default Education
