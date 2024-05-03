import React from 'react'
import Skill from './Skill'
import './skills.css'
import { data } from '../../data'
function Skills() {
  return (
   <div className='skills'>
     <h3> SKILLS</h3>
     
     <section className='skill'>
      {data.map(skill=>(<Skill key={skill.name} skill={skill}/>))}
     
      
     </section>
   </div>
  )
}

export default Skills