import React from 'react'
import { useState } from 'react';
import MarketScenario from '../../Common/Home/MarketScenario';
import './styles/BuySellCredits.css'

const BuyCredits = () => {
  let [peopleDetails, setpeopleDetails] = useState(JSON.parse(localStorage.getItem("peopleDetails")));

  const [creditsToBuy, setCreditsToBuy] = useState('');
  const [expectedPrice, setExpectedPrice] = useState(1);
  const [creditsToSell, setCreditsToSell] = useState('');
  const [price, setPrice] = useState('');
  const handleCreditsToBuyChange = (e) => {
    setCreditsToBuy(e.target.value);
  };


  const handleFormSubmitBuy = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(`Credits to Buy: ${creditsToBuy}, Expected Price: ${expectedPrice}`);
    // Reset form fields
    setCreditsToBuy('');
    setExpectedPrice('');
  };
  const handleCreditsToSellChange = (e) => {
    setCreditsToSell(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleFormSubmitSell = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(`Credits to Sell: ${creditsToSell}, Expected Price: ${price}`);
    // Reset form fields
    setCreditsToSell('');
    setPrice('');
  };
  return (
    <div>
      <MarketScenario />
      <div className='buy-credits'>
        <h3 className="buy-credits-title">Buy Credits</h3>
        <form onSubmit={handleFormSubmitBuy} className="buy-form">
          <div><label>Current Credits Available: </label><span>{peopleDetails.creditsAvailable}</span></div>
          <div><p>Expected Price per Credit: </p></div>
          <div>
            <label>No of credits to Buy:</label>
            <input
              type="number"
              value={creditsToBuy}
              onChange={handleCreditsToBuyChange}
              required
            />
          </div>
          <div><p>Excpected Price: {creditsToBuy * expectedPrice}</p>
          </div>
          <button type="submit" class="submit-button">Confirm</button>
        </form>
      </div>
      <div className='sell-credits'>
        <h3 className="sell-credits-title">Sell Credits</h3>
        <form onSubmit={handleFormSubmitSell} className="sell-form">
          <div className="form-group">
            <label>No of credits to sell:</label>
            <input
              type="number"
              value={creditsToSell}
              onChange={handleCreditsToSellChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <p>Expected Amount: {creditsToSell * price}</p>
          </div>
          <button type="submit" className="submit-button">Confirm</button>
        </form>
      </div>
    </div>

  )
}

export default BuyCredits;