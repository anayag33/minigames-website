import HigherOrLowerCover  from "../assets/HiLoCover.png";
import Hangman from "../assets/HangmanCover.png";
import TicTacToe from "../assets/TicTacToeCover.png";

export const  MinigamesList = [
    {
        name: "Hangman",
        image: Hangman,
        description: "Guess the word before you run out of tries",
        page: "/hangman"
    },
    {
        name: "Tic Tac Toe",
        image: TicTacToe,
        description: "Try to get 3 in a row before your opponent",
        page: "/tictactoe"
    },
    {
        name: "Higher or Lower",
        image: HigherOrLowerCover,
        description: "Guess if the card pulled is higher or lower than your card",
        page: "/highorlow"
    }
]