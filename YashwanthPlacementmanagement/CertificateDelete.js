import React, { useState } from 'react';
import api from './Api';
import './Login.css'
const DeleteCertificate = () => {
  document.title=" Delete Certificate "
  const [certificateId, setCertificateId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle the delete request
  const handleDelete = async () => {
    try {
      const response = await api.delete(`/${certificateId}`);
      if (response.status === 200) {
        setSuccessMessage(`Certificate with ID ${certificateId} has been deleted successfully.`);
        setErrorMessage('');
      }
    } catch (error) {
      console.error("Error deleting certificate:", error);
      setErrorMessage(`Failed to delete certificate with ID ${certificateId}. Please try again.`);
      setSuccessMessage('');
    }
    setCertificateId(''); // Clear the input after deletion
  };

  return (
    <div className='login-page'>
      <div className='login-card'>
      <h2>Delete Certificate</h2>
      {/* Success and error messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <input
        type="number"
        placeholder="Enter Certificate ID"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
      />
      <button onClick={handleDelete} className='login-button'>Delete Certificate</button>
    </div>
    </div>
  );
};

export default DeleteCertificate;