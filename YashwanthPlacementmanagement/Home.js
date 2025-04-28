import React from 'react';
import './Home.css'; // Ensure this CSS file exists
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  return (

    <div >
        {/* Main Content */}
        <div className="text-container">
        <div className="buttons">
          <h1>Solutions for Certificate services</h1>
          <p>
            Since our establishment, we have been delivering high-quality certificate services.
          </p>
          
            <button className="register"onClick={()=>navigate('/register')}>Register</button>
            <button className="login"onClick={()=>navigate('/Login')}>Login</button>
          
        </div>
        
      </div>
    </div>
  );
}

export default Home;