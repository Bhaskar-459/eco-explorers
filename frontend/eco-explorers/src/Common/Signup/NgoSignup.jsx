// components/SignupNgo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupNgo() {
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    ngoPan: '',
    gcpPlatformId: '',
    personalInfo: {
      name: '',
      phone: '',
      address: '',
      password: '',
    },
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.personalInfo) {
      setFormData({
        ...formData,
        personalInfo: { ...formData.personalInfo, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const { id, email, ngoPan, personalInfo } = formData;
    const { name, phone, address, password } = personalInfo;
    setIsFormValid(
      id.trim() !== '' &&
      email.trim() !== '' &&
      ngoPan.trim() !== '' &&
      name.trim() !== '' &&
      phone.trim() !== '' &&
      address.trim() !== '' &&
      password.trim() !== ''
    );
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi");
    const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
    console.log(base_url);
    try {
      console.log(formData);
      const response = await axios.post(`${base_url}/api/ngo/post/register`, formData);
      if(response.status === 200) {
        console.log("sent successfully");
        alert('Registration successful');
        localStorage.setItem("ngoDetails", JSON.stringify(response.data));
        window.location.href = '/ngo';
      }
      // Handle successful registration
    } catch (error) {
      // Handle errors
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="SignupContainer">
      <div className="signup-box">
        <h3>Welcome to..</h3>
        <h1>Green Trade Exchange</h1>
        <h2><span className='R_Register'>N</span>GO <span className='R_Register'>R</span>egistration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="Enter your NGO ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>NGO PAN</label>
            <input
              type="text"
              name="ngoPan"
              placeholder="Enter your PAN number"
              value={formData.ngoPan}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.personalInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.personalInfo.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.personalInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.personalInfo.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={!isFormValid} style={{ opacity: isFormValid ? 1 : 0.5 }}>
            Register
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/loginNgo">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupNgo;
