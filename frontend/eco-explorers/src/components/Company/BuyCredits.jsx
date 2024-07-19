import React, { useState } from 'react';
import './BuySellCredits.css';

const BuyCredits = () => {
    let [companyDetails, setCompanyDetails] = useState(JSON.parse(localStorage.getItem("companyDetails")));
    const [creditsToBuy, setCreditsToBuy] = useState('');
    const [expectedPrice, setExpectedPrice] = useState(1);

    const handleCreditsToBuyChange = (e) => {
      setCreditsToBuy(e.target.value);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log(`Credits to Buy: ${creditsToBuy}, Expected Price: ${expectedPrice}`);
      // Reset form fields
      setCreditsToBuy('');
      setExpectedPrice(1);
    };

    return (
      <div className='buy-credits'>
        <h3 className="buy-credits-title">Buy Credits</h3>
        <form onSubmit={handleFormSubmit} className="buy-form">
          <div className="form-group">
            <label>No of credits to Buy:</label>
            <input
              type="number"
              value={creditsToBuy}
              onChange={handleCreditsToBuyChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <p>Expected Price per Credit: </p>
            <p>Expected Price: {creditsToBuy * expectedPrice}</p>
          </div>
          <button type="submit" className="submit-button">Confirm</button>
        </form>
      </div>
    )
}

export default BuyCredits;