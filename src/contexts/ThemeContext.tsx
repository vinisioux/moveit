import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { light, dark } from '../styles/themes';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProviderApp({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    const currentTheme = Cookies.get('currentTheme');

    setTheme(currentTheme === 'dark' ? dark : light);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = Cookies.get('currentTheme');

    setTheme(theme.title === 'light' ? dark : light);

    Cookies.set(
      'currentTheme',
      String(currentTheme === 'light' ? 'dark' : 'light'),
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
