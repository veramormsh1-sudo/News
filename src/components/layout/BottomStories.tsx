import React from 'react';

interface ArticleItemProps {
  title: string;
  timeAgo: string;
  isLive?: boolean;
  url?: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ title, timeAgo, isLive, url }) => (
  <div className="border-b border-gray-200 pb-4 last:border-b-0">
    <div className="flex items-start space-x-3">
      {isLive && (
        <div className="flex items-center space-x-1 mt-1">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <span className="text-xs font-bold text-red-600">LIVE</span>
        </div>
      )}
      <div className="flex-1">
        {url ? (
          <a 
            href={url} 
            className="block"
          >
            <h3 className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer leading-tight transition-colors">
              {title}
            </h3>
          </a>
        ) : (
          <h3 className="text-base font-medium text-gray-900 leading-tight">
            {title}
          </h3>
        )}
        <p className="text-sm text-gray-500 mt-2">{timeAgo}</p>
      </div>
    </div>
  </div>
);

const BottomStories: React.FC = () => {
  const stories = [
    {
      title: "US, UK ramp up pressure on India, China to cut Russian oil imports",
      timeAgo: "10 mins ago",
      isLive: true,
      url: "/news/oil-pressure"
    },
    {
      title: "Far-right US influencer Candace Owens loses legal fight to enter Australia",
      timeAgo: "7 hours ago",
      url: "https://www.reuters.com/world/asia-pacific/"
    },
    {
      title: "US news outlets reject Pentagon press access policy",
      timeAgo: "7 hours ago",
      url: "https://www.reuters.com/world/us/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <ArticleItem
            key={index}
            title={story.title}
            timeAgo={story.timeAgo}
            isLive={story.isLive}
            url={story.url}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomStories;