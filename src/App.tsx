import { GlobalStyle } from 'global/GlobalStyles';
import { Main } from 'components';
import React from 'react';
import SlideShowContext from 'context/SlideShowContext';

function App() {
  return (
  <SlideShowContext>
    <GlobalStyle />
    <Main />
  </SlideShowContext>
  );
}

export default App;
