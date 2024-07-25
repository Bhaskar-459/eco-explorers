import React, { useState, useEffect } from 'react';
import './styles/BuySellCredits.css';
import axios from 'axios';

const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const BuyCredits = () => {
    const [creditsToBuy, setCreditsToBuy] = useState('');
    const [creditPrice, setCreditPrice] = useState('');
    const [expectedPrice, setExpectedPrice] = useState(0);

    useEffect(() => {
      setExpectedPrice(creditsToBuy * creditPrice);
    }, [creditsToBuy, creditPrice]);

    const companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
    const mailId = companyDetails.companyMail;

    const handleCreditsToBuyChange = (e) => {
      setCreditsToBuy(e.target.value);
    };

    const handleCreditPriceChange = (e) => {
      setCreditPrice(e.target.value);
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${base_url}/api/company/post/buyCredits`, {
          emailId: mailId,
          noOfCredits: creditsToBuy,
          creditPrice: creditPrice,
        });

        if (response.status === 400) {
          alert(response.data.message || 'An error occurred.');
        } else {
          alert('Credits bought successfully!');
          window.location.href = '/company';
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
          
        } else {
          console.error('Error buying credits: ', error);
          alert('An error occurred. Please try again later.');
        }
      }

      // Reset form fields
      setCreditsToBuy('');
      setCreditPrice('');
      setExpectedPrice(0);
    };

    return (
      <div className='buy-credits'>
        <h3 className="buy-credits-title">Buy Credits</h3>
        <form onSubmit={handleFormSubmit} className="buy-form">
          <div className="form-group">
            <label htmlFor="credits-to-buy">No of credits to Buy:</label>
            <input
              id="credits-to-buy"
              type="number"
              value={creditsToBuy}
              onChange={handleCreditsToBuyChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="credit-price">Credit price:</label>
            <input
              id="credit-price"
              type="number"
              value={creditPrice}
              onChange={handleCreditPriceChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <p>Expected Price: {expectedPrice}</p>
          </div>
          <button type="submit" className="submit-button">Confirm</button>
        </form>
      </div>
    );
}

export default BuyCredits;
