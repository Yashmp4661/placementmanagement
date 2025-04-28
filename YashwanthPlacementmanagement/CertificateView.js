import React, { useState } from 'react';
import api from './Api';
import './CertificateView.css';


const CertificateView = () => {
   document.title="Certificate View By ID" 
  const [certificateId, setCertificateId] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState('');
  const handleInputChange = (event) => {
    setCertificateId(event.target.value);
};


  const fetchCertificate = async () => {
    
  if (!certificateId.trim()) {
    alert('Please enter a certificate id');
    return;
}
    try {
      const response = await api.get(`/${certificateId}`);
      setCertificate(response.data);
      setError(''); 
    } catch (error) {
      setError('Certificate not found or an error occurred.');
      setCertificate([]);
    }
  };

  return (
    <div>
    <div className='cer-page'>
      <div className='cer-card'>
        <h3>View Certificate by Id</h3>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certificateId}
        onChange={handleInputChange}
      />
      <button onClick={fetchCertificate} className='cer-button'>View</button>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
        ) : (
          certificate && (
            <div>
              <h3>Results:</h3>
              <h1>Id: {certificate.id}</h1>
              <h3>Name: {certificate.name}</h3>
              <p><strong>Year:</strong> <b>{certificate.year}</b></p>
              <p><strong>Description:</strong> <b>{certificate.descripton}</b></p>
            </div>
         )
        )}
    </div>
    </div>
    </div>
  );
};

export default CertificateView;