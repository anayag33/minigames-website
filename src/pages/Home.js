import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from '../assets/CoverImage.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
            <h1> Anaya's Arcade </h1>
            <p> WHERE THE FUN NEVER STOPS </p>
            <Link to="/minigames">
                <button> PLAY NOW </button>
            </Link>
        </div>
    </div>
  );
}

export default Home
