import React from 'react';

const MainStory: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Text Content */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <a 
            href="/news/oil-pressure" 
            className="block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 hover:text-blue-700 transition-colors">
              US, UK ramp up pressure on India, China to cut Russian oil imports
            </h1>
          </a>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            The United States and United Kingdom are intensifying diplomatic efforts to convince India and China to reduce their imports of Russian oil, as Western nations seek to further isolate Moscow's energy sector amid ongoing geopolitical tensions.
          </p>
          <div className="text-sm text-gray-500">
            12 mins ago
          </div>
        </div>
        
        {/* Image */}
        <div className="order-1 lg:order-2 lg:col-span-3">
          <a 
            href="/news/oil-pressure" 
            className="block"
          >
            <div className="relative hover:opacity-90 transition-opacity cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Oil pumps operate at an oil field"
                className="w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-60 px-2 py-1 rounded">
                <div className="flex items-center space-x-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="mt-2 text-xs text-gray-500">
            Oil pumps operate at an oil field in Russia. REUTERS/Sergei Karpukhin
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStory;