import React, { useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);

  };

  return(
    <div class="box">
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
