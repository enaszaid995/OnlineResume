import React from 'react'
import './Experience.css'
function Experience(props) { 
   
  return (
    <div className='Experience'>
        {props.experience.projects.length === 0  && <li >
            <p style={{margin:"auto"}}> No project added yet.</p>
          </li>}
        {props.experience.projects.map(item => 
          <li key={item.name}>
           <b>Visit :</b> <a href={item.url}>{item.name} - {item.url}</a>
          </li>)}

    </div>
  )
}

export default Experience