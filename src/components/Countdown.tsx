import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if(isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? ( 
        <button
          disabled
          className={`${styles.startButton}`}
        >
          Ciclo Encerrado
        </button>
      ) : (
        <>
        {isActive ? (
        <button
          type="button"
          onClick={resetCountdown}
          className={`${styles.startButton} ${styles.startButtonActive}`}
        >
          Abandonar Ciclo
        </button>
      ) : (
        <button
          type="button"
          onClick={startCountdown}
          className={styles.startButton}
        >
          Iniciar um Ciclo 
        </button>
      )}
        </>
      )}

      
    </div>
  );
}
