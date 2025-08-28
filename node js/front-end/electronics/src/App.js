import {useState,useEffect} from "react"


export default function App() {
  const [laptops,setlaptops] = useState();

useEffect(()=> {
  fetch(http://localhot:5000)
    .then((res) => res.json())
    .then((data)=> setlaptops(data))
  }
  return(

    <button href="http://localhot:5000/upload>add</button>

  <div>
  {laptops.map((laptop,i)=>(
    <div key={i}>
    <img src={laptop.img} />
    <h3>{laptop.brand}</h3>
    <h3>{laptop.memory}</h3>
    <button href="http://localhot:5000/update/:id">edit</button>
    <button href="http://localhot:5000/delete/:id">delete</button>
    </div>

  ))}
  </div>
);
};
