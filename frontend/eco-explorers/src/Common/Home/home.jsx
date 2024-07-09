import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [userType, setUserType] = useState('');

  const handleGreenCreditsClick = () => {
    setShowOptions(true);
  };

  const handleUserTypeClick = (type) => {
    setUserType(type);
    setShowOptions(false);
    // Navigate based on user type
    if (type === 'ngo') {
      window.location.href = '/ngo';
    } else if (type === 'company') {
      window.location.href = '/company';
    } else if (type === 'commonPeople') {
      window.location.href = '/common-people';
    }
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">Green Trade Exchange</div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><Link to="/login">Login/Register</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="background">
          <h1>Welcome to Green Trade Exchange</h1>
          <p>Your centralized platform for trading green credits.</p>
          <button onClick={handleGreenCreditsClick}>Green Credits</button>
          <button>Eco-Friendly Products</button>
          {showOptions && (
            <div className="options">
              <button onClick={() => handleUserTypeClick('ngo')}>NGO</button>
              <button onClick={() => handleUserTypeClick('company')}>Company</button>
              <button onClick={() => handleUserTypeClick('commonPeople')}>Common People</button>
            </div>
          )}
        </div>
      </main>
      <section id="about">
        <h2>About Us</h2>
        <p>Information about the Green Trade Exchange.</p>
      </section>
      <section id="benefits">
        <h2>Benefits</h2>
        <p>Information about the benefits of using the Green Trade Exchange.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Contact information for the Green Trade Exchange.</p>
      </section>
      <section id="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>Privacy policy details of the Green Trade Exchange.</p>
      </section>
    </div>
  );
};

export default HomePage;
