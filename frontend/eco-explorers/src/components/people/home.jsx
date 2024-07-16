import React from "react";
import MarketScenario from '../../Common/Home/MarketScenario';
import BuyCredits from "./buycredits";
const Home = () => {
  return (
    <div>
    <MarketScenario className="market-scenario" />
    <BuyCredits />
    </div>
  );
};

export default Home;