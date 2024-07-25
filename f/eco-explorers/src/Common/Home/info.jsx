import React from 'react'
import { Link } from 'react-router-dom';
import './styles/info.css';
import insta from '../../assets/insta.png';
import x from '../../assets/x.png';
const Info = () => {
  return (
    <div className="rowcontain">
        <div className="logo">
          <img src={x} alt="x" />
            <img src={insta} alt="inst" />
        </div>
        <div className="contact">
          <h2>Get Connected</h2>
          <ul>
            <li><Link to="contact">Contact us</Link></li>
          </ul>
          
        </div>
        <div className="links">
          <h2>Important Links</h2>
          <ul>
            <li><Link to="about">About us</Link></li>
            <li><Link to="benefits">Benefits</Link></li>
            <li><Link to="faq">Faq</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Info;