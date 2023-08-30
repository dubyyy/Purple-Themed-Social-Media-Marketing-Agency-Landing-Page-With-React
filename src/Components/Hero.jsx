import React from 'react'
import CSS from './Hero.module.scss'
import HeroImage from '../assets/Business-growth-amico.png'
import {motion} from 'framer-motion'
function Hero(){
    return(
        <div className={CSS.wrapper}>
             <div className={CSS.left}>
                <motion.div 
                   initial={{opacity: 0,
                    x: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .4,
                      }
                    }}
                    viewport={{once:true}}
                className={CSS.headline}>
                    <span>
                        Helping you scale your business  
                    </span>
                    <span>
                        using social media marketing
                    </span>
                </motion.div>

                <motion.div className={CSS.subheadline}
                 initial={{opacity: 0,
                    x: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .6,
                      }
                    }}
                    viewport={{once:true}}
                >
                    <span>
                        Helping you scale your business using social media marketing
                    </span>
                </motion.div>
                <a href='/contact'>
                <motion.button 
                 initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .7,
                      }
                    }}
                    viewport={{once:true}}
                className={CSS.btn}>Book a Call</motion.button> </a>
             </div>


             <div className={CSS.right}>
                <motion.img 
                 initial={{opacity: 0,
                    x: 50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .4,
                      }
                    }}
                    viewport={{once:true}}
                src={HeroImage} alt=''></motion.img>
             </div>
        </div>
    )
}
export default Hero