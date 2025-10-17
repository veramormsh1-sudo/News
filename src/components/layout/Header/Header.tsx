import React from 'react';
import { MainNav } from './Navigation';
import { SearchBar } from './Search';
import { Logo, StockTicker } from '../../ui/common';
import TopBanner from './TopBanner';
import PodcastBanner from './PodcastBanner';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Banner */}
      <TopBanner />
      
      {/* Main Header */}
      <div className="bg-white">
        <div className="w-full px-24 sm:px-28 lg:px-32">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mr-12">
              <Logo />
            </div>
            
            {/* Primary Navigation */}
            <div className="flex-1">
              <MainNav />
            </div>
            
            {/* Search and Auth */}
            <div className="flex items-center space-x-4 ml-8">
              <div className="hidden md:block">
              </div>
              <div className="hidden md:flex items-center space-x-3">
                <span className="text-sm text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">My News</span>
                <SearchBar />
                {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-105">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button> */}
                <button 
                  onClick={() => window.open('https://www.reuters.com/account/sign-in/?redirect=https%3A%2F%2Fwww.reuters.com%2F', '_self')}
                  className="px-5 py-2 text-sm font-medium text-gray-700 border-2 border-gray-300 rounded-md 
                           hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 
                           hover:shadow-md hover:scale-105 active:scale-95"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => window.open('https://www.reuters.com/account/register/signup-options/?redirect=https%3A%2F%2Fwww.reuters.com%2F&referrer=registration_button&journeyStart=navigation', '_self')}
                  className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-black to-gray-800 rounded-md 
                           hover:from-gray-800 hover:to-gray-700 transition-all duration-200 
                           hover:shadow-lg hover:scale-105 active:scale-95 border border-transparent"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Ticker */}
      <StockTicker />

      {/* Podcast Banner */}
      <PodcastBanner />
    </header>
  );
};

export default Header;