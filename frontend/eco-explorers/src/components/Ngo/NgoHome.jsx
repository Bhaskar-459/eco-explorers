import React from 'react';
import Dashboard from './Dashboard';
import MarketScenario from '../../Common/Home/MarketScenario';
import ListingCredits from './ListingCredits';
import './NgoHome.css';
import Header from '../../Common/Home/header';
import { Routes, Route } from 'react-router-dom';
import NgoProfile from './NgoProfile';
import VerifyNgoCredits from './NgoVerify';
function NgoHome() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          
          <div className="second">
            <Routes>
              <Route path="my-profile" element={<NgoProfile />} />
              <Route path="verify-ngo-credits" element={<VerifyNgoCredits />} />
              {/* Add more routes as needed */}
              <Route path="/" element={<ListingCredits />} />
              {/* <ListingCredits className="listing-credits" /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoHome;
