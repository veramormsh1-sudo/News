import React, { useState, useEffect } from 'react';

const generateRandomNews = () => {
  const newsPool = [
    {
      title: "Tech Giants Rally as AI Investments Show Promise",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Technology",
      time: `${Math.floor(Math.random() * 6) + 1} hours ago`
    },
    {
      title: "Federal Reserve Signals Potential Rate Adjustments",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Finance",
      time: `${Math.floor(Math.random() * 8) + 1} hours ago`
    },
    {
      title: "Climate Summit Reaches Breakthrough Agreement",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Environment",
      time: `${Math.floor(Math.random() * 4) + 1} hours ago`
    },
    {
      title: "Global Supply Chain Disruptions Continue",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Business",
      time: `${Math.floor(Math.random() * 5) + 1} hours ago`
    },
    {
      title: "Cryptocurrency Market Shows Volatile Movements",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Crypto",
      time: `${Math.floor(Math.random() * 3) + 1} hours ago`
    },
    {
      title: "Pharmaceutical Breakthrough in Cancer Research",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Health",
      time: `${Math.floor(Math.random() * 7) + 1} hours ago`
    },
    {
      title: "Space Exploration Mission Achieves New Milestone",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Science",
      time: `${Math.floor(Math.random() * 6) + 1} hours ago`
    },
    {
      title: "International Trade Agreements Face New Challenges",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Politics",
      time: `${Math.floor(Math.random() * 9) + 1} hours ago`
    },
    {
      title: "Renewable Energy Sector Sees Record Investment",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Energy",
      time: `${Math.floor(Math.random() * 4) + 1} hours ago`
    },
    {
      title: "Emerging Markets Show Resilient Growth Patterns",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Markets",
      time: `${Math.floor(Math.random() * 5) + 1} hours ago`
    },
    {
      title: "Digital Transformation Accelerates in Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Technology",
      time: `${Math.floor(Math.random() * 8) + 1} hours ago`
    },
    {
      title: "Agricultural Innovation Addresses Food Security",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Agriculture",
      time: `${Math.floor(Math.random() * 6) + 1} hours ago`
    }
  ];

  // Shuffle array and return 3 random articles
  const shuffled = [...newsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const ArticlePage: React.FC = () => {
  const [relatedNews, setRelatedNews] = useState(generateRandomNews);

  useEffect(() => {
    const interval = setInterval(() => {
      setRelatedNews(generateRandomNews());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span className="mx-2">›</span>
          <a href="/business" className="hover:text-gray-700">Business</a>
          <span className="mx-2">›</span>
          <span>Energy</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            US, UK ramp up pressure on India, China to cut Russian oil imports
          </h1>
          
          {/* Meta Info */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>By Reuters Staff</span>
            <span className="mx-2">•</span>
            <time dateTime="2024-10-16">October 16, 2024</time>
            <span className="mx-2">•</span>
            <span>3 min read</span>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <button className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
              <span>Print</span>
            </button>
          </div>
        </header>

        {/* Main Article Content */}
        <article>
          {/* Featured Image */}
          <figure className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Oil pumps operate at an oil field"
              className="w-full h-auto rounded"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Oil pumps operate at an oil field in Russia. REUTERS/Sergei Karpukhin
            </figcaption>
          </figure>

          {/* Article Summary Points */}
          <div className="bg-gray-50 p-6 rounded mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Summary</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Western nations increase diplomatic pressure on major oil importers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>India and China remain largest buyers of discounted Russian crude</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>New sanctions package targets oil transportation infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Energy markets brace for potential supply disruptions</span>
              </li>
            </ul>
          </div>

          {/* Article Text */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              WASHINGTON/LONDON, Oct 16 (Reuters) - The United States and United Kingdom are intensifying diplomatic efforts to convince India and China to reduce their imports of Russian oil, as Western nations seek to further isolate Moscow's energy sector amid ongoing geopolitical tensions.
            </p>

            <p className="mb-6">
              Senior officials from both countries have engaged in high-level discussions with their counterparts in New Delhi and Beijing, emphasizing the strategic importance of reducing dependence on Russian energy exports, according to sources familiar with the matter.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-4 my-8">
              <p className="text-sm italic">
                "The pressure being exerted encompasses both economic incentives and potential consequences for continued engagement with Russian energy infrastructure," said one diplomatic source.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Economic Implications</h2>
            
            <p className="mb-6">
              India and China have emerged as the largest purchasers of Russian crude oil, taking advantage of significant discounts offered as Moscow seeks alternative markets following Western sanctions. The two Asian giants have increased their Russian oil imports by more than 300% since early 2022.
            </p>

            <p className="mb-6">
              Energy analysts warn that any significant reduction in these imports could lead to supply shortages and price volatility in global oil markets, potentially affecting consumers worldwide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategic Considerations</h2>
            
            <p className="mb-6">
              The diplomatic push comes as Western nations prepare a new package of sanctions targeting Russia's oil transportation infrastructure, including tankers and insurance companies that facilitate crude exports.
            </p>

            <p className="mb-6">
              "This coordinated approach represents a significant escalation in efforts to constrain Russia's energy revenues," said Dr. Sarah Mitchell, an energy policy expert at the Atlantic Council.
            </p>

            {/* Chart/Graph Placeholder */}
            <figure className="my-8 bg-gray-900 p-6 rounded">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Oil price chart showing market trends"
                className="w-full h-48 object-cover rounded"
              />
              <figcaption className="text-sm text-gray-300 mt-2">
                Oil price trends and import volumes from major suppliers over the past 12 months
              </figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Market Response</h2>
            
            <p className="mb-6">
              Global oil prices have remained volatile amid speculation about potential supply disruptions. Brent crude futures have fluctuated between $85-92 per barrel over the past week, with traders closely monitoring diplomatic developments.
            </p>

            <p className="mb-6">
              Industry executives expect continued uncertainty as negotiations progress, with some companies already exploring alternative supply arrangements to mitigate potential risks.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded p-6 mt-8">
              <h3 className="font-bold text-blue-900 mb-2">Related Coverage</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><a href="#" className="hover:underline">Analysis: How oil sanctions reshape global energy trade</a></li>
                <li><a href="#" className="hover:underline">Exclusive: India's refiners adapt to changing supply chains</a></li>
                <li><a href="#" className="hover:underline">China's energy security strategy under scrutiny</a></li>
              </ul>
            </div>
          </div>

          {/* Article Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Topics:</h3>
            <div className="flex flex-wrap gap-2">
              {['Oil', 'Energy', 'Russia', 'India', 'China', 'Sanctions', 'Diplomacy'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Author Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium">RS</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Reuters Staff</h3>
              <p className="text-sm text-gray-600 mt-1">
                Our Standards: <a href="#" className="text-blue-600 hover:underline">The Thomson Reuters Trust Principles.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Read Next</h2>
            <button 
              onClick={() => setRelatedNews(generateRandomNews())}
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
            >
              Refresh News
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNews.map((article, index) => (
              <article key={`${article.title}-${index}`} className="group cursor-pointer">
                <div className="aspect-video mb-3 relative overflow-hidden rounded">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-orange-600 text-white text-xs font-medium rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.time}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Feedback Tab */}
     
    </div>
  );
};

export default ArticlePage;