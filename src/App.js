import React,{useState} from 'react';


export default function App() {
    const [val,setVal] =useState("100")
    const handleChange = (e)=>{
        setVal(e.target.value)
    }
    return (
        <div>
            <h2>Range</h2>
            <input type="range" min="0" max="100" value={val} onChange={handleChange}></input>
            <h2>Range Current value is %{val}</h2>

        </div>
    )
}
