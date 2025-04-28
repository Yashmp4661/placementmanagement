import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'
const GetCertificateId = () => {
  document.title="Update Certificate "
  const [certificateId, setCertificateId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (certificateId) {
      // Navigate to the UpdateCertificate page with the entered ID
      navigate(`/update/${certificateId}`);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-card'>
      <h2>Enter Certificate ID to Update</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <button type="submit" className='login-button'>Continue</button>
      </form>
    </div>
    </div>
  );
};

export default GetCertificateId;