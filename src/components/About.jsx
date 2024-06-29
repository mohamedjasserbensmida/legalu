import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description, prix }) => {
  const [amount, currency] = prix.split(' '); // Assuming prix is always in the format "number currency"

  return (
    <Tilt className="xs:w-[550px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full black-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <div className="text-white text-[12px] font-weight text-left mt-2">
            {description.map((line, idx) => (
              <p key={idx} className="mb-1 flex items-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.292a1 1 0 011.416 1.416l-12 12a1 1 0 01-1.416 0l-6-6a1 1 0 011.416-1.416L9 16.584l11.292-11.292z" fill="green" />
                </svg>
                <span className="ml-2">{line}</span>
              </p>
            ))}
          </div>
          <div className="text-white text-[16px] font-bold text-center mt-4 flex items-baseline">
            <span className="text-[32px]">{amount}</span>
            <span className="text-[16px] ml-1">{currency}</span>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Prenez le contrôle de votre productivité</p>
        <h2 className={styles.sectionHeadText}>Nos Packs.</h2>
      </motion.div>

      <motion.p
        variant={fadeIn("", "", 0.15, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => 
          <ServiceCard key={service.title} index={index} {...service} />
        )}
      </div>      
    </>
  );
};

export default SectionWrapper(About, "about");
