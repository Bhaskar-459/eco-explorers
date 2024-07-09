import React from 'react';

const NgoPage = () => {
  return (
    <div className="ngo-page">
      <header className="header">
        <h1>NGO Dashboard</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>Home</li>
            <li>My Profile</li>
            <li>History</li>
            <li>Projects</li>
          </ul>
        </aside>
        <main className="main-content">
          <section className="market-overview">
            <h2>Current Scenario of Market</h2>
            {/* Add content to represent the current market scenario */}
          </section>
          <section className="listing-credits">
            <h3>Listing Credits</h3>
            <p>Credits to sell: [Amount]</p>
            <p>Credits sold: [Amount]</p>
            <p>Credits price: [Price]</p>
            <button className="sell-button">Sell</button>
          </section>
          <section className="graphical-info">
            <h3>Graphical Representation of Info</h3>
            {/* Add graphical representation here */}
          </section>
        </main>
      </div>
      <div className="sell-section">
        <h3>Sell Credits</h3>
        <p>Number of credits to sell: [Input]</p>
        <p>Remaining credits after selling: [Calculation]</p>
        <p>Expected Price: [Price]</p>
        <button className="sell-confirm-button">Sell</button>
      </div>
      <section className="transaction-history">
        <h2>Transaction History</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search by date" />
          <button>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Remaining Credits</th>
              <th>Wallet</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            <tr>
              <td>12345</td>
              <td>2024-07-08</td>
              <td>100</td>
              <td>500</td>
              <td>NGO Wallet</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default NgoPage;
