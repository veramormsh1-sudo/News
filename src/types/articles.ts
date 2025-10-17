export interface Article {
  id: string;
  title: string;
  description?: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  imageCaption: string;
  content?: string;
  tags?: string[];
}

export type Category = 
  | 'Business'
  | 'Markets'
  | 'Sustainable Development'
  | 'Legal'
  | 'Commentary'
  | 'Tech Research'
  | 'World';

export interface CategoryResponse {
  featured: Article;
  articles: Article[];
  relatedTopics: string[];
}