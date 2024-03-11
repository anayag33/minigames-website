import React, {useState} from 'react'
import '../styles/HighOrLow.css';
import Card from '../components/Card.js';
import { Link } from "react-router-dom";


function HighOrLow() {

    const [reveal, setReveal] = useState(false);
    const [guess, setGuess] = useState("");
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random()*(12-1)+1));
    const [randomSuit, setRandomSuit] = useState(Math.floor(Math.random()*(4-1)+1));
    const [cardNum, setCardNum] = useState(Math.floor(Math.random()*(12-1)+1));
    const [cardSuit, setCardSuit] = useState(Math.floor(Math.random()*(4-1)+1));
    const [answer, setAnswer] = useState(false);
    const [points, setPoints] = useState(0);

    function clickH(){
        setGuess("Higher");
    }

    function clickL(){
        setGuess("Lower");
    }

    function clickE(){
        setGuess("Equal");
    }

    function revealCard(){
        if (guess==="Higher" && cardNum > randomNum){
            setAnswer(true);
        }
        else if (guess==="Lower" && cardNum < randomNum){
            setAnswer(true);
        }
        else if (guess==="Equal" && randomNum === cardNum){
            setAnswer(true);
        }

        setReveal(true);
    }

    function playAgain(){
        if(answer===true){
            setPoints(points+2);
        }
        else if(answer===false){
            setPoints(points-1);
        }
        setRandomNum(Math.floor(Math.random()*(12-1)+1));
        setCardNum(Math.floor(Math.random()*(12-1)+1));
        setRandomSuit(Math.floor(Math.random()*(4-1)+1));
        setCardSuit(Math.floor(Math.random()*(4-1)+1));
        setGuess("");
        setReveal(false);
        setAnswer(false);
    }

  return (
    <div className='menu'>
        <h1 className='menuTitle'>Higher or Lower</h1>
        <div className='greyBox'>
            <h3>POINTS: {points}</h3>
            <h1>Your guess: {guess}</h1>
        </div>
            <div className='row'>
                <div>
                    <h3>Your card:</h3>
                    <Card number={randomNum} suit={randomSuit}/>
                </div>
                <div>
                {reveal ? (
                    <>
                        <h3>Pulled card:</h3>
                        <Card number={cardNum} suit={cardSuit}/>
                    </>
                ) : (
                    <>
                    </>
                )}
                </div>
            </div>
            {guess==="" ? (
                <>
                    <h2>Do you think the card will be higher/lower/equal to your card?</h2>
                    <div className='horizontal'>
                        <button className='buttonHL' onClick={clickH}>Higher</button>
                        <button className='buttonHL' onClick={clickE}>Equal</button>
                        <button className='buttonHL' onClick={clickL}>Lower</button>
                    </div>
                </>
            ) : (
                <>
                </>
            )}
      { reveal===false && guess!="" ? (
        <button className='buttonHL' onClick={revealCard}>Reveal Card</button>
      ) : (
        <>
        </>
      )}
      {reveal===true ? (
        (answer===true ? (
            <>
            <div className='win'>
                <h3>Your guess was correct! You get 2 points</h3>
            </div>
            <div>
                    <button className='buttonHL' onClick={playAgain}>PLAY AGAIN</button>
                    <Link to="/minigames">
                        <button className='button'> BACK TO GAMES </button>
                    </Link>
                </div>
            </>
        ) : (
            <>
                <div className='lose'>
                    <h2>Your guess was wrong! You get -1 point</h2>
                </div>
                <div>
                    <button className='buttonHL' onClick={playAgain}>PLAY AGAIN</button>
                    <Link to="/minigames">
                        <button className='button'> BACK TO GAMES </button>
                    </Link>
                </div>
            </>
        ))
      ) : (
        <>
        </>
      )}
    </div>
  )
}

export default HighOrLow
