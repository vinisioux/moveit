import React from 'react';

import { Container, ChallengeNotActive, ChallengeActive } from './styles';

export function ChallengeBox() {
  const hasAsctiveChallenge = true;

  return (
    <Container>
      {hasAsctiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src='icons/body.svg' />
            <strong>Novo desafio</strong>
            <p>levantee e faça uma caminhada</p>
          </main>

          <footer>
            <button type='button' className='challengeFailedButton'>
              Falhei
            </button>
            <button type='button' className='challengeSucceededButton'>
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
