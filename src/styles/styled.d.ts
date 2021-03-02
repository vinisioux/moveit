import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      background: string;
      grayLine: string;
      text: string;
      textHighlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blueDark: string;
      blueTwitter: string;
      primary: string;
      blue01: string;
      blue02: string;
      textBlue: string;
    };
  }
}
