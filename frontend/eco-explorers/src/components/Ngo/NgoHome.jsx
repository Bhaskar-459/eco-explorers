import React from 'react';
import Dashboard from './Dashboard';
import MarketScenario from '../../Common/Home/MarketScenario';
import ListingCredits from './ListingCredits';
import Nav from '../../Common/Home/nav';
import './NgoHome.css';
import Header from '../../Common/Home/header';
function NgoHome() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          <MarketScenario className="market-scenario" />
          <ListingCredits className="listing-credits" />
        </div>
      </div>
    </div>
  );
}

export default NgoHome;
