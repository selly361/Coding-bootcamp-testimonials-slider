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
    margin: auto;
    background: url("images/pattern-bg.svg") no-repeat, url("images/pattern-curve.svg") no-repeat;
    background-size: 550px, 610px;
    background-position: center right 100px ,bottom left;
    padding-top: 113px;
    overflow: hidden;
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

  
  button {
    background-color: unset;
    border: unset;
  }


`