import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] 
        max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className=' flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#915eff]'>Phuc/Paul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a software engineer/web developer.
          </p>
          <a href="/resume.pdf" download="Khang_Phuc_Nguyen_resume.pdf">
            <button
              className="mt-5 text-xl w-40 h-12 rounded bg-indigo-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
            >
              <span
                className="absolute bg-indigo-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
              ></span>
              <span
                className="absolute bg-indigo-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
              ></span>
              My resume
            </button>
          </a>
        </div>

      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero