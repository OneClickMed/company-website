import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FaLock } from 'react-icons/fa'; // Import an icon from react-icons (FontAwesome)

function PrivateRoute({ element }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
        <div className="text-center flex items-center justify-center flex-col">
        <FaLock className="text-6xl text-ocmyellow animate-pulse mb-4" /> {/* Icon */}
          <p className="text-lg text-gray-700">Please hold on while we verify your authentication...</p>
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-ocmblue border-t-transparent rounded-full mt-4" />

        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}

export default PrivateRoute;
