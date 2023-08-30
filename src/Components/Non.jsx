import React from "react";
import CSS from './Non.module.scss'
import ACSS from '../App.module.scss'
import {motion} from 'framer-motion' 
import profile1 from '../assets/pexels-photo-1595385.jpeg'
import profile2 from '../assets/pexels-photo-1595385.jpeg'
import profile3 from '../assets/pexels-photo-1595385.jpeg'
import profile4 from '../assets/pexels-photo-1595385.jpeg'
import profile5 from '../assets/pexels-photo-1595385.jpeg'
import profile6 from '../assets/pexels-photo-1595385.jpeg'

function Non(){

    const Team=[
        {
            img:profile1,
            name:"john Doe",
            role:'founder',
            about:' With over 10 years of experience in coaching,john leads our teams with pasion and expertise'
        },
        {
            img:profile2,
            name:"jane smith",
            role:'Marketing Director',
            about:' With over 10 years of experience in coaching,john leads our teams with pasion and expertise'
        },
        {
            img:profile3,
            name:"David johnson",
            role:'Sales Manger',
            about:' With over 10 years of experience in coaching,john leads our teams with pasion and expertise'
        },
        
    ]

    return(
        <div className={ACSS.n} style={{padding: "3rem"}}>
            <div className={CSS.container}>
                    <div className={CSS.Head}>
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
                        
                        >Transform Coaches Online</motion.span>
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
                        >Unlock your Coaching Potential Online and reach Global Audience</motion.span>
                    </div>


                <div className={CSS.offer}>
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
                    
                    className={CSS.offerhead}>
                        <span>
                            Transforming in person Coaches into successful Online entrpreneurs
                            
                        </span>
                    </motion.div>


                        <motion.div className={CSS.offertext}
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
                        >
                        <span>
                            Unlock your Coaching Potential Online and reach Global AudienceUnlock your Coaching Potential Online and reach Global AudienceUnlock your Coaching Potential Online and reach Global AudienceUnlock your Coaching Potential Online and reach Global AudienceUnlock your Coaching Potential Online and reach Global Audience
                            
                        </span>
                      </motion.div>
                </div>

        
                    <div className={CSS.Team}>
                            <div className={CSS.teamhead}>
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
                                        delay: .6,
                                      }
                                    }}
                                    viewport={{once:true}}
                                 >Empowering</motion.span>
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
                                        delay: .7,
                                      }
                                    }}
                                    viewport={{once:true}}
                                 >Meet Our Team</motion.span>
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
                                        delay: .8,
                                      }
                                    }}
                                    viewport={{once:true}}
                                 > Get to know Talented individuals behind our Team</motion.span>
                            </div>


                    <div className={CSS.memberscontainer}>
                                     {
                           Team.map((Team,i)=>{
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
                                    className={CSS.members}>

                                        <img className={CSS.membersimg} src={Team.img} alt='' />
                                        <div className={CSS.memberstext}>
                                        <span>{Team.name}</span>
                                        <span>{Team.role}</span>
                                        </div>
                                        <div className={CSS.memberstextabout}>
                                            <span>{Team.about}</span>
                                         </div>
                                     </motion.div>
                                
                                
                                    )
                                })
                            }
                     </div>

                        

                        <div className={CSS.transform}>
                                <div className={CSS.tleft}>
                                    <motion.div className={CSS.headtleft}
                                    
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
                                            delay: 0.6,
                                          }
                                        }}
                                        viewport={{once:true}}
                                    >
                                        <span>Transform</span>
                                        <span>Unlocking Your Coaching Potential With our Agency</span>
                                        <span> Discover the benetits of patnering with our agency Discover the benetits of patnering with our agency Discover the benetits of patnering with our agency Discover the benetits of patnering with our agency</span>
                                    </motion.div>
                                </div>

                                <motion.div className={CSS.tright}
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
                                        delay: 0.6,
                                      }
                                    }}
                                    viewport={{once:true}}
                                
                                >
                                    <img className={CSS.trightimg} src={profile1} alt='' />
                                </motion.div>
                            
                        </div>
                           
                    
             </div>
            </div>
        </div>
        
    )
}
export default Non