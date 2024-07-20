import React from 'react';
import Dashboard from './Dashboard';
import MarketScenario from '../../Common/Home/MarketScenario';
import ListingCredits from './ListingCredits';
import './NgoHome.css';
import Header from '../../Common/Home/header';
import { Routes, Route } from 'react-router-dom';
import NgoProfile from './NgoProfile';
import VerifyNgoCredits from './NgoVerify';
import Home from './home';
import Ngohistory from './Ngohistory';
function NgoHome() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          
          <div className="second">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="my-profile" element={<NgoProfile />} />
              <Route path="verify-ngo-credits" element={<VerifyNgoCredits />} />
              <Route path="history" element={<Ngohistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoHome;
