import React from 'react'
import HeroImage from '../assets/Office work-rafiki.png'
import {motion} from 'framer-motion'
import CSS from './About.module.scss'
function About(){
    return(
    <div className={CSS.wrapper}>
        <div className={CSS.heading}>
            <motion.span 
             initial={{opacity: 0,
                y: -100, transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 140,
                }}}
                 whileInView={{opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    delay: .4,
                  }
                }}
                viewport={{once:true}}
            className={CSS.headingtitle}>About Us</motion.span>
        </div>

        <div className={CSS.container}>
            <section className={CSS.about}>
                <div className={CSS.aboutimage}>
                    <motion.img 
                     initial={{opacity: 0,
                        x: 100, transition: {
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
                    src={HeroImage} alt=''></motion.img>
                </div>
            <motion.div
             initial={{opacity: 0,
                x: -100, transition: {
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
            className={CSS.aboutcontent}>
            Welcome to [Your Agency's Name] - Your Trusted Partner in Social Media Success!

At [Your Agency's Name], we're not just another social media marketing agency; we're your digital growth catalyst. Our journey began with a passion for connecting businesses with their audiences in the digital landscape. Over the years, we've honed our skills, expanded our horizons, and built a team of creative minds and digital experts who share a common goal - to help your brand thrive in the online world.
            </motion.div>
            </section>
        </div>
    </div>

    )
}
export default About