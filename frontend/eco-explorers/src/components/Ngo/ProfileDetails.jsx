import React, {useState } from 'react'





const ProfileDetails =(props) =>  {

  let ngoDetails=JSON.parse(localStorage.getItem("ngoDetails"));
  
  

  console.log(ngoDetails);
  return (
    
    <div className='profileDetailsContainer'>
      <div className='profileImage'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>
      <div className='listDetailsContainer'>
        <div className='personalProfileDetails'>
          <p>Name:</p>
          <p>{ngoDetails.personalInfo.name}</p>
          <p>Phone No:</p>
          <p>{ngoDetails.personalInfo.phone}</p>
          <p>Address:</p>
          <p>{ngoDetails.personalInfo.address}</p>
          <p>Email:</p>
          <p>{ngoDetails.email}</p>
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