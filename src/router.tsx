import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HardcodedArticle from './pages/article/ArticlePage';
import Header from './components/layout/Header/Header';
import FeedbackTab from './components/ui/common/FeedbackTab';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>
      <FeedbackTab />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutWrapper>
        <HardcodedArticle />
      </LayoutWrapper>
    ),
  },
  {
    path: '/news/oil-pressure',
    element: (
      <LayoutWrapper>
        <HardcodedArticle />
      </LayoutWrapper>
    ),
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;