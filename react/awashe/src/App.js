// import Button from "./components/Button"
import { useState } from "react"

export default function App() {
  const [countrys, setCountrys] = useState([])
  const [searchCountryName, setsearchCountryName] = useState("")
  function getCountrys(){
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
     .then((res) => res.json())
     .then((data) => setCountrys(data))
  }

  function search(name){
    fetch("https://restcountries.com/v3.1/name/" + name)
    .then((res) => {
      if(res.status === 200)
        return res.json()
      else
        return []
    })
    .then((data) => setCountrys(data))
  }
  
  return (
    <div>
      <h1>country list</h1>
      <input type="search" placeholder='search' value={searchCountryName} onChange={(e) => setsearchCountryName(e.target.value)} />
      <button onClick={() => search(searchCountryName)}>search country</button>
      <button onClick={() => getCountrys()}>Get countrys</button>
      <div style={{display: "flex", gap:"15px", maxWidth:"100%", flexWrap:"wrap",padding:"10px"}}>
        {countrys.map((country) => (
          <div style={{width: '400px', borderWidth:"2px",borderColor:"black", backgroundColor:"green",padding:"10px"}}>
            <img src={country.flags.png} alt={country.flags.alt} width="100%"/>
            <p>country common name: {country.name.common}</p>
            <p>country official name: {country.name.officail}</p>
          </div>
        ) )}
      </div>




      {/* <h1>Awash counter app</h1>
      <h1>{count}</h1>
      <Button/> */}
    </div>
  )
  
}
