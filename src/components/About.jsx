import React, { useState } from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { CharacterCanvas } from './canvas'
import Certificate from "./Certificate"
import { SectionWrapper } from "../hoc"
import { NKP } from "../assets"
const About = () => {
  const [opacity, setOpacity] = useState(30)
  return (
    <div className="" onMouseOver={() => setOpacity(100)} onMouseLeave={() => setOpacity(30)}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-7xl leading-[30px] flex flex-col items-center"
      >
        <img src={NKP} className="w-[200px] rounded-full pb-10"></img>
        Hello, my name is Khang Phuc Nguyen. I am a first-year
        student majoring in Computer Science and Engineering at the University
        of Oulu in Finland. Although I am just beginning my academic journey,
        I am excited to explore the world of technology and deepen my understanding of the field. I am eager to learn and develop
        the skills necessary to tackle challenges and contribute to innovative solutions in the future.
      </motion.p>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText}`}>Certificates</h1>
      </motion.div>
      <div className={`opacity-${opacity} duration-300`}><Certificate /></div>
    </div>
  )
}

export default SectionWrapper(About, "about")