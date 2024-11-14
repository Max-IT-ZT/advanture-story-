import { useState, useEffect, useRef } from "react";
import Game from "./components/Game";
import HomePage from "./components/HomePage";
import "./App.css";
import forestSound from "./components/sound/forest-sound.wav"; // Import the sound file
import { GoUnmute, GoMute } from "react-icons/go"; // Import the icons

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null); // Reference for the audio element

  // Use useEffect to play/pause audio based on the isMuted state
  useEffect(() => {
    if (audioRef.current) {
      isMuted ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [isMuted]);

  const handleStart = () => {
    setIsGameStarted(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="App">
      {/* Audio component with loop */}
      <audio ref={audioRef} src={forestSound} loop />

      {/* Mute/Unmute button */}
      <button onClick={toggleMute} className="muteButton">
        {isMuted ? <GoUnmute /> : <GoMute />}
      </button>

      {isGameStarted ? <Game /> : <HomePage onStart={handleStart} />}
    </div>
  );
}

export default App;
