import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Minigames from "./pages/Minigames";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hangman from "./pages/Hangman";
import TicTacToe from "./pages/TicTacToe";
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/minigames" element={<Minigames/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/hangman" element={<Hangman/>} />
          <Route path="/tictactoe" element={<TicTacToe/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
