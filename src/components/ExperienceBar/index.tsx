import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import {
  Container,
  ProgressCount,
  ProgressBarContainer,
  ProgressBar,
  CurrentExperience,
} from './styles';

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <ProgressCount>0 xp</ProgressCount>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${percentToNextLevel}%` }} />

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </CurrentExperience>
      </ProgressBarContainer>
      <ProgressCount>{experienceToNextLevel} xp</ProgressCount>
    </Container>
  );
}

export { ExperienceBar };
