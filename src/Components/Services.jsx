import React from "react";
import CSS from './Services.module.scss'
import {motion} from 'framer-motion'


function Services(){
    return(
        <div className={CSS.wrapper}>
          
              <div className={CSS.container}> 
                  <div className={CSS.about}>
                         <div className={CSS.benefitheader}>
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
                                delay: 0.2,
                              }
                            }}
                            viewport={{once:true}}
                          className={CSS.benefitname}>who is for</motion.span>
                          <div className={CSS.mainbenefitheader}><motion.div
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
                                delay: 0.4,
                              }
                            }}
                            viewport={{once:true}}
                          
                          ><span>
                                 Businesses who Struggle to 
                            </span><span> Attract Customers </span></motion.div></div>
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
                                delay: 0.6,
                              }
                            }}
                            viewport={{once:true}}
                          className={CSS.secondbenefitheader}>Skincare brands that struggle to attract customers often face numerous hurdles in a fiercely competitive market.</motion.span>
                          </div>   
                  </div>



                    <div className={CSS.benefits}>
                          <div className={CSS.benefitheader}>
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
                                delay: 0.2,
                              }
                            }}
                            viewport={{once:false}}
                          className={CSS.benefitname}>Benefits</motion.span>

                          <div className={CSS.mainbenefitheader}><motion.div 
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
                                delay: 0.4,
                              }
                            }}
                            viewport={{once:false}}
                          ><span>Unleashing Business Growth through </span><span>Advertising</span></motion.div></div>
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
                                delay: 0.6,
                              }
                            }}
                            viewport={{once:false}}
                          className={CSS.secondbenefitheader}>Unleashing business growth through social media advertising involves leveraging the immense reach and targeting capabilities of various social media platforms to drive expansion and success.</motion.span>
                    
                          <a href='/Contact'><motion.button
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
                                delay: 0.8,
                              }
                            }}
                            viewport={{once:false}}
                          > I Want To Grow</motion.button></a>
                          </div>
                          
                    </div>
                </div>
            </div>
        
    )
}
export default Services