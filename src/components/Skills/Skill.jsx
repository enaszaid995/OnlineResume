import React from 'react'
import './Skill.css';


function Skill({skill}) {
 
  return (
    <div className='skill'>
        <img src={skill.image} alt={skill.name}/>
        <h5>{skill.name}</h5>
    </div>
  )
}

export default Skill