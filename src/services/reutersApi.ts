import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Article, CategoryResponse } from '../types/articles';
import type { MarketsData } from '../types/markets';

// Mock data for different categories
const categoryData: Record<string, CategoryResponse> = {
  business: {
    featured: {
      id: 'b1',
      title: 'Global Supply Chain Revolution: AI-Powered Logistics Transform Industry',
      description: 'How artificial intelligence is revolutionizing global supply chain management and logistics',
      category: 'Business',
      author: 'Sarah Chen',
      date: '2025-10-15T08:00:00Z',
      imageUrl: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg',
      imageCaption: 'AI-powered logistics center',
      tags: ['Supply Chain', 'AI', 'Logistics']
    },
    articles: [
      {
        id: 'b2',
        title: 'Startup Funding Reaches New Heights in Emerging Markets',
        category: 'Business',
        author: 'Michael Rodriguez',
        date: '2025-10-15T07:30:00Z',
        imageUrl: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
        imageCaption: 'Startup team meeting'
      }
    ],
    relatedTopics: ['Venture Capital', 'Emerging Markets', 'Technology']
  },
  'sustainable-development': {
    featured: {
      id: 'sd1',
      title: 'Carbon Capture Technology Breakthrough Promises Climate Solution',
      description: 'Revolutionary carbon capture method achieves 90% efficiency at reduced cost',
      category: 'Sustainable Development',
      author: 'Dr. Emma Watson',
      date: '2025-10-15T09:15:00Z',
      imageUrl: 'https://images.pexels.com/photos/2581921/pexels-photo-2581921.jpeg',
      imageCaption: 'Carbon capture facility',
      tags: ['Climate Tech', 'Carbon Capture', 'Clean Energy']
    },
    articles: [
      {
        id: 'sd2',
        title: 'Urban Farming Networks Transform City Food Systems',
        category: 'Sustainable Development',
        author: 'James Morrison',
        date: '2025-10-15T08:45:00Z',
        imageUrl: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg',
        imageCaption: 'Urban vertical farm'
      }
    ],
    relatedTopics: ['Urban Agriculture', 'Food Security', 'Smart Cities']
  },
  legal: {
    featured: {
      id: 'l1',
      title: 'AI Regulation Framework Adopted by Global Coalition',
      description: 'Major economies agree on unified approach to artificial intelligence governance',
      category: 'Legal',
      author: 'Robert Sterling',
      date: '2025-10-15T10:30:00Z',
      imageUrl: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      imageCaption: 'International summit on AI regulation',
      tags: ['AI Regulation', 'Global Policy', 'Technology Law']
    },
    articles: [
      {
        id: 'l2',
        title: 'Landmark Digital Privacy Case Reshapes Data Protection',
        category: 'Legal',
        author: 'Maria Garcia',
        date: '2025-10-15T09:45:00Z',
        imageUrl: 'https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg',
        imageCaption: 'Digital privacy concept'
      }
    ],
    relatedTopics: ['Data Privacy', 'Cybersecurity Law', 'Digital Rights']
  },
  commentary: {
    featured: {
      id: 'c1',
      title: 'The Future of Work: Beyond Remote vs Office',
      description: 'Analysis of evolving workplace paradigms and their economic implications',
      category: 'Commentary',
      author: 'Prof. David Chang',
      date: '2025-10-15T11:00:00Z',
      imageUrl: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      imageCaption: 'Modern hybrid workplace',
      tags: ['Future of Work', 'Remote Work', 'Workplace Culture']
    },
    articles: [
      {
        id: 'c2',
        title: 'Digital Currency Revolution: Central Banks at a Crossroads',
        category: 'Commentary',
        author: 'Alexandra Peters',
        date: '2025-10-15T10:15:00Z',
        imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
        imageCaption: 'Digital currency concept'
      }
    ],
    relatedTopics: ['Digital Economy', 'Monetary Policy', 'Financial Innovation']
  },
  'tech-research': {
    featured: {
      id: 't1',
      title: 'Quantum Computing Achieves Error Correction Milestone',
      description: 'Breakthrough in quantum error correction brings practical quantum computers closer to reality',
      category: 'Tech Research',
      author: 'Dr. Sarah Kim',
      date: '2025-10-15T12:00:00Z',
      imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      imageCaption: 'Quantum computing facility',
      tags: ['Quantum Computing', 'Technology', 'Research']
    },
    articles: [
      {
        id: 't2',
        title: 'Neural Interfaces Break New Ground in Human-AI Collaboration',
        category: 'Tech Research',
        author: 'Dr. Marcus Chen',
        date: '2025-10-15T11:30:00Z',
        imageUrl: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
        imageCaption: 'Neural interface research'
      }
    ],
    relatedTopics: ['Neurotechnology', 'AI Research', 'Human-Computer Interaction']
  }
};

