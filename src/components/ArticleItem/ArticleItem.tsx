import { IArticle } from 'types/IArticles.types.ts';
import { FC } from 'react';

export const ArticleItem: FC<IArticle> = ({
  author,
  description,
  title,
  urlToImage,
  publishedAt,
  url,
}) => {
  return (
    <div>
      <p>{author}</p>
      <p>{description}</p>
      <p>{title}</p>
      <img width={300} height={200} src={urlToImage} alt="image" />
      <p>{publishedAt}</p>
      <p>{url}</p>
    </div>
  );
};
