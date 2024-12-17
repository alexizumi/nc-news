import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleDetails } from '../api/api';

export default function ArticleDetails() {
    const { article_id } = useParams();
    console.log(article_id);

    const articleDetails = getArticleDetails(article_id);
    console.log(articleDetails)
    return (
        <div>ArticleDetails</div>
    )
}
