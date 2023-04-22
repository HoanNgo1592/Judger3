import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const EventHome =() =>{
  const [eventInput, setEvent] = useState({
    event_title: '',
    startTime: '',
    startDate: '',
    endTime: '',
    endDate: ''
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate()
  //Set the array of data to event
  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Update the database with the data using the controller for 
  const handleSubmit= async (e) => {
    
  };
   
  return(
    <div>
    <h1>This is the EventID page.</h1>
      <div className ="event">
        <h2>Event Editor:</h2>
        <form>
          <h3>Event Name:</h3>
          <h3>Start Time:</h3>
          <h3>End Time:</h3>
          <h3>Start Date:</h3>
          <h3>End Date:</h3>
          <input type="text" 
              placeholder="Name of the event:"    
              name="event_title"
              onChange= {handleChange}
              ></input>
            <input type="text" 
              name="startTime" 
              pattern="\d{2}:\d{2}" 
              placeholder="HH:mm" 
              onChange={handleChange}
              ></input>
            <input type="text" 
              name="endTime" 
              pattern="\d{2}:\d{2}" 
              placeholder="HH:mm" 
              onChange={handleChange}
              ></input>
            <input type="text" 
              name="startDate" 
              pattern="\d{2}:\d{2}:\d{4}" 
              placeholder="MM:DD:YYYY" 
              oonChange={handleChange}
              ></input>
            <input type="text" 
              name="endDate" 
              pattern="\d{2}:\d{2}:\d{4}" 
              placeholder="MM:DD:YYYY" 
              onChange={handleChange}
              ></input>
            <button onClick={handleSubmit}> Save </button>
            </form>
            <h2>Your Events:</h2>
            <form>
              <h3>(NAME OF EVENT)</h3>
            <button>Start</button>
            <button>End</button>
            <button>Edit</button>
            <button>Delete</button>
            </form>
        </div>
    </div>
    )
    };
    export default EventHome;