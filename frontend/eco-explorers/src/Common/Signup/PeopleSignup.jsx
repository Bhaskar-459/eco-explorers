// components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupPeople() {
  const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    Name: '',
    password: '',
    personalInfo: {
      panCard: '',
      phone: '',
      address: '',
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('personalInfo')) {
      setFormData(prevState => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name.split('.')[1]]: value,
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  localStorage.setItem("peopleDetails", JSON.stringify(formData));
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(`${base_url}/api/people/post/register`, formData);
      console.log(response);
      if (response.status === 200) {
        alert('Registration successful');
        localStorage.setItem("peopleDetails", JSON.stringify(response.data));
        window.location.href = '/people';
      }
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  const isFormValid = Object.values(formData).every(value => 
    typeof value === 'object' 
      ? Object.values(value).every(v => v !== '') 
      : value !== ''
  );

  return (
    <div className="SignupContainer">
      <div className="signup-box">
        <h3>Welcome to..</h3>
        <h1>Green Trade Exchange</h1>
        <h2><span className='R_Register'>U</span>ser <span className='R_Register'>R</span>egistration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID:</label>
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
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              className="input-field"
              value={formData.Name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label>PAN Card:</label>
            <input
              type="text"
              name="personalInfo.panCard"
              className="input-field"
              value={formData.personalInfo.panCard}
              onChange={handleChange}
              required
              placeholder="Enter your PAN card"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="personalInfo.phone"
              className="input-field"
              value={formData.personalInfo.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="personalInfo.address"
              className="input-field"
              value={formData.personalInfo.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
            />
          </div>
          <button 
            type="submit" 
            disabled={!isFormValid}
            style={{
              backgroundColor: isFormValid ? '#13d413' : '#8ae08a',
              cursor: isFormValid ? 'pointer' : 'not-allowed'
            }}
          >
            Register
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/loginPeople">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPeople;
