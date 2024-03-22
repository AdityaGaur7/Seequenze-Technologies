import React from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src='logo.png' alt='kuch bhi'/>
       <ul style={{display:'flex',flexDirection:'column'}}> 
       <button> Add Card</button>
        <button>Update Card</button>
        <button>Delete Card</button>
        </ul>
        <ul className='niche'> 
       <button> Help and support</button>
        <button>Feedback</button>
        </ul>
        
    </div>
  )
}

export default Sidebar