import React, { useState } from 'react';
import './styles/BuySellCredits.css';

const SellCredits = () => {
    let [companyDetails, setCompanyDetails] = useState(JSON.parse(localStorage.getItem("companyDetails")));
    const [isRegisteredOnGCP, setIsRegisterdOnGCP] = useState(companyDetails.isRegisteredOnGCP);
    const [creditsToSell, setCreditsToSell] = useState('');
    const [price, setPrice] = useState('');

    const handleSellClick = () => {
      window.location.href = '/company-verify-gcp';
    };

    const handleCreditsToSellChange = (e) => {
      setCreditsToSell(e.target.value);
    };

    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Implement form submission logic here
      console.log(`Credits to Sell: ${creditsToSell}, Expected Price: ${price}`);
      // Reset form fields
      setCreditsToSell('');
      setPrice('');
    };

    return (
      <div className='sell-credits'>
        <h3 className="sell-credits-title">Sell Credits</h3>
        {!isRegisteredOnGCP && (
          <button onClick={handleSellClick} className="verify-button">Verify GCP</button>
        )}
        {isRegisteredOnGCP && (
          <form onSubmit={handleFormSubmit} className="sell-form">
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
        )}
      </div>
    )
}

export default SellCredits;