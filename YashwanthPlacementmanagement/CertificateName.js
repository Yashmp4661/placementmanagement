import React, { useState } from 'react';
import api from './Api';
import './CertificateView.css';


const CertificateName = () => {
   document.title="View Certificate By Name"
    const [certificateName, setCertificateName] = useState('');
    const [certificates, setCertificates] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setCertificateName(event.target.value);
    };

    const handleSearchClick = async () => {
        if (!certificateName.trim()) {
            alert('Please enter a certificate name');
            return;
        }

        try {
            const response = await api.get(`/name/${certificateName}`);
            setCertificates(response.data);
            setError(''); // Clear any previous errors
        } catch (err) {
            setError('Certificate not found or an error occurred.');
            setCertificates([]); // Clear results on error
        }
    };


  return (
    <div>
    <div className='cer-page'>
      <div className='cer-card'>
        <h3>View Certificate by Name</h3>
      <input
        type="text"
        value={certificateName}
        onChange={handleInputChange}
        placeholder="Enter certificate name"
      />
      <button onClick={handleSearchClick} className='cer-button'>View</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {certificates.length > 0 && (
        <div >
           <h3>Results:</h3>
                    
                        {certificates.map((cert, index) => (
                            <li key={index}>
                                <strong>Id:</strong>{cert.id} <br/>
                                <strong>Name:</strong> {cert.name} <br />
                                <strong>Year:</strong> {cert.year} <br />
                                <strong>Description:</strong> {cert.descripton}
                            </li>
                        ))}
                    
        </div>
       
      )}
    </div>
    </div>
    </div>
  );
};

export default CertificateName;