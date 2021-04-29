import React,{useState,useEffect,useRef} from 'react';

const initialStyle="0px 0px 0px 0px rgb(128,128,128)";
export default function App() {
    const [val,setVal] =useState({
        "h-offset":0,
        "v-offset":0,
        "spread":0,
        "blur":0,
        "shadowColor":"gray",
        "backgroundColor":"#DCD9CD"
    })
    const [boxShadow,setBoxShadow]=useState(initialStyle);
    const [style,setStyle]=useState("")
    const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
  };

    const handleChange = (e)=>{
        setVal(
            prev=>({...prev,[e.target.name]:e.target.value})
        )
        console.log(val)
    }

    useEffect(() => {
       setBoxShadow(`${val['h-offset']}px ${val['v-offset']}px ${val.blur}px ${val.spread}px ${val.shadowColor}`)
       setStyle(`box-shadow:${boxShadow};\n-webkit-box-shadow: ${boxShadow};\n-moz-box-shadow:${boxShadow};
       `)
    }, [val])

    const getRef =()=>{
        let txt=ref.current.value;
        document.execCommand("copy");
        console.log(txt)
    }
    // h-offset v-offset blur spread color
    return (
        <div>
            <div>
                <div>
                    <label for="h-offset">Horizontal offset</label>
                    <input type="range"  name="h-offset" className="form-control" min="-199" max="199"
                     value={val['h-offset']} onChange={handleChange}></input>
                </div>
                 <div>
                    <label for="v-offset">Vertical offset</label>
                    <input type="range" name="v-offset" className="form-control" 
                        min="0" max="100" value={val['v-offset']} onChange={handleChange}></input>
                </div> 
                <div>
                    <label for="blur">Blur</label>
                    <input type="range" name="blur" className="form-control"
                         min="0" max="400" value={val.blur} onChange={handleChange}></input>
                </div> 
                <div>
                    <label for="spread">Spread </label>
                    <input type="range" name="spread" className="form-control"
                         min="-199" max="199" value={val.spread} onChange={handleChange}></input>
                </div> 
                <div>
                    <label for="shadowColor">Shadow Color</label>
                    <input type="color" name="shadowColor" className="form-control"
                     value={val.shadowColor} onChange={handleChange}></input>
                </div> 
                <div>
                    <label for="backgroundColor">Background Color</label>
                    <input type="color" name="backgroundColor" className="form-control"
                     value={val.backgroundColor} onChange={handleChange}></input>
            </div>
        </div>
            <div>
                <div style={{boxShadow:`${boxShadow}`, borderRadius:"5px",
                 width:"400px",height:"400px",backgroundColor:`${val.backgroundColor}`}}>
                </div>

                <div>
                    <form>
                        <textarea ref={textAreaRef} value={style} style={{width:"700px"}}readOnly={true}  ></textarea>
                    </form>
                   
                    <div onClick={copyToClipboard}>
                        <button className="btn btn-primary">Copy Style</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
