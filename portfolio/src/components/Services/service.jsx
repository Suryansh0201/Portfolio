import React from 'react'
import './service.css'
import Web from "../../img/web.png";
import Cpppic from "../../img/c++pic.png"
import AWS from "../../img/aws.png"
import Skill from "../knowledge/Knowledge.jsx";
import CV from "../Services/cv.pdf"
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';
import { motion } from 'framer-motion';
const service = () => {
  const transition = {duration: 1, type:'Spring'};
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='service' id='Service'>

{/*right side*/}
        <div className="s-left">
            <span style={{color: darkMode ? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                Fuga quod exercitationem dolorum ut natus maxime aspernatur non totam animi? </span>
                <a href={CV} download>
                <button className='button s-button'>Download CV</button>
                </a>
                <div className="blurEffect s-blur1" style={{background:"rgb(206, 39, 128)"}}></div>
        </div>

        {/*right side*/}
        <motion.div
        initial={{left:'20%'}}
        whileInView={{left:'2rem'}}
        transition={transition}

        className="s-right">


        <div style={{left:'14rem'}}>
          <Skill
          pic={Web}
          heading={'Web Development'}
          content={'React JS,Node JS,Express JS,MongoDB' }
          />
        </div>

        {/* Sencond Skill*/}

        <div style={{top:'12rem',left:'-4rem'}}>
          <Skill
          pic={Cpppic}
          heading={'Coding'}
          content={'Enthusiast Coding skills on C++'}
          />
        </div>

        {/*Third Skill*/}

        <div style={{top:'19rem',left:'12rem'}}>
          <Skill
          pic={AWS}
          heading={'AWS'}
          content={'Basic AWS cloud developer'}
          />
        </div>
        <div className="blurEffect s-blur2" style={{background:"rgb(221, 195, 23)"}}></div>
        </motion.div>
    </div>
  )
}

export default service