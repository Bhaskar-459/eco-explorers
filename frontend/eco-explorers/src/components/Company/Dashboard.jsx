import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyHome.css';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="company-profile">My Profile</Link></li>
          {/* <li><Link to="company-history">History</Link></li> */}
          <li><Link to="company-verify-gcp">Verify Gcp</Link></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;