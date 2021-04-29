import React from 'react'

export default function FormRange({name, text, onChangeHandler,min,max,data}) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input type="range"  name={name} className="form-control" min={min} max={max}
                value={data[name]} onChange={onChangeHandler}></input>
        </div>
    )
}

export function FormColor({name, text, onChangeHandler,data}) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <input type="color"  name={name} className="form-control" 
                value={data[name]} onChange={onChangeHandler}></input>
        </div>
    )
}
