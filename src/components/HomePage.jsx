import React, { useState, useEffect, useRef } from "react";
import css from "./HomePage.module.css";
import forestSound from "./sound/forest-sound.wav"; // Помістіть файл звуку в цю папку
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";

function HomePage({ onStart }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null); // Реакт реф для аудіо

  // При завантаженні сторінки починає відтворювати звук, якщо не вимкнено
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play();
    }
  }, [isMuted]);

  // Перемикач звуку
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div className={css.homePage}>
      {/* Аудіо компонент з лупом */}
      <audio ref={audioRef} src={forestSound} loop />

      {/* Кнопка вимкнення/увімкнення звуку */}
      <button onClick={toggleMute} className={css.muteButton}>
        {isMuted ? <GoUnmute /> : <GoMute />}
      </button>

      <h1 className={css.title}>Таємниця лісової хатинки</h1>
      <p className={css.textInfo}>
        Ви опиняєтеся біля краю таємничого лісу, де захована загадкова хатинка.
        Легенди кажуть, що в цій хатинці прихована стародавня магія, здатна
        змінити долю будь-якого, хто зможе розкрити її секрети. Але будьте
        обережні: ліс наповнений таємницями і небезпеками, а кожен ваш вибір
        може мати несподівані наслідки...
      </p>
      <p className={css.text}>
        Чи наважитеся ви розкрити таємниці хатинки і пережити її чари?
      </p>
      <button onClick={onStart} className={css.startButton}>
        Розпочнемо подорож
      </button>
    </div>
  );
}

export default HomePage;
