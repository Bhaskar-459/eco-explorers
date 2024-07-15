import React from 'react'
import { useState } from 'react';

const SellCredits = () => {
    let [companyDetails,setCompanyDetails]=useState(JSON.parse(localStorage.getItem("companyDetails")));
    const [isRegisteredOnGCP,setIsRegisterdOnGCP ]= useState(companyDetails.isRegisteredOnGCP);
    // const [isRegisteredOnGCP,setIsRegisterdOnGCP ]= useState(true);
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
      console.log(`Credits to Sell: ${creditsToSell}, Expected Price: ${expectedPrice}`);
      // Reset form fields
      setCreditsToSell('');
      setExpectedPrice('');
    };
  return (
    <div className='sell-credits'>
    <h3>Sell Credits</h3>
    {!isRegisteredOnGCP && (
        <button onClick={handleSellClick}>VerifyGCP</button>
      )}
      {isRegisteredOnGCP && (
        <form onSubmit={handleFormSubmit} className="sell-form">
          
          <div><span>Current Credits Available: </span><span>{companyDetails.creditsAvailable}</span></div>
            <p>Price per Credit: </p>
            <div>
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

  )
}

export default SellCredits;