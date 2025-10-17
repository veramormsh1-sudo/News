import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArticleCard } from '../../components/posts/ArticleCard';
import { FeaturedArticle } from '../../components/posts/FeaturedArticle';
import { useGetCategoryQuery } from '../../services/reutersApi';
import { getGradientForCategory, getCategoryIcon } from '../../utils/imageService';

const CategoryPage = () => {
  const { category = '' } = useParams();
  const { data, isLoading, error } = useGetCategoryQuery(category);
  const gradient = getGradientForCategory(category);
  const icon = getCategoryIcon(category);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-pulse text-2xl text-reuters-gray-400">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-2xl text-reuters-red">Failed to load articles.</div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={`bg-gradient-to-r ${gradient} text-white`}>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4 mb-4"
          >
            <span className="text-5xl">{icon}</span>
            <h1 className="text-5xl font-serif font-bold tracking-tight">{category}</h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Stay updated with the latest {category.toLowerCase()} news and developments from around the world.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <motion.div variants={containerVariants} className="mb-12">
          <FeaturedArticle {...data.featured} />
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {data.articles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="transform hover:scale-[1.02] transition-transform duration-200"
            >
              <ArticleCard
                {...article}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Related Topics */}
        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-elegant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">Related Topics</h2>
          <div className="flex flex-wrap gap-2">
            {data.relatedTopics.map((topic) => (
              <span
                key={topic}
                className="inline-block px-3 py-1 bg-reuters-gray-100 rounded-full text-sm text-reuters-gray-600 hover:bg-reuters-blue hover:text-white transition-colors cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryPage;