// ForgotPasswordForm.js

import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgotPasswordForm = () => {
  
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Password reset email sent successfully!');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Something went wrong.');
      }
      
    }
     catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="home">
      <nav className="navbar">
      <img className="icon" src={require("../image/web-blogger-app.png")} alt="icon"/>

      </nav>
    <div className="forgot-password-container">
      
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  </div>
  );
};

export default ForgotPasswordForm;
