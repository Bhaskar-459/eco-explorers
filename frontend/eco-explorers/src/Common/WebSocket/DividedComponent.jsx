import React, { useEffect, useState } from 'react';
import { socket } from './Socket';

const DividedComponent = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      console.log('connected ', socket.id);
    });

    socket.on('received_msg', (msg) => {
      console.log(`received msg is ${msg}`);
      setMessage(msg);
      setData(prevData => [...prevData, msg]);
    });

    return () => {
      socket.off('connect');
      socket.off('received_msg');
      socket.disconnect();
    };
  }, []);

  const handleClick = () => {
    document.getElementById('msg').value = '';
    socket.emit('message', value);
    setData(prevData => [...prevData, value]);
  };

  return (
    <div style={{ margin: 'auto' }}>
      <div className="msg-box" style={{ width: '100vw', height: '10rem' }}>
        {data.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        id="msg"
        value={value}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default DividedComponent;
