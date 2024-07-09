// components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';

function SignupPeople() {
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
    setFormData(prevState => ({
      ...prevState,
      [name.includes('personalInfo') ? 'personalInfo' : '']: {
        ...prevState.personalInfo,
        [name.split('.')[1]]: value,
      },
      [name]: !name.includes('personalInfo') ? value : prevState[name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:5000/api/people/post/register', formData);

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
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>PAN Card:</label>
          <input type="text" name="personalInfo.panCard" value={formData.personalInfo.panCard} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="personalInfo.phone" value={formData.personalInfo.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="personalInfo.address" value={formData.personalInfo.address} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupPeople;
