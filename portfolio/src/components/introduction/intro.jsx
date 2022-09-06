import React from 'react'
import './intro.css'
import Git  from '../../img/github.png';
import Instagram from "../../img/instagram.png";
import LinkdIn from "../../img/linkedin.png";
/*import Yellow from "../../img/yellow.png";*/
import MyPhoto from "../../img/myPhoto.png";
import Multi from "../../img/multi.png";
import FloatingDiv from '../../FloatingDiv/FloatingDiv';
import Crown from "../../img/crown.png";
import Cpp from "../../img/cpp.png";
import Emogi from "../../img/emogi.png";
import { useContext as UseContext} from 'react';
import { themeContext } from '../../context';
import {motion} from 'framer-motion';
const intro = () => {
    const transition = {duration: 2, type:'Spring'}
    const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
   <div className="l-intro">
    <div className="i-name">
        <span style={{color: darkMode ? 'white': ''}}>Hy! Iam</span>
        <span>Suryansh</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur.</span>
    </div>
    <button className='button  
    i-button'>Hire Me</button>


    <div className="icon-left">
        <a href="https://github.com/Suryansh0201">
        <img src={Git} alt="" />
        </a>
        <a href="https://www.instagram.com/iam_suryanshh/">
        <img src={Instagram} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/suryansh-1ab07621b">
        <img src={LinkdIn} alt="" />
        </a>
    </div>
    </div>

    < div className="r-intro">
        <img src={Multi} alt="" width={900}/>
        <img src={MyPhoto} alt="" width={300} />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={Emogi} alt="" width={200} />

        <motion.div
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{top: '-4%', left: '70%'}} className='floating-div'>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
        </motion.div>

        <motion.div
        initial={{left:'9rem', top:'18rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        style={{top:'17rem', left: '-5%'}}>
            <FloatingDiv image={Cpp} txt1='C++' txt='' />
        </motion.div>

       <div className="blurEffect" style={{backrgound:"rgb(43, 178, 43)"}}></div>
       <div className="blurEffect" style={{background:"rgb(8, 147, 254)", top:'17rem', width:'18rem',left:'-9rem'}}></div>

    </div>
   </div>
  )
}

export default intro