
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1>Counter App</h1>

        <h2 className="count">{count}</h2>

        <div className="button-group">
          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button className="decrement" onClick={decrement}>
            - Decrement
          </button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
