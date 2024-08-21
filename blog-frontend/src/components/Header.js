import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          My Blog
        </Link>
        <nav>
          {token ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="mr-4 hover:underline">
                Sign In
              </Link>
              <Link to="/signup" className="hover:underline">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
