import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === 'NGO') {
      window.location.href = '/loginNgo';
    } else if (value === 'USER') {
      window.location.href = '/loginPeople';
    } else if (value === 'ORGANISATION') {
      window.location.href = '/loginCompany';
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
            <li><select name="org" id="org-select" onChange={handleSelectChange}>
              <option value="select">Select an option</option>
              <option value="NGO">NGO</option>
              <option value="USER">USER</option>
              <option value="ORGANISATION">ORGANISATION</option>
            </select>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="background">
          <h1>Welcome to Green Trade Exchange</h1>
          <p>Your centralized platform for trading green credits.</p>
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
