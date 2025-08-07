 import Button from "./components/Button"
 import "./App.css"
 import { useState } from "react"
import LoginAndLogout from "./components/conditinals/LoginAndLogout"
import ReactList from "./components/conditinals/ReactList"
import Crad from "./components/Card"
 function App(){
    const [counter, setCounter] = useState(0)
  return <div>
              <Crad />
              <h1>first component</h1>
                  <Button name="Log in "/>
                  <br/><br/>
                  <Button name="Register" />
                  {/* state  */}
                  <br/><br/>
                  <button onClick={() =>setCounter(counter + 1)}>Add</button>
                  <h1>{counter}</h1>
                  <button onClick={() =>setCounter(counter - 1)}>Subtract</button>
                    <br/><br/>
                  <LoginAndLogout />
                  <ReactList/>
                  
                  
         </div>
 }

  export default App