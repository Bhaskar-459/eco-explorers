import React from 'react'
import icfre from '../../assets/icfre.png';
import moef from '../../assets/moef.png';
import ecoexplore from '../../assets/eco.png';
import nationallogo from '../../assets/nationallogo.png';
import './styles/header.css';
 function Header() {
  return (
    <div className="titleBar">
        <div className="logos">
            <img src={nationallogo} alt="" />
            <a href="https://moef.gov.in/"><img src={moef} alt="moef" /></a>
            <a href="https://icfre.gov.in/" target="_blank"><img src={icfre} alt="icfre" /></a>
        </div>
        <div className="gte">
            <img src={ecoexplore} alt="" />
        </div>
    </div>
  )
};

export default Header;
