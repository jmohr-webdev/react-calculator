import React, { useState } from 'react';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './styles/main.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (e) => {
    setExpression(expression.concat(e.target.value));
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleBackspace = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <Result result={expression} />
        <Buttons
          handleClick={handleClick}
          handleBackspace={handleBackspace}
          handleClear={handleClear}
          handleCalculate={handleCalculate}
        />
      </div>
    </div>
  );
}

export default App;
