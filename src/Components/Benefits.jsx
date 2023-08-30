import React from "react";
import Benefit from '../assets/Benefit.js'
import CSS from './Benefits.module.scss'
import {motion} from 'framer-motion'
function Benefits(){
    return(
        <div className={CSS.wrapper}>
            <div className={CSS.container}>
          {
            Benefit.map((Benefit,i)=>{
                return(
                    <motion.div className={CSS.benfitwrapper} key={i}
                    
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
                            delay: (i+1)*0.125,
                          }
                        }}
                        viewport={{once:true}}
                    >
                        <div className={CSS.iconbody}><i className={Benefit.icon} key={i} /></div>
                        <span className={CSS.name}>{Benefit.name}</span>
                        <span>{Benefit.detail}</span>
                    </motion.div>
                )
            })
          }
            </div>
        </div>
    )
}
export default Benefits