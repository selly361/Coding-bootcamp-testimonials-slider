import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set core body defaults */
  body {
    height: 100vh;
    width: 100vw;
    background: url("images/pattern-bg.svg") no-repeat right/600px, url("images/pattern-curve.svg") no-repeat  bottom left;
  }


  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // remove default styles for list's

  ul {
    list-style: none;
    padding: 0;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  


`