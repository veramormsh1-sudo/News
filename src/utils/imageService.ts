export const getPlaceholderImage = (width: number, height: number, category: string): string => {
  // Using a professional placeholder service
  const seed = encodeURIComponent(category.toLowerCase());
  return `https://picsum.photos/${width}/${height}?random=${seed}`;
};

export const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'Technology': '💻',
    'Business': '💼',
    'Politics': '🏛️',
    'Health': '🏥',
    'Science': '🔬',
    'Sports': '⚽',
    'Entertainment': '🎬',
    'World': '🌍'
  };

  return icons[category] || '📰';
};

export const getGradientForCategory = (category: string): string => {
  const gradients: Record<string, string> = {
    'Technology': 'from-blue-500 to-purple-600',
    'Business': 'from-emerald-500 to-teal-600',
    'Politics': 'from-red-500 to-rose-600',
    'Health': 'from-green-500 to-emerald-600',
    'Science': 'from-indigo-500 to-blue-600',
    'Sports': 'from-orange-500 to-amber-600',
    'Entertainment': 'from-pink-500 to-rose-600',
    'World': 'from-cyan-500 to-blue-600'
  };

  return gradients[category] || 'from-gray-500 to-gray-600';
};