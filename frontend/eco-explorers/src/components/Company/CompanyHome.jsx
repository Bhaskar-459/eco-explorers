import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import Nav from '../../Common/Home/nav';
import Dashboard from './Dashboard';


const CompanyHome = props => {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          <MarketScenario className="market-scenario" />      
        </div>
      </div>
    </div>
  )
}



export default CompanyHome