import React,{useState,useEffect,useRef} from 'react';
import FormRange,{FormColor} from "./components/input";

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
                <FormRange  name="h-offset" text="Horizontal offset" min="-199" max="199"   
                    onChangeHandler={handleChange} data={val}/>
                <FormRange  name="v-offset" text="Vertical offset" min="-199" max="199"
                    onChangeHandler={handleChange} data={val}/>
                <FormRange  name="blur" text="Blur" min="0" max="400" 
                    onChangeHandler={handleChange} data={val}/>
                <FormRange  name="spread" text="Spread" min="-199" max="199"
                    onChangeHandler={handleChange} data={val}/>
                <FormColor name="shadowColor" text="Shadow Color" 
                    onChangeHandler={handleChange} data={val}/>
                <FormColor name="backgroundColor" text="Background Color" 
                    onChangeHandler={handleChange} data={val}/>
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
