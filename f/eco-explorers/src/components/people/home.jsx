import React from "react";
import MarketScenario from '../../Common/Home/MarketScenario';
import BuyCredits from "./buycredits";
import Portfolio from "./portfolio";
const Home = () => {
  return (
    <div>
    <MarketScenario className="market-scenario" />
    <Portfolio  />
    </div>
  );
};

export default Home;