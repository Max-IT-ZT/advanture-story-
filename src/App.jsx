// App.js
import { useState } from "react";
import Game from "./components/Game";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStart = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="App">
      {isGameStarted ? <Game /> : <HomePage onStart={handleStart} />}
    </div>
  );
}

export default App;
