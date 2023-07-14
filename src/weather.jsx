import { useState } from "react";
import '../App.css'

function Report(){
const[city,setCity]=useState("");
const[temp,setTemp]=useState("");
const [display,setdisplay]=useState("")

const submittion=(e)=>{
    e.preventDefault()
    setCity(`${city}`) 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6113aeb310eda6e8851d2a03dcf7623a`)
    .then((val)=>val.json()).then((result)=>{
        const kelvin=result.main.temp;
        const celsius = Math.round(kelvin-273);
        setTemp(`temperature : ${celsius} °C`);
    }
    
    )
    setdisplay(city); 
}


const selecting=(e)=>{
    setCity(e.target.value);
   
}
    return(
        <div id="container">
            <form id="form" action="" onSubmit={submittion}>
                <input id="input"  type="text"  onChange={selecting} placeholder="enter a city name"/>
            <button id="btn">Get</button> <br /><br />
            <span id="store">{temp}</span><br></br>
            <span>{display}</span>
            
            </form>
        </div>
    )
}
export default Report;

