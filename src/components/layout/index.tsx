import React from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      {/* <FeedbackTab /> */}
    </div>
  );
};

export default Layout;