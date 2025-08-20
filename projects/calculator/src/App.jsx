import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  };
  const clear = () => {
    setInput('');
  };
  const equal = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <div>
      <div className="display">{input}</div>
      <div className="main">
        <button onClick={() => setInput(input + '1')}>1</button>
        <button onClick={() => setInput(input + 2)}>2</button>
        <button onClick={() => setInput(input + 3)}>3</button>
        <button onClick={() => setInput(input + '+')}>+</button>

        <button onClick={() => setInput(input + 4)}>4 </button>
        <button onClick={() => setInput(input + 5)}>5</button>
        <button onClick={() => setInput(input + 6)}>6</button>
        <button onClick={() => setInput(input + '-')}>-</button>

        <button onClick={() => setInput(input + 7)}>7</button>
        <button onClick={() => setInput(input + 8)}>8</button>
        <button onClick={() => setInput(input + 9)}>9</button>
        <button onClick={() => setInput(input + '*')}>*</button>

        <button onClick={() => clear()}>c</button>
        <button onClick={() => setInput(input + '0')}>0</button>
        <button onClick={() => equal()}>=</button>
        <button onClick={() => setInput(input + '/')}>/</button>
      </div>
    </div>
  );
}

export default App;
