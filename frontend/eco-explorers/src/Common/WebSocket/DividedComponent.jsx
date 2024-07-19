import React, { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'

const App = () => {

  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  const socket = io('http://localhost:4001')

  useEffect(() => {
    socket.on('connect', () =>{
      console.log('connected ', socket.id)
    })

    // socket.on('welcome', (msg) => console.log(msg))

    socket.on('received_msg', (msg) => {
      console.log(`received msg is ${msg}`)
      setMessage(msg)
      setData(prevData => [...prevData, message])
     
    })

    return () => {
      socket.disconnect()
    }
  },[])

  const handleClick = () =>{
    
    document.getElementById('msg').value = ''
    socket.emit('message', value)
    setData(prevData => [...prevData, message])
    
  }

  return (
    <div style={{margin:"auto"}}>
      <div className="msg-box" style={{width:"100vw", height:"10rem"}}>{data.map((item, index) => <h1 key={index}>{item}</h1>)}</div>
      <input onChange={(e) => setValue(e.target.value)} type="text" id="msg" />
      <button onClick={() => handleClick()}>Send</button>
    </div>
  )
}

export default App