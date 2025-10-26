import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/logo.png';
import img3 from '../../assets/images/img3.png';
import img1 from '../../assets/images/photo_2025-10-21_20-53-00.jpg';
import img2 from '../../assets/images/img2.png';

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
    <div className="min-h-screen bg-gray-50" style={{ 
      fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.5'
    }}>
      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav style={{ 
          fontSize: '14px',
          color: '#404040',
          marginBottom: '16px',
          fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
        }}>
          <a href="https://www.reuters.com/" style={{ color: '#404040' }} className="hover:text-gray-600 transition-colors">Home</a>
          <span className="mx-2">›</span>
          <a href="https://www.reuters.com/site-search/?query=crime" style={{ color: '#404040' }} className="hover:text-gray-600 transition-colors">Crime</a>
          <span className="mx-2">›</span>
          <span style={{ color: '#666666' }}>Missing Person</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="leading-tight mb-6" style={{ 
            fontSize: '32px',
            fontWeight: '700',
            color: '#1a1a1a',
            lineHeight: '1.2',
            fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            FATHER VANISHED. BETWEEN INSTAGRAM AND ONLYFANS, SHE HID THE TRUTH.
          </h1>
          
          {/* Meta Info */}
          <div className="flex items-center mb-8" style={{ 
            fontSize: '14px',
            color: '#404040',
            fontWeight: '400',
            fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            <span>By Austin PD Press Office</span>
            <span className="mx-2">•</span>
            <time dateTime="2025-10-21">October 21, 2025</time>
            <span className="mx-2">•</span>
            <span>Updated 14:35 CST</span>
            <span className="mx-2">•</span>
            <span style={{ color: '#d64000', fontWeight: '500' }}>ACTIVE INVESTIGATION</span>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center space-x-3 mb-8">
            <button className="flex items-center justify-center p-3 text-white rounded-full transition-colors" style={{ backgroundColor: '#2d2d2d' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#404040'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2d2d2d'}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" style={{ color: '#404040' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" style={{ color: '#404040' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Main Article Content */}
        <article>
          {/* Featured Images Gallery */}
          <figure className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="md:col-span-1">
                <img 
                  src={img1}
                  alt="Evidence photo from the Nyxen family residence"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  // onClick={() => window.open('/src/assets/images/photo_2025-10-21_20-53-00.jpg', '_blank')}
                />
              </div>
              
              {/* Secondary Image */}
              <div className="md:col-span-1">
                <img 
                  src={img2}
                  alt="Digital forensics analysis of social media activity"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  // onClick={() => window.open('/src/assets/images/image_2025-10-19_21-13-13.png', '_blank')}
                />
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 font-medium">Evidence Photos (2)</span>
              <span className="text-xs text-gray-500">Part of ongoing investigation</span>
            </div>
          </figure>

          {/* Article Summary Points */}
          <div className="bg-white border-l-4 p-6 rounded mb-12" style={{ borderLeftColor: '#2d2d2d' }}>
            <h3 className="font-bold mb-4" style={{ color: '#2d2d2d', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>OFFICIAL INVESTIGATION ALERT</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#2d2d2d' }}></span>
                <span style={{ color: '#404040', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Missing person case involving systematic digital evidence concealment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#2d2d2d' }}></span>
                <span style={{ color: '#404040', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Cross-platform social media activity under investigation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#2d2d2d' }}></span>
                <span style={{ color: '#404040', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Critical evidence located on restricted paid platforms</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#2d2d2d' }}></span>
                <span style={{ color: '#404040', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Public cooperation requested in ongoing investigation</span>
              </li>
            </ul>
          </div>

          {/* Article Text */}
          <div className="max-w-none">
            <p style={{
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              color: '#333333',
              margin: '0 0 12px 0',
              display: 'block',
              fontStyle: 'normal'
            }}>
              Official Statement Regarding the Disappearance of Michael Nyxen and the Subsequent Digital Activity of His Daughter, Vera Nyxen.
            </p>

            <p style={{
              marginBottom: '32px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              As part of the ongoing investigation into the disappearance of Michael Nyxen, a resident of Austin, Texas, it has been established that his daughter, Vera Nyxen, has engaged in systematic activity on social media platforms that is of operational interest.
            </p>

            <h2 style={{
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              color: '#333333',
              margin: '24px 0 12px 0',
              display: 'block',
              fontStyle: 'normal',
              textTransform: 'none'
            }}>Content Status and Accessibility</h2>
            
            <p style={{
              marginBottom: '24px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              In the 72 hours preceding the official missing person's report, Ms. Nyxen began publishing a series of posts with an encoded character on her Instagram account (@itsveranyx). These include:
            </p>

            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '24px',
              marginBottom: '24px',
              color: '#404040',
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              <li style={{ marginBottom: '8px' }}>Static images of items connected to the family's previous place of residence (a key, framed photographs).</li>
              <li style={{ marginBottom: '8px' }}>Quotations from literary works with pronounced criminal undertones.</li>
              <li style={{ marginBottom: '8px' }}>The use of metaphorical hashtags (#dust_of_the_past, #key_to_silence).</li>
            </ul>

            <p style={{
              marginBottom: '32px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              These publications were initially perceived by a segment of her audience as an art project. However, subsequent analysis has revealed their synchronization with content posted on the paid platform, OnlyFans.
            </p>

            <h2 style={{
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              color: '#333333',
              margin: '24px 0 12px 0',
              display: 'block',
              fontStyle: 'normal',
              textTransform: 'none'
            }}>Official Request</h2>
            
            <p style={{
              marginBottom: '24px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              A direct correlation has been documented between the Instagram posts and materials on Vera Nyxen's OnlyFans page. Each 'neutral' post on Instagram corresponded with a private video on OnlyFans, depicting the same location but with elements suggesting preparation or the concealment of information (packing belongings, destroying documents, filming hidden compartments).
            </p>

            <div className="bg-gray-100 p-4 rounded mb-6 border-l-4 border-gray-400">
              <h4 style={{ 
                fontWeight: '600', 
                color: '#2d2d2d', 
                marginBottom: '12px',
                fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>Documented Pattern Examples:</h4>
              <ul style={{ 
                fontSize: '14px', 
                color: '#404040', 
                lineHeight: '1.5',
                fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                <li style={{ marginBottom: '4px' }}>• Instagram post of vintage key → OnlyFans video showing same key opening father's office desk</li>
                <li style={{ marginBottom: '4px' }}>• Instagram quote about "buried secrets" → OnlyFans content filmed in family basement</li>
                <li style={{ marginBottom: '4px' }}>• Instagram photo of family portrait → OnlyFans video showing removal of items from frame backing</li>
                <li style={{ marginBottom: '4px' }}>• Instagram hashtag #last_goodbye → OnlyFans video allegedly filmed in father's bedroom on day of disappearance</li>
              </ul>
            </div>

            {/* Evidence Image */}
            <figure className="mb-8">
              <img 
                src={img3}
                alt="Digital evidence correlation analysis"
                className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow"
                style={{ display: 'block' }}
              />
              <figcaption className="text-sm text-gray-600 text-center mt-3 italic" style={{
                fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
              </figcaption>
            </figure>

            <h2 style={{
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              color: '#333333',
              margin: '24px 0 12px 0',
              display: 'block',
              fontStyle: 'normal',
              textTransform: 'none'
            }}>Chronology of Digital Activity</h2>
            
            <p style={{
              marginBottom: '24px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              The Instagram account @itsveranyx is currently undergoing a systematic purge of the aforementioned materials. A complete archive of its state from the period immediately preceding the disappearance is currently accessible only to a limited number of individuals.
            </p>

            <div className="bg-yellow-50 border-l-4 p-6 my-8" style={{ borderLeftColor: '#d64000' }}>

              <p style={{ 
                fontSize: '14px', 
                color: '#404040',
                fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
              }}>
                Key evidence, including unedited photographs, video recordings with audio commentary, and documents potentially relevant to the case, were posted by Vera Nyxen exclusively on her OnlyFans page. Access to these materials is restricted by a paid subscription.
              </p>
            </div>

            <h2 style={{
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              color: '#333333',
              margin: '24px 0 12px 0',
              display: 'block',
              fontStyle: 'normal',
              textTransform: 'none'
            }}>Cross-Platform Correlation</h2>
            
            <p style={{
              marginBottom: '24px',
              color: '#404040',
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              Individuals possessing any information related to this case, as well as those with access to the full archive of Vera Nyxen's digital activity (including materials from the OnlyFans platform), are urged to contact law enforcement authorities. Any detail that may seem insignificant on Instagram may gain critical importance when cross-referenced with materials from her paid page.
            </p>

            <p style={{
              marginBottom: '24px',
              fontSize: '14px',
              color: '#666666',
              fontStyle: 'italic',
              fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
            }}>
              <strong>Note:</strong> Several subscribers have reported that recent OnlyFans content includes locations and timestamps that correlate with the last known movements of Michael Nyxen. Some videos allegedly show Vera handling personal items belonging to her father, including his wallet and keys.
            </p>
          </div>

          {/* Article Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Topics:</h3>
            <div className="flex flex-wrap gap-3">
              {['Missing Person', 'Investigation', 'Digital Evidence', 'Social Media', 'OnlyFans', 'Instagram', 'Austin', 'Law Enforcement'].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:border-gray-400 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Author Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2d2d2d' }}>
              <span className="text-white font-medium" style={{ fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>LE</span>
            </div>
            <div>
              <h3 className="font-medium" style={{ color: '#2d2d2d', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>Law Enforcement Agency</h3>
              <p className="text-sm mt-1" style={{ color: '#404040', fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                Official statement. For tips or information: <a href="#" className="hover:underline" style={{ color: '#d64000' }}>Contact Investigation Team</a>
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
                <div className="aspect-video mb-3 relative overflow-hidden rounded bg-gray-100 flex items-center justify-center">
                  {article.image ? (
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center w-full h-full bg-gray-100">
                              <img src="${logoImage}" alt="Reuters Logo" class="w-24 h-auto opacity-60" />
                            </div>
                          `;
                        }
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100">
                      <img src={logoImage} alt="Reuters Logo" className="w-24 h-auto opacity-60" />
                    </div>
                  )}
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