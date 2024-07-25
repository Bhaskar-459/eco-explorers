import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PeopleDashboard.css'; // Import the new CSS file

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="dashboardUser">
      <nav className="sidebarUser">
        <ul>
          <li>
            <Link to="" className={location.pathname === '/people' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/people/profile" className={location.pathname === '/profile' ? 'active' : ''}>
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/people/history" className={location.pathname === '/history' ? 'active' : ''}>
              History
            </Link>
          </li>
          <li>
            <Link to="/people/buy" className={location.pathname === '/buy' ? 'active' : ''}>
              Buy
            </Link>
          </li>
          <li>
            <Link to="/people/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
