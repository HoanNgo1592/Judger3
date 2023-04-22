import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    moderator_user_name: '',
        moderator_email: '',
        moderator_password: ''
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs);
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) { 
      setError(err.response.data);
      console.log("here is the err => "+ err)
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="moderator_user_name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="moderator_email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="moderator_password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {/* {err && <p>{err}</p>} */}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
