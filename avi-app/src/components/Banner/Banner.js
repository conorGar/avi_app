import React from 'react'
import bannerimg from './banner.jpg'
import './Banner.css'

const Banner = () => {
    return(
        <div className="banner-image">
            <img className='image' src={bannerimg} alt="food"></img>
        </div>
    )   
}

export default Banner