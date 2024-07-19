import React from 'react'

const Portfolio = () => {
  let peopleDetails=JSON.parse(localStorage.getItem("peopleDetails"));
  return (
    <div>
       credits : {peopleDetails.portfolio.currentCredits}
       <br />
       walletAmount : {peopleDetails.portfolio.walletAmount}
       <button>Add to wallet</button>
    </div>
  )
}

export default Portfolio;