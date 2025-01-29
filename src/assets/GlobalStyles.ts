import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Space Mono Bold";
    src: url("/fonts/SpaceMono-Bold.ttf");
  }
  * , ::before , ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body , #root {
    width: fit-content;
    min-width: 100vw;
    min-height: 100vh;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: #C5E4E7;
    font-family: "Space Mono Bold";
  }
  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8.8rem;
  }
  @media(max-width:420px) {
    #root {
      gap: 4.1rem;
    }
  }
`;

export default GlobalStyles;
