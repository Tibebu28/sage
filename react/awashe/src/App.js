import React from 'react';
import { useState } from 'react';

function App() {
  const [counter,setcounter] = useState(0)

  const sub = () => setcounter(counter - 1)

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Awashe bank</h1>
      <h1>{counter}</h1>
      <div style={{display:"flex", gap:"10px"}}>
         <button onClick={() => setcounter(counter+1) }>Increment</button>
         <button onClick={sub}>Decrement</button>  
        
      </div>
    </div>
  );
}

export default App;
