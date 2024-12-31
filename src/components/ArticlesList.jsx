// /src/components/ArticlesList.jsx

import React, { useEffect, useState } from 'react';
import { CardTitle } from 'reactstrap';
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
        setError('Error fetching articles');
      });
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <br />
      <CardTitle className="h1 mb-2 pt-2 font-weight-bold text-secondary">Articles</CardTitle>
      <br />
      <br />
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
