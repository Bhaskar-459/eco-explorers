import React from 'react';
import Dashboard from './Dashboard';
import Nav from '../../Common/Home/nav';
import ProfileDetails from './ProfileDetails';
import EditFormProfile from './EditFormProfile';    
import './NgoProfile.css';

function NgoProfile() {
    return (
        <div className="App">
        <Nav />
        <div className="main-content">
            <Dashboard className="dashboard" />
            <div className="content">
                <ProfileDetails />
                <button className='editButton'>Edit Profile</button>
                <EditFormProfile />
            </div>
        </div>
        </div>
    );
}

export default NgoProfile;