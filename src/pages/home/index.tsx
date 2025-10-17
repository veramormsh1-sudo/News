import React from 'react';
import MainStory from '../../components/layout/MainStory';
import BottomStories from '../../components/layout/BottomStories';

const HomePage: React.FC = () => {
  return (
    <main className="bg-white">
      <MainStory />
      <BottomStories />
    </main>
  );
};

export default HomePage;