import React from 'react'


const ProfileDetails = (props) => {
  const response = await axios.get('http://localhost:5000/api/ngo/get/getProfile');
  return (
    <div className='profileDetailsContainer'>
      <div className='profileImage'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
      </div>
      <div className='listDetailsContainer'>
        <div className='personalProfileDetails'>
          <h2>NGO Name</h2>
          <p>Location</p>
          <p>Phone Number</p>
          <p>Email</p>
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