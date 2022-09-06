import React from 'react'
import './knowledge.css'
const Skill = ({pic, heading, content}) => {
  return (
   <div className="Skill">
    <img src={pic} alt="" />
    <span>{heading}</span>
    <span>{content}</span>
    <button className='sr-button'>
        Learn More
    </button>
   </div>
  )
}

export default Skill