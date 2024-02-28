import React, { useState } from 'react'
import '../styles/Hangman.css'
import { HangmanPictureList } from '../helpers/HangmanPictureList'
import { HangmanWordList } from '../helpers/HangmanWordList';
import { Link } from "react-router-dom";


function Hangman() {

  const index = Math.floor(Math.random() * HangmanWordList.length);

  const [word, setWord] = useState(HangmanWordList[index].word); //word to be guessed
  const [blanks, setBlanks] = useState(HangmanWordList[index].blanks); //blank spaces to start with
  const [mistakes, setMistakes] = useState(0); //used to change picture of hangman
  const [maskedWord, setMaskedWord] = useState(blanks); //used when blanks start changing to ketters
  const [wrongLetters, setWrongLetters] = useState(""); //list of wrong letters displayed on top
  const [correctLetters, setCorrectLetters] = useState(""); //used to choose which letters to reveal
  const [guess, setGuess] = useState(''); //holds guess when user clicks submit

  console.log(word);

  const handleChange = event => {
    setGuess(event.target.value);

    console.log('value is:', event.target.value);
  };

  function replace(){
      let temp = word.split('').map(letter => 
        (letter === guess || correctLetters.includes(letter)) ? letter : "_").join(" ");

    setMaskedWord(temp);
  }

  function onSubmit(){
    if (guess.length == 1){
      if (word.includes(guess.toUpperCase())){
        setCorrectLetters(correctLetters.concat(" ", guess.toUpperCase()));
        replace();
      }
      else if (wrongLetters.includes(guess.toUpperCase())){

      }
      else{
        setMistakes(mistakes + 1);
        setWrongLetters(wrongLetters.concat(" ", guess.toUpperCase()));

        console.log('mistakes:', wrongLetters);
      }
    }
    setGuess("");
  }

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Hangman</h1>
      {(mistakes === 6 || !maskedWord.includes('_')) ? (
        (maskedWord.includes('_')) ? (
          <div className='lose'>
            <h1>YOU LOSE</h1>
            <h1>The word was {word}</h1>
            <Link to="/hangman" reloadDocument >
              <button className='button'> PLAY AGAIN </button>
            </Link>
            <Link to="/minigames">
              <button className='button'> BACK TO GAMES </button>
            </Link>
          </div>
        ) : (
          <div className='win'>
            <h1>YOU WIN!</h1>
            <h1>The word was {word}</h1>
            <Link to="/hangman" reloadDocument >
              <button className='button'> PLAY AGAIN </button>
            </Link>
            <Link to="/minigames">
              <button className='button'> BACK TO GAMES </button>
            </Link>
          </div>
        )
      ):(
        <>
          <h1>{wrongLetters}</h1>
          <img src={HangmanPictureList[mistakes].image}></img>
          <h1>{maskedWord}</h1>
          <input 
            placeholder="Guess a letter"
            type="text" 
            id="guess" 
            onChange={handleChange} 
            value={guess}
          />
          <button className='button' onClick={onSubmit}>SUBMIT</button>
        </>
      )}
    </div>
  )
}

export default Hangman
