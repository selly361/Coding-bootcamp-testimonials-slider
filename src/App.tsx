import { GlobalStyle } from 'global/GlobalStyles';
import React from 'react';
import SlideShowContext from 'context/SlideShowContext';

function App() {
  return (
  <SlideShowContext>
    <GlobalStyle />
    
  </SlideShowContext>
  );
}

export default App;
