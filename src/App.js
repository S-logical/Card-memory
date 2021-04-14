import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Grid from "./Component/Grid";
function App() {
  const [time,setTime] = useState(0);
  const startTimer = () =>{
     setInterval(()=>{setTime((prev)=>prev+1)},1000);
  }
  return (
    <div>
      <button  onClick={startTimer}>Start</button>
      <span id="timer">Time : {time} sec</span>
      <Grid/>
      </div>
  );
}

export default App;