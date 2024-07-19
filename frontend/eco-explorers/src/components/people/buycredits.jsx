import React from 'react'
import { useState } from 'react';
import MarketScenario from '../../Common/Home/MarketScenario';

const BuyCredits = () => {
    let [peopleDetails,setpeopleDetails]=useState(JSON.parse(localStorage.getItem("peopleDetails")));

    const [creditsToBuy, setCreditsToBuy] = useState('');
    const [expectedPrice,setExpectedPrice]=useState(1);

    const handleCreditsToBuyChange = (e) => {
      setCreditsToBuy(e.target.value);
    };
  
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log(`Credits to Buy: ${creditsToBuy}, Expected Price: ${expectedPrice}`);
      // Reset form fields
      setCreditsToBuy('');
      setExpectedPrice('');
    };
  return (
    <div>
    <MarketScenario/>
    <div className='buy-credits'>
    <h3>Buy Credits</h3>
        <form onSubmit={handleFormSubmit} className="buy-form">
            <div><label>Current Credits Available: </label><span>{peopleDetails.creditsAvailable}</span></div>
            
            <p>Expected Price per Credit: </p>
            <div>
            <label>No of credits to Buy:</label>
            <input
              type="number"
              value={creditsToBuy}
              onChange={handleCreditsToBuyChange}
              required
            />
          </div>
          <p>Excpected Price: {creditsToBuy * expectedPrice}</p>
          <button type="submit">Confirm</button>
        </form>
    </div>
    </div>

  )
}

export default BuyCredits;