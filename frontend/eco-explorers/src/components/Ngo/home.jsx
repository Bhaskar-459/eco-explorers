import React from 'react'
import MarketScenario from '../../Common/Home/MarketScenario';
import ListingCredits from './ListingCredits';
const Home = () => {
  return (
    <div className="home">
      <MarketScenario className="market-scenario" />
      <ListingCredits/>
    </div>
  )
}

export default Home;