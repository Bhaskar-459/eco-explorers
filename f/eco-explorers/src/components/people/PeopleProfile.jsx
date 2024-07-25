import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [peopleDetails, setPeopleDetails] = useState(JSON.parse(localStorage.getItem("peopleDetails")));
  const [profileImage, setProfileImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setProfileImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl); // Save the image URL in localStorage
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="contents">
      <p className='para'><span className='heading_M'>M</span>y <span className='heading_M'>P</span>rofile</p>
      <div className="profileDetailsContainer">
        <div className="profileImage">
          <img src={profileImage} alt="Profile" />
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageUpload} />
          <button className="uploadButton" onClick={() => document.getElementById('fileInput').click()}>
            Upload Photo
          </button>
        </div>
        <div className="listDetailsContainer">
          <div className="personalProfileDetails">
            <div className="detailRow">
              <strong>Name:</strong>
              <span>{peopleDetails.Name}</span>
            </div>
            <div className="detailRow">
              <strong>Phone No:</strong>
              <span>{peopleDetails.personalInfo.phone}</span>
            </div>
            <div className="detailRow">
              <strong>Address:</strong>
              <span>{peopleDetails.personalInfo.address}</span>
            </div>
            <div className="detailRow">
              <strong>Email:</strong>
              <span>{peopleDetails.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
