import React, { useState,useEffect } from 'react';
import './history.css'; // Ensure you create and import a CSS file for styling
import axios from 'axios';
const [transactions,setTransactions] = useState([]);

useEffect(() => {
      try {
          const response = axios.get(`${base_url}/api/ngo/get/getTransactionHistory/${emailId}`);
          setTransactions(response.data);
      } catch (error) {
          console.error("Error fetching initial green credit history: ", error);
      }
  })
const CompanyHistory = () => {
  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Credits</th>
            <th>Credit Value</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.date}</td>
              <td
                style={{
                  color: transaction.type === 'buy' ? 'green' : 'red',
                }}
              >
                {transaction.type === 'buy' ? '⬆️ ' : '⬇️ '}
                {transaction.credits}
              </td>
              <td>{transaction.creditprice}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyHistory;