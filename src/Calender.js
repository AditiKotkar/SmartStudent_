import React from 'react';
import './App.css';
import logo from "./images/Calender7.png"

function Calender() {
  return (
    <div className="contener">
    <div className="img">
        <img src={logo} />
    </div>
    <h1>Event Calender</h1>
</div>
  );
}

export default Calender;