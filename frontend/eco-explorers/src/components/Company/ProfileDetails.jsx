import React, {useState } from 'react'
const ProfileDetails =(props) =>  {

  let companyDetails=JSON.parse(localStorage.getItem("companyDetails"));
  console.log(companyDetails);
  return (
    
    <div className='profileDetailsContainer'>
      <div className='profileImage'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>
      <div className='listDetailsContainer'>
        <div className='personalProfileDetails'>
          <p>Name:</p>
          <p>{companyDetails.displayName}</p>
          <p>Company pan</p>
          <p>{companyDetails.companyPan}</p>
          <p>Email:</p>
          <p>{companyDetails.companyMail}</p>
        </div>
        <div className='financialProfileDetails'>
          <div className='noofCredits'></div>
          <div className='gcpDetails'></div>
        </div>
      </div>

    </div>

  )
}

ProfileDetails.propTypes = {}

export default ProfileDetails