import React from 'react'
import './Ngohistory.css';
const transactions = [
  {
    transactionid: 1,
    date: '2021-01-01',
    time: '12:00',
    credits: 50,
    creditval: 100,
    type: 'bought',
  },
  {
    transactionid: 2,
    date: '2021-01-02',
    time: '12:00',
    credits: 25,
    creditval: 100,
    type: 'sold',
  },
];
const Ngohistory = () => {
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
            <tr key={transaction.transactionid}>
              <td>{transaction.transactionid}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              {/* <td>{transaction.credits}</td> */}
              <td
                style={{
                  color: transaction.type === 'bought' ? 'green' : 'red',
                }}
              >
                {transaction.type === 'bought' ? '⬆️ ' : '⬇️ '}
                {transaction.credits}
              </td>
              <td>{transaction.creditval}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Ngohistory;