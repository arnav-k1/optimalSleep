import logo from "./logo.svg";
import "./App.css";
import TimeDisplay from "./TimeDisplay";
import React, { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [optimalNapTime, setOptimalNapTime] = useState("");
  const [optimallongNapTime, setOptimallongNapTime] = useState("");
  const [optimalsleepTime, setOptimalsleepTime] = useState("");
  const [showNapTime, setShowNapTime] = useState(false); // State to toggle display
  const [showlongNapTime, setShowlongNapTime] = useState(false); // State to toggle display
  const [showsleepTime, setShowsleepTime] = useState(false); // State to toggle display

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
    console.log(
      "Calculated optimal power nap time: ",
      napTime.toLocaleTimeString()
    );
    setOptimalNapTime(napTime.toLocaleTimeString());
  }, [currentTime]);

  //long nap time
  useEffect(() => {
    const longnapTime = new Date(currentTime.getTime() + 60 * 60000);
    console.log(
      "Calculated optimal long nap time: ",
      longnapTime.toLocaleTimeString()
    );
    setOptimallongNapTime(longnapTime.toLocaleTimeString());
  }, [currentTime]);

  //sleep time
  useEffect(() => {
    const sleepTime = new Date(currentTime.getTime() + 480 * 60000);
    console.log(
      "Calculated optimal sleep time: ",
      sleepTime.toLocaleTimeString()
    );
    setOptimalsleepTime(sleepTime.toLocaleTimeString());
  }, [currentTime]);

  // Handle button click to toggle nap time visibility
  const handleToggleNapTime = () => {
    setShowNapTime((prev) => !prev); // Flip the state
  };

  const handleTogglelongNapTime = () => {
    setShowlongNapTime((prev) => !prev); // Flip the state
  };

  const handleTogglesleepTime = () => {
    setShowsleepTime((prev) => !prev); // Flip the state
  };

  return (
    <div className="App">
      <h1>Optimal Sleep</h1>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
      <button onClick={handleToggleNapTime}>
        {showNapTime
          ? "Hide Optimal Power Nap Time"
          : "Show Optimal Power Nap Time"}
      </button>
      {showNapTime && <h3>Optimal power Nap Time: {optimalNapTime}</h3>}

      <button onClick={handleTogglelongNapTime}>
        {" "}
        {showlongNapTime
          ? "Hide Optimal long Nap Time"
          : "Show Optimal long Nap Time"}
      </button>
      {showlongNapTime && <h3>Optimal long Nap Time: {optimallongNapTime}</h3>}

      <button onClick={handleTogglesleepTime}>
        {" "}
        {showsleepTime ? "Hide Optimal sleep Time" : "Show Optimal sleep Time"}
      </button>
      {showsleepTime && <h3>Optimal sleep Time: {optimalsleepTime}</h3>}
    </div>
  );
}

export default App;
