import React, { useState } from "react";

function AlarmSettings({ setAlarmTime }) {
  const [alarm, setAlarm] = useState("");

  const handleInputChange = (event) => {
    setAlarm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlarmTime(alarm);
  };

  return (
    <div>
      <h3>Set Alarm Time</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="time"
          value={alarm}
          onChange={handleInputChange}
        />
        <button type="submit">Set Alarm</button>
      </form>
    </div>
  );
}

export default AlarmSettings;
