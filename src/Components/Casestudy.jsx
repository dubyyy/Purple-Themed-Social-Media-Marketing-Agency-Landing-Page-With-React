import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Casestudy.css'
import {motion} from 'framer-motion'


import profile1 from '../assets/pexels-photo-1595385.jpeg'
import profile2 from '../assets/pexels-photo-3153207.jpeg'
import profile3 from '../assets/pexels-photo-3184360.jpeg'
import profile4 from '../assets/pexels-photo-3184291.jpeg'
import profile5 from '../assets/pexels-photo-3183197.jpeg'
import profile6 from '../assets/pexels-photo-3183183.jpeg'
function Casestudy(){
    const Clients=[
        {
            img:profile1,
            review:"How We Grew A Brands Revenue From $12K To $60K Per Month in 4 Months",
        },
        {
            img:profile2,
            review:"How We increased Brands Traffic To 20K Page View in 8 Weeks",
        },
        {
            img:profile3,
            review:"See How Our instagram Marketing Strategy Revitalised a local resturants,resulting in a 30% increase in dine-in takeout orders withing a month",
        },
        {
            img:profile4,
            review:"How We Grew A Brands Revenue From $12K To $60K Per Month in 4 Months",
        },
        {
            img:profile5,
            review:"How We increased Brands Traffic To 20K Page View in 8 Weeks",
        },
        {
            img:profile6,
            review:".See How Our instagram Marketing Strategy Revitalised a local resturants,resulting in a 30% increase in dine-in takeout orders withing a month",
        },
    ]
    return(
        <div className='t-wrapper'>
        <div className='t-heading'>
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
            >Case Studies </motion.span>
              <motion.div
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
              >
            <span>Don't trust us </span>
            <span>Trust ou result</span>
            </motion.div>
        </div>
                 
               

                <Swiper
                   slidesPerView={2.5}
                  
                 
                   
                >
                    {
                        Clients.map((Client,i)=>{
                            return(
                                <SwiperSlide>
                                    <div className='testimonial'>

                                        <img className='testimonialbox' src={Client.img} alt='' />
                                        <span>{Client.review}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                
            </div>
        
    )
}

export default Casestudy