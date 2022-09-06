import React from 'react'
import emailjs from '@emailjs/browser';
import {useState as UseState, useRef as UseRef} from "react";
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';
import './contact.css';
const contact = () => {
    const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = UseRef();

    const [done, setDone]= UseState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fferimk', 'template_jrs3wif', form.current, '50mHOmgEBgIOog0-5')
        .then((result) => {
            console.log(result.text);
              setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact-form' id='Contacts'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blurEffect s-blur" style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name="user_email" className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blurEffect c-blur" style={{background:"var(--purple)"}}></div>
                
            </form>
        </div>
    </div>
  )
}

export default contact