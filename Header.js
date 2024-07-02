import React from "react"
import "./Header.css"
import{ Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to="/"><img className='header_icon'src="https://img.freepik.com/premium-vector/tv-talk-logo-neon-signs-style-text_118419-3132.jpg"/></Link>
            
        </div>
    </div>
  )
}

export default Header






