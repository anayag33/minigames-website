import React, { useState, useEffect } from 'react';
import '../styles/TTTBoard.css';
import TTTSquare from './TTTSquare';
import { Link } from "react-router-dom";



function TTTBoard() {

  const [currentValue, setCurrentValue] = useState('X')
  const [one, setOne] = useState('');
  const [two, setTwo] = useState('');
  const [three, setThree] = useState('');
  const [four, setFour] = useState('');
  const [five, setFive] = useState('');
  const [six, setSix] = useState('');
  const [seven, setSeven] = useState('');
  const [eight, setEight] = useState('');
  const [nine, setNine] = useState('');
  const [count, setCount] = useState(0);

  const [over, setOver] = useState(false);
  const [winner, setWinner] = useState("T");
  const [filled, setFilled] = useState("");

  useEffect(() => {
    if (currentValue==='O') {
      setTimeout(() => {
            ComputerTurn(); // Call ComputerTurn after a delay
          }, 1000);
    }
  }, [filled]);

  // useEffect(() => {
  //   if (filled.length > 0) {
  //     console.log("Filled updated:", filled);
  //   }
  // }, [filled]);

  // useEffect(() => {
  //   console.log("over:", over);
  // }, [over]);

  // useEffect(() => {
  //   console.log("winner:", winner);
  // }, [winner]);

  function ComputerTurn(){
    console.log("Enter Computer Turn");
    // console.log("HELLO");
    let index = (Math.floor(Math.random()*(9-1)+1)).toString();
    // console.log("index B " + index);
    // console.log(filled);
    while(filled.includes(index)){
      index = (Math.floor(Math.random()*(9-1)+1)).toString();
      // console.log("index I" + index);
      // console.log(filled);
    }
    // console.log("index A" + index);
    // console.log(filled);
    if(index==="1"){
      setOne('O');
      setCurrentValue('X');
    }
    else if(index==="2"){
      setTwo('O');
      setCurrentValue('X');
    }
    else if(index==="3"){
      setThree('O');
      setCurrentValue('X');
    }
    else if(index==="4"){
      setFour('O');
      setCurrentValue('X');
    }
    else if(index==="5"){
      setFive('O');
      setCurrentValue('X');
    }
    else if(index==="6"){
      setSix('O');
      setCurrentValue('X');
    }
    else if(index==="7"){
      setSeven('O');
      setCurrentValue('X');
    }
    else if(index==="8"){
      setEight('O');
      setCurrentValue('X');
    }
    else if(index==="9"){
      setNine('O');
      setCurrentValue('X');
    }

    setFilled(prevFilled => prevFilled.concat(" ", index));
    setCount(count+1);
  }

  function checkOver() {
    console.log("Enter check Over");
    // Check rows
    if ((one === two && one === three && one !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return one; // Set winner only if it's not already set
        }
      });

      // setTimeout(() => {}, 2000);
    }
    else if ((four === five && four === six && four !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return four; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
    else if ((seven === eight && seven === nine && seven !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return seven; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
  
    // Check columns
    else if ((one === four && one === seven && one !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return one; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
    else if ((two === five && two === eight && two !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return two; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
    else if ((three === six && three === nine && three !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return three; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
  
    // Check diagonals
    else if ((one === five && one === nine && one !== '') ||
        (three === five && three === seven && three !== '')) {
      setOver(true);
      setWinner(winner => {
        if (winner !== 'T') {
          return winner; // If winner is already set, don't update it
        } else {
          return five; // Set winner only if it's not already set
        }
      });
      // setTimeout(() => {}, 2000);
    }
  
    // Check if all cells are filled (tie)
    else if (one !== '' && two !== '' && three !== '' &&
        four !== '' && five !== '' && six !== '' &&
        seven !== '' && eight !== '' && nine !== '') {
      setOver(true);
    }
  }

  function handleClick1(){
    console.log("Enter Handle Click 1");
    if (currentValue=="X" && one ==''){
      setOne("X");
      setFilled(filled => filled.concat(" ", "1"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 2000);
      // }
    }
  }

  function handleClick2(){
    console.log("Enter Handle Click 2");
    if (currentValue=="X" && two ==''){
      setTwo("X");
      setFilled(filled => filled.concat(" ", "2"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick3(){
    console.log("Enter Handle Click 3");
    if (currentValue=="X" && three ==''){
      setThree("X");
      setFilled(filled => filled.concat(" ", "3"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick4(){
    console.log("Enter Handle Click 4");
    if (currentValue=="X" && four ==''){
      setFour("X");
      setFilled(filled => filled.concat(" ", "4"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick5(){
    console.log("Enter Handle Click 5");
    if (currentValue=="X" && five ==''){
      setFive("X");
      setFilled(filled => filled.concat(" ", "5"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick6(){
    console.log("Enter Handle Click 6");
    if (currentValue=="X" && six ==''){
      setSix("X");
      setFilled(filled => filled.concat(" ", "6"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick7(){
    console.log("Enter Handle Click 7");
    if (currentValue=="X" && seven ==''){
      setSeven("X");
      setFilled(filled => filled.concat(" ", "7"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick8(){
    console.log("Enter Handle Click 8");
    if (currentValue=="X" && eight ==''){
      setEight("X");
      setFilled(filled => filled.concat(" ", "8"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  function handleClick9(){
    console.log("Enter Handle Click 9");
    if (currentValue=="X" && nine ==''){
      setNine("X");
      setFilled(filled => filled.concat(" ", "9"));
      setCount(count+1);
      console.log("filled " +filled);
      setCurrentValue('O');
      checkOver();
      // if (over === false){
      //   setTimeout(() => {
      //     ComputerTurn(); // Call ComputerTurn after a delay
      //   }, 1000);
      // }
    }
  }

  return (
    <div className='board'>
      {over || count===9 ? (
        (winner==="T" ? (
          <div className='lose'>
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
            <TTTSquare onClick={handleClick1} value={one}/>
            <TTTSquare onClick={handleClick2} value={two}/>
            <TTTSquare onClick={handleClick3} value={three}/>
          </div>
          <div className='row'>
            <TTTSquare onClick={handleClick4} value={four}/>
            <TTTSquare onClick={handleClick5} value={five}/>
            <TTTSquare onClick={handleClick6} value={six}/>
          </div>
          <div className='row'>
            <TTTSquare onClick={handleClick7} value={seven}/>
            <TTTSquare onClick={handleClick8} value={eight}/>
            <TTTSquare onClick={handleClick9} value={nine}/>
          </div>
        </>
      )}
    </div>
  )
}

export default TTTBoard
