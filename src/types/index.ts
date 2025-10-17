export interface Article {
  id: string;
  title: string;
  description?: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  imageCaption: string;
}

export interface ArticleResponse {
  featuredArticle: Article;
  topStories: Article[];
  latestNews: Article[];
  markets: Article[];
  world: Article[];
  technology: Article[];
}

export interface Market {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

export interface NewsResponse {
  articles: Article[];
  pagination: {
    current: number;
    total: number;
  };
}