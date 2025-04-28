import React, { useState } from 'react';
import api from './Api';
import './CertificateCreate.css'

const AddCertificate = () => {
   document.title="Add New Certificate "
  const [certificate, setCertificate] = useState({
    name: '',
    year: '',
    descripton: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('', certificate, {
        headers: {
          'Content-Type': 'application/json',},
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Certificate added successfully!");
        setCertificate({ name: '', year: '', descripton: '' }); // Reset form fields
        setSuccessMessage("Certificate added successfully!");
        setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
      }
    } catch (error) {
      console.error("Error adding certificate:", error);
    }
  };

  return (
    <div className='add-page'>
      <div className='add-card'>
       <h2>Add Certificate</h2>
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
      <textarea 
        name="descripton"
        placeholder="Description"
        value={certificate.descripton}
        onChange={handleChange}
        className="description-box"
      />
      <button type="submit" className='add-button'>Add Certificate</button>
    </form>
      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
      </div>
      </div>

  );
};

export default AddCertificate;