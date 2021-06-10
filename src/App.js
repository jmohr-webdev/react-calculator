import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './styles/main.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (e) => {};

  const handleClear = () => {};

  const handleBackspace = () => {};

  const handleCalculate = () => {};

  return (
    <div className="container">
      <div className="calculator">
        <Result result={expression} />
        <Buttons handleClick={handleClick} handleClear={handleClear} />
      </div>
    </div>
  );
}

export default App;
