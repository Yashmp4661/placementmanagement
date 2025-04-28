import React from 'react';
import './Footer.css'; // Optional: for styling

const Footer = () => {
    return (
        <div className="footer">
           
            <p>&copy; {new Date().getFullYear()} Designed by MP. All rights reserved.</p>
            
        </div>
    );
};

export default Footer;