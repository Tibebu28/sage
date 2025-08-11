import { useDispatch } from "react-redux"
import {add, subtract,reset} from "../redux/counterSlice"
export default function Button (){
    const dispatch = useDispatch()
    return(
      
        <div style={{ display: "flex" , gap: "15px"}}>
        <button onClick={()=> dispatch(add())}>Add</button>
         <button onClick={()=> dispatch(subtract())}>subtract</button>
          <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
        
        
    )
}