import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-reuters-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl text-reuters-black">
              Reuters
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') 
                  ? 'text-reuters-blue border-b-2 border-reuters-blue' 
                  : 'text-reuters-gray-400 hover:text-reuters-black'
              } px-1 py-2 text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              to="/markets"
              className={`${
                isActive('/markets')
                  ? 'text-reuters-blue border-b-2 border-reuters-blue'
                  : 'text-reuters-gray-400 hover:text-reuters-black'
              } px-1 py-2 text-sm font-medium`}
            >
              Markets
            </Link>
          </div>

          <div>
            <button className="text-sm font-medium text-reuters-gray-400 hover:text-reuters-black">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;