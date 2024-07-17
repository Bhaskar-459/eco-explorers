import React from 'react';
import Nav from "./nav";
import Header from './header';
import './home.css';
import Welcome from './welcome';
import Info from './info';
import { Route,Routes } from 'react-router-dom';
import About from './about';
import Benefits from './benefits';  
import Faq from './faq';
import Contact from './contact';
const HomePage = () => {
  
  return (
    <div className="home-page">
      <div className="head">
      <Header />
      <Nav />
      </div>
      <div className="middiv">
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='about' element={<About/>}/>
        <Route path='benefits' element={<Benefits/>}/>
        <Route path='faq' element={<Faq/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      </div>
      
      <Info/>
    </div>
  );
};

export default HomePage;
