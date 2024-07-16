import React from 'react'
import { Link } from 'react-router-dom';
const Info = () => {
  return (
    <div className="rowcontain">
        <div className="logo">
            <img src="" alt="x" />
            <img src="" alt="insta" />
        </div>
        <div className="contact">
          <Link to="contact">Contact us</Link>1
        </div>
        <div className="links">
          <h3>Important Links</h3>
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