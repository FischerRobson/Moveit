import { useState } from "react";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

    const [hasActiveChallenge, setHasActiveChallenge] = useState(true)

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
          <div className={styles.challengeActive}>
              <header>Ganhe 400 xp</header>
              <main>
                  <img src="icons/body.svg" />
                  <strong>Novo Desafio</strong>
                  <p>Levante e faça uma caminhada de 3 minutos</p>
              </main>
              <footer>
                  <button className={styles.challengeFailedButton} type="button">Falhei</button>
                  <button className={styles.challengeSucceededButton} type="button">Completei</button>
              </footer>
          </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>
          Inicie um ciclo para recever desafios a serem completados
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
