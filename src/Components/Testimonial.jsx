import React from "react";
import CSS from './Testimonial.module.scss'
function Testimonial(){
    return(
        <div className={CSS.container}>
                <div className={CSS.wrapper}>
                    <div className={CSS.Header}>
                        <span>Happy Clients</span>
                        <span>Read what statisfield customers have to say about us</span>
                    </div>

                
                   <div className={CSS.T}>

                    <div className={CSS.Testimonial}>
                           <div className={CSS.star}></div>
                           <div className={CSS.Testimonials}>
                               <span>Working with this agency has been a game changer for my </span>
                               <span>coaching business.Their business and support have helped me </span>
                               <span>grow my business</span>
                           </div>
                        <div className={CSS.person}>
                            <div></div>
                            <div>
                                <span>- John Doe</span>
                                <span>Life coach,ABC Company</span>
                            </div>
                        </div>
                     </div>

                        


                     <div className={CSS.Testimonial}>
                           <div className={CSS.star}></div>
                           <div className={CSS.Testimonials}>
                               <span>Working with this agency has been a game changer for my </span>
                               <span>coaching business.Their business and support have helped me </span>
                               <span>grow my business</span>
                           </div>
                        <div className={CSS.person}>
                            <div></div>
                            <div>
                                <span>- John Doe</span>
                                <span>Life coach,ABC Company</span>
                            </div>
                        </div>
                     </div>





                     </div>



                       
                 </div>           
             </div>
        
    )
}
export default Testimonial