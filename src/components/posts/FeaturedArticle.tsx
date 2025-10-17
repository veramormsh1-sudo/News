import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  id: string;
  title: string;
  description?: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  imageCaption: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  description,
  category,
  author,
  date,
  imageUrl,
  imageCaption,
}) => {
  return (
    <article className="relative w-full mb-12">
      <Link to={`/article/${id}`} className="block group">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-elegant transition-transform duration-300 group-hover:shadow-soft">
          <img
            src={imageUrl}
            alt={imageCaption}
            className="w-full h-full object-cover transform transition-transform duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-reuters-black/95 via-reuters-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white transform transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent-gold/90 backdrop-blur-crisp text-white text-sm font-display tracking-wider font-medium rounded-full shadow-sm">
                {category}
              </span>
              <div className="h-px flex-grow bg-white/20"></div>
            </div>
            <h1 className="text-6xl font-serif font-bold mb-6 leading-none tracking-tight">
              {title}
            </h1>
            <p className="text-xl font-sans mb-6 leading-relaxed text-gray-100 max-w-3xl">
              {description}
            </p>
            <div className="flex items-center text-sm text-gray-200 font-display border-t border-white/10 pt-6">
              <span className="font-medium">{author}</span>
              <span className="mx-3 text-accent-gold">•</span>
              <time dateTime={date} className="text-gray-300">
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};