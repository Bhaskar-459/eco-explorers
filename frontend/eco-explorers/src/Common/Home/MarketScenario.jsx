import React, { useEffect } from 'react';
import { useContext} from 'react';
import { ValueContext } from '../../Value';


const MarketScenario = () => {
  const value = useContext(ValueContext);
  return (
    <div className="market-scenario">
      <h2>Current Scenario of Market:{value}</h2>
    </div>
  );
};

export default MarketScenario;
