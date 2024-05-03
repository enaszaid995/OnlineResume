import React, { useState } from 'react'
import './Experiences.css';
import {data }from '../../data';
import Experience from './Experience';
import Button from './Button';
function Experiences() {
  const[experience,setExperince]=useState("Responsive Design");
  const selectedTopic = data.filter(item => item.name === experience);
  function handleExperince(experiencee){
    setExperince(experiencee)
  }
  return (
    <div className='experiences'>
        <h3>
            Experiences
        </h3>
        <p>
          Working as Web developer freelancer since 2018 and with Xteam company as remotly React JS developer.
          Take a look at my projects.
        </p>
        <section className='ExperiencesList'>
          <Button onSelect ={() => handleExperince("Responsive Design")} isSelected={experience === "Responsive Design"}> Responsive Design</Button>
          <Button onSelect ={() =>handleExperince("SQL")} isSelected={experience === "SQL"}> SQL</Button>
          <Button onSelect ={() =>handleExperince("React JS")} isSelected= {experience === "React JS"}> React JS </Button>
          <Button onSelect ={()=>handleExperince("Mern Full Stack")} isSelected= {experience === "Mern Full Stack"}> Mern Stack</Button>
        </section>
          
          
      
       <ul>
          <section className='experience'>
           {selectedTopic.map(experienceItem =>
                <Experience key={experienceItem.name} experience={experienceItem}/>
          )} 
        </section>
        </ul> 
    </div>
  )
}

export default Experiences