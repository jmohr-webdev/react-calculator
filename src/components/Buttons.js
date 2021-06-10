import React from 'react';

const Buttons = ({ handleClick, handleClear }) => {
  return (
    <div className="buttons">
      <button value="clear" className="btn highlight" onClick={handleClear}>
        C
      </button>
      <button value="backspace" className="btn highlight">
        Delete
      </button>
      <button value="/" className="btn highlight">
        /
      </button>

      <button value="7" className="btn" onClick={handleClick}>
        7
      </button>
      <button value="8" className="btn" onClick={handleClick}>
        8
      </button>
      <button value="9" className="btn" onClick={handleClick}>
        9
      </button>
      <button value="*" className="btn highlight" onClick={handleClick}>
        x
      </button>

      <button value="4" className="btn" onClick={handleClick}>
        4
      </button>
      <button value="5" className="btn" onClick={handleClick}>
        5
      </button>
      <button value="6" className="btn" onClick={handleClick}>
        6
      </button>
      <button value="-" className="btn highlight" onClick={handleClick}>
        -
      </button>

      <button value="1" className="btn" onClick={handleClick}>
        1
      </button>
      <button value="2" className="btn" onClick={handleClick}>
        2
      </button>
      <button value="3" className="btn" onClick={handleClick}>
        3
      </button>
      <button value="+" className="btn highlight" onClick={handleClick}>
        +
      </button>

      <button value="0" className="btn" onClick={handleClick}>
        0
      </button>
      <button value="." className="btn" onClick={handleClick}>
        .
      </button>
      <button value="=" className="btn highlight" onClick={handleClick}>
        =
      </button>
    </div>
  );
};

export default Buttons;
