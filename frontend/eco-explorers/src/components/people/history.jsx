import React from 'react';
import './history.css'; 
import axios from 'axios';
const [transactions,setTransactions] = useState([]);

useEffect(() => {
      try {

          const response = axios.get(`${base_url}/api/`);
          setTransactions(response.data);
      } catch (error) {
          console.error("Error fetching initial green credit history: ", error);
      }
  })

const History = () => {
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

export default History;