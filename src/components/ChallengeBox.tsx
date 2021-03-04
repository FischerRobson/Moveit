import { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceded () {
    completeChallenge()
    resetCountdown()
  }

  function handleChallenfeFailed () {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
          <div className={styles.challengeActive}>
              <header>Ganhe {activeChallenge.amount} xp</header>
              <main>
                  <img src={`icons/${activeChallenge.type}.svg`} />
                  <strong>Novo Desafio</strong>
                  <p>{activeChallenge.description}</p>
              </main>
              <footer>
                  <button className={styles.challengeFailedButton} onClick={handleChallenfeFailed} type="button">Falhei</button>
                  <button className={styles.challengeSucceededButton} onClick={handleChallengeSucceded} type="button">Completei</button>
              </footer>
          </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para receber desafios a serem completados
        </strong>
        <p>
          <img src="icons/level-up.svg" alt="level up" />
          Avance de level completando desafios
        </p>
      </div>
      )}
    </div>
  );
}
