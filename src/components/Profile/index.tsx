import React from 'react';

import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <img
        src='https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4'
        alt='Vinicius'
      />

      <div>
        <strong>Vinicius Henrique</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </Container>
  );
}
