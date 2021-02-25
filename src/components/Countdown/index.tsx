import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, CountdownButton } from './styles';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              isActive={isActive}
              type='button'
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton type='button' onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
