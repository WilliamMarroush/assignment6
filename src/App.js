import React,{useEffect} from 'react';
import './App.css';
import ZipSearch from './Components/ZipSearch';

function App() {
  const getCities =()=>{
    try{
      const response =fetch("putzipcitieswebsitehere");
      //console.log(response);
      const jsonData = response.json();
      console.log(jsonData);
    }catch(err){
      //console.error(err.message);
    }
  }
  useEffect(()=>{
    getCities();
  });

  return (
  <div>
    Hello from App.js
    <ZipSearch/>
  </div>
  )
}
export default App;
