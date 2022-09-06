import React from 'react'
import './work.css'
import { themeContext } from '../../context';
import { useContext as UseContext } from 'react';

const work = () => {
  const theme = UseContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Skills'>
         <h2 className="tittle t-work" style={{color: darkMode ? 'white': ''}}>Skills</h2>
<div className="s-content">

         {/*React JS */}
         <div className="skillContent">
        <div
        className="C-skill">85%</div>
        <span>React JS</span>
        </div>

        {/*Node JS*/}
        <div className="skillContent">
        <div
        className="C-skill">85%</div>
        <span>Node JS</span>
        </div>

        {/*Express JS*/}
        <div className="skillContent">
        <div
        className="C-skill">75%</div>
        <span>Express JS</span>
        </div>

        {/*Mongo DB*/}
        <div className="skillContent">
        <div
        className="C-skill">70%</div>
        <span>Mongo DB</span>
        </div>

        {/*C++*/}
        <div className="skillContent">
        <div
        className="C-skill">85%</div>
        <span>C++</span>
        </div>

        {/*Python*/}
        <div className="skillContent">
        <div
        className="C-skill">60%</div>
        <span>Python</span>
        </div>
    </div>
    </div>
  )
}

export default work