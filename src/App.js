import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="container">
      <Result />
      <Buttons />
    </div>
  );
}

export default App;
