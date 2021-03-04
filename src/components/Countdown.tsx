import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/Countdown.module.css";

export default function Countdown() {
  
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
        <button disabled className={`${styles.startButton}`}>
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
