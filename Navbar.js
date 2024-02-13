// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <img id="icon" src={require("../image/web-blogger-app.png")} alt="Icon" />
      <ul>
      
        <li><a href="/Home">Home</a></li>
        <li><a href="/Write">Write</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="/Login" className="login-btn">Login</a></li>
        <li><a href="/SignUp" className="signup-btn">Sign Up</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
