import React, { useState, useEffect } from 'react';
import './history.css'; 
import axios from 'axios';

const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const History = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let peopleDetails = JSON.parse(localStorage.getItem('peopleDetails'));
        let emailId = peopleDetails.email;
        const response = await axios.get(`${base_url}/api/people/get/getTransactionHistory/${emailId}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching initial green credit history: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <table className="history-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Credits</th>
              <th>Credit Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                <td>{new Date(transaction.transactionDate).toLocaleTimeString()}</td>
                <td
                  style={{
                    color: transaction.type === 'buy' ? 'green' : 'red',
                  }}
                >
                  {transaction.type === 'buy' ? '⬆️ ' : '⬇️ '}
                  {transaction.credits}
                </td>
                <td>{transaction.transactionCreditValue}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default History;
