import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  title: string;
  description?: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  imageCaption: string;
  compact?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  date,
  imageUrl,
  imageCaption,
  compact = false,
}) => {
  return (
    <article 
      className={`group ${compact ? 'flex gap-6' : ''} p-1 -m-1 rounded-xl transition-all duration-300 hover:bg-gray-50`}
    >
      <Link 
        to={`/article/${id}`} 
        className={`block ${compact ? 'shrink-0' : ''} overflow-hidden`}
      >
        <div className={`relative ${compact ? 'w-36 h-36' : 'aspect-[4/3]'} mb-4`}>
          <img
            src={imageUrl}
            alt={imageCaption}
            className="w-full h-full object-cover rounded-xl shadow-soft transition-transform duration-500 transform group-hover:scale-105"
          />
          {!compact && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-crisp text-accent-navy text-sm font-display tracking-wider font-medium rounded-full shadow-sm">
                {category}
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex-grow">
        <Link to={`/article/${id}`}>
          {compact && (
            <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-accent-navy text-xs font-display tracking-wider font-medium rounded-full mb-3">
              {category}
            </span>
          )}
          <h2 className={`font-serif font-semibold text-reuters-black group-hover:text-accent-navy transition-colors duration-300 
            ${compact ? 'text-lg leading-snug mb-2' : 'text-2xl leading-tight mb-3'} tracking-tight`}>
            {title}
          </h2>
          {!compact && description && (
            <p className="font-sans text-reuters-gray-600 mb-4 leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
          <div className="flex items-center text-sm font-display">
            <span className="font-medium text-reuters-gray-700">{author}</span>
            <span className="mx-2 text-accent-gold">•</span>
            <time dateTime={date} className="text-reuters-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </Link>
      </div>
    </article>
  );
};