import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../api/api';
import ArticleCard from './ArticleCard';

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.error('Failed to fetch articles: ', err);
      });
  }, []);


  return (
    <>
      <h2>ArticlesList</h2>
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />
        })}
      </ul>
    </>


  )
}
