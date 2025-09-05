import React from "react"
import {useState,useEffect} from "react"

export default function App(){
	const [laptops,setLaptops] = useState([])

    useEffect(()=>{
    fetch("http://localhost:3005/")
	.then((res)=> res.json())
	.then((data)=> setLaptops(data))

    },[])
	
	return(
		<div>
			<h1>laptops</h1>
			{laptops.map(
				(laptop, index)=>{
					<div key={index}>
						<h2>{laptop.name}</h2>
					</div>
				}
				)

			}
		</div>
		)
}