import React, { useState, useEffect } from 'react';
import api from './Api';
import './CertificateUpdate.css'
import './Login.css'

const UpdateCertificate = ({ certificateId }) => {
  document.title="Update Certificate "
  const [certificate, setCertificate] = useState({
    name: '',
    year: '',
    descripton: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await api.get(`${certificateId}`);
        if (response.status === 200) {
          setCertificate(response.data);
        }
      } catch (error) {
        console.error("Error fetching certificate:", error);
        setErrorMessage("Error fetching certificate details.");
      }
    };

    fetchCertificate();
  }, [certificateId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`${certificateId}`, certificate, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        setSuccessMessage("Certificate updated successfully!");
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating certificate:", error);
      setErrorMessage("Error updating certificate.");
    }
  };

  return (
    <div className='login-page'>
      <div className='login-card'>
      <h2>Update Certificate</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Certificate Name"
          value={certificate.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={certificate.year}
          onChange={handleChange}
        />
        <textarea className='description-box'
          name="descripton"
          placeholder="Description"
          value={certificate.descripton}
          onChange={handleChange}
        />
        <button type="submit"className='login-button'>Update Certificate</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateCertificate;