import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import BuyCredits from './BuyCredits';
import SellCredits from './SellCredits';
const Home = () => {
  return (
    <div>
        <MarketScenario className="market-scenario" />
          <div className="company-credits" >
            <BuyCredits />  
            <SellCredits />  
          </div>
    </div>
  )
}

export default Home;