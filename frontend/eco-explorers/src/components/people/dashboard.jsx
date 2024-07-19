import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="profile">My Profile</Link></li>
          <li><Link to="history">History</Link></li>
          <li><Link to="buy">Buy</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
