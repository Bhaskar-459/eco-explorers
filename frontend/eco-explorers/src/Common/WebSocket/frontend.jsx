import React, { useEffect, useState, useRef } from 'react'
// import './App.css'
import { io } from 'socket.io-client'

const Frontend = () => {
  const [value, setValue] = useState('hi');
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const socket = useRef(null);

  useEffect(() => {
    socket.current = io('http://localhost:4001');

    socket.current.on('connect', () => {
      console.log('connected ', socket.current.id)
    });

    socket.current.on('received_msg', (msg) => {
      console.log(`received msg is ${msg}`);
      setMessage(msg);
      setData(prevData => [...prevData, msg]);
    });

    return () => {
      socket.current.disconnect();
    }
  }, []);

  const handleClick = () => {
    socket.current.emit('message', value);
    setData(prevData => [...prevData, value]);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div style={{ margin: "auto" }}>
      <div className="msg-box" style={{ width: "100vw", height: "10rem" }}>
        {data.map((item, index) => <h1 key={index}>{item}</h1>)}
      </div>
      <input onChange={handleChange} type="text" id="msg" value={value} />
      <button onClick={handleClick}>Send</button>
    </div>
  )
}

export default Frontend
