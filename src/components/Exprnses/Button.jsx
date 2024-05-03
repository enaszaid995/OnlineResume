import React from 'react'
import './Button.css';
export default function Button(props) {
  return (
    
      <button className ={props.isSelected ? "active": "undefiend"}  onClick={props.onSelect}>
        {props.children}
      </button>
    
  )
}
