import React from 'react'
import './footer.css';
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';
const footer = () => {
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'200%'}} />
        <div className="f-content">
            <span style={{color: darkMode ? 'white': ''}}>Suryansh4326@gmail.com</span>
            <div className="f-icons" >
                <a href="https://www.instagram.com/iam_suryanshh/"><Insta  size='3rem' style={{color: darkMode ? 'white': 'black'}}/></a>
                <a href="https://www.linkedin.com/in/suryansh-1ab07621b"><Linkedin size='3rem' style={{color: darkMode ? 'white': 'black'}}/></a>
                <a href="https://github.com/Suryansh0201"><Github size='3rem' style={{color: darkMode ? 'white': 'black'}}/></a>
            </div>
        <p className="copyright">Copyright &copy; 2022-23 Suryansh</p>
        </div>
    </div>
  )
}

export default footer