import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const ProjectCard=({index,name,description,tags,image})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
        <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className='relative w-full h-[230px]'>
            <img 
            src={image}
            alt={image}
            className='w-full h-full object-cover
            rounded-2xl' 
            />
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>
              {name}
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </h3>
          </div>
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}> My Works</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary
        text-[17px] max-w-3xl leading-[30px]'>
            These certifications highlight my knowledge and expertise across various domains, demonstrating my commitment to continuous learning and skill development. Each certification represents my proficiency in specific technologies, tools, and best practices. Through these courses, I have gained hands-on experience, deepened my understanding of industry standards, and enhanced my ability to apply theoretical concepts to real-world scenarios.
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"");