const mockPosts = {
  featuredArticle: {
    id: '1',
    title: 'Global Climate Summit Reaches Historic Agreement on Emissions',
    description: 'World leaders pledge unprecedented commitment to reduce carbon emissions by 50% before 2030, marking a watershed moment in climate action.',
    category: 'Environment',
    author: 'Sarah Johnson',
    date: '2025-10-13T09:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg',
    imageCaption: 'Global leaders at the 2025 Climate Summit in Geneva',
  },
  topStories: [
    {
      id: '2',
      title: 'Tech Giants Face New Antitrust Regulations in EU',
      description: 'European Commission unveils sweeping new rules aimed at curbing digital monopolies.',
      category: 'Technology',
      author: 'Mark Williams',
      date: '2025-10-13T08:15:00Z',
      imageUrl: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      imageCaption: 'EU headquarters in Brussels',
    },
    {
      id: '3',
      title: 'Federal Reserve Signals Shift in Interest Rate Policy',
      description: 'Markets react as Fed chair hints at potential rate cuts in response to cooling inflation.',
      category: 'Markets',
      author: 'Jennifer Chen',
      date: '2025-10-13T07:45:00Z',
      imageUrl: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg',
      imageCaption: 'Federal Reserve Building in Washington D.C.',
    },
    {
      id: '4',
      title: 'Breakthrough in Quantum Computing Promises New Era',
      description: 'Scientists achieve quantum supremacy with new 1000-qubit processor.',
      category: 'Science',
      author: 'Dr. Robert Miller',
      date: '2025-10-13T06:30:00Z',
      imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      imageCaption: 'New quantum computing facility',
    }
  ],
  latestNews: [
    {
      id: '5',
      title: 'Space Tourism Company Announces First Commercial Flight',
      category: 'Business',
      author: 'Tom Harris',
      date: '2025-10-13T05:20:00Z',
      imageUrl: 'https://images.pexels.com/photos/23769/pexels-photo.jpg',
      imageCaption: 'Launch preparation at Cape Canaveral',
    },
    {
      id: '6',
      title: 'Global Supply Chain Disruption Eases as New Routes Open',
      category: 'Business',
      author: 'Lisa Wong',
      date: '2025-10-13T04:45:00Z',
      imageUrl: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg',
      imageCaption: 'Container ships at Rotterdam port',
    },
    {
      id: '7',
      title: 'Artificial Intelligence Breakthrough in Medical Diagnosis',
      category: 'Health',
      author: 'Dr. Emily Brown',
      date: '2025-10-13T03:30:00Z',
      imageUrl: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
      imageCaption: 'AI-powered medical imaging system',
    },
    {
      id: '8',
      title: 'Renewable Energy Investment Hits Record High',
      category: 'Environment',
      author: 'Michael Green',
      date: '2025-10-13T02:15:00Z',
      imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      imageCaption: 'Solar farm in California desert',
    }
  ],
  markets: [
    {
      id: '9',
      title: 'Asian Markets Rally on Strong Economic Data',
      category: 'Markets',
      author: 'James Lee',
      date: '2025-10-13T01:00:00Z',
      imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',
      imageCaption: 'Tokyo Stock Exchange trading floor',
    },
    {
      id: '10',
      title: 'Cryptocurrency Adoption Surges in Emerging Markets',
      category: 'Markets',
      author: 'Alex Rivera',
      date: '2025-10-12T23:45:00Z',
      imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      imageCaption: 'Digital currency trading center',
    }
  ],
  world: [
    {
      id: '11',
      title: 'Historic Peace Agreement Signed in Middle East',
      category: 'World',
      author: 'David Cohen',
      date: '2025-10-12T22:30:00Z',
      imageUrl: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg',
      imageCaption: 'Leaders at peace signing ceremony',
    },
    {
      id: '12',
      title: 'Major Infrastructure Project Links Asia and Europe',
      category: 'World',
      author: 'Anna Petrov',
      date: '2025-10-12T21:15:00Z',
      imageUrl: 'https://images.pexels.com/photos/1137525/pexels-photo-1137525.jpeg',
      imageCaption: 'New intercontinental bridge project',
    }
  ],
  technology: [
    {
      id: '13',
      title: '6G Network Research Begins as 5G Deployment Continues',
      category: 'Technology',
      author: 'Steve Kim',
      date: '2025-10-12T20:00:00Z',
      imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      imageCaption: 'Next-generation network testing facility',
    },
    {
      id: '14',
      title: 'Electric Vehicle Sales Surpass Traditional Cars',
      category: 'Technology',
      author: 'Maria Garcia',
      date: '2025-10-12T18:45:00Z',
      imageUrl: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg',
      imageCaption: 'Electric vehicle charging station',
    }
  ]
};

