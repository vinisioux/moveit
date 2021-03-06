import { useSession } from 'next-auth/client';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import challenges from '../../challenges.json';
// import Cookies from 'js-cookie';
import axios from 'axios';

import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [session] = useSession();
  const [accessToken] = useState(() => {
    return session?.accessToken;
  });

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    // Cookies.set('level', String(level));
    // Cookies.set('currentExperience', String(currentExperience));
    // Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }, [level]);

  const closeLevelUpModal = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, []);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio liberado ✨', {
        body: `Complete para ganhar ${challenge.amount} xp! 👀`,
      });
    }

    setActiveChallenge(challenge);
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(async () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    let isLevelUpdated: boolean;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;

      levelUp();
      isLevelUpdated = true;
    }

    await axios.put('/api/concludechallenge', {
      level: isLevelUpdated ? level + 1 : level,
      experience: finalExperience,
      challengesCompleted: challengesCompleted + 1,
      accessToken,
      amount,
    });

    isLevelUpdated = false;

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    currentExperience,
    activeChallenge,
    challengesCompleted,
    experienceToNextLevel,
    levelUp,
    accessToken,
    level,
  ]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
