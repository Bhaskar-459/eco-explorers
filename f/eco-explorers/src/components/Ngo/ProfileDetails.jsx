import React, { useState } from 'react';
import './styles/NgoProfile.css'; // Import the CSS file

const ProfileDetails = (props) => {
  let ngoDetails = JSON.parse(localStorage.getItem("ngoDetails")) || {};
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
      localStorage.setItem("profilePic", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='profileDetailsContainer'>
      <div className='profileImage'>
        <img src={profilePic} alt="Profile" />
        <label htmlFor="fileUpload" className="uploadButton">Upload</label>
        <input id="fileUpload" type="file" accept="image/*" onChange={handleProfilePicChange} style={{ display: 'none' }} />
      </div>
      <div className='listDetailsContainer'>
        <div className='personalProfileDetails'>
          <div className='detailRow'>
            <strong>Name:</strong> <span>{ngoDetails.personalInfo?.name}</span>
          </div>
          <div className='detailRow'>
            <strong>Phone No:</strong> <span>{ngoDetails.personalInfo?.phone}</span>
          </div>
          <div className='detailRow'>
            <strong>Address:</strong> <span>{ngoDetails.personalInfo?.address}</span>
          </div>
          <div className='detailRow'>
            <strong>Email:</strong> <span>{ngoDetails.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails;
