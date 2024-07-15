import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import Nav from '../../Common/Home/nav';
import Dashboard from './Dashboard';
import BuyCredits from './BuyCredits';
import SellCredits from './SellCredits';
import './CompanyHome.css';


const CompanyHome = props => {
  return (
    <div className="App" >
      <Nav />
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          <MarketScenario className="market-scenario" />
          <div className="company-credits" >
            <BuyCredits />  
            <SellCredits />  
          </div>
        </div>
      </div>
    </div>
  )
}



export default CompanyHome