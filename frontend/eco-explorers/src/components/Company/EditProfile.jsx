import React, { useState } from 'react';

const EditProfile = ({ companyDetails, onSave }) => {
  const [formData, setFormData] = useState({
    displayName: companyDetails.displayName || '',
    companyPan: companyDetails.companyPan || '',
    companyMail: companyDetails.companyMail || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='editProfileContainer'>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label>Name:</label>
          <input
            type='text'
            name='displayName'
            value={formData.displayName}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>Company PAN:</label>
          <input
            type='text'
            name='companyPan'
            value={formData.companyPan}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label>Email:</label>
          <input
            type='email'
            name='companyMail'
            value={formData.companyMail}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
