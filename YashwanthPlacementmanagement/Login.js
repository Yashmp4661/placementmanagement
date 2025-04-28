import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
   document.title="Login"
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetData, setResetData] = useState({
    username: '',
    email: '',
    newPassword: ''
  });
  const [resetMessage, setResetMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(formData.username);
    if (!storedUser) {
      setMessage("User not found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password === formData.password) {
      setMessage("Login successful!");
      localStorage.setItem('currentUsername', formData.username);
      localStorage.setItem('currentUserEmail', user.email);

      navigate('/navigation')
      
    } else {
      setMessage("Invalid password. Please try again.");
    }

    setFormData({ username: '', password: '' }); // Clear the form
  };
  // Toggle forgot password form
  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
    setResetMessage('');
    setMessage('');
    setResetData({ username: '', email: '', newPassword: '' });
  };

  // Handle changes for reset form
  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  // Handle password reset submission
  const handleResetPassword = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(resetData.username);
    if (!storedUser) {
      setResetMessage("User not found.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email === resetData.email) {
      // Update the password in localStorage
      user.password = resetData.newPassword;
      localStorage.setItem(resetData.username, JSON.stringify(user));
      
      setShowForgotPassword(false); // Hide the reset form
      
    } else {
      setResetMessage("Email does not match. Please try again.");
    }
    setTimeout(() => {
        setMessage('Password reset successful! You can now log in with your new password."');
      },);
   
    
    setResetData({ username: '', email: '', newPassword: '' });
  };


  return (
    <div className='back-page'>
    <div className='log-container'>
    <h2>Login</h2></div>
    <div className="login-page">
      
    
      <div className="login-card">
      <h2>Login</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className='login-button'>Login</button>
      </form>
      <button onClick={toggleForgotPassword} className='forgot-button'>Forgot Password?</button>

      {showForgotPassword && (
        <div className="reset-form">
          <h3>Reset Password</h3>
          {resetMessage && <p className="message">{resetMessage}</p>}
          <form onSubmit={handleResetPassword}>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={resetData.username}
              onChange={handleResetChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your registered email"
              value={resetData.email}
              onChange={handleResetChange}
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={resetData.newPassword}
              onChange={handleResetChange}
              required
            />
            <button  type="submit" className='login-button' >Reset Password</button>
          </form>
          <button onClick={toggleForgotPassword} className='forgot-button '>Cancel</button>
        </div>
      
      )}
    </div>
    </div>
    </div>
    
    
  );
};

export default Login;