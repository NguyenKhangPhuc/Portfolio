import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from '../assets'
import { SectionWrapper } from "../hoc"
import { projects } from '../constants'
import { fadeIn, textVariant } from "../utils/motion"
import { desc } from "framer-motion/client"

const ProjectCards = ({ index, name, description, tags, image, source_code_link, demo }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full">
        <div className="relative w-full  h-[300px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-1 card-img_hover">
            <div
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          {demo != "" &&
            <div className="absolute inset-0 flex m-3 card-img_hover ">
              <div
                className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(demo, "_blank")}
              >
                <div className="text-[6px] font-serif">demo</div>
              </div>
            </div>}

        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <p key={`tag-${index}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>View my project</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >

          Below are the projects I have worked on, ranging from simple to complex.
          These projects represent the skills I possess and showcase the process of
          improving areas where my abilities were initially underdeveloped.
          In addition, links to the GitHub repositories of these projects and live demos (if available) are also provided here.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-col flex-wrap gap-20 justify-center sm:flex-row">
        {projects.map((ele, index) => {
          return (
            <ProjectCards key={`projects-${index}`} index={index} {...ele} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")