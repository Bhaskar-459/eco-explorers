import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import EditProfile from './EditProfile';

const CompanyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyDetails, setCompanyDetails] = useState(
    JSON.parse(localStorage.getItem('companyDetails'))
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedDetails) => {
    setCompanyDetails(updatedDetails);
    localStorage.setItem('companyDetails', JSON.stringify(updatedDetails));
    setIsEditing(false);
  };

  return (
    <div className="content">
      <ProfileDetails />
      {isEditing ? (
        <EditProfile companyDetails={companyDetails} onSave={handleSave} />
      ) : (
        <>
          <button className='editButton' onClick={handleEditClick}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default CompanyProfile;
