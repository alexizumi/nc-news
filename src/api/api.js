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
    // articleId = 34;
    // incVotes = { inc_votes: 1 }
    console.log(article_id, incVotes, 'API')
    return api.patch(`/articles/${article_id}`, incVotes)
        .then(({ data }) => {
            console.log(data)
            return data;
        })
};

export { getAllArticles, getArticleDetails, getCommentsByArticle, patchVotesByArticle };

