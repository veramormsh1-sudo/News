import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '.';

const navigationItems = [
  { name: 'World', path: 'https://www.reuters.com/world/', external: true },
  { name: 'Business', path: 'https://www.reuters.com/business/', external: true },
  { name: 'Markets', path: 'https://www.reuters.com/markets/', external: true },
  { name: 'Sustainability', path: 'https://www.reuters.com/sustainability/', external: true },
  { name: 'Legal', path: 'https://www.reuters.com/legal/', external: true },
  { name: 'Commentary', path: 'https://www.reuters.com/commentary/', external: true },
  { name: 'Technology', path: 'https://www.reuters.com/technology/', external: true },
  { name: 'Investigations', path: 'https://www.reuters.com/investigates/', external: true },
];

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            external={item.external}
          >
            {item.name}
          </NavItem>
        ))}
        <button className="text-gray-700 hover:text-black text-sm font-normal flex items-center space-x-1">
          <span>More</span>
          <svg
            className="w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#333333] p-2"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-[#E5E7EB] shadow-lg">
            <div className="py-2">
              {navigationItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-4 py-2 text-sm text-[#333333] hover:bg-gray-50">
                More
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainNav;