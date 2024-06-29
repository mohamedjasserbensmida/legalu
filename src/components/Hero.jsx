import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-frow items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f96d00]"/>
          <div className="w-1 sm:h-80 h-40" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #f96d00 100%)' }} />
        </div> 
        <div>
          <h1 className={`${styles.heroHeadText} text-[#ffffff]`}>LEGEND <span className="text-[#f96d00]">ALU</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#ffffff]`}>
          Façonnez l'avenir  <br className="sm:block hidden" /> du métal
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center itemsstart p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero