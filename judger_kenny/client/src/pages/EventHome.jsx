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

  const handleSubmit= async (e) => {const errors = {};
    console.log(eventInput);
}

   
  return(
    <div>
    <h1>This is the Event Page.</h1>
      <div className ="event">
        <h2>Create a new Event:</h2>
        <form>
          <h3>Event Name:</h3>
          <h3>Start Time:</h3>
          <h3>End Time:</h3>
          <h3>Start Date:</h3>
          <h3>End Date:</h3>
          <input type="text" 
              placeholder="Name of the event:"    
              name="event_title"
              value={eventInput.event_title}
              onChange= {handleChange}
              ></input>
            <input type="text" 
              name="startTime" 
              pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
              placeholder="HH:mm" 
              value={eventInput.startTime}
              onChange={handleChange}
              ></input>
            <input type="text" 
              name="endTime" 
              pattern="\d{2}:\d{2}" 
              placeholder="HH:mm" 
              value={eventInput.endTime}
              onChange={handleChange}
              ></input>
            <input type="text" 
              name="startDate" 
              pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(19|20)\d{2}$"
              placeholder="MM/DD/YYYY" 
              value={eventInput.startDate}
              onChange={handleChange}
              ></input>
            <input type="text" 
              name="endDate" 
              pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/(19|20)\d{2}$"
              placeholder="MM/DD/YYYY" 
              value={eventInput.endDate}
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