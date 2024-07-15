import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <nav className="sidebar">
        <ul>
          <li><Link to="/ngo">Home</Link></li>
          <li><Link to="/my-profile">My Profile</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/verify-ngo-credits">Verify Credits</Link></li>
        </ul>
      </nav>
      {/* <div className="content">
        {children}
      </div> */}
    </div>
  );
};

export default Dashboard;
