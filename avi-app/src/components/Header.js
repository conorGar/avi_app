import React from 'react'
// import { Link } from 'react-router-dom';
import avacado from './avacado.png'

function Header() {
  return (
    <div className="header">
        
      <img className="avocado-image" src={avacado} alt="avocado" />
        <h1 className="avi">AVI</h1>

      <div className="header-nav">
        <p className="nav-text">Browse Categories</p>
        <p className="nav-text">Ask the experts</p>
      </div>
      <div className='nav-section'></div>
      <div className='nav-section'></div>
  </div>
  )
}

export default Header
