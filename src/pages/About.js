import React from 'react'
import Controllers from '../assets/AboutUs.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${Controllers})` }}
    > 
      </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum ornare diam erat, sit amet varius lacus dapibus 
            vitae. Suspendisse finibus arcu ut mauris auctor, 
            ac aliquet tortor suscipit. Phasellus sollicitudin mauris 
            ultricies fringilla suscipit. Donec placerat risus at 
            suscipit hendrerit. Nam vel aliquet ex, id mattis risus. 
            Cras mattis consequat sem in gravida. Integer bibendum 
            id nulla ac iaculis. Cras euismod vulputate eros sit amet 
            posuere. Proin molestie mi sit amet leo laoreet finibus. 
            Aenean viverra commodo augue, a efficitur neque facilisis in. 
            Vestibulum finibus vehicula orci, a vestibulum ante aliquam 
            laoreet. Vestibulum risus libero, euismod et pellentesque ut, 
            rhoncus vel enim. Etiam vulputate nulla nec dolor ullamcorper 
            aliquam. Sed sit amet ultrices libero. Vestibulum vehicula 
            volutpat orci in tempor.</p>
      </div>
    </div>
  )
}

export default About
