import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import BuyCredits from './BuyCredits';
import SellCredits from './SellCredits';
import './styles/CompanyHome.css';


const Home = () => {
  return (
    <div className="home">
      <MarketScenario className="market-scenario" />
      <div className="company-credits">
        <BuyCredits />  
        <SellCredits />  
      </div>
    </div>
  )
}

export default Home;