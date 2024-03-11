import React, {useState} from 'react'
import '../styles/TTTSquare.css';

function TTTSquare({ onClick, value}) {
    
  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
        </button>
    </div>
  )
}

export default TTTSquare
