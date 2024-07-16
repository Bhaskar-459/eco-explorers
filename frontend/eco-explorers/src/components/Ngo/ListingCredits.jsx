import React, { useState } from 'react';
import MarketScenario from '../../Common/Home/MarketScenario';

const ListingCredits = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');
  const [creditsToSell, setCreditsToSell] = useState('');
  const [price, setPrice] = useState('');
  let ngoDetails=JSON.parse(localStorage.getItem("ngoDetails"));
  let pass = ngoDetails.personalInfo.password;

  const handleSellClick = () => {
    setShowPopup(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Implement password authentication logic here
    // For demo purposes, let's assume the password is 'password'
    if (password === pass) {
      setIsAuthenticated(true);
    } else {
      alert('Authentication failed!');
    }
    setShowPopup(false);
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
    console.log(`Credits to Sell: ${creditsToSell}, Expected Price: ${expectedPrice}`);
    // Reset form fields
    setCreditsToSell('');
    setExpectedPrice('');
  };

  return (
    <div className="home">
      <MarketScenario className="market-scenario" />
    <div className="listing-credits">
      <h2>Listing Credits</h2>
      <button onClick={handleSellClick}>Sell</button>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Authenticate</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {isAuthenticated && (
        <form onSubmit={handleFormSubmit} className="sell-form">
          <div>
            <p>Listing Credits to Sell: </p>
            <p>Price per Credit: </p>
            <label>No of credits to sell:</label>
            <input
              type="number"
              value={creditsToSell}
              onChange={handleCreditsToSellChange}
              required
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <p>Excpected Amount {creditsToSell * price}</p>
          <button type="submit">Confirm</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ListingCredits;
