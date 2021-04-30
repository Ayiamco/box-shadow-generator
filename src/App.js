import React,{useState,useEffect,useRef} from 'react';
import FormRange,{FormColor} from "./components/input";

const initialStyle="0px 0px 0px 0px rgb(128,128,128)";
export default function App() {
    const [val,setVal] =useState({
        "h-offset":0,
        "v-offset":0,
        "spread":0,
        "blur":0,
        "shadowColor":"#255,255,255",
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
    }

    useEffect(() => {
       setBoxShadow(`${val['h-offset']}px ${val['v-offset']}px ${val.blur}px ${val.spread}px ${val.shadowColor}`)
       setStyle(`box-shadow: ${boxShadow};\n-webkit-box-shadow: ${boxShadow};\n-moz-box-shadow: ${boxShadow};
       `)
    }, [val])

    
    return (
        <div>
            <h1 className="mn-h1">Box Shadow Generator</h1>
            <div className="mn-con">
                
                <div className="mn-left">
                    <p className="p-head">Box Shadow Options</p>
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
                <div className="box-section">
                    <div className="box-view"style={{boxShadow:`${boxShadow}`, borderRadius:"5px",
                    backgroundColor:`${val.backgroundColor}`}}>
                    </div>

                    <div className="box-value">
                        <textarea ref={textAreaRef} value={style} style={{width:"700px"}}readOnly={true}  ></textarea>
                        <div onClick={copyToClipboard}>
                            <button className="btn btn-primary">Copy Style</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
