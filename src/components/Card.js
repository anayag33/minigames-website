import React, {useState, useEffect} from 'react'
import '../styles/Card.css';
import Spade from '../assets/Spade.png';
import Clubs from '../assets/Clubs.png';
import Hearts from '../assets/Hearts.png';
import Diamond from '../assets/Diamond.png';

function Card({number, suit}) {

    const[display, setDisplay] = useState('');

    useEffect(() => {
        if (number===11){
            setDisplay('J');
        }
        else if (number===12){
            setDisplay('Q');
        }
        else if (number===13){
            setDisplay('K');
        }
        else if (number===1){
            setDisplay('A');
        }
        else{
            setDisplay(number);
        }
      }, [number]);

  return (
    <div className='card'>
        {suit===1 ? (
            <>
                <h1 className='numberB'>{display}</h1>
                <img src={Spade} className='image'></img>
            </>
        ) : (
            (suit===2 ? (
                <>
                    <h1 className='numberB'>{display}</h1>
                    <img src={Clubs} className='image'></img>
                </>
            ) : (
                (suit === 3 ? (
                    <>
                        <h1 className='numberR'>{display}</h1>
                        <img src={Hearts} className='image'></img>
                    </>
                ) : (
                    <>
                        <h1 className='numberR'>{display}</h1>
                        <img src={Diamond} className='image'></img>
                    </>
                ))
            ))
        )}
    </div>
  )
}

export default Card
