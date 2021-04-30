import React from 'react'

export default function FormRange({name, text, onChangeHandler,min,max,data}) {
    return (
        <div className="formRange">
            <label htmlFor={name}>
                <p>{text}</p>
                <p className="txt-blue">{data[name]}px</p>
            </label>
            <input type="range"  name={name} className="" min={min} max={max}
                value={data[name]} onChange={onChangeHandler}></input>
        </div>
    )
}

export function FormColor({name, text, onChangeHandler,data}) {
    return (
        <div className="formColor">
            <label htmlFor={name}>{text}</label>
            <div className="fc-inputs"> 
                <input value={data[name]} className="i-color-r" readOnly={true}></input>
                <input type="color"  name={name} className="i-color" 
                value={data[name]} onChange={onChangeHandler}></input>
            </div>
            
        </div>
    )
}
