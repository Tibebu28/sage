import Button from "./components/Button"
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state)=> state.counter.value);

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Awash counter app</h1>
      <h1>{count}</h1>
      <Button/>
    </div>
  )
  
}

export default App;
