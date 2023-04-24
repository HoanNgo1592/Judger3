import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    navigate("/displayrubric");
  };
  return (
    <div className="event">
      <h1>
        <h2>Welcome Judgers</h2>
        <h2></h2>
        <p>You have successfully logged in.</p>
      </h1>
      <form>
        <p> If you are a judge, please enter your email and access code: </p>
        <input
          type="text"
          placeholder='example@example.com'
        />
        <input
          type="text"
          placeholder='Access code'
        />
        <button onClick={handleSubmit}> Join</button>
      </form>
    </div>
  );
};

export default Home;