import React from 'react';
import Nav from "./nav";
import Header from './header';
const HomePage = () => {
  
  return (
    <div className="home-page">
      <div className="head">
      <Header />
      <Nav />
      </div>
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
