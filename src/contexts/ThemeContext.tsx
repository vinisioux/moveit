import { createContext, ReactNode, useCallback, useState } from 'react';
import { light, dark } from '../styles/themes';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Cookies from 'js-cookie';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProviderApp({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const currentTheme = Cookies.get('currentTheme');

    return currentTheme === 'dark' ? dark : light;
  });

  const toggleTheme = useCallback(() => {
    const currentTheme = Cookies.get('currentTheme');

    setTheme(currentTheme === 'light' ? dark : light);

    Cookies.set(
      'currentTheme',
      String(currentTheme === 'light' ? 'dark' : 'light')
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
