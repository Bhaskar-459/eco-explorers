import React, {useState } from 'react'
const Profile =() =>  {

  let peopleDetails=JSON.parse(localStorage.getItem("peopleDetails"));
  console.log(peopleDetails);
  return (
    
    <div className='profileDetailsContainer'>
      <div className='profileImage'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>
      <div className='listDetailsContainer'>
        <div className='personalProfileDetails'>
          <p>Name:</p>
          <p>{peopleDetails.Name}</p>
          <p>Phone No:</p>
          <p>{peopleDetails.personalInfo.phone}</p>
          <p>Address:</p>
          <p>{peopleDetails.personalInfo.address}</p>
          <p>Email:</p>
          <p>{peopleDetails.email}</p>
        </div>
        <div className='financialProfileDetails'>
          <div className='noofCredits'></div>
          <div className='gcpDetails'></div>
        </div>
      </div>

    </div>

  )
}

// ProfileDetails.propTypes = {}

export default Profile;