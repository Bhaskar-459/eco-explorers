import React from 'react';
import './NgoProfile.css'; // Import the CSS file for NgoProfile
import ProfileDetails from './ProfileDetails';
// import EditFormProfile from './EditFormProfile';

function NgoProfile() {
  return (
    <div className="contents">
        <p className='para'><span className='heading_M'>M</span>y <span className='heading_M'>P</span>rofile</p>
      <ProfileDetails />
      {/* <button className='editButton'>Edit Profile</button>
      <EditFormProfile /> */}
    </div>
  );
}

export default NgoProfile;
