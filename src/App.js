import logo from './logo.svg';
import './App.css';
import TimeDisplay from './TimeDisplay';
import React, { useState, useEffect } from "react";



function MyButton2() {
  return (
    <button>long nap</button>
  );
}

function MyButton3() {
  return (
    <button>Sleep</button>
  );
}

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [optimalNapTime, setOptimalNapTime] = useState("");
  const [showNapTime, setShowNapTime] = useState(false); // State to toggle display


  useEffect(() => {
    console.log("Current time updated: ", currentTime.toLocaleTimeString());
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  //nap time
  useEffect(() => {
    const napTime = new Date(currentTime.getTime() + 20 * 60000);
    console.log("Calculated optimal nap time: ", napTime.toLocaleTimeString());
    setOptimalNapTime(napTime.toLocaleTimeString());
  }, [currentTime]);

  // Handle button click to toggle nap time visibility
  const handleToggleNapTime = () => {
    setShowNapTime((prev) => !prev); // Flip the state
  };

  return (
      <div className="App">
        <h1>Optimal Sleep</h1>
        <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
        <button onClick={handleToggleNapTime}>{showNapTime ? "Hide Optimal Nap Time" : "Show Optimal Nap Time"}</button>
        {showNapTime && <h3>Optimal Nap Time: {optimalNapTime}</h3>}
        <MyButton2 />
        <MyButton3 />
      </div>
    );
  }

export default App;
