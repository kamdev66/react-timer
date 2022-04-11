import './App.css';
import React,{useState,useRef} from 'react';


function App() {
   const [timeLeft,setTimeLeft]=useState(25*60);
   const [title,setTitle]=useState('Let the countdown Begins!!!');
   const intervalRef=useRef(null);

   const minutes=Math.floor(timeLeft/60).toString().padStart(2,'0');;
   const seconds =(timeLeft-minutes*60).toString().padStart(2,'0');//padStart is used to add 2 digit


   //Start Timer
   const startTimer=()=>{
     setTitle('You are doing Great! ')
    intervalRef.current= setInterval(() => {
      setTimeLeft(timeLeft=> {  ////here, we use timeLeft=> bcoz react goes to previous values and update another values
      if(timeLeft>=1) return timeLeft-1
      refreshTimer();
      return 0
      })
       
    }, 1000);
   }

   //Stop Timer
   const stopTimer=()=>{
    
    clearInterval(intervalRef.current);
    setTitle('Keep it up!')
   }
  

   //Refresh Timer
   const refreshTimer=()=>{
    setTitle('Ready to go another Round?')
    clearInterval(intervalRef.current)
    setTimeLeft(25*60);
   }


  return (
    <div className='app'>
      <h1>{title}</h1>
     
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className='buttons'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={refreshTimer}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
