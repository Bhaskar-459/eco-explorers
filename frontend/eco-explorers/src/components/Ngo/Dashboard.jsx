import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Dashboard.css'; // Import the new CSS file

const Dashboard = ({ children }) => {
  const location = useLocation();

  return (
    <div className="dashboardNgo">
      <nav className="sidebarNgo">
        <ul>
          <li>
            <Link to="/ngo" className={location.pathname === '/ngo' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ngo/my-profile" className={location.pathname === '/ngo/my-profile' ? 'active' : ''}>
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/ngo/history" className={location.pathname === '/ngo/history' ? 'active' : ''}>
              History
            </Link>
          </li>
          <li>
            <Link to="/ngo/verify-ngo-credits" className={location.pathname === '/ngo/verify-ngo-credits' ? 'active' : ''}>
              Verify Credits
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className="content">
        {children}
      </div> */}
    </div>
  );
};

export default Dashboard;
