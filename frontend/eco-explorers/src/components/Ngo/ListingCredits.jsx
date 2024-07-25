import React, { useState } from 'react';
import './styles/ListingCredits.css';  // Import the CSS file

const ListingCredits = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');
  const [creditsToSell, setCreditsToSell] = useState('');
  const [price, setPrice] = useState('');
  let ngoDetails = JSON.parse(localStorage.getItem("ngoDetails"));
  let pass = ngoDetails.personalInfo.password;

  const handleSellClick = () => {
    setShowPopup(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
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
    console.log(`Credits to Sell: ${creditsToSell}, Expected Price: ${price}`);
    setCreditsToSell('');
    setPrice('');
  };

  return (
    // <div className= 'page-container'>
      <div className="listing-credits">
        <h2>Listing Credits</h2>
        {!isAuthenticated && (
          <button onClick={handleSellClick} className="sell-button">Sell</button>
        )}
        {showPopup && (
          <>
            <div className="overlay"></div>
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
                    className="password-input"
                  />
                  <button type="submit" className="submit-button">Submit</button>
                </form>
              </div>
            </div>
          </>
        )}

        {isAuthenticated && (
          <form onSubmit={handleFormSubmit} className="sell-form">
            <div className="form-group">
              <label>No of credits to sell:</label>
              <input
                type="number"
                value={creditsToSell}
                onChange={handleCreditsToSellChange}
                required
                className="credits-input"
              />
            </div>
            <div className="form-group">
              <label>Price per Credit:</label>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                required
                className="price-input"
              />
            </div>
            <p>Expected Amount: {creditsToSell * price}</p>
            <button type="submit" className="confirm1-button" style={{ backgroundColor: '#4CAF50', color: 'white' }}>Confirm</button>
          </form>
        )}
      </div> 
    // </div>
  );
};

export default ListingCredits;
