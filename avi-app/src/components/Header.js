import React from 'react';
// import { Link } from 'react-router-dom';
import avacado from './avacado.png'

function Header() {
    return (
        <div className="header">
            
                <img className="avocado-image" src={avacado} alt="avocado" />
        
            
            <div className="avi-div">
                <h1 className="avi">Avi</h1>
            </div> 

            <div className="header-nav">
                <h2>Ask the experts</h2>
                <h2>Browse Categories</h2>
            </div>
               
               
        </div>
    )
}

export default Header;