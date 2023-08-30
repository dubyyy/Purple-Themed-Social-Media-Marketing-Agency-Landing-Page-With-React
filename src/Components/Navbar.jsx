import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    
       <>
      <motion.nav className="main-nav"
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
              delay: .2,
            }
          }}
          viewport={{once:true}}
      
      >
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>T</span>ide
            <span>W</span>ave
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to='/' onClick={()=>{setShowMediaIcons(false)}}>
                  Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={()=>{setShowMediaIcons(false)}}>
                 about
              </Link>
            </li>
            <li>
            <Link to='/contact' onClick={()=>{setShowMediaIcons(false)}}>
             contact
             </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
      </>
    
  );
};

export default Navbar;
