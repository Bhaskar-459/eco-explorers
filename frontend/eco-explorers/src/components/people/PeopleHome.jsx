import React from 'react'
import Header from '../../Common/Home/header';
import Dashboard from '../../Common/Home/dashboard';
import MarketScenario from '../../Common/Home/MarketScenario'; 
import Profile from './PeopleProfile';
// import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
const PeopleHome = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Dashboard/>
        <div className="content">
          <MarketScenario />
          <div className="second">
          <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="history" element={<History />} />
              {/* Add more routes as needed */}
          </Routes>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PeopleHome;