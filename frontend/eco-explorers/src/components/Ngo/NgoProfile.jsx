import React from 'react';
import Dashboard from './Dashboard';
import Nav from '../../Common/Home/nav';
import './NgoHome.css';

function NgoHome() {
    return (
        <div className="App">
        <Nav />
        <div className="main-content">
            <Dashboard className="dashboard" />
            <div className="content">
                <ProfileDetails />
                <button>Edit Profile</button>
                <EditFormProfile />
            </div>
        </div>
        </div>
    );
}

export default NgoHome;