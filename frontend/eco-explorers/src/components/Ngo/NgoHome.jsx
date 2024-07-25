import React from 'react';
import Dashboard from './Dashboard';
import './styles/NgoHome.css';
import Header from '../../Common/Home/header';
import { Routes, Route } from 'react-router-dom';
import NgoProfile from './NgoProfile';
import VerifyNgoCredits from './NgoVerify';
import Home from './home';
import Ngohistory from './Ngohistory';
function NgoHome() {
  return (
    <div className="ngomain">
      <Header />
      <div className="ngocontent">
        <Dashboard />
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
  );
}

export default NgoHome;
