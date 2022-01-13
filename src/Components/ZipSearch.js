import React,{useState,useEffect} from 'react';
import axios from 'axios';
const ZipSearch =() =>{
    const [zip,setZip] = useState("10020");
    const [rawdata,setRawdata]=useState([]);
    const handleChange=(event)=>{
            setZip(event.target);
            let url = 'http://ctp-zip-api.herokuapp.com/zip/${zip}';
            axios.get(url)
            .then((results)=>{
                console.log(results.data);//should be an array of an object
                setRawdata(results.data);
            }
            )
    }
    return (
        <div>
            <form>
                <input type="text" id="zipInput"  />
                <button onClick={handleChange}>Search</button>
            </form>
            {rawdata.map((elem)=>{
                 return (<><h2>{elem.RecordNumber}</h2></>)
            })}
        </div>
    );
}
export default ZipSearch;