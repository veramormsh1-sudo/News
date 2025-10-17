import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock breaking news data
const breakingNews = [
  {
    id: 1,
    title: 'Updates: Hostages return as leaders gather in Egypt',
    subtext: 'Follow our live coverage of the latest developments',
    path: '/article/hostages-egypt',
    timestamp: '4 MIN AGO',
  },
  {
    id: 2,
    title: 'Global climate talks reach breakthrough agreement',
    subtext: 'World leaders announce historic climate deal',
    path: '/article/climate-deal',
    timestamp: '15 MIN AGO',
  },
];

const BreakingNewsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden flex-1">
      <div className="flex flex-col">
        {breakingNews.map((news, index) => (
          <Link
            key={news.id}
            to={news.path}
            className={`
              transition-opacity duration-500 absolute w-full
              ${index === currentIndex ? 'opacity-100 relative' : 'opacity-0'}
            `}
          >
            <div className="space-y-1">
              <h3 className="text-base font-display font-normal tracking-tight leading-snug text-[#121212] hover:text-reuters-blue transition-colors duration-200">
                {news.title}
              </h3>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-serif text-[#6B7280] tracking-wide">
                  {news.subtext}
                </p>
                <span className="text-xs font-sans text-[#6B7280] font-medium uppercase tracking-wider">
                  {news.timestamp}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2">
        {breakingNews.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#FF6600]' : 'bg-[#E5E7EB]'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BreakingNewsTicker;