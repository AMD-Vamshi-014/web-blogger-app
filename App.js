import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './watch/Navbar';
import Home from './watch/Home';
import Login from './watch/Login';
import SignUp from './watch/SignUp';
import Write from './watch/Write';
import ForgetPassword from './watch/ForgetPassword';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}/>
        <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/write" element={<Write />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

