import React from 'react'
import { MinigamesList }  from  '../helpers/MinigamesList'
import MinigameCard from '../components/MinigameCard'
import "../styles/Minigames.css"

function Minigames() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Minigames</h1>
      <div className='minigamesList'>
        {MinigamesList.map((minigameCard, key) => {
            return (
                <MinigameCard 
                    key={key}
                    image={minigameCard.image} 
                    name={minigameCard.name} 
                    price={minigameCard.price}
                    page={minigameCard.page}
                />
            );
        })}
      </div>
    </div>
  )
}

export default Minigames
