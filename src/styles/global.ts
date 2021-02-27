import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: ${(props) => props.theme.colors.white};
    --background: ${(props) => props.theme.colors.background};
    --gray-line: ${(props) => props.theme.colors.grayLine};
    --text: ${(props) => props.theme.colors.text};
    --text-highlight: ${(props) => props.theme.colors.textHighlight};
    --title: ${(props) => props.theme.colors.title};
    --red: ${(props) => props.theme.colors.red};
    --green: ${(props) => props.theme.colors.green};
    --blue: ${(props) => props.theme.colors.blue};
    --blue-dark: ${(props) => props.theme.colors.blueDark};
    --blue-twitter: ${(props) => props.theme.colors.blueTwitter};
    --primary: ${(props) => props.theme.colors.primary};
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1.6rem "Inter", sans-serif;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
