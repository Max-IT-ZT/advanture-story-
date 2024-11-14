import React, { useState } from "react";
import css from "./HomePage.module.css";
import { GoUnmute, GoMute } from "react-icons/go";

function HomePage({ onStart }) {
  const [isMuted, setIsMuted] = useState(false);

  // Перемикач звуку
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={css.homePage}>
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
