// components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function SignupCompany() {
  const [formData, setFormData] = useState({
    id: '',
    displayName: '',
    companyPan: '',
    creditsAvailable: 0, // Assuming it's a number
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
      const response = await axios.post('http://localhost:5000/api/company/post/register', formData);
      
      // Handle successful registration, e.g., show success message, redirect, etc.
      console.log('Registration successful', response.data);
      // Example: redirect to a thank you page or login page
    } catch (error) {
      // Handle errors
      console.error('Registration failed', error.response?.data || error.message);
      // Example: show error message to the user
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Display Name</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Company PAN</label>
          <input
            type="text"
            name="companyPan"
            value={formData.companyPan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Credits Available</label>
          <input
            type="number"
            name="creditsAvailable"
            value={formData.creditsAvailable}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Company Email</label>
          <input
            type="email"
            name="companyMail"
            value={formData.companyMail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/loginCompany">Login</Link>
    </div>
  );
}

export default SignupCompany;
