export interface IGetArticlesRequest {
  status: string;
  totalResults: number;
  articles: [];
}

export interface IArticle {
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
}
