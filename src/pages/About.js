import React from 'react'
import Controllers from '../assets/AboutUs.png'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div 
        className='aboutTop' 
        style={{ backgroundImage: `url(${Controllers})` }}
      > 
    </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p className='aboutText'>Anaya's arcade is a fun website where users can 
          come to play games. We believe in strengthening our community by connecting
          users of all places with a common interest, having fun! We have multiple games like Hangman, Tic Tac Toe, and Higher or Lower. 
          To learn how to play our games, read below!
        </p>
        <div className='horizontal'>
          <div>
            <h3>Hangman</h3>
              <div className='box'>
                <p>In Hangman there will be a secret word represented with empty dashes.
                  You need to guess the letters in that word 1 by 1 until you guess 
                  the complete word. Each correct letter will replace a blank in the word.
                  However, if you guess an incorrect letter, it will appear on the top, and 
                  a part of the hangman image will appear. You lose after 6 incorrect tries,
                  aka when your hangman is complete. Try to guess the word before then!
                </p>
              </div>
          </div>
          <div>
            <h3>Tic Tac Toe</h3>
              <div className='box'>
                <p>In Tic Tac Toe, you will be playing with 
                </p>
              </div>
          </div>
          <div>
            <h3>Higher or Lower</h3>
              <div className='box'>
                <p>Higher or Lower is a simple version of the popular casino game. 
                  You are given a playing card, and must make a prediction whether the nect card
                  pulled will be higher, lower, or equal to your current card. if you get it 
                  correct, you get 1 point, and if you get it incorrect, you lose 1 point. See how 
                  high you can get by practicing your skills!
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
