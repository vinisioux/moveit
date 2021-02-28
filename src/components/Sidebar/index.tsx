import React, { useContext } from 'react';
import Switch from 'react-switch';
import { FiHome, FiAward, FiPower } from 'react-icons/fi';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

import { ThemeContext as StyledThemeContext } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function Sidebar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { colors } = useContext(StyledThemeContext);
  const router = useRouter();

  return (
    <Container>
      <header>
        <img src="icons/logo.svg" alt="Move.it" />
        <button onClick={() => signOut()}>
          <FiPower />
        </button>
      </header>

      <div>
        <button onClick={() => router.push('/home')}>
          <FiHome />
        </button>
        <button onClick={() => router.push('/leaderboard')}>
          <FiAward />
        </button>
      </div>

      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        offColor={colors.title}
        offHandleColor={colors.primary}
        onColor={colors.grayLine}
        onHandleColor={colors.primary}
      />
    </Container>
  );
}

export { Sidebar };
