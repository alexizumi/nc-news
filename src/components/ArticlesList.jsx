import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../api/api';
import ArticleCard from './ArticleCard';
import Loading from './Loading';


export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    getAllArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <h2>ArticlesList</h2>
      <ul className='articles-grid'>
        {articles.map((article) => {
          return (
            <ArticleCard article={article} key={article.article_id} />
          )
        })}
      </ul>
    </>


  )
}
