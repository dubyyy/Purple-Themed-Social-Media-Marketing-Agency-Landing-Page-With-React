import React from "react";
import Ads from '../assets/Ads.js'
import CSS from './Adverts.module.scss'
import {motion} from 'framer-motion'
function Adverts(){
    return(

        <div className={CSS.wrapper}>     
        <div className={CSS.container}>
           
      {
        Ads.map((Ads,i)=>{
            return(
                <motion.div 
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
                        delay: (i+1)*0.125,
                      }
                    }}
                    viewport={{once:true}}
                className={CSS.benfitwrapper} key={i}>
                    <div className={CSS.iconbody}><i className={Ads.icon} key={i} /></div>
                    <span className={CSS.name}>{Ads.name}</span>
                    <span>{Ads.detail}</span>
                    <a href='/contact'> <button className={CSS.btn}>Learn More</button> </a>
                </motion.div>
            )
        })
      }
        </div>
    </div>
    )
}
export default Adverts