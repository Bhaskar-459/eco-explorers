// components/Registration.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupCompany() {
  const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const [formData, setFormData] = useState({
    id: '',
    displayName: '',
    companyPan: '',
    creditsAvailable: 0,
    companyMail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/api/company/post/register`, formData);
      
      if (response.status === 200) {
        alert("Registration successful");
        window.location.href = "/company";
        localStorage.setItem("companyDetails", JSON.stringify(response.data));
      }
    } catch (error) {
      console.error('Registration failed', error.response?.data || error.message);
      alert('Registration failed: ' + (error.response?.data.message || error.message));
    }
  };

  const isFormValid = Object.values(formData).every(field => field !== '');

  return (
    <div className="SignupContainer">
      <div className="signup-box">
        <h3>Welcome to..</h3>
        <h1>Green Trade Exchange</h1>
        <div className='company-register'>
          <h2><span className='R_Register'>C</span>ompany</h2>
        </div>
        <h2><span className='R_Register'>R</span>egistration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input
              type="text"
              name="id"
              className="input-field"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder="Enter your ID"
            />
          </div>
          <div>
            <label>Display Name</label>
            <input
              type="text"
              name="displayName"
              className="input-field"
              value={formData.displayName}
              onChange={handleChange}
              required
              placeholder="Enter display name"
            />
          </div>
          <div>
            <label>Company PAN</label>
            <input
              type="text"
              name="companyPan"
              className="input-field"
              value={formData.companyPan}
              onChange={handleChange}
              required
              placeholder="Enter company PAN"
            />
          </div>
          <div>
            <label>Credits Available</label>
            <input
              type="number"
              name="creditsAvailable"
              className="input-field"
              value={formData.creditsAvailable}
              onChange={handleChange}
              required
              placeholder="Enter credits available"
            />
          </div>
          <div>
            <label>Company Email</label>
            <input
              type="email"
              name="companyMail"
              className="input-field"
              value={formData.companyMail}
              onChange={handleChange}
              required
              placeholder="Enter company email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" disabled={!isFormValid}>Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/loginCompany">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupCompany;
