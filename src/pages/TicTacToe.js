import React, { useState } from 'react';
import '../styles/TicTacToe.css';
import TTTBoard from '../components/TTTBoard';

function Hangman() {

  const [turn, setTurn] = useState('X');

  return (
    <div className='tttmenu'>
      <h1 className='menuTitle'>Tic Tac Toe</h1>
      <TTTBoard />
    </div>
  )
}

export default Hangman
