import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengeContextData {
    level: number,
    currentExperience: number, 
    challengesCompleted: number,
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completeChallenge: () => void,
}

interface ChallengeProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengeProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengIndex]
    setActiveChallenge(challenge)

    new Audio("/notification.mp3").play()
    
    if (Notification.permission === "granted") {
     new Notification("Novo Desafio 🥳", {
       body: `Valendo ${challenge.amount}`,
     });
    }
  }

  function resetChallenge() {
      setActiveChallenge(null)
  }

  function completeChallenge () {
    if(!activeChallenge){
      return
    }

    const { amount } = activeChallenge
    let finalXp = currentExperience + amount

    if(finalXp >= experienceToNextLevel) {
      finalXp = finalXp - experienceToNextLevel
      console.log("finalXpLevelUp: " +  finalXp)
      levelUp()
    }

    setCurrentExperience(finalXp)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{ level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
