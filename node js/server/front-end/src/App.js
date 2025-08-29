import {useState,useEffect} from "react"
import "./App.css"

export default function App() {
  const [laptops,setLaptops] = useState([]);

useEffect(()=> {
  fetch("http://localhost:5000/laptop")
    .then((res) => res.json())
    .then((data)=> setLaptops(data))
  },[])

  return (
  <div>
  {laptops.map((laptop,i)=>(
    <div key={i} className="main">
    <div>
    <h2>brand:{laptop.brand}</h2>
    <h2>storage:{laptop.storage}</h2>
    <h2>memory:{laptop.memory}</h2>
    </div>
    </div>
    ))}
  </div>

  );
}