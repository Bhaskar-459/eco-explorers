// components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';

function SignupCompany() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:5000/api/ngo/post/register', formData);
      
      console.log("sent successfully");
      // Handle successful registration
    } catch (error) {
      // Handle errors
      alert('Registration failed: ' + error.response.data.message);
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
          <label>Email</label>
          <input
            type="email"
            name="email"
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
            value={formData.ngoPan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>GCP Platform ID</label>
          <input
            type="text"
            name="gcpPlatformId"
            value={formData.gcpPlatformId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
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
            value={formData.personalInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupCompany;
