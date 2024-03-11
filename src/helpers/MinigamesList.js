import HigherOrLowerCover  from "../assets/HigherOrLowerCover.jpg";
import Hangman from "../assets/HangmanCover.png";
import TicTacToe from "../assets/TicTacToeCover.jpg";

export const  MinigamesList = [
    {
        name: "Hangman",
        image: Hangman,
        price: "Guess the word before you run out of tries",
        page: "/hangman"
    },
    {
        name: "Tic Tac Toe",
        image: TicTacToe,
        price: "Try to get 3 in a row before your opponent",
        page: "/tictactoe"
    },
    {
        name: "Higher or Lower",
        image: HigherOrLowerCover,
        price: "Guess if the card pulled is higher or lower than your card",
        page: "/highorlow"
    }
]