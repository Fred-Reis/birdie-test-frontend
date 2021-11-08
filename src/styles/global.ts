import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #011A3C;
    --secondary-blue: #193478;
    --light-blue: #283F9C;

    --primary-yellow: #F0BE5C;
    --light-yellow: #FDF8D1;

    --primary-green: #5AC5C1;
    --light-green: #EAFFFE;

    --light-violet: #F9F4FF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    /* background: var(--primary-blue); */
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Dongle', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
