import React, { useContext } from 'react';
import Switch from 'react-switch';
import { FiHome, FiAward } from 'react-icons/fi';

import { ThemeContext as StyledThemeContext } from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

function Sidebar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { colors } = useContext(StyledThemeContext);

  return (
    <Container>
      <img src="icons/logo.svg" alt="Move.it" />

      <div>
        <button>
          <FiHome />
        </button>
        <button>
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
