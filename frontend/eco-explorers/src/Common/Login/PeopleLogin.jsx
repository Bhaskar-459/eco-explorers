// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginPeople() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/people/post/login', {
        email,
        password,
      });
      console.log(response.status);
      if (response.status === 200) {
        //Handle successful login, e.g., store user data, redirect, etc.
        alert('Login successful');
      } else if(response.status === 404){
        // Handle failed login
        alert('Invalid credentials'); 
      }
    } catch (error) {
      // Handle errors
      alert('Login failed: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className='LoginContainer'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/registerPeople">Register</Link>
    </div>

  );
}

export default LoginPeople;
