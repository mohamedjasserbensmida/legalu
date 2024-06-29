import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Les principales fonctionnalités .</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
      <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631'}}
        iconStyle={{ background: experience.icon}}
         icon={
           <div className="flex justify-center items-center w-full h-full">
             <img 
               src={experience.icon}
               alt={experience.title}
               className="w-[80%] h-[100%] object-contain"
             />
           </div>
         }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          
          {/* <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p> */}
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li key={`experience-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </>
  )
};
export default SectionWrapper(Experience, "experience");