import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div >
        <div className='nav'>
            <div style={{display:'flex'}} className='content'>

            <p>Free Trial | <span style={{fontSize:'10px'}}>2 days left</span></p>
             <img src="https://clipground.com/images/profile-logo-6.jpg" alt =""/>
            </div>
        </div>
    </div>
  )
}

export default Header