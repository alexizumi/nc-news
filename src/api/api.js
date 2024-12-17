import axios from 'axios';
const temp = 'http://127.0.0.1:9090/api';

const api = axios.create({ baseURL: 'https://my-nc-news-x75i.onrender.com/api' });

const getAllArticles = () => {
    return api.get('/articles')
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.log('Error fetching articles')
        });
}
const getArticleDetails = (articleId) => {
    return api.get(`/articles/${articleId}`)
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.log('Error fetching article')
        })
}
export { getAllArticles, getArticleDetails };

