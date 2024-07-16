import React from 'react'
import Header from '../../Common/Home/header';
import Dashboard from './dashboard';
import History from './history';
import Profile from './PeopleProfile';
import Home from './home';
// import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
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
            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PeopleHome;