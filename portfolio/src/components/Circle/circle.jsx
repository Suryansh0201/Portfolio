import React from 'react'
import './circle.css'
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';
const circle = () => {
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Experience' id='Experiences'>
      <h2 className="tittle t-exp" style={{color: darkMode ? 'white': ''}}>Experiences</h2>

      <div className="contentExp">
        <div className="Exp">
        <div
        className="Circle">1+</div>
        <span>  Year</span>
        <br />
        <span>Experience</span>
        </div>

        <div className="Exp">
            <div
            className="Circle">4+</div>
            <span>Completed</span>
            <br />
            <span>Projects</span>
        </div>

        <div className="Exp">
            <div
            className="Circle">
                3+
            </div>
            <span>Completed</span>
            <br />
            <span>Certificate</span>
        </div>
        </div>
    </div>
  )
}

export default circle