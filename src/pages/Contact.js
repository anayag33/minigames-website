import React, {useState} from 'react'
import ContactUs from '../assets/ContactUs.png'
import '../styles/Contact.css'
import { Link } from "react-router-dom";


function Contact() {

  return (
    <div className='contact'>
      <div 
        className='leftSide' 
        style={{ backgroundImage: `url(${ContactUs})` }}
        >
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>
        <form id="contactForm">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email"/>
            <label htmlFor="message">Message</label>
            <input rows="6" 
                placeholder="Enter message..." 
                name="message" 
                required
            /> 
            <Link to={'/contact'} reloadDocument>
              <button>
                Send Message
              </button>
            </Link>
        </form>
      </div>
    </div>
  )
}

export default Contact
