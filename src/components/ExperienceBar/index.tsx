import React from 'react';

import {
  Container,
  ProgressCount,
  ProgressBarContainer,
  ProgressBar,
  CurrentExperience,
} from './styles';

function ExperienceBar() {
  return (
    <Container>
      <ProgressCount>0 xp</ProgressCount>
      <ProgressBarContainer>
        <ProgressBar style={{ width: '50%' }} />

        <CurrentExperience style={{ left: '50%' }}>300 xp</CurrentExperience>
      </ProgressBarContainer>
      <ProgressCount>600 xp</ProgressCount>
    </Container>
  );
}

export { ExperienceBar };
