import React from 'react'
import './navbar.css'
import Toogle from '../Toogle/toogle'
import {Link} from 'react-scroll';
const navbar = () => {
  return (
    <div className="all-navbar" id='Navbar'>
        <div className="left-navbar">
            <div className="name-left">Suryansh</div>
            <Toogle />
        </div>
        <div className="right-navbar">
            <div className="r-list">
                <ul style={{listStyleType:'none'}}>
                <Link spy={true} to='Navbar' smooth={true}>
                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Service' smooth={true}>
                    <li>Services</li>
                    </Link>

                    <Link spy={true} to='Experiences' smooth={true}>
                    <li>Experience</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>

                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <div className="contact-r">
            <Link spy={true} to='Contacts' smooth={true}>
                <button className='button'>Contact Me</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default navbar