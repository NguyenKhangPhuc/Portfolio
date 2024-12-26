import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { CharacterCanvas } from "./canvas"
import emailjs from "@emailjs/browser"
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      "service_98x3uov",
      "template_2alf4ii",
      {
        from_name: form.name,
        to_name: 'Phuc/Paul',
        from_email: form.email,
        to_email: 'nguyenkhangphuc012024@gmail.com',
        message: form.message,
      },
      'R5sn8InfifCnOHKnF'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you so much, see you soon!')
        setForm({ name: '', email: '', message: '' })
      })
      .error((err) => {
        console.log(err)
        alert('Something went wrong')
      })
  }

  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-visible '
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 xl:w-[450px] w-full 2xl:w-[550px]'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say to me?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-indigo-500 duration-300 rounded-lg'
          >
            {loading ? 'Waiting...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className='xl:flex-1 xg:h-auto md:h-[700px] h-[350px] xl:w-[300px] w-full flex justify-center'
      >
        <CharacterCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")