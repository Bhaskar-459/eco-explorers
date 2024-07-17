import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import Nav from '../../Common/Home/nav';
import Dashboard from './Dashboard';
import BuyCredits from './BuyCredits';
import SellCredits from './SellCredits';
import './CompanyHome.css';
import { Routes, Route } from 'react-router-dom';
import CompanyProfile from './CompanyProfile';
import VerifyGCP from './VerifyGCP';
import Home from './home';
import Header from '../../Common/Home/header';
import './CompanyHome.css';

const CompanyHome = props => {
  return (
    <div className="app1">
      <Header className="header"/>
      <div className="main-content">
        <Dashboard className="dashboard" />
        <div className="content">
          <div className="second-content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='company-profile' element={<CompanyProfile/>}/>
              <Route path='company-verify-gcp' element={<VerifyGCP/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyHome