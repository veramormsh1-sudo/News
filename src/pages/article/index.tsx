import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGetArticleByPathQuery } from '../../services/reutersApi';

const ArticlePage: React.FC = () => {
  const { path } = useParams<{ path: string }>();
  const { data: article, isLoading, error } = useGetArticleByPathQuery(path as string);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="animate-pulse space-y-8">
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 w-24 rounded" />
            <div className="h-8 bg-gray-200 w-3/4 rounded" />
            <div className="h-4 bg-gray-200 w-1/2 rounded" />
          </div>
          <div className="aspect-video bg-gray-200 rounded" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 w-3/4 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Error</h1>
          <p className="text-gray-600">
            {'status' in error && 'data' in error 
              ? (error.data as { message: string })?.message 
              : 'Error loading article. Please try again later.'}
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600">The article you're looking for could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.article 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.header 
          className="max-w-3xl mx-auto mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="flex items-center space-x-4 mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.span 
              className="inline-flex items-center px-4 py-2 bg-accent-navy/90 text-white text-sm font-display tracking-wider font-medium rounded-full shadow-sm hover:bg-accent-navy transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {article.category}
            </motion.span>
            <motion.div 
              className="h-px flex-grow bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </motion.div>
          <motion.h1 
            className="text-[3.5rem] font-serif font-bold mb-8 leading-[1.1] tracking-tight text-reuters-black [text-wrap:balance] relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-32 after:h-[3px] after:bg-reuters-blue/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {article.title}
          </motion.h1>
          {article.description && (
            <p className="text-2xl font-sans text-reuters-gray-600 mb-8 leading-relaxed tracking-normal">
              {article.description}
            </p>
          )}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-reuters-gray-500">
                {article.author[0]}
              </div>
              <div>
                <div className="font-display font-medium text-reuters-gray-800">
                  {article.author}
                </div>
                <time dateTime={article.date} className="text-sm text-reuters-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <svg className="w-5 h-5 text-reuters-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <svg className="w-5 h-5 text-reuters-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.header>

        <motion.figure 
          className="max-w-[1200px] mx-auto mb-12"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={article.imageUrl}
              alt={article.imageCaption}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="max-w-3xl mx-auto text-sm font-display text-reuters-gray-500 mt-4 italic text-center">
            {article.imageCaption}
          </figcaption>
        </motion.figure>

        <motion.div 
          className="prose prose-lg max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-xl font-sans leading-relaxed text-reuters-gray-700 space-y-6">
            {article.description && (
              <p className="text-xl leading-relaxed">{article.description}</p>
            )}
            {/* Additional article content would go here */}
          </div>
        </motion.div>

        <motion.section
          className="mt-16 pt-16 border-t border-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-4xl font-serif font-bold mb-12 tracking-tight text-reuters-black relative text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-24 after:h-1 after:bg-reuters-blue">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-elegant overflow-hidden hover:shadow-xl transition-shadow duration-200"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`https://picsum.photos/800/400?random=${i}`}
                    alt={`Related Article ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-display font-medium tracking-wide text-white bg-reuters-blue rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold mb-3 line-clamp-2 hover:text-reuters-blue transition-colors duration-200">
                    {`Related ${article.category} Story ${i + 1}`}
                  </h3>
                  <p className="text-reuters-gray-600 line-clamp-3 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="font-display font-medium text-reuters-gray-700">
                      Author Name
                    </span>
                    <span className="mx-2 text-reuters-gray-400">•</span>
                    <time className="text-reuters-gray-500" dateTime={new Date().toISOString()}>
                      {new Date().toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.article>
  );
};

export default ArticlePage;