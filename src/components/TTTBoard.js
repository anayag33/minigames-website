import React, { useState, useEffect } from 'react';
import '../styles/TTTBoard.css';
import TTTSquare from './TTTSquare';
import { Link } from "react-router-dom";

function TTTBoard() {

  const [array, setArray] =useState(['', '', '', '', '', '', '', '', '']);
  const [currentValue, setCurrentValue] = useState('X')

  const [over, setOver] = useState(false);
  const [winner, setWinner] = useState("T");

  function ComputerTurn(){
    let index = (Math.floor(Math.random()*(9-1)+1));

    while(array[index-1] != '' && over===false){
      index = (Math.floor(Math.random()*(9-1)+1));
    }

    if(index===1){
      array[0] = 'O';
      setCurrentValue('X');
    }
    else if(index===2){
      array[1] = 'O';
      setCurrentValue('X');
    }
    else if(index===3){
      array[2] = 'O';
      setCurrentValue('X');
    }
    else if(index===4){
      array[3] = 'O';
      setCurrentValue('X');
    }
    else if(index===5){
      array[4] = 'O';
      setCurrentValue('X');
    }
    else if(index===6){
      array[5] = 'O';
      setCurrentValue('X');
    }
    else if(index===7){
      array[6] = 'O';
      setCurrentValue('X');
    }
    else if(index===8){
      array[7] = 'O';
      setCurrentValue('X');
    }
    else if(index===9){
      array[8] = 'O';
      setCurrentValue('X');
    }
    checkOver();
  }

  function checkOver() {
    // Check rows
    if ((array[0] === array[1] && array[0] === array[2] && array[0] !== '')) {
      setOver(true);
      if (array[0]==='X'){
        setWinner('X');
      }
      else if (array[0] ==='O'){
        setWinner('O');
      }
    }
    else if ((array[3] === array[4] && array[3] === array[5] && array[3] !== '')) {
      setOver(true);
      if (array[3]==='X'){
        setWinner('X');
      }
      else if (array[3] ==='O'){
        setWinner('O');
      }
    }
    else if ((array[6] === array[7] && array[6] === array[8] && array[6] !== '')) {
      setOver(true);
      if (array[6]==='X'){
        setWinner('X');
      }
      else if (array[6] ==='O'){
        setWinner('O');
      }
    }
  
    // Check columns
    else if ((array[0] === array[3] && array[0] === array[6] && array[0] !== '')) {
      setOver(true);
      if (array[0]==='X'){
        setWinner('X');
      }
      else if (array[0] ==='O'){
        setWinner('O');
      }
    }
    else if ((array[1] === array[4] && array[1] === array[7] && array[1] !== '')) {
      setOver(true);
      if (array[1]==='X'){
        setWinner('X');
      }
      else if (array[1] ==='O'){
        setWinner('O');
      }
    }
    else if ((array[2] === array[5] && array[2] === array[8] && array[2] !== '')) {
      setOver(true);
      if (array[2]==='X'){
        setWinner('X');
      }
      else if (array[2] ==='O'){
        setWinner('O');
      }
    }
  
    // Check diagonals
    else if ((array[0] === array[4] && array[0] === array[8] && array[0] !== '') ||
        (array[2] === array[4] && array[2] === array[6] && array[2] !== '')) {
      setOver(true);
      if (array[4] ==='X'){
        setWinner('X');
      }
      else if (array[4] ==='O'){
        setWinner('O');
      }
    }
  
    // Check if all cells are filled (tie)
    else if (array[0] !== '' && array[1] !== '' && array[2] !== '' &&
    array[3] !== '' && array[4] !== '' && array[5] !== '' &&
    array[6] !== '' && array[7] !== '' && array[8] !== '') {
      setOver(true);
    }
  }

  function handleClick1(){
    if (currentValue=="X" && array[0] ==''){
      array[0] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick2(){
    if (currentValue=="X" && array[1] ==''){
      array[1] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick3(){
    if (currentValue=="X" && array[2] ==''){
      array[2] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick4(){
    if (currentValue=="X" && array[3] ==''){
      array[3] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick5(){
    if (currentValue=="X" && array[4] ==''){
      array[4] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick6(){
    if (currentValue=="X" && array[5] ==''){
      array[5] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick7(){
    if (currentValue=="X" && array[6] ==''){
      array[6] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick8(){
    if (currentValue=="X" && array[7] ==''){
      array[7] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  function handleClick9(){
    if (currentValue=="X" && array[8] ==''){
      array[8] = 'X';
      setCurrentValue('O');
      checkOver();
      if (array.indexOf('') != -1){
        setTimeout(() => {
          ComputerTurn(); // Call ComputerTurn after a delay
        }, 1000);
      }
    }
  }

  return (
    <div className='board'>
      {over ? (
        (winner==="T" ? (
          <div className='loseTTT'>
            <h1>THE GAME WAS A TIE</h1>
            <Link to="/tictactoe" reloadDocument >
              <button className='button'> PLAY AGAIN </button>
            </Link>
            <Link to="/minigames">
              <button className='button'> BACK TO GAMES </button>
            </Link>
          </div>
        ) : (
          (winner==='X' ? (
            <div className='winTTT'>
            <h1>YOU WIN</h1>
            <Link to="/tictactoe" reloadDocument >
              <button className='button'> PLAY AGAIN </button>
            </Link>
            <Link to="/minigames">
              <button className='button'> BACK TO GAMES </button>
            </Link>
          </div>
          ) : (
            <div className='loseTTT'>
            <h1>YOU LOST</h1>
            <Link to="/tictactoe" reloadDocument >
              <button className='button'> PLAY AGAIN </button>
            </Link>
            <Link to="/minigames">
              <button className='button'> BACK TO GAMES </button>
            </Link>
          </div>
          ))
        ))
      ) : (
        <>
          <div className='row'>
            <TTTSquare onClick={handleClick1} value={array[0]}/>
            <TTTSquare onClick={handleClick2} value={array[1]}/>
            <TTTSquare onClick={handleClick3} value={array[2]}/>
          </div>
          <div className='row'>
            <TTTSquare onClick={handleClick4} value={array[3]}/>
            <TTTSquare onClick={handleClick5} value={array[4]}/>
            <TTTSquare onClick={handleClick6} value={array[5]}/>
          </div>
          <div className='row'>
            <TTTSquare onClick={handleClick7} value={array[6]}/>
            <TTTSquare onClick={handleClick8} value={array[7]}/>
            <TTTSquare onClick={handleClick9} value={array[8]}/>
          </div>
        </>
      )}
    </div>
  )
}

export default TTTBoard