// Reuters API configuration
export const reutersApi = createApi({
  reducerPath: 'reutersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getCategory: builder.query<CategoryResponse, string>({
      queryFn: (category) => {
        const data = categoryData[category];
        if (!data) {
          return {
            error: {
              status: 404,
              data: { message: 'Category not found' }
            }
          };
        }
        return { data };
      }
    }),
    getTopStories: builder.query<typeof mockPosts, void>({
      queryFn: () => ({ data: mockPosts })
    }),
    getArticleByPath: builder.query<Article, string>({
      queryFn: (path) => {
        if (!path) {
          return {
            error: {
              status: 400,
              data: { message: 'Article ID is required' }
            }
          };
        }

        try {
          const allArticles = [
            mockPosts.featuredArticle,
            ...mockPosts.topStories,
            ...mockPosts.latestNews,
            ...mockPosts.markets,
            ...mockPosts.world,
            ...mockPosts.technology,
          ];
          
          const article = allArticles.find(a => a.id === path);
          
          if (!article) {
            return {
              error: {
                status: 404,
                data: { message: 'Article not found' }
              }
            };
          }
          
          return { data: article };
        } catch (err) {
          return {
            error: {
              status: 500,
              data: { message: 'Error fetching article' }
            }
          };
        }
      }
    }),
    getMarkets: builder.query<MarketsData, void>({
      queryFn: () => ({
        data: {
          indices: [
            { symbol: "^GSPC", name: "S&P 500", price: 4783.45, change: 1.23 },
            { symbol: "^DJI", name: "Dow Jones", price: 37892.12, change: 0.89 },
            { symbol: "^IXIC", name: "NASDAQ", price: 14897.23, change: -0.45 },
            { symbol: "^FTSE", name: "FTSE 100", price: 7432.65, change: 0.67 }
          ],
          commodities: [
            { symbol: "GC=F", name: "Gold", price: 2145.30, change: 0.34 },
            { symbol: "CL=F", name: "Crude Oil", price: 82.45, change: -1.23 },
            { symbol: "SI=F", name: "Silver", price: 28.75, change: 0.89 },
            { symbol: "HG=F", name: "Copper", price: 4.12, change: 1.45 }
          ]
        }
      })
    }),
  }),
});

// Re-export types used by the API
export type { Article } from '../types';
export type { MarketsData, MarketIndex, Commodity } from '../types/markets';

// Export the generated hooks
export const {
  useGetTopStoriesQuery,
  useGetArticleByPathQuery,
  useGetMarketsQuery,
  useGetCategoryQuery,
} = reutersApi;