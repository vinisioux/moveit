import { useContext } from 'react';
import { useSession } from 'next-auth/client';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const [session] = useSession();

  console.log(session);

  return (
    <Container>
      <img src={session?.user.image} alt={session?.user.name} />

      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
