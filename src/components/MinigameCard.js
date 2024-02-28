import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Minigames.css"


function MinigameCard({ image, name, price, page }) {
  return (
    <div className='minigameCard'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> {price} </p>
      <Link to={page}>
          <button className='button'> PLAY NOW </button>
      </Link>
    </div>
  )
}

export default MinigameCard
