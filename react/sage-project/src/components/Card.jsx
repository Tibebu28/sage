import { useEffect, useState, useRef, use } from "react"

function Crad(){
    const [counter,setcounter] = useState(0);
    const previousCounter = useRef(0);
    useEffect(function(){
        console.log("from card")
        // render.current = render.current + 1;
    })
 
    return <div style={{width:"150px" , boxShadow:"3px 3px 4px red", padding:"15px", display:"inline-block"}}>
        <div style={{width:"100%", height:"80px", backgroundColor:"gray"}}></div>
        <h1 style={{margin:"5px 5px"}}>useState{counter}</h1>
        <h1 style={{margin:"5px 5px"}}>useRef{previousCounter.current}</h1>
        <button onClick={()=>{
            previousCounter.current = counter;
            setcounter(counter + 1);
            console.log("previousCounter", previousCounter.current)
            console.log("counter", counter)
        }}>add</button>
        

    </div>
}
export default Crad;
