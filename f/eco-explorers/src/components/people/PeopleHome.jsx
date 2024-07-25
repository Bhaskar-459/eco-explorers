import React from 'react'
import Header from '../../Common/Home/header';
import Dashboard from './dashboard';
import History from './history';
import Profile from './PeopleProfile';
import Home from './home';
import NgoProjects from './NgoProjects';
// import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import BuyCredits from './buycredits';
const PeopleHome = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Dashboard />
        <div className="content">
          <div className="second">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="history" element={<History />} />
              <Route path="buy" element={<BuyCredits />} />
              <Route path="projects" element={<NgoProjects/>} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PeopleHome;