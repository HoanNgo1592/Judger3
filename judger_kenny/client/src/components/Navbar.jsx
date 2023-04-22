import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
        <div><h1>The Judgers</h1></div>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/ "> 
            Home
          </Link>
          <Link className="link" to="/about">
          About
          </Link>
          <Link className="link" to="/contact">
           Contact
          </Link>
         
          <span>{currentUser?.moderitor_user_name}</span>
          {currentUser ? (
         <> 
         <Link className="link" to="/write">Create Rubric</Link>
         <span onClick={logout}>Logout</span></>   
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>

          )
          
          
          
          
          }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
