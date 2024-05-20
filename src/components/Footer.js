import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link to='https://www.instagram.com/'>
          <InstagramIcon />
        </Link>
        <Link to='https://twitter.com/?lang=en'>
          <TwitterIcon />
        </Link>
        <Link to='https://www.facebook.com/'>
          <FacebookIcon />
        </Link>
        <Link to='https://www.linkedin.com/feed/'>
          <LinkedInIcon />
        </Link>
        <p>&copy; 2024 anayasarcade.com</p>
      </div>
    </div>
  )
}

export default Footer
