import React from 'react';
import { Link } from 'react-router-dom';

const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === 'NGO') {
        window.location.href = '/loginNgo';
    } else if (value === 'USER') {
        window.location.href = '/loginPeople';
    } else if (value === 'ORGANISATION') {
        window.location.href = '/loginCompany';
    }
};

const Nav = () => {
    return (
        <header className="header">
            <div className="logo">Green Trade Exchange</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#privacy-policy">Privacy Policy</a></li>
                    <li><select name="org" id="org-select" onChange={handleSelectChange}>
                        <option value="select">Select an option</option>
                        <option value="NGO">NGO</option>
                        <option value="USER">USER</option>
                        <option value="ORGANISATION">ORGANISATION</option>
                    </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;