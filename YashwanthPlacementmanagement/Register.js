import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
   document.title="Register "
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const navigate = useNavigate(); 
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if user already exists
    const existingUser = localStorage.getItem(formData.username);
    if (existingUser) {
      setMessage("User already exists. Please login or use a different username.");
      return;
    }
    
    

    // Store user data in localStorage
    localStorage.setItem(formData.username, JSON.stringify(formData));
    
    setMessage("Registration successful! Redirecting to login page.");
   
    setFormData({ username: '', password: '', email: '' }); // Clear the form

    setTimeout(() => {
      navigate('/login');
    }, 1000); // 
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div >
      <div className="reg-container">
      </div>
      <div className='register-container'>
        <div className='register-card'>
        <h2 >Register</h2>
      {message && <p className="register-message">{message}</p>}
      <form onSubmit={handleRegister}  className="register-form">
      <label htmlFor="username">Username</label>
        <input
          type="text"
           id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="register-input"
          required
        />
         <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
           id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="register-input"
          required
        />
        <button
              type="button"
              className="toggle-password-btn"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            </div>
            </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="register-input"
          required
        />
        <button type="submit"  className="register-button">Register</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Register;