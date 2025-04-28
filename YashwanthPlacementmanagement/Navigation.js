import React,{useState,useEffect} from 'react';
import { useNavigate, } from 'react-router-dom';


import './Navigation.css';


const NavigationPage = () => {
 
  const navigate = useNavigate();
  
  
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem('currentUsername');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
    <div className='nav-container'>
      <h2>{username && `Welcome, ${username}!`}</h2>
      </div>
    <div className="navigation-page">
      
      <h2 className="title">All  Certificate Operations</h2>
      <div className="card-container">
        <div className="card" onClick={() => navigate('/view')}>
          <i className="icon">📄</i>
          <h4>View All Certificates</h4>
          <p>Browse all available certificates in the system.</p>
        </div>
        <div className="card" onClick={() => navigate('/viewbyid')}>
          <i className="icon">🔍</i>
          <h4>View Certificate By ID</h4>
          <p>Find a certificate by its unique identifier.</p>
        </div>
        <div className="card" onClick={() => navigate('/viewbyName')}>
          <i className="icon">🔍</i>
          <h4>View Certificate By Name</h4>
          <p>Find a certificate by its Name.</p>
        </div>
        <div className="card" onClick={() => navigate('/AddCertificate')}>
          <i className="icon">➕</i>
          <h4>Add Certificate</h4>
          <p>Create a new certificate entry in the system.</p>
        </div>
        <div className="card" onClick={() => navigate('/Updatecertificate')}>
          <i className="icon">✏️</i>
          <h4>Update Certificate</h4>
          <p>Make changes to an existing certificate.</p>
        </div>
        <div className="card" onClick={() => navigate('/Deletecertificate')}>
          <i className="icon">🗑️</i>
          <h4>Delete Certificate</h4>
          <p>Remove a certificate from the system.</p>
        </div>
        
        
      </div>
    </div>
    </div>
  );
};
export default NavigationPage;