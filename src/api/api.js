// /src/api/api.js

import axios from 'axios';
const temp = 'http://127.0.0.1:9090/api';

const api = axios.create({ baseURL: 'https://my-nc-news-x75i.onrender.com/api' });

const getAllArticles = () => {
    return api.get('/articles')
        .then(({ data }) => {
            return data;
        })
}
const getArticleDetails = (articleId) => {
    return api.get(`/articles/${articleId}`)
        .then(({ data }) => {
            return data;
        })
}
const getCommentsByArticle = (articleId) => {
    return api.get(`/articles/${articleId}/comments`)
        .then(({ data }) => data)
}
const patchVotesByArticle = (article_id, incVotes) => {
    return api.patch(`/articles/${article_id}`, incVotes)
        .then(({ data }) => {
            return data;
        })
};
const getAllUsers = () => {
    return api.get(`/users`)
        .then(({ data }) => {
            return data;
        })
}
const postNewComment = (articleId, username, body) => {

    const newComment = {
        username: username,
        body: body,
    };
    return api.post(`/articles/${articleId}/comments`, newComment)
        .then(({ data }) => {
            return data;
        })
}

export { getAllArticles, getAllUsers, getArticleDetails, getCommentsByArticle, patchVotesByArticle, postNewComment };

