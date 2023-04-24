import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

const EventID =() =>{
  const [eventInput, setEventTime] = useState({
  startTime: '',
  startDate: '',
  endTime: '',
  endDate: ''
});

const [emailInput, addEventJudge] = useState({
  judgeEmail: '',
});

  const navigate = useNavigate()
  //Set the array of data to event
  const handleChange = (e) => {

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
          <h3>(NAME OF EVENT)</h3>
          <h3>Start Time:</h3>
          <h3>End Time:</h3>
          <h3>Start Date:</h3>
          <h3>End Date:</h3>
            <button onClick={handleSubmit}> Save </button>
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
            </form>
            <h2>Judgers:</h2>
            <form>
              <h3>Judger's Email:</h3>
            <input type="email"
              name="email"
              placeholder="example@example.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={emailInput.email}
              onChange={handleChange}
            ></input>
              <button> Save </button>
              <h3> Access Code:</h3>
              <button> (123456) </button>
              <h3> Judger's list: </h3>
              <button> Delete </button>
            </form>
            <h2>Results:</h2>
            <form>
              <h3>Final calculation:</h3>
              <button> Get Result! </button>
            </form>
        </div>
    </div>
    )
    };
    export default EventID;