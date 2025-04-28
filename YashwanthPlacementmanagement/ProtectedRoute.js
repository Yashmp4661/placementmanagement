import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('currentUsername'); // Check if user is logged in

  return isAuthenticated ? children : <Navigate to="/" replace />; // Redirect to home if not authenticated
};

export default ProtectedRoute;