// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

function LoginPeople() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/api/people/post/login`, {
        email,
        password,
      });
      console.log(response.status);
      if (response.status === 200) {
        //Handle successful login, e.g., store user data, redirect, etc.
        alert('Login successful');
        localStorage.setItem("peopleDetails", JSON.stringify(response.data));
        window.location.href = '/people';
        
      } else if (response.status === 404) {
        // Handle failed login
        alert('Invalid credentials');
      }
    } catch (error) {
      // Handle errors
      alert('Login failed: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className=" LoginContainer">
      <div className="login-box">
        <h3>Welcome to..</h3>
        <h1>Green Trade Exchange</h1>
        <h2><span className='L_login'>U</span>ser<span className='L_login'> L</span>ogin</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email address'
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <Link to="/forgotPassword" className="forgot-password">Forgot Password</Link>
          </div>
          <button type="submit" disabled={loading || !email || !password}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="register-link">
          No Account? <Link to="/registerPeople">Register</Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPeople;
