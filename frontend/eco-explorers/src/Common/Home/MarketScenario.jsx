import React, { useContext } from 'react';
import PriceChart from './PriceChart';
import { ValueContext } from '../../Value';
import './styles/MarketScenario.css';

const MarketScenario = () => {
  const value = useContext(ValueContext);
  return (
    <div className="market-scenario">
      <h2>Current Scenario of Market: {value.value}</h2>
      <PriceChart />
    </div>
  );
};

export default MarketScenario;

