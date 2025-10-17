import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, external = false }) => {
  const baseClasses = "relative group text-sm font-normal transition-colors text-gray-700 hover:text-black";
  
  if (external) {
    return (
      <a
        href={to}
        className={baseClasses}
      >
        {children}
        <span className="absolute -bottom-[2px] left-0 w-full h-0.5 transition-transform origin-left
          bg-[#FF6600] transform scale-x-0 group-hover:scale-x-100" />
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${baseClasses} ${
        isActive ? 'text-black font-medium' : ''
      }`}
    >
      {children}
      <span className="absolute -bottom-[2px] left-0 w-full h-0.5 transition-transform origin-left
        bg-[#FF6600] transform scale-x-0 group-hover:scale-x-100" />
    </NavLink>
  );
};

export default NavItem;